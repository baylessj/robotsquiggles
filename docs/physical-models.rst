Physical Models
===============

Physical Models define the translation from a velocity and curvature into wheel
velocities. This additional limit is imposed to prevent conditions where the 
robot's linear velocity is within the velocity constraint but one of its wheels
would need to exceed the velocity constraint to match the curvature at the point.
The generated wheel velocities can also be used as a feedforward value in the 
control loop for following the path.

Tank Drive Model
----------------

The :doc:`TankModel <api/classsquiggles_1_1_tank_model>` defines a Tank Drive model according
to the 
`unicycle <http://faculty.salina.k-state.edu/tim/robotics_sg/Control/kinematics/unicycle.html>`_ 
model. This model translates the linear velocity and curvature at the point into
two values: a velocity for the left side of the robot and a velocity for the
right side. These velocities are used when constraining the robot's linear
velocity. Additionally, the acceleration of each wheel is accounted for using 
the robot's linear acceleration and the curvature at the point. This additional 
constraint on the acceleration is applied during the motion profile phase of the 
path generation.