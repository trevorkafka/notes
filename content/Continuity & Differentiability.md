---
aliases:
  - "853792"
tags:
  - calculus
draft: true
---
[Permalink](https://trevorkafka.github.io/notes/853792)
# Continuity



# Differentiability

Given a function $f(x)$, the **derivative** of that function $f'(x)$ is defined by the following limit.

>[!note] Limit Definition of the Derivative (Version 1)
>$$
>f'(x) = \lim_{h \to 0} \frac{f(x+h) + f(x)}{h}
>$$

This limit definition yields a function $f'(x)$ into which any desired value of $x$ can be substituted.

Alternatively, if the value of the derivative function at a particular value is desired, say $x = a$, then the following alternative and equivalent definition may prove more convenient.

>[!note] Limit Definition of the Derivative (Version 2)
>$$
>f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}
>$$

Both definitions are equally valid, though one may be easier than the other to evaluate depending on the nature of the given function $f(x).$ Since either version can always be used, I will refer to this process of defining the derivative function $f'(x)$ by means of a limit as **the** limit definition of the derivative (as opposed to **a** limit definition of the derivative).

Sometimes the values of limits exist and other times they don't. Hence, it is sensible to expect that the values of derivative functions $f'(x)$ sometimes will exist and sometimes will not exist. If $f'(x)$ exists at some value $x = a,$ we say $f$ is differentiable at $x = a$.

>[!note] Definition of Differentiability
>We say that a function $f(x)$ is **differentiable at $x = a$** when $f'(a)$ exists according to the limit definition of the derivative.
>
>If a function is differentiable at all points in its domain, then we say that the function is **differentiable** (in general).

Since the limit used in the limit definition of the derivative is a general limit (as opposed to a sided limit), the existence of such a limit value implies that the sided limits each exist too (and agree with each other in value). In order to properly talk about these sided limits, we also define the notion of a sided derivative.

>[!note] Definition of a Sided Derivative
>The left-side derivative $f_-'(x)$ and right-side derivative $f_+'(x)$ of a function $f(x)$ are each defined by their corresponding sided-limit versions from the limit definition of the derivative.
>$$
>\begin{gather*}
>f'_-(x) = \lim_{h \to 0^-} \frac{f(x+h)-f(x)}{h} \\
>f'_+(x) = \lim_{h \to 0^+} \frac{f(x+h)-f(x)}{h}
>\end{gather*}
>$$
>(Analogous versions can be formulated using the other version of the limit definition of the derivative as well.)

Hence, based on these definitions, it is clear that in order for $f'(x)$ to exist, the sided limits must each both exist and agree in value.

>[!note] Definition of Differentiability in Terms of Sided Derivatives
>We say a function $f(x)$ is **differentiable at $x = a$** if both $f_-'(a)$ and $f_+(a)$ exist and
>$$
>f_-'(a) = f_+'(a).
>$$
>
>Similarly, if this condition applies to all $x$ values in the domain of $f$, we say that $f$ is **differentiable** (in general).

# Continuity Implies Differentiability

>[!note] Theorem: Continuity Implies Differentiability
>If a function $f(x)$ is differentiable at $x = a$ then it also must be continuous at $x = a.$