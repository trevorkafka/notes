---
aliases:
  - "070892"
tags:
  - algebra-2
  - precalc
  - "#SAT"
---
The **remainder theorem** is a theorem that looks incredibly simple but has profound time-saving implications in the context of the analysis of polynomials and their factors. It also typically appears in at least one question on the #SAT exam.

>[!note] Remainder Theorem
>Let $p(x)$ be a polynomial and $a$ be a constant. The remainder of the division $p(x) \div (x - a)$ is given by $p(a).$

>[!question]- Why?
>To create an analogy, recall the way that you computed quotients and remainders in elementary school. For example, $13 \div 3 = 4 \text{ R} 1$ (the quotient of $13 \div 3$ is $4$ with a remainder of $1$). The reason why this is the correct result is because
>$$
>13 = 4 \cdot 3 + 1
>$$
>which can be thought of as 
>$$
>\text{divisor} = (\text{quotient}) \cdot (\text{dividend}) + \text{remainder}.
>$$
>All divisions can be formatted in this way, including polynomial divisions. So, in our context here, the quotient $q(x)$ and remainder $r$ of the division $p(x) \div (x -a)$ is related to $p(x)$ and $x-a$ as follows.
>$$
>p(x) = q(x) \cdot (x-a) + r
>$$
>Plugging in $x  = a$ gives $p(a) = r,$ proving the theorem.

The following is an important consequence of the remainder theorem.

>[!note] 
>Let $p(x)$ be a polynomial and $a$ be a constant. If $p(a) = 0$, then $x - a$ is a factor of $p(x)$.

>[!question]- Why?
>According to the remainder theorem, the remainder of the division $p(x) \div (x-a)$ is $p(a) = 0$. Since the remainder of the division is zero, we must have that $x - a$ is a factor of $p(x)$.
# Practice Problems

Do not use polynomial division to solve any of the following problems (the remainder theorem will be much, much quicker).

>[!question] Problem 1
>What is the remainder of $x^{10} + x -1$ when divided by $x + 1$?

>[!check]- Solution 1
>Let $p(x) = x^{10} + x -1.$ Since $x + 1 = x - (-1),$ the remainder is
>$$
>p(-1) = (-1)^{10} + (-1) - 1 = 1 - 1 - 1 = \boxed{-1}.
>$$

>[!question] Problem 2
>The remainder when $f(x)$ is divided by $x - 2$ is $7$. What is $f(2)$?

>[!check]- Solution 2
>By the remainder theorem, $f(2)$ is the remainder of the division $f(x) \div (x - 2)$, so clearly $f(2) = \boxed{7}.$

>[!question] Problem 3
>If $f(x) = 2x^3 + kx^2 - 5x + 4$ has a factor $x + 3$, what is the value of $k$?

>[!check]- Solution 3
>If $x + 3$ is a factor of $f(x)$, then we must have that $f(-3) = 0.$
>$$
>\begin{gather*}
>f(-3) = 0 \\
>2(-3)^3 + k(-3)^2 - 5(-3) + 4 = 0 \\
>9k - 35 = 0 \\
>\boxed{k = \frac{35}{9}}
>\end{gather*}
>$$
>

>[!question] Problem 4
>When $f(x)$ is divided by $x - 5,$ the remainder is $0.$ Which of the following must be true?
>
>(A) $f(0) = 5$
>
>(B) $f(5) = 0$
>
>(C) $f(5) = 5$
>
>(D) $f(x)$ has degree $1$

>[!check]- Solution 4
>The correct answer is $\boxed{(B) f(5) = 0}.$ By the remainder theorem, the remainder of the division $f(x) \div (x - 5)$ is $f(5)$, which is known to be zero.

>[!question] Problem 5
> Determine the remainder of $x^4 - 2x + 1$ when divided by each of the following.
>
>- $x - 1$
>- $x + 1$
>- $x$

>[!check]- Solution 5
>- The remainder of $(x^4 - 2x + 1)\div(x-1)$ is $1^4 - 2 \cdot 1 + 1 = 1 - 2 + 1 = \boxed{0}.$
>- The remainder of $(x^4 - 2x + 1)\div(x+1)$ is $(-1)^4 - 2(-1) + 1 = 1 + 2 + 1 = \boxed{4}.$
>- The remainder of $(x^4 - 2x + 1)\div x$ is $0^4 - 2 \cdot 0 + 1 = \boxed{1}$.

>[!question] Problem 6
>Determine the value of $k$ such that $x - 5$ divides $f(x) = x^2 + kx + 20$ and then factor $f(x)$ completely.

>[!check]- Solution 6
>If $x - 5$ divides $f(x)$, then the remainder of $f(x) \div 5$ is zero. By the remainder theorem, we then have
>$$
>\begin{gather*}
>f(5) = 0 \\
>5^2 + k \cdot 5 + 20 = 0 \\
>5k + 45 = 0 \\
>\boxed{ k = -9 }
>\end{gather*}
>$$
>So, $f(x) = x^2 - 9x + 20 = \boxed{(x-4)(x-5)}.$

>[!question] Problem 7
>Determine the values of $k$ and $m$ such that both $x - 3$ and $x + 1$ divide $f(x) = x^3 + mx^2 + kx + 27$ and then factor $f(x)$ completely.

>[!check]- Solution 7
>Since $f(x) \div (x-3)$ and $f(x) \div (x+1)$ both have a remainder of zero, we then have $f(3) = 0$ and $f(-1) = 0$. Let's determine the consequences of each restriction through some algebraic simplification.
>$$
>\begin{gather*}
>f(3) = 0 & f(-1) = 0 \\
>3^3 + m\cdot 3^2 + k \cdot 3 + 27 = 0 & (-1)^3 + m(-1)^2 + k(-1) + 27 = 0 \\
>27 + 9m + 3k + 27 = 0 & -1 + m - k + 27 = 0 \\
>9m + 3k + 54 = 0 & m - k + 26 = 0
>\end{gather*}
>$$
>We now have a system of equations.
>$$
>\begin{cases}
>9m + 3k + 54 = 0 \\
>m - k + 26 = 0
>\end{cases}
>$$
>The solution to this system of equations is $\boxed{ m = -11}$ and $\boxed{ k = 15 }$.
>$$
>f(x) = x^3 -11 x^2 + 15x + 27 = \boxed{(x-3)(x+1)(x-9)}
>$$

>[!question] Problem 8
>The division $(x^3 + 2x - 1) \div (x + 2)$ yields a quotient of $x^2 - 2x + 6$ Determine the value of the real number $z$ to make the following identity true.
>$$
>x^3 + 2x - 1 = x^2 - 2x + 6 + \frac{z}{x + 2}
>$$

>[!check]- Solution 8
>Since $\frac{\text{dividend}}{\text{divisor}} = \text{quotient} + \frac{\text{remainder}}{\text{divisor}},$ the number $z$ is the remainder of the division $(x^3 + 2x - 1) \div (x + 2)$, so $z = (-2)^3 + 2(-2) - 1 = \boxed{-13}.$
