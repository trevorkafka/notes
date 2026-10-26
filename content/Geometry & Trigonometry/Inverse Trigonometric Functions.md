---
tags:
  - trigonometry
  - precalc
aliases:
  - "502718"
draft: false
---
The **inverse trigonometric functions** undo the work of sine, cosine, and tangent. Where $\sin \theta$ takes in an angle and gives back a number, $\sin^{-1} x$ takes in a number and gives back an angle. 

| Function              | Examples                              | Input                                   | Output                                  |
| --------------------- | ------------------------------------- | --------------------------------------- | --------------------------------------- |
| Trig function         | $\sin$, $\cos$, $\tan$                | an angle                                | unit circle $y$, $x$, and $\frac{y}{x}$ |
| Inverse trig function | $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$ | unit circle $y$, $x$, and $\frac{y}{x}$ | an angle                                |

For instance, on the unit circle, the point at the angle $\frac{\pi}{6}$ in quadrant I lands at the point ($\frac{\sqrt{3}}{2}, \frac{1}{2})$. So, $\sin \frac{\pi}{6} = \frac{1}{2}$. Conversely, $\sin^{-1} \frac{1}{2} = \frac{\pi}{6}$.

This page covers the three most common inverse trigonometric functions: inverse sine, inverse cosine, and inverse tangent.

>[!caution] Notation
>Each inverse function has two common notations: $\sin^{-1} x$ or $\arcsin x$, $\cos^{-1} x$ or $\arccos x$, and $\tan^{-1} x$ or $\arctan x$. The $-1$ here means *inverse function*, **not** reciprocal. The reciprocal of $\sin x$ is $\csc x$ (see [[Trigonometric Identities]]).
>$$
>\sin^{-1} x \neq \frac{1}{\sin x}
>$$
>Avoid using the term "opposite" to refer to what we call in mathematics "inverse" and "reciprocal."

# Graphs and Key Points
<span class="invert">![[inverse-trig-function-graphs.png]]</span>
# Domain and Range

The table below summarizes the inputs (domain) and outputs (range) of each inverse trigonometric function.

| Function      | Domain (inputs)                      | Range (outputs)                                 | Quadrants |
| ------------- | ------------------------------------ | ----------------------------------------------- | --------- |
| $\sin^{-1} x$ | $\left[ -1, 1 \right]$               | $\left[ - \frac{\pi}{2}, \frac{\pi}{2} \right]$ | I and IV  |
| $\cos^{-1} x$ | $\left[ -1, 1 \right]$               | $\left[ 0, \pi \right]$                         | I and II  |
| $\tan^{-1} x$ | $\left( -\infty, \infty \right)$     | $\left( - \frac{\pi}{2}, \frac{\pi}{2} \right)$ | I and IV  |
## Why the Outputs Must Be Restricted

Consider the question "which angle has a sine of $\frac{1}{2}$?" There are infinitely many correct answers: $\frac{\pi}{6}$, $\frac{5\pi}{6}$, $\frac{13\pi}{6}$, $-\frac{7\pi}{6}$, and so on. **A function can only give back one output for each input**, so each inverse trigonometric function is defined to give back only one particular angle from a restricted range of angles. These angles are sometimes called *principal values*.

>[!caution] Calculators
>The values shown in the table are agreed upon by the mathematical community and are the same values that your calculator uses. Calculators always return the angle from the range shown in the table above, so they will never tell you about the other angles that share the same sine, cosine, or tangent. Also make sure your calculator is in the correct mode (radians or degrees) for the answer you want.

>[!example] Examples
>- $\sin^{-1} \left( \frac{1}{2} \right) = \frac{\pi}{6}$. Of Quadrants I and IV, the angle with $y$-coordinate $\frac{1}{2}$ is $\frac{\pi}{6}$ in Quadrant I. The angle $\frac{5\pi}{6}$ also has $y$-coordinate $\frac{1}{2}$, but it is in Quadrant II.
>- $\sin^{-1} \left( -\frac{1}{2} \right) = -\frac{\pi}{6}$, **not** $\frac{7\pi}{6}$ or $\frac{11\pi}{6}$, since the output must be between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$.
>- $\cos^{-1} \left( -\frac{1}{2} \right) = \frac{2\pi}{3}$. Of Quadrants I and II, only Quadrant II has negative $x$-coordinates, and the angle there with $x$-coordinate $-\frac{1}{2}$ is $\frac{2\pi}{3}$.
>- $\tan^{-1} (-1) = -\frac{\pi}{4}$. Of Quadrants I and IV, only Quadrant IV has negative $\frac{y}{x}$, and the angle there with $\frac{y}{x} = -1$ is $-\frac{\pi}{4}$.
>
>See [[Special Trigonometric Values]] for a table of the sine, cosine, and tangent values used here.

