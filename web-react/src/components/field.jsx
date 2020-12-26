import { useEffect, useRef } from "react";
import Two from "two.js";

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
      var rec = two.makeRectangle(x, y, tile_width, tile_width);
      rec.fill = rand_gray();
      bg.add(rec);
    }
  }
};

export const Field = (props) => {
  const mount = useRef(null);

  useEffect(() => {
    const two = new Two({ fullscreen: true, autostart: true }).appendTo(
      mount.current
    );

    const tile_width = Math.ceil((two.width - 100) / 6);
    const spacer = (two.width - tile_width * 6) / 2;
    const field_center = spacer + tile_width * 3;
    const field_top = spacer;
    const field_bot = tile_width * 6 + spacer;

    const goal_radius = tile_width / 5;
    const goal_linewidth = 15;
    const goal_fill = "none";
    const goal_stroke = "rgb(0, 0, 0)";

    var background = two.makeGroup([]);
    field_tiles(two, background, tile_width, spacer);

    var left_autonline = two.makeLine(
      field_center - 10,
      field_top,
      field_center - 10,
      field_bot
    );

    var right_autonline = two.makeLine(
      field_center + 10,
      field_top,
      field_center + 10,
      field_bot
    );

    var left_line = two.makeLine(
      spacer + tile_width + 2.5,
      field_top,
      spacer + tile_width + 2.5,
      field_bot
    );

    var right_line = two.makeLine(
      tile_width * 5.5 - spacer - 2.5,
      field_top,
      tile_width * 5.5 - spacer - 2.5,
      field_bot
    );

    var leftdoubletop_line = two.makeLine(
      spacer,
      field_center - 10,
      spacer + tile_width,
      field_center - 10
    );

    var leftdoublebot_line = two.makeLine(
      spacer,
      field_center + 10,
      spacer + tile_width,
      field_center + 10
    );

    var rightdoubletop_line = two.makeLine(
      tile_width * 6.5 - spacer,
      field_center - 10,
      tile_width * 5.5 - spacer,
      field_center - 10
    );

    var rightdoublebot_line = two.makeLine(
      tile_width * 6.5 - spacer,
      field_center + 10,
      tile_width * 5.5 - spacer,
      field_center + 10
    );

    var lines = two.makeGroup([
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

    var topcenter_goal = two.makeCircle(
      two.width / 2,
      spacer + goal_radius + goal_linewidth / 2,
      goal_radius
    );

    var topleft_goal = two.makeCircle(
      spacer + goal_radius + goal_linewidth / 2,
      spacer + goal_radius + goal_linewidth / 2,
      goal_radius
    );

    var topright_goal = two.makeCircle(
      two.width - spacer - goal_radius - goal_linewidth / 2,
      spacer + goal_radius + goal_linewidth / 2,
      goal_radius
    );

    var leftcenter_goal = two.makeCircle(
      spacer + goal_radius + goal_linewidth / 2,
      field_center,
      goal_radius
    );

    var center_goal = two.makeCircle(two.width / 2, field_center, goal_radius);

    var rightcenter_goal = two.makeCircle(
      two.width - spacer - goal_radius - goal_linewidth / 2,
      field_center,
      goal_radius
    );

    var botleft_goal = two.makeCircle(
      spacer + goal_radius + goal_linewidth / 2,
      field_bot - goal_radius - goal_linewidth / 2,
      goal_radius
    );

    var botcenter_goal = two.makeCircle(
      two.width / 2,
      field_bot - goal_radius - goal_linewidth / 2,
      goal_radius
    );

    var botright_goal = two.makeCircle(
      two.width - spacer - goal_radius - goal_linewidth / 2,
      field_bot - goal_radius - goal_linewidth / 2,
      goal_radius
    );

    var goals = two.makeGroup([
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
  });

  return <div ref={mount} id="draw-animation"></div>;
};
