---
aliases:
  - "179795"
tags:
  - reference-sheets
  - physics
  - AP-physics-1
  - AP-physics-2
  - problem-solving
created: 2019-12-17
modified: 2019-12-17
draft: false
---

# Series vs. Parallel

Two bulbs (or other resistors) $R_1$ and $R_2$ can be connected to a battery in two ways.
- **Series:** the bulbs are in a single loop, one after the other, so all the charge flows through both.
- **Parallel:** each bulb is on its own branch connected directly across the battery.

<div class="ck-figure"><svg viewBox="0 0 300 215" class="ck-graph" role="img" aria-label="Series circuit" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="40" x2="40" y2="97.0" class="ck-wire"/><line x1="40" y1="113.0" x2="40" y2="170" class="ck-wire"/><line x1="22" y1="97.0" x2="58" y2="97.0" class="ck-wire"/><line x1="31" y1="113.0" x2="49" y2="113.0" class="ck-plate"/><text x="64" y="95.0" class="ck-sign">+</text><text x="14" y="111.0" class="ck-lab" text-anchor="end">V</text><polyline points="40.0,40.0 120.0,40.0 125.0,32.0 135.0,48.0 145.0,32.0 155.0,48.0 165.0,32.0 175.0,48.0 180.0,40.0 260.0,40.0" class="ck-wire"/><text x="150" y="24" class="ck-lab" text-anchor="middle">R<tspan class="ck-subs" dy="4">1</tspan></text><polyline points="260.0,40.0 260.0,75.0 252.0,80.0 268.0,90.0 252.0,100.0 268.0,110.0 252.0,120.0 268.0,130.0 260.0,135.0 260.0,170.0" class="ck-wire"/><text x="276" y="110.0" class="ck-lab" text-anchor="start">R<tspan class="ck-subs" dy="4">2</tspan></text><line x1="40" y1="170" x2="260" y2="170" class="ck-wire"/><text x="150.0" y="207" class="ck-title" text-anchor="middle">Series</text></svg><svg viewBox="0 0 300 215" class="ck-graph" role="img" aria-label="Parallel circuit" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="40" x2="40" y2="97.0" class="ck-wire"/><line x1="40" y1="113.0" x2="40" y2="170" class="ck-wire"/><line x1="22" y1="97.0" x2="58" y2="97.0" class="ck-wire"/><line x1="31" y1="113.0" x2="49" y2="113.0" class="ck-plate"/><text x="64" y="95.0" class="ck-sign">+</text><text x="14" y="111.0" class="ck-lab" text-anchor="end">V</text><line x1="40" y1="40" x2="260" y2="40" class="ck-wire"/><line x1="40" y1="170" x2="260" y2="170" class="ck-wire"/><polyline points="160.0,40.0 160.0,75.0 152.0,80.0 168.0,90.0 152.0,100.0 168.0,110.0 152.0,120.0 168.0,130.0 160.0,135.0 160.0,170.0" class="ck-wire"/><text x="176" y="110.0" class="ck-lab" text-anchor="start">R<tspan class="ck-subs" dy="4">1</tspan></text><polyline points="260.0,40.0 260.0,75.0 252.0,80.0 268.0,90.0 252.0,100.0 268.0,110.0 252.0,120.0 268.0,130.0 260.0,135.0 260.0,170.0" class="ck-wire"/><text x="276" y="110.0" class="ck-lab" text-anchor="start">R<tspan class="ck-subs" dy="4">2</tspan></text><circle cx="160" cy="40" r="3.5" class="ck-dot"/><circle cx="160" cy="170" r="3.5" class="ck-dot"/><text x="150.0" y="207" class="ck-title" text-anchor="middle">Parallel</text></svg></div>

| | Series | Parallel |
| --- | --- | --- |
| Current | the same through each bulb | splits: $I = I_1 + I_2$ |
| Voltage | splits: $V = V_1 + V_2$ | the same across each bulb |
| Total resistance | $R = R_1 + R_2$ | $R = \dfrac{1}{\frac{1}{R_1} + \frac{1}{R_2}}$ |
| Total power | $P = P_1 + P_2$ | $P = P_1 + P_2$ |

# Key Equations

| Quantity | Equation | Meaning |
| --- | --- | --- |
| Voltage | $V = \dfrac{E}{q}$ | energy (in joules) carried by each coulomb of charge, measured in volts (V), or J/C |
| Current | $I = \dfrac{q}{t}$ | charge (in coulombs) that flows each second, measured in amperes (A), or C/s |
| Resistance | $R = \dfrac{V}{I}$ | voltage (in volts) needed for each amp of current, measured in ohms ($\Omega$), or V/A |
| Power | $P = \dfrac{E}{t} = IV$ | energy (in joules) used each second, measured in watts (W), or J/s |

**Symbols:** voltage $V$, current $I$, resistance $R$, charge $q$, energy $E$, time $t$, power $P$.

**Units:** volts (V), amps (A), ohms ($\Omega$), coulombs (C), joules (J), seconds (s), watts (W).

# Practice Problems

