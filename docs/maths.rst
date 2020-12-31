The Math
========

Quintic Polynomials
-------------------

Each point along the generated path is determined by a Quintic Polynomial, or a 
polynomial function of the form 
:math:`x(t) = a*t^5 + b*t^4 + c*t^3 + d*t^2 + e*t + f`.
:math:`t` is a unitless parameter that represents the length along the path that
the point occurs at, in the range of :math:`[0, 1]`. There is one polynomial for
each dimension that the robot travels through; we have an x polynomial and a y 
polynomial for our 2D paths.

The source for the Quintic Polynomial coefficients is 
`Atsushi Sakai's Python Robotics <https://github.com/AtsushiSakai/PythonRobotics/blob/master/PathPlanning/QuinticPolynomialsPlanner/quintic_polynomials_planner.ipynb>`_.
The coefficients are set in accordance with the laws of physics regarding linear
movement. The :math:`t` parameter takes the place of time in the physics
equations.

The example code in Python Robotics solves the equation for the coefficients
dynamically with numpy but it can be computed statically. The convenient 
`Symbolab Matrix Equations Calculator <https://www.symbolab.com/solver/matrix-equations-calculator>`_
solved the matrix of coefficients as a function of the :math:`t` parameter.

The :math:`t` parameter maps directly to a theoretical duration for the path. 
The generation process starts with a short duration, as a faster path would be 
ideal, and incrementally generates longer and longer paths until the robot's 
:doc:`constraints` are met.

.. note:: This duration will differ from the end duration of the path 
   after motion profiling takes place.

Motion Profiles
---------------

The `trapezoidal motion profile <https://www.linearmotiontips.com/how-to-generate-motion-profile-for-linear-system/>`_ 
is applied to the path after the 2D positions are computed with the polynomials.
This motion profile constrains the maximum velocity and the maximum acceleration
for the robot while leaving jerk unconstrained. The `Quintic Polynomials`_ 
constrain the path's acceleration and jerk but do not constrain the velocity so 
adding the motion profile is a necessary step.

The profile generates the target velocity and acceleration for the robot at each
point along the path through two passes: a forward pass and then a backward pass.
After the velocity and acceleration are determined we reference the physics 
equations for linear motion again to set a more accurate time stamp for each of 
the positions. The forward pass first sets the starting velocity to the preferred
starting velocity set by the user in place of the "dummy" velocity used when 
calculating the polynomial. This pass then limits the velocity at each point to 
no greater than the maximum and then uses that new velocity value to calculate the
necessary acceleration value at the previous point. The backward pass first sets 
the ending velocity to the preffered ending velocity and then performs roughly
the same limiting as the forward pass but in reverse. These two passes get the 
starting and ending velocities matching the velocities set by the user and keep
the path velocities within the limits.

These new velocities and accelerations are used to find new timestamps for each 
point along the path given the linear distance between each. These new timestamps
do not last long, though, as the next step is to create new points at each 
increment of the :math:`dt` value by interpolating between the points at the 
aforementioned timestamps.