# Cancellation of Composition

A general property of inverse functions is that $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$. This can be viewed as $f$ and $f^{-1}$ cancelling out when they are composed with one another as illustrated below.

$$
\cancel f ( \cancel{f^{-1}} (x) ) = x \qquad \text{and} \qquad \cancel{f^{-1}} ( \cancel{f} (x) ) = x
$$

Since trigonometric functions and inverse trigonometric functions are not perfect inverses of each other (due to the range restrictions discussed earlier), this holds only ***sometimes***. Here are the general rules for a trig function $\text{trig}$.

>[!info] General Composition Cancellation Rules
>- The cancellation $\cancel{\text{trig}}(\cancel{\text{trig}^{-1}}\, x) = x$ *always holds* as long as $\text{trig}^{-1} x$ is defined in the first place.
>- The cancellation $\cancel{\text{trig}^{-1}}(\cancel{\text{trig}}\, \theta) = \theta$ *holds only* when $\theta$ is in the range of $\text{trig}^{-1}$.

To go into detail about this specifically for each trig function, reference the table below.

| The cancellation rule...                                          | ...is valid only when...                                       |
| ----------------------------------------------------------------- | -------------------------------------------------------------- |
| $\cancel{\text{sin}}(\cancel{\text{sin}^{-1}}\, x) = x$           | $x$ is in $\left[ -1, 1 \right]$                               |
| $\cancel{\text{sin}^{-1}}(\cancel{\text{sin}}\, \theta) = \theta$ | $\theta$ is in $\left[ - \frac{\pi}{2}, \frac{\pi}{2} \right]$ |
| $\cancel{\text{cos}}(\cancel{\text{cos}^{-1}}\, x) = x$           | $x$ is in $\left[ -1, 1 \right]$                               |
| $\cancel{\text{cos}^{-1}}(\cancel{\text{cos}}\, \theta) = \theta$ | $\theta$ is in $\left[ 0, \pi \right]$                         |
| $\cancel{\text{tan}}(\cancel{\text{tan}^{-1}}\, x) = x$           | $x$ is any real number                                         |
| $\cancel{\text{tan}^{-1}}(\cancel{\text{tan}}\, \theta) = \theta$ | $\theta$ is in $\left( - \frac{\pi}{2}, \frac{\pi}{2} \right)$ |

>[!example] Examples
>- $\sin^{-1} \left( \sin \frac{\pi}{5} \right) = \frac{\pi}{5}$. Since $\frac{\pi}{5}$ is in $\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$, the functions cancel.
>- $\sin^{-1} \left( \sin \frac{5\pi}{6} \right) \neq \frac{5\pi}{6}$. Since $\frac{5\pi}{6}$ is **not** in $\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$, we cannot simply cancel. Evaluate the inside first: $\sin^{-1} \left( \sin \frac{5\pi}{6} \right) = \sin^{-1} \left( \frac{1}{2} \right) = \frac{\pi}{6}$. The angle $\frac{5\pi}{6}$ is in Quadrant II, so the answer is the angle in Quadrant I with the same $y$-coordinate.
>- $\cos \left( \cos^{-1} (-0.4) \right) = -0.4$. Since $-0.4$ is in $\left[ -1, 1 \right]$, the functions cancel.
>- $\cos^{-1} \left( \cos \frac{5\pi}{3} \right) \neq \frac{5\pi}{3}$. Since $\frac{5\pi}{3}$ is **not** in $\left[ 0, \pi \right]$, we cannot simply cancel. Evaluate the inside first: $\cos^{-1} \left( \cos \frac{5\pi}{3} \right) = \cos^{-1} \left( \frac{1}{2} \right) = \frac{\pi}{3}$. The angle $\frac{5\pi}{3}$ is in Quadrant IV, so the answer is the angle in Quadrant I with the same $x$-coordinate.
>- $\tan \left( \tan^{-1} 7 \right) = 7$. Since $\tan^{-1}$ accepts any real number, this always cancels.

