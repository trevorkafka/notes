---
aliases:
  - "141079"
tags:
  - physics-mechanics
  - AP
  - calculus
---
>[!note] Definition of Work
>The work $W$ done by a *constant* force $\vec F$ acting on an object as it undergoes displacement $\Delta \vec x$ is defined by
>$$
>W = \vec F \cdot \Delta \vec x.
>$$
>Conceptually, the work $W$ represents a transfer of energy into or out of the object in question. When $W > 0,$ energy is being transferred into the object and when $W < 0,$ energy is removed from the object.

The most common sets of units of measure for Work (energy), Force, and Displacement compatible with this equation are as follows.

| System    | Force       | Displacement | Work (Energy)       |
| --------- | ----------- | ------------ | ------------------- |
| SI/Metric | Newtons (N) | meters (m)   | Joules (J)          |
| Imperial  | pounds (lb) | inches (in)  | inch-pounds (in-lb) |
| Imperial  | pounds (lb) | feet (ft)    | foot-pounds (ft-lb) |

The constant-force definition above works well for simple situations, but may need to be turned into an integral. A common general situation involving position-dependent forces is shown below.

>[!example] Position-Dependent Forces
>Imagine an object moving along the $x$ axis under the influence of a force $F(x)$ (also oriented along the $x$ axis) that varies as a function of the object's position $x$. The work can be approximated by splitting up the path at various points $x_i$ along the path, computing the work $W_i = F(x_i) \Delta x$ at each point, and summing up the values.
>$$
>W \approx \sum W_i = \sum F(x_i) \Delta x
>$$
>Taking the limit as $\Delta x \to 0$ turns the summation into an integral, which provides the exact work done along the path.
>$$
>\begin{gather*}
>W = \lim_{\Delta x \rightarrow 0} \sum F(x_i) \Delta x \\
>\boxed{ W = \int_{x_1}^{x_2} F(x)\ dx}
>\end{gather*}
>$$
>Here, in this integral, $x_1$ and $x_2$ represent the initial and final $x$ positions of the object along its path.

# Problems
Problems are taken from *Calculus 10th ed.* by Larson, Section 7.5 (Work)

>[!question] Question 9
>Seven and one-half foot-pounds of work is required to compress a spring 2 inches from its natural length. Find the work required to compress the spring an additional one-half inch.
>
>Note: this problem requires **Hooke's law**, which says that the force exerted by a string $F,$ the stiffness of the spring $k$ (spring constant), and the distance the spring is stretched/squished from equilibrium $d$ are related by $F = kd.$

>[!check]- Solution 9
>Let $x$ be the degree of compression of the spring at any given moment. According to Hooke's law, the corresponding force would be of strength $F = kx,$ where $k$ is the stiffness (spring constant) of the spring.
>
> We can equivalently view $x$ as the position of the tip of the spring that we are exerting the force to in order to compress it. Hence, we are dealing with a position-dependent force $F(x) = kx$, from which we can use the integral described earlier on this page to compute the work.
> $$
> W = \int_{x_1}^{x_2} F\ dx = \int_{x_1}^{x_2} kx\ dx
> $$
> First, let's equate the work done when moving the end of the spring from $x_1 = 0\ \text{ft}$ to $x_2 = 2 \text{ in} = \frac{1}{6}\ \text{ft}$ with $7.5\ \text{ft} \cdot \text{lb}$ in order to determine the stiffness of the spring $k.$
> $$
> \begin{gather*}
> 7.5\ \text{ft} \cdot \text{lb} = \int_{0\ \text{in}}^{\frac{1}{6}\ \text{ft}} kx\ dx \\
> 7.5\ \text{ft} \cdot \text{lb} = \left. \frac{1}{2}kx^2 \right|_{0\ \text{in}}^{\frac{1}{6}\ \text{ft}} \\
> 7.5\ \cancel{\text{ft}} \cdot \text{lb} = \frac{k}{72} \text{ft}^{\cancel 2} \\
> k = \frac{5}{48} \frac{\text{lb}}{\text{ft}}
> \end{gather*}
> $$
> Now, use this value of $k$ to compute the work done from $x_1 = 0\ \text{ft}$ to $x = 2.5\ \text{in} = \frac{5}{24} \text{ft}$.
> $$
> \begin{gather*}
> W = \int_{0\ \text{ft}}^{\frac{5}{24} \text{ft}} \left( \frac{5}{48} \frac{\text{lb}}{\text{ft}} \right) x\ dx \\
> W = \left. \frac{5}{96} x^2 \right|_{0\ \text{ft}}^{\frac{5}{24} \text{ft}} \\
> W = \frac{125}{55296} \text{ft-lb} \approx \boxed{0.002\  \text{ft-lb}}
> \end{gather*}
> $$

More problems and solutions are coming soon...