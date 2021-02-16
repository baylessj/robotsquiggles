import { useRef, useEffect } from "react";
import Two from "two.js";

export const Field = (props) => {
  const blue = "rgb(70, 70, 255)";
  const red = "rgb(255, 40, 40)";

  const blueBalls = useRef(null);
  const redBalls = useRef(null);
  const prevField = useRef(null);

  const {
    two,
    startWidth,
    mount,
    savedBoundingRect,
    capSize,
    resize,
    field,
  } = props;

  const compSetup = () => {
    const tile_width = startWidth.current / 6;
    const field_center = tile_width * 3;
    const field_top = 0;
    const field_bot = tile_width * 6;
    const field_right = tile_width * 6;

    const goal_radius = tile_width / 5;
    const goal_linewidth = tile_width / 8;
    const ballRadius = goal_radius - goal_linewidth / 2;

    const blueCenterLeft = two.current.makeCircle(
      field_center - goal_radius - goal_linewidth - ballRadius,
      field_center,
      ballRadius
    );
    const blueCenterBot = two.current.makeCircle(
      field_center,
      field_center + goal_radius + goal_linewidth + ballRadius,
      ballRadius
    );
    const blueBotMidCenter = two.current.makeCircle(
      field_center,
      tile_width * 4.5,
      ballRadius
    );
    const blueBotCenter = two.current.makeCircle(
      field_center,
      field_bot - goal_linewidth - ballRadius,
      ballRadius
    );
    const blueBotLeft = two.current.makeCircle(
      goal_linewidth + ballRadius,
      field_bot - goal_linewidth - ballRadius,
      ballRadius
    );
    const blueLeftCenter = two.current.makeCircle(
      goal_linewidth + ballRadius,
      field_center,
      ballRadius
    );
    const blueTopLeft = two.current.makeCircle(
      goal_linewidth + ballRadius,
      goal_linewidth + ballRadius,
      ballRadius
    );
    const blueTopRight = two.current.makeCircle(
      field_right - 2 * goal_linewidth - ballRadius - goal_radius,
      goal_radius + 2 * goal_linewidth + ballRadius,
      ballRadius
    );
    const blueBotRight = two.current.makeCircle(
      field_right - 2 * goal_linewidth - ballRadius - goal_radius,
      field_bot - goal_radius - 2 * goal_linewidth - ballRadius,
      ballRadius
    );
    blueBalls.current = two.current.makeGroup(
      blueCenterLeft,
      blueCenterBot,
      blueBotMidCenter,
      blueBotCenter,
      blueBotLeft,
      blueLeftCenter,
      blueTopLeft,
      blueTopRight,
      blueBotRight
    );
    blueBalls.current.fill = blue;

    const redCenterRight = two.current.makeCircle(
      field_center + goal_radius + goal_linewidth + ballRadius,
      field_center,
      ballRadius
    );
    const redCenterTop = two.current.makeCircle(
      field_center,
      field_center - goal_radius - goal_linewidth - ballRadius,
      ballRadius
    );
    const redTopMidCenter = two.current.makeCircle(
      field_center,
      tile_width * 1.5,
      ballRadius
    );
    const redTopCenter = two.current.makeCircle(
      field_center,
      field_top + goal_linewidth + ballRadius,
      ballRadius
    );
    const redTopRight = two.current.makeCircle(
      field_right - goal_linewidth - ballRadius,
      goal_linewidth + ballRadius,
      ballRadius
    );
    const redRightCenter = two.current.makeCircle(
      field_right - goal_linewidth - ballRadius,
      field_center,
      ballRadius
    );
    const redBotRight = two.current.makeCircle(
      field_right - goal_linewidth - ballRadius,
      field_bot - goal_linewidth - ballRadius,
      ballRadius
    );
    const redTopLeft = two.current.makeCircle(
      2 * goal_linewidth + ballRadius + goal_radius,
      goal_radius + 2 * goal_linewidth + ballRadius,
      ballRadius
    );
    const redBotLeft = two.current.makeCircle(
      2 * goal_linewidth + ballRadius + goal_radius,
      field_bot - goal_radius - 2 * goal_linewidth - ballRadius,
      ballRadius
    );
    redBalls.current = two.current.makeGroup(
      redCenterRight,
      redCenterTop,
      redTopMidCenter,
      redTopCenter,
      redTopRight,
      redRightCenter,
      redTopRight,
      redBotRight,
      redTopLeft,
      redBotLeft
    );
    redBalls.current.fill = red;
  };

  const skillsSetup = () => {
    const tile_width = startWidth.current / 6;
    const field_center = tile_width * 3;
    const field_top = 0;
    const field_bot = tile_width * 6;
    const field_right = tile_width * 6;

    const goal_radius = tile_width / 5;
    const goal_linewidth = tile_width / 8;
    const ballRadius = goal_radius - goal_linewidth / 2;

    const blueCenter = two.current.makeCircle(
      field_center,
      field_center,
      ballRadius
    );
    const blueBotCenter = two.current.makeCircle(
      field_center,
      field_bot - goal_linewidth - ballRadius,
      ballRadius
    );
    const blueTopCenter = two.current.makeCircle(
      field_center,
      field_top + goal_linewidth + ballRadius,
      ballRadius
    );
    const blueBotLeft = two.current.makeCircle(
      goal_linewidth + ballRadius,
      field_bot - goal_linewidth - ballRadius,
      ballRadius
    );
    const blueLeftCenter = two.current.makeCircle(
      goal_linewidth + ballRadius,
      field_center,
      ballRadius
    );
    const blueTopLeft = two.current.makeCircle(
      goal_linewidth + ballRadius,
      goal_linewidth + ballRadius,
      ballRadius
    );
    const blueTopRight = two.current.makeCircle(
      field_right - goal_linewidth - ballRadius,
      goal_linewidth + ballRadius,
      ballRadius
    );
    const blueBotRight = two.current.makeCircle(
      field_right - goal_linewidth - ballRadius,
      field_bot - goal_linewidth - ballRadius,
      ballRadius
    );
    const blueRightCenter = two.current.makeCircle(
      field_right - goal_linewidth - ballRadius,
      field_center,
      ballRadius
    );
    blueBalls.current = two.current.makeGroup(
      blueCenter,
      blueBotCenter,
      blueTopCenter,
      blueBotLeft,
      blueLeftCenter,
      blueTopLeft,
      blueTopRight,
      blueBotRight,
      blueRightCenter
    );
    blueBalls.current.fill = blue;

    const redCenterRight = two.current.makeCircle(
      tile_width * 4,
      field_center,
      ballRadius
    );
    const redCenterLeft = two.current.makeCircle(
      tile_width * 2,
      field_center,
      ballRadius
    );
    const redCenterTop = two.current.makeCircle(
      field_center,
      tile_width * 2,
      ballRadius
    );
    const redTopMidCenter = two.current.makeCircle(
      field_center,
      tile_width * 1,
      ballRadius
    );
    const redCenterBot = two.current.makeCircle(
      field_center,
      tile_width * 4,
      ballRadius
    );
    const redBotMidCenter = two.current.makeCircle(
      field_center,
      tile_width * 5,
      ballRadius
    );
    const redTopLeft = two.current.makeCircle(
      tile_width * 1.5,
      ballRadius,
      ballRadius
    );
    const redBotLeft = two.current.makeCircle(
      tile_width * 1.5,
      field_bot - ballRadius,
      ballRadius
    );
    const redTopRight = two.current.makeCircle(
      tile_width * 4.5,
      ballRadius,
      ballRadius
    );
    const redBotRight = two.current.makeCircle(
      tile_width * 4.5,
      field_bot - ballRadius,
      ballRadius
    );
    const redTopCenterLeft = two.current.makeCircle(
      tile_width,
      tile_width * 1.5,
      ballRadius
    );
    const redBotCenterLeft = two.current.makeCircle(
      tile_width,
      tile_width * 4.5,
      ballRadius
    );
    const redTopCenterRight = two.current.makeCircle(
      tile_width * 5,
      tile_width * 1.5,
      ballRadius
    );
    const redBotCenterRight = two.current.makeCircle(
      tile_width * 5,
      tile_width * 4.5,
      ballRadius
    );
    redBalls.current = two.current.makeGroup(
      redCenterRight,
      redCenterTop,
      redTopMidCenter,
      redTopLeft,
      redBotLeft,
      redTopRight,
      redBotRight,
      redCenterBot,
      redBotMidCenter,
      redCenterLeft,
      redTopCenterLeft,
      redBotCenterLeft,
      redTopCenterRight,
      redBotCenterRight
    );
    redBalls.current.fill = red;
  };

  /**
   * Sets up the field when the component is mounted.
   *
   * Warning about dependencies is ignored because we only want to run this on mount
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
      const tile_width = two.current.width / 6;
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
        tile_width,
        field_top,
        tile_width,
        field_bot
      );

      var right_line = two.current.makeLine(
        tile_width * 5,
        field_top,
        tile_width * 5,
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

    const newWidth = mount.current.getBoundingClientRect().width;
    startWidth.current = capSize(newWidth);
    if (!two.current) {
      two.current = new Two({
        width: startWidth.current,
        height: startWidth.current,
        autostart: true,
      }).appendTo(mount.current);
      two.current.makeGroup();
    }

    field();

    window.addEventListener("resize", () => {
      savedBoundingRect.current = mount.current.getBoundingClientRect();
      const newWidth = savedBoundingRect.current.width;
      resize(newWidth);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Handle the field state
   */
  useEffect(() => {
    if (field === prevField.current) {
      // The below state machine only operates on the state transitions
      return;
    }

    blueBalls.current?.remove();
    redBalls.current?.remove();

    switch (field) {
      case "COMP":
        compSetup();
        break;
      case "SKILLS":
        skillsSetup();
        break;
      case "NONE":
      default:
        break;
    }
    prevField.current = field;
  });

  return <></>;
};
