---
aliases:
  - "609659"
tags:
  - reference-sheets
  - calculus
  - AP
---
[Permalink](https://trevorkafka.github.io/notes/609659)

See also [[Derivative Rules]].
# Basic Functions
Let $a$ and $n$ be an arbitrary constants.
$$
\begin{align*}
&\int a\ dx &&= ax + C \\
&\int x^n\ dx &&= \frac{1}{n+1}\ x^{n+1} + C & \text{(power rule)}
\end{align*}
$$
## Exponential and Logarithmic Functions
Let $b$ be an arbitrary positive constant.
$$
\begin{align*}
&\int e^x\ dx &&= e^x + C \\
&\int b^x\ dx &&= \frac{1}{\ln b}\ b^x + C \\
&\int \frac{1}{x}\ dx &&= \ln|x| + C &\text{for }x \neq 0
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
### Inverse Trigonometric Functions

$$
\begin{align*}
&\int \frac{1}{\sqrt{1 - x^2}}\ dx &&= \arcsin x + C \\
&\int \frac{1}{x^2 + 1}\ dx &&= \arctan x + C \\
&\int \frac{1}{x\sqrt{x^2 - 1}}\ dx &&= \begin{cases} \hphantom{-} \text{arcsec } x + C & \text{if } x> 0 \\ - \text{arcsec } x + C& \text{if } x< 0 \end{cases}
\end{align*}
$$
## Hyperbolic Trigonometric Functions
Most calculus courses, including AP Calculus, do *not* cover these functions. You can ignore these if they are outside the scope of your class.
$$
\begin{align*}
&\int \sinh x\ dx &&= \cosh x + C\\
&\int \cosh x\ dx &&= \sinh x + C\\
&\int \tanh x\ dx &&= \ln|\cosh x| + C \\
&\int \text{coth } x\ dx &&= \ln|\sinh x| + C \\
&\int \text{sech}^2\ x\ dx &&= \tanh x + C\\
&\int \text{csch}^2\ x\ dx &&= -\text{coth } x + C\\
&\int \text{sech } x \tanh x\ dx &&= -\text{sech } x + C \\
&\int \text{csch } x\ \text{coth }x\ dx &&= -\text{csch } x + C
\end{align*}
$$
### Inverse Hyperbolic Trigonometric Functions
Most calculus courses, including AP Calculus, do *not* cover these functions. You can ignore these if they are outside the scope of your class.
$$
\begin{align*}
&\int \frac{1}{\sqrt{x^2+1}}\ dx &&= \text{arcsinh } x + C \\
&\int \frac{1}{\sqrt{x^2-1}}\ dx &&= \text{arccosh } x + C \\
&\int \frac{1}{1-x^2}\ dx &&= \text{arctanh } x + C \\
&\int \frac{1}{x\sqrt{1-x^2}}\ dx &&= -\text{arcsech } x + C \\
&\int \frac{1}{x\sqrt{1+x^2}}\ dx &&= \begin{cases} -\text{arccsch } x + C & \text{if } x > 0 \\ \hphantom{-} \text{arccsch } x + C & \text{if } x < 0 \end{cases}
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
If $f$ is an even function and $a$ is an arbitrary constant, then
$$
\int_a^{-a} f(x)\ dx = 2 \int_0^a f(x)\ dx.
$$
If $f$ is an odd function and $a$ is an arbitrary constant, then
$$
\int_{-a}^a f(x)\ dx = 0.
$$
For any function $f$ and arbitrary constants $a$, $b$, and $c$, we have
$$
\int_a^b f(x)\ dx + \int_b^c f(x)\ dx = \int_a^c f(x)\ dx.
$$
# Fundamental Theorem of Calculus
## Version 1
If $F'(x) = f(x)$ and if $a$ and $b$ are arbitrary constants, then
$$
\int_a^b f(x)\ dx = F(b) - F(a).
$$
## Version 2
Let $f(x)$ be a function and $a$ be an arbitrary constant.
$$
\frac{d}{dx} \int_a^x f(t)\ dt = f(x)
$$