---
tags:
  - algebra-1
aliases:
  - "810689"
---
Various equations can form a line in the $xy$ plane when graphed. There are three types of such equations that are of particular interest in mathematics. Each form is most useful in its own context, which is summarized in the table below.

| Form                                  | Why this form is important:                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slope-Intercept Form $y = mx + b$     | Easiest to write down when the line's slope and $y$-intercept are known. Alternatively, it's easy to determine a line's slope and $y$-intercept from the equation.       |
| Point-Slope Form $y - y_0 = m(x-x_0)$ | Easiest to write down when the line's slope and the coordinates of any single point on the line is known. (This is a *very* common situation, particularly in Calculus.) |
| Standard Form $Ax + By = 1$           | Used to describe lines in the context of systems of equations (another Algebra 1 topic) and linear transformations (a precalculus or college-level topic).               |

# Slope-Intercept Form
Slope-intercept form is typically the first form of an equation of a line that is learned and is also typically the most well-remembered by students.[^1]

>[!note] Slope-Intercept Form Equation of a Line
>If a line has slope $m$ and $y$-intercept $(0,b)$, then the **slope-intercept equation** of the line is given by 
> $$
> y = mx + b.
> $$

Slope-intercept equations of a line are *unique*, meaning that if you are asked to write down the slope-intercept equation of a line, there is only *one* possible correct answer.
## Practice Problem

>[!question] Problem
>Write down the slope-intercept equation of the line of slope $4$ that passes through the point $(0,3)$.

>[!check]- Solution
>Since  $(0,3)$ is the $y$ intercept, we have $b = 3$. We are also told that $m = 4,$ so the answer is as follows.
>$$
>\boxed{y = 4x + 3}
>$$
# Point-Slope Form
Point-slope form is an extremely useful and versatile version of an equation of a line. It allows us to immediately write down the equation of a line based on 

>[!note] Point-Slope Form Equation of a Line
>If a line has slope $m$ and passes through the point $(x_0, y_0)$, then a **point-slope equation** of the line is given by 
>$$
>y - y_0 = m (x - x_0)
>$$ 
>or equivalently 
>$$
>y = m (x-x_0) + y_0.
>$$

Point-slope equations of lines are *not unique*, meaning that if you are asked to write down a point-slope equation of a line, there are always *multiple possible correct answers*. In fact, there are always an *infinite* number of possible correct answers (there is one equation corresponding to every point on the line).
## Practice Problem
>[!question] Problem
>Write down a point-slope form equation of the line that passes through the points $(2,3)$ and $(5,1)$.

>[!check]- Solution
>The slope of the line that passes through these two points is
>$$
>m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{3 - 1}{2 - 5} = - \frac{2}{3}.
>$$
>Using $(2,3)$ as our point in constructing the point-slope form of the equation of the line, we have
>$$
>\boxed{ y - 3 = - \frac{2}{3}(x - 2) }  \text{ or } \boxed{y = - \frac{2}{3}(x - 2) + 3}.
>$$
>Alternatively, using $(5,1)$ as our point, we have
>$$
>\boxed{y - 1 = -\frac{2}{3} (x - 5) } \text{ or } \boxed{y = -\frac{2}{3} (x - 5) + 1}.
>$$
>
>Many other solutions are possible too, but the ones above are most likely contains the one you were aiming for.

# Standard Form
The standard form equation of line is typically least-well understood by students. However, it can be a useful form when using the elimination method of solving systems of equations (a topic also typically discussed in algebra I courses) or when working with linear transformations (often discussed in either high school precalculus or college-level linear algebra courses). 

To make matters a little more confusing, there are *two* versions of the equation of a line that are regarded as standard form. The choice of which format to use depends on your course instructor. Version 1 presented below is just a special case of Version 2 that follows.

>[!note] Standard Form Equation of a Line (Version 1)
>Let $A$ and $B$ be constants. The following is the **standard form equation** of a line.
>$$
>Ax + By = 1
>$$

For the above equation of a line, 
- the $x$ intercept of the line is located at $(\frac{1}{A},0),$
- the $y$ intercept of the line is located at $(0,\frac{1}{B}),$ and
- the slope of the line is given by $- \frac{A}{B}$.

