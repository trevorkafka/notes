---
aliases:
  - "770095"
tags:
  - calculus
---
[Permalink](http://trevorkafka.github.io/notes/770095)

On this page, I am providing four different methods to show the following integral result.

$$
\int \sec x\ dx = \boxed{\ln|\sec x + \tan x| + C} = \boxed{\ln \left| \frac{1+\tan \frac{x}{2}}{1-\tan \frac{x}{2}} \right| + C}
$$

This integral is particularly interesting because despite its simple appearance, there are a variety of different methods available to evaluate it, though none of the methods are all that easy to work out initially.
# Method 1: the conventional trick
Multiply first by the factor $\dfrac{\sec x + \tan x}{\sec x + \tan x}$.

$$
\int \sec x\ dx
$$
$$
\int \sec x \cdot \frac{\sec x + \tan x}{\sec x + \tan x}\ dx
$$
$$
\int \frac{\sec x \tan x + \sec^2 x}{\sec x + \tan x}\ dx
$$

Now, notice that the numerator is the derivative of the denominator, so we can use the pattern $\displaystyle \int \frac{u'}{u}\ du = \ln|u| + C.$

$$\boxed{\ln|\sec x + \tan x| + C}$$
# Method 2: substitution $u = \sec x$

Let $u = \sec x$, so $du = \sec x \tan x\ dx,$ which gives $\dfrac{1}{\tan x}\ dx = \sec x\ dx$. Since $\tan x = \sqrt{\sec^2 x - 1}$, we can hence write $\dfrac{1}{\sqrt{u^2 - 1}} \ du = \sec x\ dx$, which can be put into the integral.
$$
\int \sec x\ dx = \int \frac{1}{\sqrt{u^2-1}}\ du
$$
This is a well-known integral.
$$
\text{arccosh} u  + C
$$
Switch to the logarithmic version of $\text{arccosh}$.
$$
\ln \left| u + \sqrt{u^2 - 1} \right| + C
$$
Back-substitute $u = \sec x$, taking advantage of the identity $\sqrt{\sec^2 x - 1} = \tan x$.
$$
\boxed{\ln|\sec x + \tan x| + C}
$$
# Method 3: substitution $u = \tan x$

Let $u = \tan x$, so $du = \sec^2 x\ dx$ and hence $\dfrac{1}{\sec x}\ du = \sec x\ dx$. Since $\sec x = \sqrt{1 + \tan^2 x}$, this can be rewritten as $\dfrac{1}{\sqrt{1+u^2}}\ du= \sec x\ dx$ and put into the integral.
$$
\int \sec x\ dx = \int \frac{1}{\sqrt{1+u^2}}\ du
$$
This is a well-known integral.
$$
\text{arcsinh}\ u + C
$$
Switch to the logarithmic version of $\text{arcsinh}$.
$$
\ln \left| \sqrt{1+u^2}+u \right| + C
$$
Back-substitute $u = \tan x$, taking advantage of the identity $\sqrt{1 + \tan^2 x} = \sec x$.
$$
\boxed{\ln \left| \sec x + \tan x \right| + C}
$$
# Method 4: via Weierstrass substitution $u = \tan \frac{x}{2}$
Use the double-angle identity to expand $\sec x$ in terms of $\sec \frac{x}{2}$ and $\tan \frac{x}{2}$.
$$
\sec x = \frac{1}{\cos x} = \frac{1}{\cos(2 \cdot \frac{x}{2})} = \frac{1}{\cos^2 \frac{x}{2} - \sin^2 \frac{x}{2}} {\color{red} \cdot \frac{\frac{1}{\cos^2 \frac{x}{2}}}{\frac{1}{\cos^2 \frac{x}{2}}}} = \frac{\sec^2 \frac{x}{2}}{1 - \tan^2 \frac{x}{2}}
$$
Hence,
$$
\int \sec x\ dx = \int \frac{\sec^2 \frac{x}{2}}{1 - \tan^2 \frac{x}{2}}\ dx.
$$

Let $u = \tan \frac{x}{2}$, so $2\ du = \sec^2\frac{x}{2}\ dx$.

$$
\int \frac{2}{1-u^2}\ du
$$
Perform a partial fraction decomposition and integrate.
$$
\int \frac{1}{1+u} + \frac{1}{1-u}\ du
$$
$$
\ln \left| \frac{1+u}{1-u} \right| + C
$$
Back-substitute $u = \tan \frac{x}{2}$.
$$
\boxed{ \ln \left| \frac{1+\tan \frac{x}{2}}{1-\tan \frac{x}{2}} \right| + C}
$$
This result is equivalent to $\ln|\sec x + \tan x| + C$. Click below to see a proof.

>[!note]- Proof of equivalence to $\ln \left| \sec x + \tan x \right| + C$
>$$
>\ln \left| \frac{1 + \tan \frac{x}{2}}{1 - \tan \frac{x}{2}} {\color{red} \cdot \frac{\cos \frac{x}{2} + \sin \frac{x}{2}}{\cos \frac{x}{2} + \sin \frac{x}{2}}} \right| + C
>$$
> $$
> \ln \left| \frac{\cos \frac{x}{2} + \sin \frac{x}{2}}{\cos \frac{x}{2} - \sin \frac{x}{2}} {\color{red} \cdot \frac{\cos \frac{x}{2} + \sin \frac{x}{2}}{\cos \frac{x}{2} + \sin \frac{x}{2}}} \right| + C
> $$
> $$
> \ln \left| \frac{(\cos \frac{x}{2} + \sin \frac{x}{2})^2}{\cos^2 \frac{x}{2} - \sin^2 \frac{x}{2}} \right| + C
> $$
> $$
> \ln \left| \frac{1 + 2 \cos \frac{x}{2} \sin \frac{x}{2}}{\cos x} \right| + C
> $$
> $$
> \ln \left| \frac{1 + \sin x}{\cos x} \right| + C
> $$
> $$
> \ln \left| \sec x + \tan x \right| + C
> $$
