---
tags:
  - probability
  - ACT
aliases:
  - "625269"
---
[Permalink](https://trevorkafka.github.io/notes/625269)

>[!caution] Caution
>This article defines permutations and combinations in terms of [[Factorials|factorials]]. When solving problems, sometimes $0!$ (zero factorial) makes an appearance. Please keep in mind that $0! = 1$, **not zero**.
# Permutations
A **permutation** is an *ordered arrangement of distinct items*. For example, permutations of all four of the letters `ABCD` include `DBAC`, `CDAB`, `ABCD`, and more. We can also create permutations of only three of the letters, such as `ABC`, `DAB`, `BAD`, or `CAD`. 

The number of ways to **permute** $n$ out of $m$ total items is written as ${}_mP_n$ and can be computed using either an explicit formula involving [[Factorials|factorials]] or built-in calculator functionality.

>[!important] Explicit formula for permutations
>$$
>{}_mP_{n} = \frac{m!}{(m-n)!}
>$$

>[!note] Computing permutations with Desmos
>In the [Desmos Scientific Calculator](http://www.desmos.com/scientific) and the [Desmos Graphing Calculator](http://www.desmos.com/calculator), permutations are computed via the $\text{nPr}$ function, which takes two inputs. For example, to compute ${}_7P_3$, type `nPr(7,3)`. The calculator will then display $\text{nPr}(7,3)=210$.

>[!note] Computing permutations with the TI83/TI84
>1. In the main calculator input window, input your $n$ value.
>2. Click the `MATH` button and use the `→` key to switch to the `PROB` (probability) menu. Then, select `nPr`.
>3. Type your $r$ value on the screen. For example, if you are looking to compute ${}_8P_5$, you should now see `8  nPr  5` on your calculator screen. 
>4. Press `ENTER` to evaluate.

Other miscellaneous notes:
- $r$ must be less than or equal to $n$
- $_nP_0 = 1$
- $_nP_1 = n$
- $_nP_n = n!$

# Combinations
A **combination** is an ***un**ordered arrangement of distinct items*. For example, going back to our set of four of the letters `ABCD` the three-letter combinations `BAD` and `DAB` would be considered to be the *same* combination since they contain exactly the same letters.

The number of ways to **combine** $n$ out of $m$ total items is written as ${}_mC_n$ or as $\binom m n$ and can be computed using either an explicit formula using [[Factorials|factorials]] or built-in calculator functionality. In contexts where the notation $\binom m n$ is used, the term **binomial coefficient** is also used, which stems from its relationship with the binomial theorem.

>[!important] Explicit formula for combinations (a.k.a. - binomial coefficient)
>
>$$
>\binom m n = {}_mC_{n} = \frac{m!}{(m-n)! n!}
>$$

Note that by this formula we can establish the identity ${}_mP_n = n! \cdot {}_mC_n,$ which also implies that ${}_mP_n \geq {}_mC_n,$ meaning that *the number of combinations cannot exceed the number of permutations.*

>[!note] Computing combinations with Desmos and the TI83/TI84
>Follow the same instructions as for permutations described above, but instead use the $\text{nCr}$ function.

Other miscellaneous notes:
- $r$ must be less than or equal to $n$
- $_nC_0 = 1$ and $_nC_n = 1$
- $_nC_1 = n$ and $_nC_{n-1} = n$
- $_nC_0 + {}_nC_1 + {}_nC_2 + \cdots + {}_nC_n = 2^n$

## Combinations and Pascal's Triangle
There is a relationship between the combination numbers and the entries of Pascal's triangle, as shown below. Corresponding entries in each triangle are equal in value to each other.

$$
\begin{array}{ c c c }
1 & \ _{0} C_{0} & \binom{0}{0}\\
1\ \ 1 & \ _{1} C_{0} \ \ _{1} C_{1} & \binom{1}{0} \ \ \binom{1}{1}\\
1\ \ 2\ \ 1 & \ _{2} C_{0} \ \ _{2} C_{1} \ \ _{2} C_{2} & \binom{2}{0} \ \ \binom{2}{1} \ \ \binom{2}{2}\\
1\ \ 3\ \ 3\ \ 1 & \ _{3} C_{0} \ \ _{3} C_{1} \ \ _{3} C_{2} \ \ _{3} C_{3} & \binom{3}{0} \ \ \binom{3}{1} \ \ \binom{3}{2} \ \ \binom{3}{3}\\
1\ \ 4\ \ 6\ \ 4\ \ 1 & \ _{4} C_{0} \ \ _{4} C_{1} \ \ _{4} C_{2} \ \ _{4} C_{3} \ \ _{4} C_{4} & \binom{4}{0} \ \ \binom{4}{1} \ \ \binom{4}{2} \ \ \binom{4}{3} \ \ \binom{4}{4}\\
1\ \ 5\ \ 10\ \ 10\ \ 5\ \ 1 & _{5} C_{0} \ \ _{5} C_{1} \ \ _{5} C_{2} \ \ _{5} C_{3} \ \ _{5} C_{4} \ \ _{5} C_{5} & \binom{5}{0} \ \ \binom{5}{1} \ \ \binom{5}{2} \ \ \binom{5}{3} \ \ \binom{5}{4} \ \ \binom{5}{5}\\
\vdots  & \vdots  & \vdots 
\end{array}
$$