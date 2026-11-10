---
layout: page
title: 3-DOF RRP Robotic Manipulator Simulation
description: Forward and inverse kinematics, Simscape Multibody modelling and Cartesian trajectory planning for a revolute-revolute-prismatic robot.
importance: 3
category: robotics
---

<figure class="robotics-figure">
  <img src="{{ '/assets/img/projects/robotics-rrp-manipulator/rrp-manipulator-model.png' | relative_url }}" alt="Three degree of freedom RRP robotic manipulator model">
  <figcaption>3-DOF manipulator used for the robotics exercise: two revolute joints and one prismatic joint.</figcaption>
</figure>

## Overview

This project models and simulates a 3-DOF RRP robotic manipulator in MATLAB and Simulink Simscape Multibody. The workflow connects Denavit-Hartenberg frame assignment, homogeneous transformation matrices, forward kinematics, inverse kinematics and Cartesian trajectory generation.

The model was built from the robot's physical links and joints, then tested through ten representative configurations ranging from fully extended and folded poses to negative-quadrant sweeps and reverse prismatic extension.

## Kinematic modelling

The manipulator uses four link lengths from the exercise model: **L₀ = 3 m**, **L₁ = 4 m**, **L₂ = 2 m** and **L₃ = 1 m**. Frames are assigned using the Denavit-Hartenberg convention: joint axes define the z directions, common normals define link offsets, and the right-hand rule fixes each x/y orientation.

<figure class="robotics-figure">
  <img src="{{ '/assets/img/projects/robotics-rrp-manipulator/simscape-system-overview.png' | relative_url }}" alt="Simscape Multibody robot simulation system overview">
  <figcaption>Simscape Multibody structure used to assemble the base, links, joints and end-effector sensor.</figcaption>
</figure>

The homogeneous transform is composed as:

\[
T*{0e} = T*{01} T*{12} T*{23} T\_{e3}
\]

The forward-kinematics block evaluates the end-effector position \((x_e, y_e, z_e)\) from \((\theta_1, \theta_2, d_3)\). The inverse-kinematics block maps a desired Cartesian point back to joint variables.

<figure class="robotics-figure">
  <img src="{{ '/assets/img/projects/robotics-rrp-manipulator/rrp-kinematics-pipeline.svg' | relative_url }}" alt="RRP robot kinematics and trajectory pipeline">
  <figcaption>Added schematic: trajectory generator → inverse kinematics → Simscape plant → forward-kinematics verification.</figcaption>
</figure>

## Simscape implementation

The robot was assembled incrementally: base and Link 0, Link 1 with Revolute Joint 2, Link 2 with the final Prismatic Joint 3, then Link 3 and the end-effector sensor. Rigid Transform blocks provide the 2 m and 1 m offsets needed to place each component in the correct frame.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="robotics-figure"><img src="{{ '/assets/img/projects/robotics-rrp-manipulator/robot-base-and-links.png' | relative_url }}" alt="Simscape model of robot base and links"><figcaption>Base and link construction.</figcaption></figure></div>
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="robotics-figure"><img src="{{ '/assets/img/projects/robotics-rrp-manipulator/joint-display-blocks.png' | relative_url }}" alt="Simulink joint inputs and end-effector displays"><figcaption>Joint inputs and x/y/z display outputs.</figcaption></figure></div>
</div>

## Forward and inverse kinematics

The forward model uses the matrix chain above to calculate the end-effector coordinates. For inverse kinematics, the report uses:

\[
d_3 = L_0 - L_3 - z
\]

\[
c_2 = \frac{x^2+y^2-L_1^2-L_2^2}{2L_1L_2},\qquad
\theta_2 = \operatorname{atan2}(\sqrt{1-c_2^2}, c_2)
\]

\[
\theta_1 = \operatorname{atan2}(y,x)-\operatorname{atan2}(L_2\sin\theta_2, L_1+L_2\cos\theta_2)
\]

