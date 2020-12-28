import React, { useEffect, useRef } from "react";
import Two from "two.js";

export const DrawNewPath = (props) => {
  const mount = useRef(null);
  const points = useRef([]);
  const two = useRef(null);
  const path = useRef(null);
  const group = useRef(null);
  const editColor = "rgb(79, 128, 255)";
  const startWidth = useRef(null);
  const savedBoundingRect = useRef(null);
  const savedLeft = useRef(null);

  /**
   * Sets up the field when the component is mounted.
   */
  useEffect(() => {
    const getCursorPosition = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      // relying on savedLeft to tell us if the drawer is open
      let left = savedBoundingRect.current.left + savedLeft.current ?? 0;
      let top = savedBoundingRect.current.top;
      return {
        x: (x - left) / two.current.scene.scale,
        y: (y - top) / two.current.scene.scale,
      };
    };

    const placePoints = (e) => {
      e.preventDefault();

      const cursor = getCursorPosition(e);
      const point = two.current.makeCircle(cursor.x, cursor.y, 10);
      point.fill = editColor;
      points.current.push(point);

      if (points.current.length > 1) {
        const anchors = [];
        for (let i = 0; i < points.current.length; i++) {
          const p = points.current[i];
          let anchor;
          if (i === 0) {
            anchor = new Two.Anchor(
              p.translation.x,
              p.translation.y,
              0,
              100,
              0,
              -100,
              "M"
            );
            anchors.push(anchor);
          } else {
            anchor = new Two.Anchor(
              p.translation.x,
              p.translation.y,
              0,
              100,
              0,
              -100,
              "C"
            );
            anchors.push(anchor);
          }
          two.current.remove(p);
          two.current.update(); // render the elements before adding interactivity
        }
        group.current = two.current.makeGroup();
        path.current = new Two.Path(anchors, false, true, true);
        path.current.cap = path.current.join = "round";
        path.current.noFill().stroke = "#333";
        path.current.linewidth = 5;
        group.current.add(path.current);

        path.current.vertices.forEach(function (anchor) {
          const p = two.current.makeCircle(0, 0, 10);
          const r = two.current.makePolygon(0, 0, 10);
          r.rotation =
            Math.atan2(anchor.controls.right.y, anchor.controls.right.x) +
            Math.PI / 2;

          p.translation.copy(anchor);
          r.translation.copy(anchor.controls.right).addSelf(anchor);
          p.noStroke().fill = r.noStroke().fill = editColor;

          const rl = new Two.Path([
            new Two.Anchor().copy(p.translation),
            new Two.Anchor().copy(r.translation),
          ]);
          rl.noFill().stroke = editColor;

          const g = two.current.makeGroup(rl, p, r);
          g.translation.addSelf(path.current.translation);
          group.current.add(g);

          p.translation.bind(Two.Events.change, function () {
            anchor.copy(this);
            r.translation.copy(anchor.controls.right).addSelf(this);
            rl.vertices[0].copy(this);
            rl.vertices[1].copy(r.translation);
          });
          r.translation.bind(Two.Events.change, function () {
            anchor.controls.right.copy(this).subSelf(anchor);
            rl.vertices[1].copy(this);

            const x = -1 * (anchor.controls.right.x - anchor.x);
            const y = -1 * (anchor.controls.right.y - anchor.y);
            const opp = new Two.Vector(x, y);
            anchor.controls.left.copy(opp).subSelf(anchor);

            r.rotation =
              Math.atan2(anchor.controls.right.y, anchor.controls.right.x) +
              Math.PI / 2;
          });

          // Update the renderer in order to generate the actual elements.
          two.current.update();

          // Add Interactivity
          addInteractivity(p);
          addInteractivity(r);
        });

        mount.current.removeEventListener("click", placePoints, true);
      }
    };

    const rand_gray = () => {
      var value = Math.random() * 0xf + 0x50;
      var grayscale = (value << 16) | (value << 8) | value;
      return "#" + grayscale.toString(16);
    };

    const field_tiles = (two, bg, tile_width) => {
      for (var i = 0; i < 6; i++) {
        var x = tile_width * (i + 0.5);
        for (var j = 0; j < 6; j++) {
          var y = tile_width * (j + 0.5);
          var rec = two.current.makeRectangle(x, y, tile_width, tile_width);
          rec.fill = rand_gray();
          bg.add(rec);
        }
      }
    };

    const field = () => {
      const tile_width = (two.current.scene.scale * two.current.width) / 6;
      const field_center = tile_width * 3;
      const field_top = 0;
      const field_bot = tile_width * 6;
      const field_right = tile_width * 6;

      const goal_radius = tile_width / 5;
      const goal_linewidth = tile_width / 8;
      const goal_fill = "none";
      const goal_stroke = "rgb(0, 0, 0)";

      const double_line_space = tile_width / 8;
      const line_width = tile_width / 12;

      var background = two.current.makeGroup([]);
      field_tiles(two, background, tile_width);

      var left_autonline = two.current.makeLine(
        field_center - double_line_space,
        field_top,
        field_center - double_line_space,
        field_bot
      );

      var right_autonline = two.current.makeLine(
        field_center + double_line_space,
        field_top,
        field_center + double_line_space,
        field_bot
      );

      var left_line = two.current.makeLine(
        tile_width + line_width / 2,
        field_top,
        tile_width + line_width / 2,
        field_bot
      );

      var right_line = two.current.makeLine(
        tile_width * 5 - line_width / 2,
        field_top,
        tile_width * 5 - line_width / 2,
        field_bot
      );

      var leftdoubletop_line = two.current.makeLine(
        0,
        field_center - double_line_space,
        tile_width,
        field_center - double_line_space
      );

      var leftdoublebot_line = two.current.makeLine(
        0,
        field_center + double_line_space,
        tile_width,
        field_center + double_line_space
      );

      var rightdoubletop_line = two.current.makeLine(
        tile_width * 5,
        field_center - double_line_space,
        tile_width * 6,
        field_center - double_line_space
      );

      var rightdoublebot_line = two.current.makeLine(
        tile_width * 5,
        field_center + double_line_space,
        tile_width * 6,
        field_center + double_line_space
      );

      var lines = two.current.makeGroup([
        left_autonline,
        right_autonline,
        left_line,
        right_line,
        leftdoubletop_line,
        leftdoublebot_line,
        rightdoublebot_line,
        rightdoubletop_line,
      ]);
      lines.linewidth = line_width;
      lines.stroke = "#fff";

      var topcenter_goal = two.current.makeCircle(
        field_center,
        goal_radius + goal_linewidth / 2,
        goal_radius
      );

      var topleft_goal = two.current.makeCircle(
        goal_radius + goal_linewidth / 2,
        goal_radius + goal_linewidth / 2,
        goal_radius
      );

      var topright_goal = two.current.makeCircle(
        field_right - goal_radius - goal_linewidth / 2,
        goal_radius + goal_linewidth / 2,
        goal_radius
      );

      var leftcenter_goal = two.current.makeCircle(
        goal_radius + goal_linewidth / 2,
        field_center,
        goal_radius
      );

      var center_goal = two.current.makeCircle(
        field_center,
        field_center,
        goal_radius
      );

      var rightcenter_goal = two.current.makeCircle(
        field_right - goal_radius - goal_linewidth / 2,
        field_center,
        goal_radius
      );

      var botleft_goal = two.current.makeCircle(
        goal_radius + goal_linewidth / 2,
        field_bot - goal_radius - goal_linewidth / 2,
        goal_radius
      );

      var botcenter_goal = two.current.makeCircle(
        field_center,
        field_bot - goal_radius - goal_linewidth / 2,
        goal_radius
      );

      var botright_goal = two.current.makeCircle(
        field_right - goal_radius - goal_linewidth / 2,
        field_bot - goal_radius - goal_linewidth / 2,
        goal_radius
      );

      var goals = two.current.makeGroup([
        topleft_goal,
        topcenter_goal,
        topright_goal,
        leftcenter_goal,
        center_goal,
        rightcenter_goal,
        botleft_goal,
        botcenter_goal,
        botright_goal,
      ]);
      goals.fill = goal_fill;
      goals.stroke = goal_stroke;
      goals.linewidth = goal_linewidth;
    };

    const addInteractivity = (shape) => {
      const offset = group.current.translation;

      var drag = function (e) {
        e.preventDefault();
        const cursor = getCursorPosition(e);
        var x = cursor.x - offset.x;
        var y = cursor.y - offset.y;
        shape.translation.set(x, y);
      };
      var touchDrag = function (e) {
        e.preventDefault();
        var touch = e.originalEvent.changedTouches[0];
        drag({
          preventDefault: function () {},
          clientX: touch.pageX,
          clientY: touch.pageY,
        });
        return false;
      };
      var dragEnd = function (e) {
        e.preventDefault();
        window.removeEventListener("mousemove", drag);
        window.removeEventListener("mouseup", dragEnd);
      };
      var touchEnd = function (e) {
        e.preventDefault();
        window.removeEventListener("touchmove", touchDrag);
        window.removeEventListener("touchend", touchEnd);
        return false;
      };

      shape._renderer.elem.addEventListener("mousedown", function (e) {
        e.preventDefault();
        window.addEventListener("mousemove", drag);
        window.addEventListener("mouseup", dragEnd);
      });
      shape._renderer.elem.addEventListener("touchstart", function (e) {
        e.preventDefault();
        window.addEventListener("touchmove", touchDrag);
        window.addEventListener("touchend", touchEnd);
        return false;
      });
    };

    startWidth.current = mount.current.getBoundingClientRect().width;
    two.current = new Two({
      width: startWidth.current,
      height: startWidth.current,
      autostart: true,
    }).appendTo(mount.current);
    two.current.makeGroup();

    mount.current.addEventListener("click", placePoints, true);
    field();

    window.addEventListener("resize", () => {
      savedBoundingRect.current = mount.current.getBoundingClientRect();
      resize(savedBoundingRect.current.width);
    });
  }, []);

  const resize = (width) => {
    two.current.scene.scale = width / startWidth.current;
    two.current.renderer.setSize(width, width);
  };

  /**
   * Resizes the Two.js canvas each time the component updates.
   */
  useEffect(() => {
    if (savedBoundingRect.current === null) {
      // we have not yet saved a box size, store it
      // We're storing the bounding client width because it updates out of
      // sync with the Material UI drawer
      savedBoundingRect.current = mount.current.getBoundingClientRect();
    }
    const boxWidth = savedBoundingRect.current.width;
    if (props.open) {
      savedLeft.current = props.drawerWidth;
      resize(boxWidth - props.drawerWidth);
    } else {
      savedLeft.current = 0;
      resize(boxWidth);
    }
  }, [props.open, props.drawerWidth]);

  return <div ref={mount}></div>;
};
