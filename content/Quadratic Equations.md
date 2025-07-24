---
tags:
  - algebra-1
  - algebra-2
  - precalc
aliases:
  - "894477"
---
Below is the basic definition of a **quadratic equation**.

>[!note] Definition of a Quadratic Equation
> A **quadratic equation** is an equation of the form
> $$
> ax^2 + bx + c = 0
> $$
> where $x$ is a variable and $a,$ $b,$ and $c$ are arbitrary constants.

Quadratic equations appear in a variety of contexts and are a special type of **polynomial equation**. Most equations that involve the four basic operations ($+,$ $-,$ $\times,$ $\div$) and rational exponents can be reduced to polynomial equations, so being able to solve polynomial equations in general opens up the doors towards solving a very wide variety of equations. The relative ease and accessibility of [solving quadratic equations](#solving-quadratic-equations) in particular makes them a very heavily-emphasized focus of study in algebra classes.

# Solving Quadratic Equations

There are a few main ways to solve quadratic equations, which each carry their own advantages and disadvantages. I've summarized them in the table below.

| Method                                             | Advantages                                                                                                                                                               | Disadvantages                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 1. [Factoring](#factoring)                         | potentially a very fast way of determining solutions                                                                                                                     | only doable without a calculator in very special cases               |
| 2. [Completing the Square](#completing-the-square) | can be used to derive the [quadratic formula,](#quadratic-formula) can be used to solve any quadratic equation, strong relationship to the **vertex form** of a parabola | can be moderately to extremely challenging even in simple situations |
| 3. [Quadratic Formula](#quadratic-formula)         | can be used to solve any quadratic equation                                                                                                                              | can be moderately to extremely challenging even in simple situations |
## Factoring

>[!warning] information coming soon

## Completing the Square

>[!warning] information coming soon
## Quadratic Formula

A closed-form solution exists to quadratic equations of the form $ax^2 + bx + c = 0$ and is called the **quadratic formula**.

>[!note] The Quadratic Formula
>If $ax^2 + bx + c = 0$  and $a \neq 0$, then
>$$
>x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.
>$$

This formula always works for any quadratic equation and is simple enough, important enough, and useful enough to be memorized.

The plus-or-minus symbol $\pm$ allows for a shorthand that allows the quadratic formula to indicate *two* distinct possible values for $x$, as detailed below.
$$
x = \frac{-b + \sqrt{b^2-4ac}}{2a} \text{ or } x = \frac{-b - \sqrt{b^2-4ac}}{2a}
$$
In certain situations, both of these values may be the same (ultimately amouting to just one solution) or potentially neither may be real values. More details about this can be found in the [Nature of Solutions](#nature-of-solutions) section.

**Miscellaneous notes:**
- It is easy to see that division by zero occurs when $a = 0$, so the Quadratic Formula doesn't work in this case. However when $a = 0$ the original equation would have reduced to $bx + c = 0,$ which isn't a quadratic equation anyway. It's easy enough to directly solve this equation and find the solution to be $x = - \frac{c}{b}.$ So, despite this shortcoming of the quadratic formula, we can confidently say that the formula works for *any* quadratic equation.
- Intermediate calculus students might be interested in exploring the value of the following limit and reflecting on how the result is related to the previous point.
  $$
  \lim_{a \to 0} \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
  $$
- The quadratic formula can also be rewritten in the following alternative format which provides the same final results as the standard quadratic formula.
  $$
  x = \frac{2c}{-b\mp \sqrt{b^2 - 4ac}}
  $$
  This version is almost never taught in schools and isn't necessary to learn aside from personal interest. Nonetheless, intermediate students may be interested in seeing if they can justify the validity of this formula. There are at least two ways to do this that I can think of.
### The Quadratic Discriminant

The portion of the quadratic formula underneath the square root $b^2 - 4ac$ is given a name: the discriminant.

>[!note] The Discriminant
>The discriminant of a quadradic expression $ax^2 + bx + c$ is defined to be the value
>$$
>b^2 - 4ac.
>$$

The discriminant is used to determine the number and nature of the number of solutions to the quadradic equation.
### Nature of Solutions

The discriminant of the quadratic expression that makes up a quadratic equation $ax^2 + bx + c = 0$ is a useful tool in determining the number of solutions that the equation has.

>[!note] Determining the Number of Solutions to a Quadratic Equation Using the Discriminant
>If $a,$ $b,$ and $c$ are real numbers ($a,b,c \in \mathbb R$), then the number of solutions to the quadratic equation $ax^2 + bx + c = 0$ is related to the value of the corresponding discriminant $b^2 - 4ac$ according to the table below. No situation outside of those described this table is possible.
>
> | Condition on Discriminant | Number of Real Solutions | Number of Imaginary Solutions            |
> | ------------------------- | ------------------------ | ---------------------------------------- |
> | $b^2  - 4ac > 0$          | $2$ real solutions       | $0$ imaginary solutions                  |
> | $b^2 - 4ac = 0$           | $1$ real solution\*        | $0$ imaginary solutions                  |
> | $b^2 - 4ac < 0$           | $0$ real solutions       | $2$ imaginary solutions\*\* |
>
>\*Sometimes this single solution is referred to as a *double root*.
>
>\*\*These two solutions form a complex conjugate pair.

>[!question]- Why?
>These facts follow directly from the quadratic formula. Let's consider each case separately.
>
>**Case 1:** $b^2 - 4ac > 0.$ In this case, $\sqrt{b^2 - 4ac}$ will some positive (real) number. Thus, the quadratic formula reads 
>$$
>x = \frac{-b \pm (\text{positive number})}{2a}.
>$$
>Since $a$ and $b$ are both real, this then represents two distinct real values of $x$.
>
>**Case 2:** $b^2 - 4ac = 0.$ In this case, $\sqrt{b^2 - 4ac}$ vanishes. Thus, the quadratic formula reads
>$$
>x = \frac{-b \pm 0}{2a} = -\frac{b}{2a}.
>$$
>Since $a$ and $b$ are both real, this then represents one single value of $x$. The fact that we get the same value for $x$ regardless of whether the $\pm$ sign takes on the $+$ or $-$ sign is what gives rise to the term *double root*.
>
>**Case 3:** $b^2 - 4ac < 0.$ In this case, $\sqrt{b^2 - 4ac}$ then corresponds to some purely imaginary value. Since $a$ and $b$ are both real, the resulting expression for $x$ can be split up into a real part and an imaginary part.
>$$
>x = \frac{-b \pm (\text{pure imaginary number})}{2a} = - \underbrace{\frac{b}{2a}}_\text{real part} \pm \underbrace{\frac{(\text{pure imaginary number})}{2a}}_\text{imaginary part}
>$$
>Hence, this represents to distinct imaginary values for $x$ that form a complex conjugate pair.

### Sum of Solutions

>[!note] The Sum and Average of the Solutions to a Quadradic Equation
> When a quadratic equation $ax^2 + bx + c = 0$ has two solutions (either real or imaginary), **the sum of the two solutions** $x_+$ is real and is given by 
> $$
> x_+ = - \frac{b}{a}.
> $$
> 
> When the quadratic equation has only one solution, the above value is twice the value of the single solution $x = - \frac{b}{2a}$. This sum value $x_+$ in this case can be thought of as the result of adding the solution $x = - \frac{b}{2a}$ to itself (it is a *double root*, after all).
> 
> Furthermore, **the average of the two solutions** $x_\text{avg}$ is given by $\frac{x_+}{2}$, which yields the following formula.
> $$
> x_\text{avg} = - \frac{b}{2a}
> $$
> The value of $x_\text{avg}$ matches (1) the equation of the axis of symmetry $x = - \frac{b^2}{2a}$ and (2) $x$-coordinate of vertex of the corresponding parabola with equation $y = ax^2 + bx + c.$ In the case that there is only one solution to the quadratic equation, the value of $x_\text{avg}$ is equal to that single solution.

>[!question]- Why?
>The two solutions to the equation $ax^2 + bx + c = 0$, according to the quadratic equation, are 
>$$
>x_1 = \frac{-b + \sqrt{b^2-4ac}}{2a} \text{ and } x_2 = \frac{-b - \sqrt{b^2-4ac}}{2a}
>$$
>and the sum of these solutions is
>$$
>x_+ = x_1 + x_2 = \frac{-b + \cancel{\sqrt{b^2-4ac}}}{2a} + \frac{-b - \cancel{\sqrt{b^2-4ac}}}{2a} = \frac{-2b}{2a} = - \frac{b}{a}.
>$$
>Furthermore, the average is 
>$$
>x_\text{avg} = \frac{x_1 + x_2}{2} = \frac{x_+}{2} = - \frac{b}{2a}.
>$$

>[!important] Memory Aid
>$$
>x = \frac{{\color{red} - b } \pm \sqrt{\color{blue} b^2 - 4ac}}{\color{red} 2a}
>$$
>In the quadratic equation above, note that the portion marked in $\color{red} \text{red}$ is the **average of the solutions** $\color{red} x_\text{avg} = -\frac{b}{2a}$ and the portion marked in $\color{blue} \text{blue}$ is the **discriminant** $\color{blue} b^2 - 4ac$.

>[!question] Practice Problem
> 
> Consider the equation
> $$
> kx\left( \frac{1}{k} - x \right)= k.
> $$
> While $k$ is currently unknown, imagine it to be chosen such that this equation can be satisfied for only one possible value of $x$. Determine the the possible values of $k$ and their corresponding $x$ solutions.

>[!check]- Solution
> 
> Distribute into the parentheses, rearrange terms, and add $k$ to both sides.
> $$
> \begin{gather*}
> \underbrace{kx\left( \frac{1}{k} - x \right)}_\text{distribute} = k \\
> x - kx^2 = k \\
> -kx^2 + x - k = 0
> \end{gather*}
> $$
> By comparison to the standard form $ax^2 + bx + c = 0,$ we can see that $a = -k, b = 1, c = -k.$ Now, compute the discriminant.
> $$
> b^2 - 4ac = 1^2 - 4(-k)(-k) = 1 - 4k^2
> $$
> For the original equation to have only one solution for $x$, the discriminant must vanish (the discriminant must equal zero).
> $$
> \begin{gather*}
> 1-4k^2 = 0 \\
> 1 = 4k^2 \\
> \frac{1}{4}=k^2 \\
> k = \pm \frac{1}{2}
> \end{gather*}
> $$
> This now leaves us with two cases.
> - **Case 1:** $k = \frac{1}{2}$. With this value of $k$, our quadratic equation can be solved through factoring to show that the single resulting solution in this case is $x = 1.$
>   $$
>   \begin{gather*}
>   -kx^2 + x - k = 0 \\
>   -\frac{1}{2} x^2 + x - \frac{1}{2} = 0 \\
>   x^2 - 2x + 1 = 0 \\
>   (x-1)^2 = 0 \\
>   x = 1
>   \end{gather*}
>   $$
> - **Case 2:** $k = -\frac{1}{2}$. With this value of $k$, our quadratic equation can be solved through factoring to show that the single resulting solution in this case is $x = -1.$
>   $$
>   \begin{gather*}
>   -kx^2 + x - k = 0 \\
>   \frac{1}{2} x^2 + x + \frac{1}{2} = 0 \\
>   x^2 + 2x + 1 = 0 \\
>   (x+1)^2 = 0 \\
>   x = -1
>   \end{gather*}
>   $$
> 
> Therefore, the final solutions to our problem are as follows.
> $$
> \boxed{k = \frac{1}{2} \text{ and } x = 1} \text{ or } \boxed{k = -\frac{1}{2} \text{ and } x = -1}
> $$
> 
### Product of Solutions

>[!note] The Product of the Solutions to a Quadratic Equation
> When a quadratic equation $ax^2 + bx + c = 0$ has two solutions (either real or imaginary), **the product of the two solutions** $x_\times$ is real and is given by
> $$
> x_\times = \frac{c}{a}
> $$
> When the quadratic equation has only one solution, the above value is the square of the single solution $x = - \frac{b}{2a}$. This sum value $x_+$ in this case can be thought of as the result of multiplying the solution $x = - \frac{b}{2a}$ to itself (it is a *double root*, after all).

>[!question]- Why?
>The two solutions to the equation $ax^2 + bx + c = 0$, according to the quadratic equation, are 
>$$
>x_1 = \frac{-b + \sqrt{b^2-4ac}}{2a} \text{ and } x_2 = \frac{-b - \sqrt{b^2-4ac}}{2a}
>$$
>and the product of these solutions can be obtained by taking advantage of the difference of two squares pattern $(p+q)(p-q) = p^2 - q^2$ at the step marked $\overset{\star}{=}$.
>$$
>x_\times = x_1 x_2 = \frac{-b + \sqrt{b^2-4ac}}{2a} \cdot \frac{-b - \sqrt{b^2-4ac}}{2a} \overset{\star}{=} \frac{\cancel{b^2} - (\cancel{b^2} - 4ac)}{4a^2} = \frac{c}{a}.
>$$
>In the case that there is only one solution to the quadratic equation, we know by the discriminant that $b^2 - 4ac = 0$, which can be rearranged to $\frac{b^2}{4a} = c$ so 
>$$
>x_\times = \frac{c}{a} = \frac{\left( \frac{b^2}{4a} \right)}{a} = \frac{b^2}{4a^2} = \left( - \frac{b}{2a} \right)^2
>$$
>which is the square of the single solution $x = -\frac{b}{2a}.$