>[!note]- An analogy with square roots
>The same thing happens with squares and square roots. For any $x \geq 0$, $\left( \sqrt{x} \right)^2 = x$ always cancels. However, $\sqrt{x^2} = x$ only when $x \geq 0$. For example, $\sqrt{(-3)^2} = \sqrt{9} = 3$, not $-3$, because $\sqrt{\phantom{x}}$ only ever outputs nonnegative numbers.
>
>In both cases, applying the *original* function last always cancels, while applying the *inverse* function last only cancels when the starting value is already within the inverse function's range.

# Practice Problems

>[!question] Problem 1
>Evaluate each of the following without a calculator.
>- $\sin^{-1} \left( \frac{\sqrt 3}{2} \right)$
>- $\cos^{-1} (0)$
>- $\tan^{-1} \left( \sqrt 3 \right)$
>- $\cos^{-1} \left( -\frac{\sqrt 2}{2} \right)$

>[!check]- Solution 1
>- $\sin^{-1} \left( \frac{\sqrt 3}{2} \right) = \boxed{\frac{\pi}{3}}$, since $\frac{\pi}{3}$ is in Quadrant I and $\sin \frac{\pi}{3} = \frac{\sqrt 3}{2}$.
>- $\cos^{-1} (0) = \boxed{\frac{\pi}{2}}$, since $\frac{\pi}{2}$ is on the boundary between Quadrants I and II and $\cos \frac{\pi}{2} = 0$.
>- $\tan^{-1} \left( \sqrt 3 \right) = \boxed{\frac{\pi}{3}}$, since $\frac{\pi}{3}$ is in Quadrant I and $\tan \frac{\pi}{3} = \sqrt 3$.
>- $\cos^{-1} \left( -\frac{\sqrt 2}{2} \right) = \boxed{\frac{3\pi}{4}}$, since $\frac{3\pi}{4}$ is in Quadrant II and $\cos \frac{3\pi}{4} = -\frac{\sqrt 2}{2}$.

>[!question] Problem 2
>Evaluate $\sin^{-1} \left( \sin \frac{2\pi}{3} \right)$.

>[!check]- Solution 2
>Since $\frac{2\pi}{3}$ is **not** between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$, we cannot simply cancel. Evaluate the inside first.
>$$
>\sin^{-1} \left( \sin \frac{2\pi}{3} \right) = \sin^{-1} \left( \frac{\sqrt 3}{2} \right) = \boxed{\frac{\pi}{3}}
>$$

>[!question] Problem 3
>Evaluate $\cos^{-1} \left( \cos \left( -\frac{\pi}{4} \right) \right)$.

>[!check]- Solution 3
>Since $-\frac{\pi}{4}$ is **not** between $0$ and $\pi$, we cannot simply cancel. Evaluate the inside first.
>$$
>\cos^{-1} \left( \cos \left( -\frac{\pi}{4} \right) \right) = \cos^{-1} \left( \frac{\sqrt 2}{2} \right) = \boxed{\frac{\pi}{4}}
>$$

>[!question] Problem 4
>Evaluate $\tan^{-1} \left( \tan \frac{3\pi}{4} \right)$.

>[!check]- Solution 4
>Since $\frac{3\pi}{4}$ is **not** strictly between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$, we cannot simply cancel. Evaluate the inside first.
>$$
>\tan^{-1} \left( \tan \frac{3\pi}{4} \right) = \tan^{-1} (-1) = \boxed{-\frac{\pi}{4}}
>$$

>[!question] Problem 5
>Simplify each of the following, or state that it is undefined.
>- $\sin \left( \sin^{-1} (0.3) \right)$
>- $\sin \left( \sin^{-1} (1.2) \right)$

>[!check]- Solution 5
>- $\sin \left( \sin^{-1} (0.3) \right) = \boxed{0.3}$, since $0.3$ is between $-1$ and $1$, so $\sin(\sin^{-1} x) = x$ applies.
>- $\sin \left( \sin^{-1} (1.2) \right)$ is $\boxed{\text{undefined}}$, since $1.2 > 1$ is outside the domain of $\sin^{-1}$.