**Problem 1.** A $10\ \text{V}$ battery is attached directly to a light bulb of resistance $5\ \Omega$.

1. Find the current flowing through the circuit.
2. Find how much electric charge flows through the circuit in $10$ seconds.
3. Find how much energy is used by the bulb in $10$ seconds.
4. Find the power consumption of the bulb.

> [!check]- Solution 1
> 1. $I = \dfrac{V}{R} = \dfrac{10\ \text{V}}{5\ \Omega} = \boxed{2\ \text{A}}$
> 2. $q = It = (2\ \text{A})(10\ \text{s}) = \boxed{20\ \text{C}}$
> 3. $E = qV = (20\ \text{C})(10\ \text{V}) = \boxed{200\ \text{J}}$
> 4. Using energy, $P = \dfrac{E}{t} = \dfrac{200\ \text{J}}{10\ \text{s}} = \boxed{20\ \text{W}}$. Alternatively, $P = IV = (2\ \text{A})(10\ \text{V}) = \boxed{20\ \text{W}}$.

**Problem 2.** A $9\ \Omega$ bulb is attached to a battery, resulting in $4\ \text{W}$ of electrical power.

1. Find the voltage of the battery.
2. Find the current running through the circuit.

> [!check]- Solution 2
> 1. Both $V$ and $I$ are unknown, but we know two equations that relate them.
> $$
> R = \frac{V}{I} \qquad P = IV
> $$
> Multiply these equations to eliminate $I$ and solve for $V$.
> $$
> \begin{align*}
> RP &= \frac{V}{\cancel{I}} \cdot \cancel{I} V = V^2 \\
> V &= \sqrt{RP} = \sqrt{(9\ \Omega)(4\ \text{W})} = \boxed{6\ \text{V}}
> \end{align*}
> $$
> 2. Solve $R = \dfrac{V}{I}$ for $I$ and substitute the voltage from part 1.
> $$
> I = \frac{V}{R} = \frac{6\ \text{V}}{9\ \Omega} = \boxed{\frac{2}{3}\ \text{A}}
> $$

**Problem 3.** Light bulb A (resistance $2\ \Omega$) is attached to a battery, resulting in a current of $6\ \text{A}$. Light bulb A is then replaced by light bulb B, and the power consumption of light bulb B is measured to be *four times* that of light bulb A.

1. What is the resistance of light bulb B?
2. When light bulb A is plugged in, how much energy is used over the course of $1$ hour? Express your answer in scientific notation, rounded to $2$ significant figures.

> [!check]- Solution 3
> Subscripts $A$ and $B$ refer to bulb A and bulb B.
> 1. The battery voltage is $V = I_A R_A = (6\ \text{A})(2\ \Omega) = 12\ \text{V}$. With bulb A plugged in, the power consumption is $P_A = I_A V = (6\ \text{A})(12\ \text{V}) = 72\ \text{W}$. So with bulb B plugged in, the power consumption is four times larger, $P_B = 288\ \text{W}$. The new current is $I_B = \dfrac{P_B}{V} = \dfrac{288\ \text{W}}{12\ \text{V}} = 24\ \text{A}$, so the resistance of bulb B is $R_B = \dfrac{V}{I_B} = \dfrac{12\ \text{V}}{24\ \text{A}} = \boxed{\dfrac{1}{2}\ \Omega}$.
> 2. $E_A = P_A t = (72\ \text{W})(3600\ \text{s}) = 259{,}200\ \text{J} \approx \boxed{2.6 \times 10^5\ \text{J}}$

**Problem 4.** Two light bulbs of unequal resistances $R_1$ and $R_2$ are connected to a battery in either series or parallel, but we are not told which. For each situation below, decide whether the bulbs must be in series, must be in parallel, or whether it cannot be determined.

1. Both bulbs receive the same current.
2. The bulbs receive different currents.
3. Both bulbs receive the same voltage.
4. The bulbs receive different voltages.
5. The total (effective) resistance of the circuit is $R_1 + R_2$.
6. The total (effective) resistance of the circuit is $\dfrac{1}{\frac{1}{R_1} + \frac{1}{R_2}}$.
7. The powers consumed by the two bulbs add up to the power consumption of the whole circuit.

> [!check]- Solution 4
> 1. series
> 2. parallel
> 3. parallel
> 4. series
> 5. series
> 6. parallel
> 7. cannot be determined (this is true for both arrangements)

<style>
	.ck-figure { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1.5rem; margin: 1rem 0; }
	.ck-graph { width: 100%; max-width: 280px; height: auto; font-family: var(--bodyFont); }
	.ck-wire { fill: none; stroke: var(--dark); stroke-width: 2.2; stroke-linejoin: round; }
	.ck-plate { stroke: var(--dark); stroke-width: 5; }
	.ck-dot { fill: var(--dark); }
	.ck-lab { fill: var(--dark); font-size: 18px; font-style: italic; }
	.ck-subs { font-size: 12px; font-style: normal; }
	.ck-sign { fill: var(--darkgray); font-size: 16px; }
	.ck-title { fill: var(--darkgray); font-size: 16px; font-weight: 600; }
</style>
