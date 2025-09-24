---
aliases:
  - "769611"
tags:
  - algebra-1
  - algebra-2
---

# The Three Forms of Quadratic Functions

There are three main important forms that quadratic functions can be written in. All three forms feature the same constant $a$, which determines the concavity of the resulting parabola when graphed.
- $a > 0$ concave-up parabola
- $a < 0$ concave-down parabola

Each form makes it easy to determine particular features of the single shared graph.

| Form     | Equation                | Easy to determine...                                    |
| -------- | ----------------------- | ------------------------------------------------------- |
| Standard | $y = ax^2 + bx + c$     | $y$ intercept $(0,c)$ and<br>slope at $y$ intercept $b$ |
| Factored | $y = a(x - x_1)(x-x_2)$ | $x$ intercepts $x_1$ and $x_2$                          |
| Vertex   | $y = a(x-h)^2+k$        | coordinates of the vertex $(h,k)$                       |

# Converting Between Forms

Both factored form and vertex form can be converted to standard form most easily through distribution (FOIL). Converting from standard form to factored form a vertex form can be a little trickier.

## Converting from Standard Form to Factored Form

If the standard form quadratic $y = ax^2 + bx + c$ can be easily factored by hand using standard techniques, go ahead and factor it by hand. However, there are often situations where quadratic expressions are too difficult to factor by hand. In those situations, use the quadratic formula to determine the values of $x_1$ and $x_2$ in order to write the factored form (these represent the $x$ intercepts).

>[!note] Quadradic Formula (formula for finding the $x$ intercepts $x_1$ and $x_2$ from standard form)
>$$
>x_1, x_2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
>$$

This is a formula that is worth memorizing.
## Converting from Standard Form to Vertex Form

In math classes, one often learns the *completing the square* method in order to reform at a standard form quadratic $y = ax^2 + bx + c$ into a vertex form quadratic $y = a(x-h)^2 + k$. In practice, completing the square is quite lengthy and error-prone, so I often promote taking advantage of the following formulas.

>[!note] Finding the Vertex $(h,k)$ from Standard Form
>$$
>h = - \frac{b}{2a} \hspace{1in} k = ah^2 + bh + c
>$$

These formulas are quite easy to remember:
- The formula for $h$ is simply the quadratic formula with the square-root portion removed $\frac{-b \ \ {\color{red} \xcancel{\pm \sqrt{b^2 - 4ac}}}}{2a}.$
- The formula for $k$ is simply the output of  $y = ax^2 + bx + c$ when the input is set to $x = h.$ (Why?)

# Practice Problems

>[!question] Problem
>(a) Write $y = 2x^2 - 8x - 5$ in both factored form and vertex form. 
>
>(b) State the coordinates of the $y$ intercept, $x$ intercepts, and vertex.

>[!check]- Solution 1
>(a) From the standard form, we can first identify that $a = 2$. Now, let's obtain the $x$-intercepts via the quadratic formula.
>$$
>x_1, x_2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{8 \pm \sqrt{8^2 + 4 \cdot 2 \cdot 5}}{2 \cdot 2} = \frac{8 \pm 2 \sqrt{26}}{4} = \frac{4 \pm \sqrt{26}}{2}
>$$
>So, the factored form is as follows.
>$$
>\boxed{y = 2 \left(x - \frac{4 + \sqrt{26}}{2} \right) \left( x - \frac{4 - \sqrt{26}}{2}\right)}
>$$
>Let's now obtain $h$ and $k$.
>$$
>\begin{gather*}
>h = - \frac{b}{2a} = - \frac{-8}{2 \cdot 2} = 2 \\
>k = 2h^2 - 8h - 5 = 2 \cdot 2^2 - 8 \cdot 2 - 5 = 8 - 16 - 5 = -13
>\end{gather*}
>$$
>Hence, the vertex form is as follows.
>$$
>\boxed{y = 2 (x - 2)^2 - 13}
>$$
>(b) The $y$ intercept is located at $(0,c) = \boxed{(0,-5)},$ the $x$ intercepts are located at $(x_1,0) = \boxed{(\tfrac{4 + \sqrt{26}}{2},0)}$ and $(x_2,0) = \boxed{(\tfrac{4 - \sqrt{26}}{2},0)},$ and finally the vertex is located at $(h,k) = \boxed{(2,-13)}.$


>[!question] Problem 2
>Determine the minimum value of $y = 2wx^2 + wx - 3$ in terms of the positive constant $w$. 

>[!check]- Solution 2
>The $x$ coordinate of the vertex is given by
>$$
>h = - \frac{b}{2a} = - \frac{w}{2 \cdot 2w} = - \frac{1}{4}. 
>$$
>Since the parabola is concave-up ($a = 2w > 0$), a minimum exists at the vertex point. The minimum value is the $y$ coordinate, given by
>$$
>\begin{align*}
>k &= 2wh^2 + wh - 3 \\
>&= 2w \left( - \frac{1}{4} \right)^2 + w \left( - \frac{1}{4} \right) - 3 \\
>&= \frac{w}{8} - \frac{2w}{8} - 3 \\
>&= \boxed{ -\frac{w}{8} - 3 } 
>\end{align*}
>$$
