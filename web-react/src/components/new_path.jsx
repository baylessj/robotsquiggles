import React, { useEffect, useRef } from "react";
import Two from "two.js";

export const DrawNewPath = (props) => {
  const mount = useRef(null);
  const points = useRef([]);
  const two = useRef(null);
  const path = useRef(null);
  const group = useRef(null);
  const editColor = "rgb(79, 128, 255)";

  const rand_gray = () => {
    var value = Math.random() * 0xf + 0x50;
    var grayscale = (value << 16) | (value << 8) | value;
    return "#" + grayscale.toString(16);
  };

  const field_tiles = (two, bg, tile_width, spacer) => {
    for (var i = 0; i < 6; i++) {
      var x = tile_width * (i + 0.5) + spacer;
      for (var j = 0; j < 6; j++) {
        var y = tile_width * (j + 0.5) + spacer;
        var rec = two.current.makeRectangle(x, y, tile_width, tile_width);
        rec.fill = rand_gray();
        bg.add(rec);
      }
    }
  };

  const field = () => {
    const tile_width = Math.ceil((two.current.width - 100) / 6);
    const spacer = (two.current.width - tile_width * 6) / 2;
    const field_center = spacer + tile_width * 3;
    const field_top = spacer;
    const field_bot = tile_width * 6 + spacer;

    const goal_radius = tile_width / 5;
    const goal_linewidth = 15;
    const goal_fill = "none";
    const goal_stroke = "rgb(0, 0, 0)";

    var background = two.current.makeGroup([]);
    field_tiles(two, background, tile_width, spacer);

    var left_autonline = two.current.makeLine(
      field_center - 10,
      field_top,
      field_center - 10,
      field_bot
    );

    var right_autonline = two.current.makeLine(
      field_center + 10,
      field_top,
      field_center + 10,
      field_bot
    );

    var left_line = two.current.makeLine(
      spacer + tile_width + 2.5,
      field_top,
      spacer + tile_width + 2.5,
      field_bot
    );

    var right_line = two.current.makeLine(
      tile_width * 5.5 - spacer - 2.5,
      field_top,
      tile_width * 5.5 - spacer - 2.5,
      field_bot
    );

    var leftdoubletop_line = two.current.makeLine(
      spacer,
      field_center - 10,
      spacer + tile_width,
      field_center - 10
    );

    var leftdoublebot_line = two.current.makeLine(
      spacer,
      field_center + 10,
      spacer + tile_width,
      field_center + 10
    );

    var rightdoubletop_line = two.current.makeLine(
      tile_width * 6.5 - spacer,
      field_center - 10,
      tile_width * 5.5 - spacer,
      field_center - 10
    );

    var rightdoublebot_line = two.current.makeLine(
      tile_width * 6.5 - spacer,
      field_center + 10,
      tile_width * 5.5 - spacer,
      field_center + 10
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
    lines.linewidth = 5;
    lines.stroke = "#fff";

    var topcenter_goal = two.current.makeCircle(
      two.current.width / 2,
      spacer + goal_radius + goal_linewidth / 2,
      goal_radius
    );

    var topleft_goal = two.current.makeCircle(
      spacer + goal_radius + goal_linewidth / 2,
      spacer + goal_radius + goal_linewidth / 2,
      goal_radius
    );

    var topright_goal = two.current.makeCircle(
      two.current.width - spacer - goal_radius - goal_linewidth / 2,
      spacer + goal_radius + goal_linewidth / 2,
      goal_radius
    );

    var leftcenter_goal = two.current.makeCircle(
      spacer + goal_radius + goal_linewidth / 2,
      field_center,
      goal_radius
    );

    var center_goal = two.current.makeCircle(
      two.current.width / 2,
      field_center,
      goal_radius
    );

    var rightcenter_goal = two.current.makeCircle(
      two.current.width - spacer - goal_radius - goal_linewidth / 2,
      field_center,
      goal_radius
    );

    var botleft_goal = two.current.makeCircle(
      spacer + goal_radius + goal_linewidth / 2,
      field_bot - goal_radius - goal_linewidth / 2,
      goal_radius
    );

    var botcenter_goal = two.current.makeCircle(
      two.current.width / 2,
      field_bot - goal_radius - goal_linewidth / 2,
      goal_radius
    );

    var botright_goal = two.current.makeCircle(
      two.current.width - spacer - goal_radius - goal_linewidth / 2,
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

  const getCursorPosition = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let left = mount.current.getBoundingClientRect().left;
    let top = mount.current.getBoundingClientRect().top;
    return {
      x: x - left,
      y: y - top,
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

  useEffect(() => {
    two.current = new Two({
      width: mount.current.getBoundingClientRect().width,
      height: mount.current.getBoundingClientRect().width,
      autostart: true,
    }).appendTo(mount.current);
    two.current.makeGroup();

    mount.current.addEventListener("click", placePoints, true);
    field();

    // TODO
    // var resize = function () {
    //   var cx = two.width / 2;
    //   var cy = two.height / 2;
    //   var rect = polygon.getBoundingClientRect();
    //   polygon.translation.set(cx - rect.width / 2, cy - rect.height / 2);
    // };
    // two.bind("resize", resize);
    // resize();
  });

  function addInteractivity(shape) {
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
  }

  return <div ref={mount}></div>;
};
