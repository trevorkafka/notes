---
tags:
  - physics-all
  - vectors
  - precalc
aliases:
  - "377564"
---
Problems titled "Giancoli" are sourced from *Physics: Principles with Applications* by Giancoli. A problem titled "Giancoli 3-P9," for example, refers to problem 9 from chapter 3 (P refers to *problem*, Q refers to *question*).

>[!question] Giancoli 3-P9
>
>Three vectors are shown in Fig. 3–35. Their magnitudes are given in arbitrary units. Determine the sum of the three vectors. Give the resultant in terms of  (a) components  (b) magnitude and angle with the $+x$ axis.
>
>![[Pasted image 20250715111910.png]]

>[!check]- Solution to 3-P9
>
> The components of the vectors are as follows.
> $$
> \begin{align*} \\
> \vec{\mathbf A} &= \langle 44.0 \cos 28.0^\circ, 44.0 \sin 28^\circ \rangle = \langle 38.84969409\ldots, 20.65674876\ldots \rangle \\
> \vec{\mathbf B} &= \langle - 26.5 \cos 56.0^\circ, 26.5 \sin 56.0^\circ \rangle = \langle -14.81861194\ldots, 21.96949567\ldots \rangle \\
> \vec{\mathbf C} &= \langle 0, -31.0 \rangle
> \end{align*}
> $$
> The sum found the vectors can be found by adding the components.
> $$
> \vec{\mathbf A} + \vec{\mathbf B} + \vec{\mathbf C} = \langle A_x + B_x + C_x, A_y + B_y + C_y \rangle
> $$
> $$
> = \langle 24.03108215\ldots, 11.62624444\ldots \rangle \approx \boxed{\langle 24.0,11.6\rangle\ \text{(a)}}
> $$
> The magnitude and angle $\theta$ of the resultant vector can then be found  using the Pythagorean theorem and tangent function, respectively.
> $$
> |\vec{\mathbf A} + \vec{\mathbf B} + \vec{\mathbf C}| = \sqrt{24.03108215\ldots^2 + 11.62624444\ldots^2} = 26.69573878\ldots \approx \boxed{26.7\ \text{(b)}}
> $$
> $$
> \tan \theta = \frac{y\text{-component}}{x\text{-component}}
> $$ 
> $$
> \theta = \arctan \left( \frac{11.62624444\ldots}{24.03108215\ldots} \right) = \boxed{25.8^\circ\ \text{(b)}}
> $$

>[!question] Giancoli 3-P16
>
>You are given a vector in the $xy$ plane that has a magnitude of $90.0$ units and a $y$ component of $-65.0$ units. (a) What are the two possibilities for its $x$ component? (b) Assuming the $x$ component is known to be positive, specify the vector which, if you add it to the original one, would give a resultant vector that is $80.0$ units long and points entirely in the $-x$ direction.

>[!check]- Solution to 3-P16
> 
> Let's call this vector $\vec{\mathbf v} = \langle v_x, v_y \rangle$. We are told that $|\vec{\mathbf v}| = v = 90.0$ and $v_y = -65.0$. The fact that $v_y < 0$ restricts $\vec{\mathbf v}$ to only $\text{QIII}$ and $\text{QIV}.$ From this, we can compute *one* possible value for $\theta$, where $\theta$ is the angle between $\vec{\mathbf v}$ and the $+x$-axis, by taking advantage of the $\arcsin$ function.
> $$
> v_y = v \sin \theta
> $$
> $$
> \sin \theta = \frac{v_y}{v}
> $$
> $$
> \theta = \arcsin \left( \frac{v_y}{v} \right) = \arcsin \left( \frac{-65.0} {90.0} \right) = -46.23825731\ldots^\circ
> $$
> This is a $\text{QIV}$ angle. The corresponding $\text{QIII}$ angle  will have the same reference angle and can be found by computing 
> $$
> -180^\circ - (-46.23825731\ldots^\circ) = -133.7617427\ldots^\circ
> $$ 
> (Creating a sketch of the two possible angles may be helpful here.) Hence
> $$
> \theta = \{-133.7617427\ldots^\circ, -46.23825731\ldots^\circ\}.
> $$
> From this, $v_x$ can be found.
> $$
> \begin{align*}
> v_x &= v \cos \theta = 90.0 \cos (-133.7617427\ldots^\circ) = -62.24949799 \ldots \text{ units} \\
> v_x &= v \cos \theta = 90.0 \cos (-46.23825731\ldots^\circ) = 62.24949799\ldots \text{ units}
> \end{align*}
> $$
> Hence, $v_x = \boxed{\pm 62.2 \text{ units (a)}}.$
> 
> For part (b), we are told to choose $\vec{\mathbf v} = \langle 62.24949799\ldots, -65.0 \rangle$. We need a new vector $\vec{\mathbf w}$ such that the sum $\vec{\mathbf s} = \vec{\mathbf v} + \vec{\mathbf w}$ satisfies $\vec{\mathbf s} = \langle -80.0, 0 \rangle$. The vector $\vec{\mathbf w}$ is then able to be found via subtraction.
> $$
> \vec{\mathbf w} = \vec{\mathbf s} - \vec{\mathbf v} = \langle -80.0, 0 \rangle - \langle 62.24949799\ldots, -65.0 \rangle \approx \boxed{ \langle -142.2, 65.0 \rangle\ \text{(b)}}
> $$

>[!question] Giancoli 3-P48
>
>A boat, whose speed in still water is $2.50\ \text{m/s}$, must cross a $285\ \text{m}$-wide river and arrive at a point $118\ \text{m}$ upstream from where it starts (Fig. 3–45). To do so, the pilot must head the boat at a $45.0^\circ$ upstream angle. What is the speed of the river’s current?
>
>![[Pasted image 20250715113101.png]]

>[!note]- Hint for 3-P48
>For this problem, let the velocity of the water relative to the ground be $\vec {\mathbf v}_\text{wg},$ the velocity of the boat relative to the water be $\vec {\mathbf v}_\text{bw},$ and the velocity of the boat relative to the ground be $\vec {\mathbf v}_\text{bg}.$ The relationship between these three vectors is 
>$$
>\vec {\mathbf v}_\text{bw} + \vec {\mathbf v}_\text{wg} = \vec {\mathbf v}_\text{bg}.
>$$

>[!check]+ Solution to 3-P48
> (solution is coming soon!)

>[!question] Giancoli 3-P52
>
>Two vectors, $\vec{V}_1$ and $\vec{V}_2$, add to a resultant $\vec{V}_R = \vec{V}_1 + \vec{V}_2$. Describe $\vec{V}_1$ and $\vec{V}_2$ if (a) $V_R = V_1 + V_2$, (b) $V_R^2 = V_1^2 + V_2^2$, (c) $V_1 + V_2 = V_1 - V_2$.

>[!check]+ Solution to 3-P52
>(solution is coming soon!)