>[!question]- Why?
>As with any equation of a line, the $x$ intercept can be determined by substituting $y = 0$ and solving for $x$.
>$$
>\begin{gather*}
>Ax + B \cdot 0 = 1 \\
>Ax = 1 \\
>x = \frac{1}{A}
>\end{gather*}
>$$
>This verifies that the $x$ coordinate of the $x$ intercept of the line is $\frac{1}{A}$. An analogous argument can be used to show that the $y$ coordinate of the $y$ intercept of the line is $\frac{1}{B}.$
>
>In order to show that the slope of the line is $-\frac{A}{B},$ algebraically manipulate the standard form equation into slope-intercept form.
>$$
>\begin{gather*}
>Ax + By = 1 \\
>By = -Ax + 1 & \text{subtract } Ax \\
>y = \underbrace{- \frac{A}{B}}_\text{slope} x + \frac{1}{B} & \text{divide by } B
>\end{gather*}
>$$
>From this form of the equation of the line, it is easy to see that the coefficient on $x$ is $-\frac{A}{B},$ hence implying that the slope of this line is $- \frac{A}{B}.$

Version 1 standard form equations of a line are *unique*, meaning that if you are asked to write down the version one standard form equation of a line, there is only *one* possible correct answer.

>[!note] Standard Form Equation of a Line (Version 2)
>Let $A,$ $B,$ and $C$ be constants. The following is a **standard form equation** of a line.
>$$
>Ax + By = C
>$$

For the above equation of a line, 
- the $x$ intercept of the line is located at $(\frac{C}{A},0),$
- the $y$ intercept of the line is located at $(0,\frac{C}{B}),$ and
- the slope of the line is given by $- \frac{A}{B}$.

Version 2 standard form equations of lines are *not unique*, meaning that if you are asked to write down the version 2 standard form equation of a line, there are always *multiple possible correct answers*. In fact, there are always an *infinite* number of possible correct answers.
## Practice Problems

>[!question] Problem 1
>Write down the *Version 1* standard form form equation of the line that passes through the points $(2,3)$ and $(5,1)$.

>[!check]- Solution 1
>From the above solution to the point-slope equation practice problem, we know that one possible point-slope form of an equation for the line that passes through the points $(2,3)$ and $(5,1)$ is 
>$$
>y - 1 = - \frac{2}{3} (x - 5).
>$$
>Distribute the $-\frac{2}{3}$ into the parentheses, put all $x$ and $y$ terms on the left, and divide to turn the right side into a $1$.
>$$
>\begin{gather*}
>y - 1 = - \frac{2}{3} x + \frac{10}{3} & \text{distribute the } - \frac{2}{3} \\
>y = - \frac{2}{3} x + \frac{13}{3} & \text{add } 1 \\
>\frac{2}{3} x + y = \frac{13}{3} & \text{add } \frac{2}{3} x \\
>\boxed{\frac{2}{13} x + \frac{3}{13} y = 1} & \text{divide by } \frac{13}{3}
>\end{gather*}
>$$

>[!question] Problem 2
>Prove if the equation of a line is given by $Ax + By = C,$ then
> - the $x$ intercept of the line is located at $(\frac{C}{A},0),$
> - the $y$ intercept of the line is located at $(0,\frac{C}{B}),$ and
> - the slope of the line is given by $- \frac{A}{B}$.

>[!check]- Solution 2
>As with any equation of a line, the $x$ intercept can be determined by substituting $y = 0$ and solving for $x$.
>$$
>\begin{gather*}
>Ax + B \cdot 0 = C \\
>Ax = C \\
>x = \frac{C}{A}
>\end{gather*}
>$$
>This verifies that the $x$ coordinate of the $x$ intercept of the line is $\frac{C}{A}$. An analogous argument can be used to show that the $y$ coordinate of the $y$ intercept of the line is $\frac{C}{B}.$
>
>In order to show that the slope of the line is $-\frac{A}{B},$ algebraically manipulate the standard form equation into slope-intercept form.
>$$
>\begin{gather*}
>Ax + By = C \\
>By = -Ax + C & \text{subtract } Ax \\
>y = \underbrace{- \frac{A}{B}}_\text{slope} x + \frac{C}{B} & \text{divide by } B
>\end{gather*}
>$$
>From this form of the equation of the line, it is easy to see that the coefficient on $x$ is $-\frac{A}{B},$ hence implying that the slope of this line is $- \frac{A}{B}.$


[^1]: This is despite the fact that in the long run it's actually [[Equations of Lines#Point-Slope Form|Point-Slope Form]] that ends up being the most useful.
