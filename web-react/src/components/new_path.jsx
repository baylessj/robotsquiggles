import React, { useEffect, useRef } from "react";
import { useTheme } from "@material-ui/core";
import Two from "two.js";

export const DrawNewPath = (props) => {
  const mount = useRef(null);
  const two = useRef(null);
  const group = useRef(null);

  const startWidth = useRef(null);
  const savedBoundingRect = useRef(null);
  const savedLeft = useRef(null);

  const prevMode = useRef(null);
  const listeners = useRef([]);

  const theme = useTheme();
  const editColor = theme.palette.primary.light;

  /**
   * Modifies the mouse event to fit with the Two canvas coordinates.
   *
   * @param e The mouse event
   *
   * @returns {x: number, y: number}
   */
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

  const createPath = (pathKey) => {
    const anchors = [];
    const lastPoint = props.paths.get(pathKey)["waypoints"].length - 1;
    for (let i = lastPoint; i >= 0; --i) {
      // iterate backwards through points so we are driving the right direction
      const p = props.paths.get(pathKey).waypoints[i];
      let anchor;
      if (i === lastPoint) {
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

    const newPath = new Two.Path(anchors, false, true, true);
    newPath.cap = newPath.join = "round";
    newPath.noFill().stroke = "#333";
    newPath.linewidth = 5;
    group.current.add(newPath);

    newPath.vertices.forEach(function (anchor) {
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
      g.translation.addSelf(newPath.translation);
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

      props.setPaths(
        new Map(
          props.paths.set(pathKey, {
            waypoints: props.paths.get(pathKey).waypoints,
            vectors: [{ p: p, r: r }, ...props.paths.get(pathKey).vectors],
            path: newPath,
          })
        )
      );
    });
  };

  const nextChar = (str) => {
    return (
      str.substring(0, str.length - 1) +
      String.fromCharCode(str.charCodeAt(str.length - 1) + 1)
    );
  };

  const curPath = () => {
    let curKey = "A";
    for (const k of props.paths.keys()) {
      if (k.charCodeAt(0) > curKey.charCodeAt(0)) {
        curKey = k;
      }
    }
    return curKey;
  };

  const placePoints = (e) => {
    e.preventDefault();

    const cursor = getCursorPosition(e);
    const point = two.current.makeCircle(cursor.x, cursor.y, 10);
    point.fill = editColor;
    if (props.paths.size === 0) {
      props.setPaths(
        new Map(
          props.paths.set("A", {
            waypoints: [],
            vectors: [],
            path: null,
          })
        )
      );
    }
    const pathKey = curPath();
    props.setPaths(
      new Map(
        props.paths.set(pathKey, {
          waypoints: [point, ...props.paths.get(pathKey).waypoints],
          vectors: props.paths.get(pathKey).vectors,
          path: props.paths.get(pathKey).path,
        })
      )
    );

    if (props.paths.get(pathKey)["waypoints"].length > 1) {
      createPath(pathKey);
      // create the next path's array
      props.setPaths(
        new Map(
          props.paths.set(nextChar(pathKey), {
            waypoints: [],
            vectors: [],
            path: null,
          })
        )
      );
      props.setMode("EDIT");
    }
  };

  const addMidpoint = () => {
    // const midpoint = path.current.getPointAt(0.5);
    // console.log(midpoint);
    // two.current.makeCircle(midpoint.x, midpoint.y, 10);
    // const r2 = two.current.makePolygon(0, 0, 10);
    // r2.rotation =
    //   Math.atan2(midpoint.controls.right.y, midpoint.controls.right.x) +
    //   Math.PI / 2;
    // r2.translation.copy(midpoint.controls.right).addSelf(midpoint);
  };

  const addNewEventListener = (node, event, handler) => {
    const listener = { node: node, event: event, handler: handler };
    for (let i = 0; i < listeners.current.length; ++i) {
      if (listeners.current[i] === listener) {
        // the new event is already defined, don't define it again
        return;
      }
    }
    node.addEventListener(event, handler);
    listeners.current.push(listener);
  };

  const removeAllEventListeners = () => {
    for (let i = 0; i < listeners.current.length; ++i) {
      const x = listeners.current[i];
      x.node.removeEventListener(x.event, x.handler);
    }
    listeners.current = [];
  };

  /**
   * Sets up the field when the component is mounted.
   */
  useEffect(() => {
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

    startWidth.current = mount.current.getBoundingClientRect().width;
    two.current = new Two({
      width: startWidth.current,
      height: startWidth.current,
      autostart: true,
    }).appendTo(mount.current);
    two.current.makeGroup();

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

  /**
   * Handles the State Machine for the edit modes.
   */
  useEffect(() => {
    if (props.mode === prevMode.current) {
      // The below state machine only operates on the state transitions
      return;
    }

    switch (props.mode) {
      case "ADD_PATH":
        removeAllEventListeners();
        addNewEventListener(mount.current, "click", placePoints);
        break;
      case "EDIT":
        removeAllEventListeners();

        props.paths.forEach((p) => {
          p.vectors.forEach((v) => {
            addInteractivity(v.p);
            addInteractivity(v.r);
          });
        });
        break;
      case "ADD_POINTS":
        break;
      case "REMOVE_POINTS":
        break;
      default:
        break;
    }
    prevMode.current = props.mode;
  });

  return <div ref={mount}></div>;
};
