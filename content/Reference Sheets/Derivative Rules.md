---
aliases:
  - "987119"
tags:
  - reference-sheets
  - calculus
  - AP
---
[Permalink](https://trevorkafka.github.io/notes/987119)

See also [[Hyperbolic Identities]].
# Basic Functions
Let $a$ and $n$ be an arbitrary constants.
$$
\begin{align*}
&\frac{d}{dx} a &&= 0 \\
&\frac{d}{dx} x^n &&= nx^{n-1} & \text{(power rule)}
\end{align*}
$$
## Exponential and Logarithmic Functions
Let $b$ be an arbitrary positive constant.
$$
\begin{align*}
&\frac{d}{dx} e^x &&= e^x \\
&\frac{d}{dx} b^x &&= b^x \ln b \\
&\frac{d}{dx} \ln x &&= \frac{1}{x} &\text{for }x > 0\\
&\frac{d}{dx} \log_b x &&= \frac{1}{x \ln b} &\text{for }x > 0
\end{align*}
$$
## Trigonometric Functions

$$
\begin{align*}
&\frac{d}{dx} \sin x &&= \cos x \\
&\frac{d}{dx} \cos x && = - \sin x \\
&\frac{d}{dx} \tan x && = \sec^2 x \\
&\frac{d}{dx} \cot x &&= - \csc^2 x \\
&\frac{d}{dx} \sec x &&= \sec x \tan x \\
&\frac{d}{dx} \csc x &&= - \csc x \cot x
\end{align*}
$$
### Inverse Trigonometric Functions
Out of this list, the most important to remember are the formulas for the derivatives of $\arcsin$ and $\arctan$.
$$
\begin{align*}
&\frac{d}{dx} \arcsin x &&= \frac{1}{\sqrt{1 - x^2}} \\
&\frac{d}{dx} \arccos x &&= - \frac{1}{\sqrt{1 - x^2}} \\
&\frac{d}{dx} \arctan x &&= \frac{1}{x^2 + 1} \\
&\frac{d}{dx} \text{arccot } x &&= - \frac{1}{x^2 + 1} \\
&\frac{d}{dx} \text{arcsec } x &&=  \frac{1}{|x|\sqrt{x^2 - 1}}\\
&\frac{d}{dx} \text{arccsc } x &&= - \frac{1}{|x|\sqrt{x^2 - 1}}
\end{align*}
$$
## Hyperbolic Trigonometric Functions
Most calculus courses, including AP Calculus, do *not* cover these functions. You can ignore these if they are outside the scope of your class.
$$
\begin{align*}
&\frac{d}{dx} \sinh x &&= \cosh x \\
&\frac{d}{dx} \cosh x &&= \sinh x \\
&\frac{d}{dx} \tanh x &&= \text{sech}^2 x \\
&\frac{d}{dx} \text{coth } x &&= -\text{csch}^2 x \\
&\frac{d}{dx} \text{sech } x &&= -\text{sech } x \tanh x \\
&\frac{d}{dx} \text{csch } x &&= -\text{csch } x\ \text{coth }x
\end{align*}
$$
### Inverse Hyperbolic Trigonometric Functions
Most calculus courses, including AP Calculus, do *not* cover these functions. You can ignore these if they are outside the scope of your class.
$$
\begin{align*}
&\frac{d}{dx} \text{arcsinh } x &&= \frac{1}{\sqrt{x^2+1}} \\
&\frac{d}{dx} \text{arccosh } x &&= \frac{1}{\sqrt{x^2-1}} \\
&\frac{d}{dx} \text{arctanh } x &&= \frac{1}{1-x^2} \\
&\frac{d}{dx} \text{arccoth } x &&= \frac{1}{1-x^2} \\
&\frac{d}{dx} \text{arcsech } x &&= -\frac{1}{x\sqrt{1-x^2}} \\
&\frac{d}{dx} \text{arccsch } x &&= -\frac{1}{|x|\sqrt{1+x^2}}
\end{align*}
$$
# General Properties and Function Combinations
Let $f$ and $g$ be arbitrary functions and let $a$ and $b$ be arbitrary constants.
$$
\begin{align*}
&\frac{d}{dx} (a f(x) \pm b g(x)) && = a f'(x) \pm b g'(x) & \text{(linearity)}\\
&\frac{d}{dx} f(x) g(x) &&= f'(x) g(x) + f(x) g'(x) & \text{(product rule)} \\
&\frac{d}{dx} \frac{f(x)}{g(x)} &&= \frac{f'(x) g(x) - f(x) g'(x)}{(g(x))^2}& \text{(quotient rule)} \\
&\frac{d}{dx} f(g(x)) &&= f'(g(x)) g'(x) & \text{(chain rule)} \\
&\frac{d}{dx} f^{-1}(x)  &&= \frac{1}{f'(f^{-1}(x))}& \text{(inverse func. thm.)} \\
\end{align*}
$$