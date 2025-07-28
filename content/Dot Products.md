---
tags:
  - "#vectors"
  - "#physics-all"
  - "#precalc"
aliases:
  - "128525"
---
# Definition in Terms of Vector Magnitudes and Angles

The **dot product** $\vec{\mathbf a} \cdot \vec{\mathbf b}$ of two vectors $\vec{\mathbf a}$ and $\vec{\mathbf b}$ is defined in terms of the vector magnitudes $a$ and $b$ as well as the angle between the vectors $\theta$.

>[!note] Definition of a Dot Product
> $$
> \vec{\mathbf a} \cdot \vec{\mathbf b} = ab \cos \theta
> $$

This definition holds for vectors in any number of dimensions. Since $a$ and $b$ are positive, the sign of $\vec{\mathbf a} \cdot \vec{\mathbf b}$ depends on the angle $\theta$ according to the following table.

| Sign of $\vec{\mathbf a} \cdot \vec{\mathbf b}$ | Angle between $\vec{\mathbf a}$ and $\vec{\mathbf b}$ |
| ----------------------------------------------- | ----------------------------------------------------- |
| $\vec{\mathbf a} \cdot \vec{\mathbf b}> 0$      | acute ($0^\circ \leq \theta < 90^\circ$)              |
| $\vec{\mathbf a} \cdot \vec{\mathbf b} = 0$     | right ($\theta = 90^\circ$)                           |
| $\vec{\mathbf a} \cdot \vec{\mathbf b} < 0$     | obtuse ($90^\circ < \theta \leq 180^\circ$)           |

## Practice Problem

>[!question] Problem
>Let $\vec{\mathbf{v}}$ and $\vec{\mathbf{w}}$ be vectors in the $xy$-plane with magnitudes and angles measured counterclockwise from the positive $x$-axis. The magnitude of $\vec{\mathbf{v}}$ is $6$, and its angle is $40^\circ$. The magnitude of $\vec{\mathbf{w}}$ is $3$, and its angle is $160^\circ$. Determine $\vec{\mathbf{v}} \cdot \vec{\mathbf{w}}$.

>[!check]- Solution
>The angle between the two vectors is $\theta = 160^\circ - 40^\circ = 120^\circ.$ Hence $\cos \theta = \cos 120^\circ = - \frac{1}{2}$ (precalc students are often expected to recall this value from memory but it can also be found with a calculator). So, the dot product is
>$$
>\vec{\mathbf v} \cdot \vec{\mathbf w} = vw \cos 120^\circ = 6 \cdot 3 \cdot \left( -\frac{1}{2} \right) = \boxed{-9}.
>$$
# Computation in Terms of Components

The dot product can be *very conveniently* also be computed in terms of the two-dimensional components of $\vec{\mathbf a} = \langle a_x, a_y \rangle$ and $\vec{\mathbf b} = \langle b_x, b_y \rangle$ according to the following theorem.

>[!note] Theorem: Computing a Dot Product in Terms of Vector Components (2D)
> $$
> \vec{\mathbf a} \cdot \vec{\mathbf b} = a_x b_x + a_y b_y
> $$

This can be proven in two-dimensions using the [[Trigonometric Sum and Difference Formulas|cosine of a difference formula]]. A more detailed explanation of this will be added to this article at a future point.
## Formula in three dimensions

The dot product can be computed in terms of the three-dimensional components of $\vec{\mathbf a} = \langle a_x, a_y, a_z \rangle$ and $\vec{\mathbf b} = \langle b_x, b_y, b_z \rangle.$

>[!note] Theorem: Computing a Dot Product in Terms of Vector Components (3D)
> $$
> \vec{\mathbf a} \cdot \vec{\mathbf b} = a_x b_x + a_y b_y + a_z b_z
> $$

Notice how elegantly this extends the two-dimensional formula into three dimensions. One of the big reasons why dot products have been established as their own object is due to the simplicity that is associated with their computation despite having nontrivial ties to the vectors from which they are computed from.

## Practice Problem

>[!question] Problem
>Show that if $\mathbf{\vec a} = \langle a_x, a_y, a_z \rangle$, then $\vec{\mathbf a} \cdot \hat \imath = a_x$.

>[!check]- Solution
>Recalling that $\hat \imath$ denotes the unit vector pointing in the $+x$ direction, we know that $\hat \imath = \langle 1, 0, 0 \rangle.$ According to the theorem,
>$$
>\vec{\mathbf a} \cdot \hat \imath = a_x \cdot 1 + a_y \cdot 0 + a_z \cdot 0 = a_x.\ \checkmark
>$$
# Computing Projections with Dot Products

The projection of $\vec{\mathbf a}$ on $\vec{\mathbf b}$, denoted $\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}$ is the component of $\vec{\mathbf a}$ in the direction of $\vec{\mathbf b}$.

<span class="invert">![[attachments/Drawboard-PDF-Annotation-Copy 4.png]]</span>

