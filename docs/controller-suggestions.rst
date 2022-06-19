Controller Suggestions
======================

The :doc:`motion profiles <constraints>` help the robot's path-following 
abilities considerably but there are many factors that could prevent the robot
from following the generated path. It is recommended to pair the output of 
Squiggles with a 
`feedback controller <https://www.electronics-tutorials.ws/systems/closed-loop-system.html>`_.

A `velocity PID controller <https://okapilib.github.io/OkapiLib/classokapi_1_1AsyncVelPIDController.html>`_
is an easy start but a controller optimized for path following is the best 
choice. Small errors in a velocity controller are fine with systems like a 
flywheel but can cause a path-following robot to go wildly off course.

Pure Pursuit Controller
-----------------------

The
`Pure Pursuit Controller <https://wiki.purduesigbots.com/software/control-algorithms/basic-pure-pursuit>`_ 
is the defacto standard for closed loop path following. Instead of trying to make
the robot move to the nearest point along the path when it diverges the Pure
Pursuit Controller anticipates moving to a point ahead on the path. The 
target point is the nearest point plus a *look ahead distance*. The Pure Pursuit
Controller closes the control loop by using the robot's measured position -- 
calculated by something like 
`odometry <https://wiki.purduesigbots.com/software/odometry>`_ -- 
and finds the look ahead point from that measured position.

The Pure Pursuit Controller has been used extensively in FRC. A couple examples
of its use for FRC are listed below:

- `Team 254's Implementation <https://github.com/Team254/FRC-2019-Public/blob/master/src/main/java/com/team254/lib/control/AdaptivePurePursuitController.java>`_
- `XiaoXie's Implementation <https://github.com/xiaoxiae/PurePursuitAlgorithm>`_

The Pure Pursuit algorithm is best explained by 
`the Purdue SIGBots Wiki <https://wiki.purduesigbots.com/software/basic-pure-pursuit>`_.
It is often helpful to reference this document in conjunction with an example 
Pure Pursuit implementation when writing your own take on the controller.

Ramsete Controller
------------------

The `Ramsete Controller <https://wiki.purduesigbots.com/software/control-algorithms/ramsete>`_
is another controller that is used for following paths. It does not look ahead
to follow the path like the `Pure Pursuit Controller`_ but is best suited for
correcting small errors.

Like Pure Pursuit, the Ramsete Controller has become quite popular in FRC. The 
`WPILib <https://docs.wpilib.org/en/latest/index.html>`_ library includes an 
implementation for the Ramsete Controller:

- `WPILib Implementation <https://github.com/wpilibsuite/allwpilib/blob/ee03a7ad3bcc156d3b9c07c590e32bca5df83537/wpimath/src/main/native/cpp/controller/RamseteController.cpp>`_

The following resources are helpful to use when constructing your
Ramsete Controller:

- `Purdue SIGBots Wiki Article <https://wiki.purduesigbots.com/software/control-algorithms/ramsete>`_
- `Tyler Veness' Controls Engineering in the FIRST Robotics Competition <https://file.tavsys.net/control/controls-engineering-in-frc.pdf>`_ 
- `The original paper detailing the algorithm <https://core.ac.uk/download/pdf/205520525.pdf>`_ 