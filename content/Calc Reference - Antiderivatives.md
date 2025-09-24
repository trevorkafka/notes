---
aliases:
  - "609659"
tags:
  - reference-sheets
  - calculus
---
See also [[Calc Reference - Derivatives]].
# Basic Functions
Let $a$ be an arbitrary constant.
$$
\begin{align*}
&\int a\ dx &&= ax + C \\
&\int x^n\ dx &&= \frac{1}{n+1}x^{n+1} + C & \text{(power rule)}
\end{align*}
$$
## Exponential and Logarithmic Functions
Let $b$ be an arbitrary positive constant.
$$
\begin{align*}
&\int e^x\ dx &&= e^x + C \\
&\int b^x\ dx &&= \frac{1}{\ln b} b^x \\
&\int \frac{1}{x}\ dx &&= \ln|x| &\text{for }x \neq 0
\end{align*}
$$
## Trigonometric Functions

$$
\begin{align*}
&\int \sin x\ dx &&= -\cos x + C \\
&\int \cos x\ dx && = \sin x + C\\
&\int \tan x\ dx && = - \ln|\cos x| + C \\
&\int \cot x\ dx &&= \ln|\sin x| + C \\
&\int \sec x\ dx &&= \ln|\sec x + \tan x| + C \\
&\int \csc x\ dx &&= - \ln|\csc x + \cot x| + C \\
&\int \sec^2 x\ dx &&= \tan x + C \\
&\int \csc^2 x\ dx &&= - \cot x + C \\
&\int \sec x \tan x\ dx &&= \sec x + C \\
&\int \csc x \cot x\ dx &&= - \csc x + C \\
\end{align*}
$$
## Inverse Trigonometric Functions

$$
\begin{align*}
&\int \frac{1}{\sqrt{1 - x^2}}\ dx &&= \arcsin x + C \\
&\int \frac{1}{x^2 + 1}\ dx &&= \arctan x + C
\end{align*}
$$
# General Properties and Function Combinations
Let $f$ and $g$ be arbitrary functions and let $a$ and $b$ be arbitrary constants.
$$
\begin{align*}
&\int a f(x) \pm b g(x)\ dx && = a \int f(x)\ dx \pm b \int g(x)\ dx & \text{(linearity)}\\
&\int f'(g(x)) g'(x)\ dx &&= f(g(x)) + C &\text{($u$-sub.)} \\
&\int f'(x)g(x)\ dx &&= f(x)g(x) - \int f(x)g'(x)\ dx &\text{(int. by parts)}
\end{align*}
$$