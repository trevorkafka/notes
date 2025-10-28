---
aliases:
  - "741070"
tags:
  - calculus
---
$$
\int \frac{3x+1}{x(x^2+4)}\ dx 
$$

>[!example] This integral requires the use of the following techniques:
>  - Partial fractions
>  - Integration by substitution
>  - Algebraic manipulation
>  - Antiderivatives involving natural logarithms
>  - Antiderivatives involving arctangent

> [!check]- Solution
> Taking note that this integral is of the form
> $$
> \int \frac{\text{polynomial of lower degree}}{\text{factored polynomial}}\ dx,
> $$
> we are motivated to perform a partial fraction decomposition on the integrand. Let $A,$ $B,$ and $C$ be constants. For the correct choice of constants, the following relationship should be true for all values of $x.$
> $$
> \frac{3x+1}{x(x^2+4)} = \frac{A}{x} + \frac{Bx+C}{x^2+4}
> $$
> Multiply both sides by $x(x^2+4)$ to clear the denominators.
> $$
> 3x + 1 = A(x^2 + 4) + Bx^2 + Cx
> $$
> Plugging in $x = 0$ readily yields $A = \frac{1}{4}.$
> $$
> \begin{gather*}
> 3x + 1 = \frac{1}{4}(x^2 + 4) + Bx^2 + Cx \\
> - \frac{1}{4} x^2 + 3x = Bx^2 + Cx
> \end{gather*}
> $$
> Plugging in $x = \pm 1$ yields the following system of equations.
> $$
> \begin{cases}
> \frac{11}{4} = B + C & \text{for $x = 1$} \\
> - \frac{13}{4} = B - C & \text{for $x = -1$}
> \end{cases}
> $$
> Adding these two equations gives $- \frac{1}{2} = 2B,$ so $B = - \frac{1}{4}.$ Back-substituting this into either equation above gives $C = 3$. This completes the partial fraction decomposition. Split up the main integral into three pieces according to this decomposition.
> $$
> \begin{align*}
> \int \frac{3x+1}{x(x^2+4)}\ dx &= \int \frac{\frac{1}{4}}{x} + \frac{- \frac{1}{4}x + 3}{x^2 + 4}\ dx \\
> &= \frac{1}{4} \underbrace{\int \frac{1}{x}\ dx}_{\text{integral A}} - \frac{1}{4} \underbrace{\int \frac{x}{x^2 + 4}\ dx}_{\text{integral B}} + 3 \underbrace{\int \frac{1}{x^2 + 4}\ dx}_{\text{integral C}}
> \end{align*}
> $$
> **Integral A:**
> This integral is straightforward.
> $$
> \int \frac{1}{x}\ dx = \ln|x| + C
> $$
> 
> **Integral B:**
> This integral can be computed by letting $u = x^2 + 4,$ so $\frac{1}{2}\ du = x\ dx.$ 
> $$
> \begin{align*}
> \int \frac{x}{x^2 + 4}\ dx &= \frac{1}{2} \int \frac{1}{u}\ du \\
> &= \frac{1}{2} \ln|u| + C \\
> &= \frac{1}{2} \ln|x^2 + 4| + C\\
> &= \frac{1}{2} \ln(x^2 + 4) + C
> \end{align*}
> $$
> I dropped the absolute value signs in the last step since $x^2  + 4$ is always positive.
> 
> **Integral C:**
> This integral can be manipulated into a form of an arctangent derivative and integrated by ultimately letting $u = \frac{x}{2},$ which gives $2\ du = dx.$
> $$
> \begin{align*}
> \int \frac{1}{x^2 + 4}\ dx &= \frac{1}{4} \int \frac{1}{(\frac{x}{2})^2 + 1}\ dx \\
> &= \frac{1}{2} \int \frac{1}{u^2 + 1}\ du \\
> &= \frac{1}{2} \arctan u + C \\
> &= \frac{1}{2} \arctan \left( \frac{x}{2} \right) + C
> \end{align*}
> $$
> **Putting it all together:**
> The results of these three individual integrations can be put together to provide the final answer.
> $$
> \begin{align*}
> \int \frac{3x+1}{x(x^2+4)}\ dx &= \frac{1}{4} \underbrace{\int \frac{1}{x}\ dx}_{\text{integral A}} - \frac{1}{4} \underbrace{\int \frac{x}{x^2 + 4}\ dx}_{\text{integral B}} + 3 \underbrace{\int \frac{1}{x^2 + 4}\ dx}_{\text{integral C}} \\
> &= \frac{1}{4} \ln|x| - \frac{1}{4} \cdot \frac{1}{2} \ln|x^2 + 4| + 3 \cdot \frac{1}{2} \arctan \left( \frac{x}{2} \right) + C \\
> &= \boxed{\frac{1}{4} \ln|x| - \frac{1}{8} \ln(x^2 + 4) + \frac{3}{2} \arctan\left( \frac{x}{2} \right) + C}
> \end{align*}
> $$
> Optionally, the natural logarithms can be combined together using properties of logarithms. 
> $$
> \int \frac{3x+1}{x(x^2+4)}\ dx = \boxed{\frac{1}{4} \ln \left( \frac{|x|}{\sqrt{x^2 + 4}} \right) + \frac{3}{2} \arctan\left( \frac{x}{2} \right) + C}
> $$