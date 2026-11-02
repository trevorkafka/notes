---
aliases:
  - "463815"
tags:
  - physics
  - physics-mechanics
  - AP-physics-C-mechanics
  - reference-sheets
draft: false
---

*Reference frame:* all velocities, accelerations, $\vec L_p$, and $K$ are measured in an *inertial (lab) frame*.

# Notation

| Symbol                                          | Meaning                                                                                                   |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| $p$                                             | The reference point around which $\vec\tau_p$, $\vec L_p$, and $I_p$ are computed                         |
| $M$                                             | Total mass of the body                                                                                    |
| $\vec r_p,\ \vec r_\text{cm}$                   | Positions of $p$ and of the center of mass                                                                |
| $\vec v_p,\ \vec v_\text{cm}$                   | Velocities of *the point $p$ itself* (which may move relative to the body) and of the center of mass      |
| $\vec v_\text{body},\ \vec a_\text{body}$       | Velocity and acceleration of *the body at $p$*                                                            |
| $\vec\omega,\ \vec\alpha$                       | Angular velocity and angular acceleration of the body                                                     |
| $I_p,\ \vec\tau_p,\ \vec L_p$                   | Moment of inertia of the body, net external torque, and angular momentum of the body, all about $p$       |
| $K$                                             | Total kinetic energy of the body                                                                          |
| $\sum \vec F$                                   | Net external force on the body                                                                            |

# Types of Reference Points

- <span class="pill pill-blue">Fixed Axis</span> An axis fixed in an inertial frame *that the body rotates about* (stationary pivot or axle)
- <span class="pill pill-red">Fixed Point</span> *Any* point fixed in an inertial frame, *whether or not* the body rotates about it (the body may move past it)
- <span class="pill pill-green">Center of Mass</span> The center of mass, *even if accelerating*
- <span class="pill pill-orange">Rolling Contact</span> The contact point of a round object rolling or unrolling *without slipping* on a *stationary* surface or string, with its *center of mass at its geometric center* (the contact *location*, which moves along with the object)
- <span class="pill pill-purple">Momentarily at Rest</span> Any point of the body *momentarily at rest*

# When the Simplified Equations Are Valid

| Simplified Equation                       | Valid About                                                                                                                                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ${\vec\tau_p = I_p \vec\alpha}$           | <span class="pill pill-blue">Fixed Axis</span> <span class="pill pill-green">Center of Mass</span> <span class="pill pill-orange">Rolling Contact</span> <span class="cell-note">Also, any point of the body whose acceleration is zero or aims at the center of mass</span> |
| ${\vec\tau_p = \dfrac{d\vec L_p}{dt}}$    | <span class="pill pill-red">Fixed Point</span> <span class="pill pill-green">Center of Mass</span> <span class="pill pill-orange">Rolling Contact</span> <span class="cell-note">Also, a moving point with ${\vec v_p \parallel \vec v_\text{cm}}$</span> |
| ${\vec L_p = I_p \vec\omega}$             | <span class="pill pill-blue">Fixed Axis</span> <span class="pill pill-green">Center of Mass</span> <span class="pill pill-purple">Momentarily at Rest</span>                                                                                      |
| ${K = \frac{1}{2} I_p \omega^2}$          | <span class="pill pill-blue">Fixed Axis</span> <span class="pill pill-purple">Momentarily at Rest</span>                                                                                                                                          |

# General Equations

These hold about any reference point $p$. Each one reduces to the simplified equation above when its extra term vanishes.

>[!note] For reference only
>These general forms go beyond what is taught in AP Physics C and most introductory university physics courses, which use only the simplified equations above. They typically first appear in intermediate (upper-level undergraduate) classical mechanics, and are included here mainly for reference.

$$
\begin{align*}
\vec\tau_p &= I_p \vec\alpha + (\vec r_\text{cm} - \vec r_p) \times M \vec a_\text{body} \\[1em]
\frac{d\vec L_p}{dt} &= \vec\tau_p - M \vec v_p \times \vec v_\text{cm} \\[1em]
\vec L_p &= I_p \vec\omega + (\vec r_\text{cm} - \vec r_p) \times M \vec v_\text{body} \\[1em]
K &= \frac{1}{2} I_p \omega^2 + \frac{1}{2} M v_\text{body}^2 + M \vec v_\text{body} \cdot \big( \vec\omega \times (\vec r_\text{cm} - \vec r_p) \big)
\end{align*}
$$

# Additional Cases

- *Conservation of angular momentum:* $\vec L_p$ is conserved about any point $p$ where $\vec\tau_p = d\vec L_p / dt$ is valid, whenever $\vec\tau_p = \vec 0$.
- *Statics:* if $\sum \vec F = \vec 0$ and $\sum \vec\tau_p = \vec 0$ about one point $p$, then $\sum \vec\tau_p = \vec 0$ about every point $p.$