The projection of a vector $\vec{\mathbf a}$ on a second vector $\vec{\mathbf b}$, denoted as $\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}$, can be found through a dot product by means of the following formula.

>[!note] Projection of Vector $\vec{\mathbf a}$ on Vector $\vec{\mathbf b}$.
>$$
>\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a} = \frac{(\vec{\mathbf a} \cdot \vec{\mathbf b})\vec{\mathbf b}}{b^2}
>$$

>[!question]- Why?
>If $\theta$ is the angle between $\vec{\mathbf a}$ and $\vec{\mathbf b}$ then $|\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}| = a \cos \theta = \frac{\vec{\mathbf a} \cdot \vec{\mathbf b}}{b}$. The direction of $\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}$ is the same as $\vec{\mathbf b}$.  The unit vector that points in the direction of $\vec{\mathbf b}$ is $\hat b = \frac{\vec{\mathbf b}}{b}.$ From this, we can construct the formula for $\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}$.
>$$
>\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a} = |\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}| \hat b = \left( \frac{\vec{\mathbf a} \cdot \vec{\mathbf b}}{b} \right) \left( \frac{\vec{\mathbf b}}{b} \right) = \frac{(\vec{\mathbf a} \cdot \vec{\mathbf b})\vec{\mathbf b}}{b^2}\ \checkmark
>$$
## Practice Problem

>[!question] Problem
>Show that if $\vec{\mathbf u} = \vec{\mathbf a} -  \text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}$, and neither $\vec{\mathbf u}$ or $\vec{\mathbf b}$ are the zero vector then $\vec{\mathbf u}$ is perpendicular to $\vec{\mathbf b}$.

>[!check]- Solution 1
> Based on the definition of $\vec{\mathbf u}$, we have that $\vec{\mathbf a} = \vec{\mathbf u} + \text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}.$ This means that $\vec{\mathbf u}$ can be included in a vector diagram with $\vec{\mathbf a},$ $\vec{\mathbf b},$ and $\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}$ as follows.
> 
> <span class="invert">![[attachments/Drawboard-PDF-Annotation-Copy 5.png]]</span>
> 
> From this diagram, it is clear that $\vec{\mathbf u} \perp \vec{\mathbf b}.$

>[!check]- Solution 2
> 
> Let's compute $\vec{\mathbf u} \cdot \vec{\mathbf b}$ and expand using the formula for $\text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}.$
> $$
> \begin{align*}
> \vec{\mathbf u} \cdot \vec{\mathbf b} &= (\vec{\mathbf a} - \text{proj}_{\vec{\mathbf b}} \vec{\mathbf a}) \cdot \vec{\mathbf b}\\
> &= \vec{\mathbf a} \cdot \vec{\mathbf b} - ( \text{proj}_{\vec{\mathbf b}} \vec{\mathbf a} ) \cdot \vec{\mathbf b} \\
> &= \vec{\mathbf a} \cdot \vec{\mathbf b} - \frac{(\vec{\mathbf a} \cdot \vec{\mathbf b})\vec{\mathbf b}}{b^2} \cdot \vec{\mathbf b} \\
> &= \vec{\mathbf a} \cdot \vec{\mathbf b} - \frac{(\vec{\mathbf a} \cdot \vec{\mathbf b}) \cancel{b^2}}{\cancel{b^2}} = 0
> \end{align*}
> $$
> Since $\vec{\mathbf u} \cdot \vec{\mathbf b} = 0$, we must have that $\vec{\mathbf u} \perp \vec{\mathbf b}$.
# Computing the Angle Between Vectors with Dot Products

From the definition $\vec{\mathbf a} \cdot \vec{\mathbf b} = ab \cos \theta$ given at the beginning of the article, one can rearrange the formula to solve for $\theta,$ the angle between the two vectors  $\vec{\mathbf a}$ and $\vec{\mathbf b}.$ 

>[!note] Angle Between Two Vectors
>$$
>\theta = \arccos \left( \frac{\vec{\mathbf a} \cdot \vec{\mathbf b} }{ab} \right)
>$$

This formula works for any two vectors  $\vec{\mathbf a}$ and $\vec{\mathbf b}$ for which the dot product and magnitudes are known.

## Practice Problem

>[!question] Problem
>Find the angle between $\vec{\mathbf a} = \langle 1, 2 \rangle$ and $\vec{\mathbf b} = \langle 3, 4 \rangle$

>[!check]- Solution
>The angle can be found by means of the given formula and a calculator.
>$$
>\theta = \arccos \left( \frac{\vec{\mathbf a} \cdot \vec{\mathbf b} }{ab} \right) = \arccos \left( \frac{a_x b_x + a_y b_y}{ \sqrt{a_x^2 + a_y^2} \sqrt{b_x^2 + b_y^2}} \right) = \arccos \left( \frac{1 \cdot 3 + 2 \cdot 4}{\sqrt{1^2 + 2^2} \sqrt{3^2 + 4^2}} \right) \approx \boxed{10.3^\circ}
>$$