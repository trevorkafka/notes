# Permutations
A **permutation** is an *ordered arrangement of distinct items*. For example, permutations of all four of the letters `ABCD` include `DBAC`, `CDAB`, `ABCD`, and more. We can also create permutations of only three of the letters, such as `ABC`, `DAB`, `BAD`, or `CAD`. 

The number of ways to **permute** $n$ out of $m$ total items is written as ${}_mP_n$ and can be computed using either an explicit formula or built-in calculator functionality.

>[!important] Explicit formula for permutations
>$$
>{}_mP_{n} = \frac{m!}{(m-n)!}
>$$

>[!note] Computing permutations with Desmos
>In the [Desmos Scientific Calculator](http://www.desmos.com/scientific) and the [Desmos Graphing Calculator](http://www.desmos.com/calculator), permutations are computed via the $\text{nPr}$ function, which takes two inputs. For example, to compute ${}_7P_3$, type `nPr(7,3)`. The calculator will then display $\text{nPr}(7,3)=210$.
# Combinations
A **combination** is an ***un**ordered arrangement of distinct items*. For example, going back to our set of four of the letters `ABCD` the three-letter combinations `BAD` and `DAB` would be considered to be the *same* combination since they contain exactly the same letters.

The number of ways to **combine** $n$ out of $m$ total items is written as ${}_mC_n$ or as $\binom m n$ and can be computed using either an explicit formula or built-in calculator functionality. In contexts where the notation $\binom m n$ is used, the term **binomial coefficient** is also used, which stems from its relationship with the binomial theorem.

>[!important] Explicit formula for combinations
>
>$$
>\binom m n = {}_mC_{n} = \frac{m!}{(m-n)! n!}
>$$

Note that by this formula we can establish the identity ${}_mP_n = n! \cdot {}_mC_n,$ which also implies that ${}_mP_n \geq {}_mC_n,$ meaning that *the number of combinations cannot exceed the number of permutations.*

>[!note] Computing combinations with Desmos
>In the [Desmos Scientific Calculator](http://www.desmos.com/scientific) and the [Desmos Graphing Calculator](http://www.desmos.com/calculator), permutations are computed via the $\text{nPr}$ function, which takes two inputs. For example, to compute ${}_7P_3$, type `nPr(7,3)`. The calculator will then display $\text{nPr}(7,3)=35.$
