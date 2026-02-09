---
tags:
  - "#reference-sheets"
  - "#SAT"
  - "#AP"
  - math-all
  - "#physics-all"
aliases:
  - "557049"
draft: true
title:
---
[Permalink](https://trevorkafka.github.io/notes/557049)

Access the Desmos graphing calculator for free [here](http://www.desmos.com/calculator).
# Inputting Mathematical Symbols
There are a few different sorts of mathematical symbols that are really useful to be able to type into Desmos quickly using some simple keyboard shortcuts.

 Moving the cursor with the arrow keys `↑↓←→` can be helpful for navigation. Text can be selected conveniently holding shift `shift` and simultaneously using the arrow keys `↑↓←→`.

| To input...                | Type in...                                          |
| -------------------------- | --------------------------------------------------- |
| $\sqrt{\hspace{0.5cm}}$    | `sqrt`                                              |
| $\sqrt[3]{\hspace{0.5cm}}$ | `cbrt`                                              |
| $\sqrt[4]{\hspace{0.5cm}}$ | `nthroot4`                                          |
| $a^b$                      | `a^b`                                               |
| $a_b$                      | `a_b`                                               |
| $\dfrac{a}{b}$             | `a/b` or<br>`/a↓b`                                  |
| $\dfrac{a+b}{c}$           | `/a+b↓c` or<br>`a+b`, highlight it, then type `/↓c` |
| $≥$, $≤$                   | `>=`, `<=`                                          |
| $\pi$, $\theta$, etc.      | `pi`, `theta`, etc.                                 |
# Converting Between Decimals and Fractions
# Graphing, Zooming, and Changing Axes

- Use the scroll wheel on your mouse to zoom in and out on the graph. 
- On a touchscreen device, you can also pinch to zoom. 
	- Pinching to zoom on the axes will change the scale only along that axis direction.

>[!caution] More Information Coming Soon!
# Changing Graph Properties
# Maxima, Minima, Intercepts, and Intersections
Finding maxima, minima, and intersections of functions couldn't be easier:
1. **Click the desired function** in the graphing area to select it.
2. Hover over any points of interest to see the coordinates.

![[special points.gif]]

**Additional notes:**
- Special points can be clicked in order to show them persistently on the screen. 
- The grey button that appears to the right of the coordinates of special points can be clicked to copy the coordinates of special into the input panel.
-  Click and hold on any function to drag and display the coordinates of any point on the function, not just any point (this is similar to the `TRACE` functionality on TI calculators).

# Inequalities
# Solve **Any** Single-Variable Equation

Let's say we have a complicated equation that cannot be solved by hand.

$$
\frac{1}{x + 3}= \sqrt[3]{x} + 2^x
$$
1. Input the following on two separate lines in the input panel.
	1. $y =\dfrac{1}{x + 3}$ (type `y=1/x+3`)
	2. $y = \sqrt[3]{x} + 2^x$ (type `y=cbrtx+2^x`)
2. The $x$ coordinate(s) of the intersection points of the graphs are the solution(s) to the original equation. For these equations, the resulting values are $\boxed{x \approx \{ -0.1600154, -3.862009 \}}$
When solving using this method, solutions will be approximate, limited by the number of decimals that Desmos displays. There is no need to check for extraneous solutions when solving using this graphical method.

>[!caution]
>Do not use $y,$ $e,$ $\pi$, or $\tau$ as your independent variable, as unexpected results will arise. For example, if the equation you are looking to solve is $e^2 = 2e + 1$ and you wish to solve for $e$, do not type 
>1. $y = e^2$
>2. $y = 2e+1$
>
>as this will not produced the desired graphs. Instead, switch to another independent variable, such as $x$, as shown below.
>1. $y = x^2$
>2. $y = 2x+1$

# Solve Any System of Equations

# Variables
## Setting Variable Values Using Sliders

## Setting Variable Values Using a Function
## Setting Variable Values Using `with`

If sliders are not desired `with` command can be used to substitute values into an expression in a more compact way.

>[!example] Example
>Let's say for example that you wanted to determine the value of $\frac{a + b}{a - b}$ when $a = \frac{1}{3}$ and $b = -2$. Inputting 
>1. $\dfrac{a + b}{a - b} \text{ with } a = \frac{1}{3},\ b = -2$  (type `/a+b↓a-b→witha=1/3→,b=-2`) 
>
>on a single line yields the result $\boxed{-0.714285714286}.$
>
>![[variables using with.gif]]
# Graphing Piecewise Functions
If you want to type the piecewise function $y = \begin{cases} x^2 & \text{if } x < 1 \\ x + 1 & \text{if } x \geq 1 \end{cases}$ into Desmos input either on a single line
1. $\{x<1: x^2, x \geq 1: x+1\}$ (type `{x<1:x^2,x>=1:x+1}`)

or on separate lines enter the following.
1. $x^2\ \{x<1\}$ (type `x^2{x<1}`)
2. $x+1\ \{x\geq1\}$ (type `x+1{x>=1}`)

When plotting the pieces of your piecewise function on separate lines, the two pieces will be treated as separate functions and can have independent styles set to each (color, thickness, etc.).

>[!caution]
>Desmos does *not* plot closed and open circles when plotting piecewise function as one would use when sketching on paper. To determine the value of a graphed function at switchover points between pieces, refer to the original function's equation or have Desmos create a [[Desmos Graphing Calculator Reference#Plotting a Table of Values|table of values]].
# Plotting a Table of Values

## Finding the Equation of a Line Connecting Two Points

## Regressions

# Copying and Pasting Text
Highlighted equations from Desmos can also be copy-pasted using `ctrl+C` and `ctrl+V` (or cut-pasted using `ctrl+X` and `ctrl+V`). 
- When repasting back into Desmos, they will retain their original display form.  For example copying $\sqrt[4]{2}$ from the Desmos input panel will paste as $\sqrt[4]{2}$ in the Desmos input panel.
- When pasting into other applications, they will be pasted as $\LaTeX$ code. 
	- For example, copying $\sqrt[4]{2}$ from the Desmos input panel to anywhere outside of Desmos results in the $\LaTeX$ code `\sqrt[4]{2}`. 
	- While this is less easy on the eyes, this is the de facto standard for writing equations in a purely text-based manner and is well understood by large language models such as ChatGPT.

**Note:** The version of ChatGPT used on CollegeBoard exams, such as the #SAT and #AP exams, as well as the mobile app versions of the Desmos graphing calculator do *not* support copying and pasting of text. In these situations, it can be particularly useful to duplicate an entire line from the input panel, as described below.
## Duplicating Entire Lines
Entire lines from the input panel can be duplicated within the input panel by opening the settings menu and clicking the copy button.

![[duplicating.gif]]

# Miscellaneous 
## Distance between two points

## Midpoint 