<figure class="robotics-figure">
  <img src="{{ '/assets/img/projects/robotics-rrp-manipulator/forward-kinematic-block.png' | relative_url }}" alt="Forward kinematics MATLAB and Simulink block diagram">
  <figcaption>Forward-kinematics calculation and its Simulink integration.</figcaption>
</figure>

## Circular trajectory in Cartesian space

The circular trajectory uses a 1 m radius, centre \((x_c,y_c)=(4,0)\), constant \(z=1.5\) m and a 10 s period:

\[
x_d(t)=x_c+R\cos(\omega t),\quad y_d(t)=y_c+R\sin(\omega t),\quad z_d(t)=1.5
\]

where \(\omega=2\pi/T\). The trajectory generator produces the desired point, inverse kinematics converts it to joint commands, and the Simscape plant produces the actual motion.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="robotics-figure"><img src="{{ '/assets/img/projects/robotics-rrp-manipulator/circular-trajectory-block.png' | relative_url }}" alt="Circular trajectory and inverse kinematics block diagram"><figcaption>Circular trajectory block architecture.</figcaption></figure></div>
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="robotics-figure"><img src="{{ '/assets/img/projects/robotics-rrp-manipulator/circular-trajectory-robot.png' | relative_url }}" alt="RRP robot following a circular trajectory"><figcaption>Robot pose during circular motion.</figcaption></figure></div>
</div>

## Straight-line trajectory

The straight-line test interpolates from **A(5, −1, 1.5)** to **B(3, 1, 1.5)** over 10 s using linear interpolation (LERP). This tests whether the inverse-kinematics mapping and the physical model remain consistent for a non-circular path.

<figure class="robotics-figure">
  <img src="{{ '/assets/img/projects/robotics-rrp-manipulator/straight-line-trajectory-block.png' | relative_url }}" alt="Straight line trajectory and inverse kinematics block diagram">
  <figcaption>Simulink architecture for the straight-line trajectory.</figcaption>
</figure>

## Verification and visual evidence

The report compares desired and measured end-effector coordinates using To Workspace outputs. The three plots below provide a direct visual check of the x, y and z axes rather than relying only on a final robot pose.

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0"><figure class="robotics-figure"><img src="{{ '/assets/img/projects/robotics-rrp-manipulator/x-position-comparison.png' | relative_url }}" alt="Desired versus measured x position plot"><figcaption>X-position comparison.</figcaption></figure></div>
  <div class="col-sm-4 mt-3 mt-md-0"><figure class="robotics-figure"><img src="{{ '/assets/img/projects/robotics-rrp-manipulator/y-position-comparison.png' | relative_url }}" alt="Desired versus measured y position plot"><figcaption>Y-position comparison.</figcaption></figure></div>
  <div class="col-sm-4 mt-3 mt-md-0"><figure class="robotics-figure"><img src="{{ '/assets/img/projects/robotics-rrp-manipulator/z-position-comparison.png' | relative_url }}" alt="Desired versus measured z position plot"><figcaption>Z-position comparison.</figcaption></figure></div>
</div>

The simulation evidence shows the model reaching the required configurations and tracing the planned circular and straight-line motions. The supplied video demonstrates the Simscape simulation: [Watch the robotics simulation on Google Drive](https://drive.google.com/file/d/1NAVcYXSTktZAk4EqPSHPCQEwQ96Hu39b/view?usp=drive_link).

## Tools and skills

- MATLAB and Simulink
- Simscape Multibody
- Denavit-Hartenberg modelling
- Homogeneous transformations
- Forward and inverse kinematics
- Cartesian trajectory planning and workspace verification

## References

- Craig, J. J., _Introduction to Robotics: Mechanics and Control_.
- MathWorks, _Simscape Multibody Documentation_ — [mathworks.com/help/physmod/sm](https://www.mathworks.com/help/physmod/sm/)
- Hoang Van Thang, _Introduction to Robotics Exercise Report – Code 16_.
