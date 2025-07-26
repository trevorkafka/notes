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

This definition holds for vectors in any number of dimensions.
# Computation in Terms of Components

The dot product can be *very conveniently* also be computed in terms of the two-dimensional components of $\vec{\mathbf a} = \langle a_x, a_y \rangle$ and $\vec{\mathbf b} = \langle b_x, b_y \rangle$ according to the following theorem.

>[!note] Theorem: Computing a Dot Product in Terms of Vector Components (2D)
> $$
> \vec{\mathbf a} \cdot \vec{\mathbf b} = a_x b_x + a_y b_y
> $$

This can be proven in two-dimensions using the [[Trigonometric Sum and Difference Formulas|cosine of a difference formula]]. A more detailed explanation of this will be added at a future point.
## Formula in three dimensions

The dot product can be computed in terms of the three-dimensional components of $\vec{\mathbf a} = \langle a_x, a_y, a_z \rangle$ and $\vec{\mathbf b} = \langle b_x, b_y, b_z \rangle.$

>[!note] Theorem: Computing a Dot Product in Terms of Vector Components (3D)
> $$
> \vec{\mathbf a} \cdot \vec{\mathbf b} = a_x b_x + a_y b_y + a_z b_z
> $$

Notice how elegantly this extends the two-dimensional formula into three dimensions. One of the big reasons why dot products have been established as their own object is due to the simplicity that is associated with their computation despite having nontrivial ties to the vectors from which they are computed from.

# Computing Projections with Dot Products

>[!warning] information coming soon

# Computing the Angle Between Vectors with Dot Products

From the definition $\vec{\mathbf a} \cdot \vec{\mathbf b} = ab \cos \theta$ given at the beginning of the article, one can rearrange the formula to solve for $\theta,$ the angle between the two vectors  $\vec{\mathbf a}$ and $\vec{\mathbf b}.$ 

>[!note] Angle Between Two Vectors
>$$
>\theta = \arccos \left( \frac{\vec{\mathbf a} \cdot \vec{\mathbf b} }{ab} \right)
>$$

This formula works for any two vectors  $\vec{\mathbf a}$ and $\vec{\mathbf b}$ for which the dot product and magnitudes are known.