---
slug: ccpp-lohc
title: CCPP-LOHC Optimization
status: draft
summary: Multi-objective optimization of a combined-cycle power plant integrated with LOHC hydrogen production — Aspen Plus simulation + ML surrogate + NSGA-II / Bayesian optimization.
date: "2025"
tags:
  - CCPP
  - LOHC
  - Aspen Plus
  - Surrogate Modeling
  - NSGA-II
  - Multi-Objective Optimization
chapters:
  - number: 1
    title: Background
  - number: 2
    title: System Model
  - number: 3
    title: Automation
  - number: 4
    title: Surrogate Model
  - number: 5
    title: Optimization
  - number: 6
    title: Results
---

## Motivation

Combined-cycle power plants (CCPP) are among the most efficient fossil-fuel power generation technologies, and their integration with hydrogen production via Liquid Organic Hydrogen Carriers (LOHC) represents a pathway to lower-carbon operation. Optimizing such a system is non-trivial:

- Many interacting design variables (turbine parameters, LOHC flow rates, heat integration points)
- Each Aspen Plus simulation takes minutes — too slow for iterative optimization
- Multiple competing objectives (power output, hydrogen production, efficiency) require multi-objective treatment

The solution: replace expensive Aspen simulations with fast ML surrogate models, enabling thousands of optimization evaluations per minute.

## Approach

1. **Process Modeling** — Built the CCPP + LOHC system in Aspen Plus, validated against literature data
2. **Automation** — Python automation framework (COM interface) for large-scale DOE-based dataset generation
3. **Surrogate Modeling** — Trained four ML models (RF, GB, NN, GP) on the simulation dataset
4. **Optimization** — Applied Bayesian (single-objective) and NSGA-II (multi-objective) on the surrogate

## Phase 1 — Grid Sweep (Complete)

4-line heat recovery comparison across 450 cases per line (SR 0.85–0.99 × MCH 1–30 ton/hr):

| Line | Location | Temp | Success Rate | Penalty | E1 Impact |
|------|----------|------|-------------|---------|-----------|
| Line 6 | Post-SH gas | 470 °C | 330/450 (73.3 %) | ~0 kW | None |
| Line 5 | Post-GT gas | 531 °C | 328/450 (72.9 %) | ~1,500 kW | None |
| Line 9 | Post-SH steam | 468 °C | 316/450 (70.2 %) | ~7,000 kW | None |
| Line 4 | Post-combustion | 1,150 °C | 327/450 (72.7 %) | ~50,000 kW | Linear decrease |

**Key findings**

- **Zero-penalty heat recovery zone** discovered at Line 6: LOHC integration causes no measurable reduction in CCPP power output
- 4-line penalty ranking: Line 6 (~0 kW) < Line 5 (~1,500 kW) < Line 9 (~7,000 kW) < Line 4 (~50,000 kW)
- LOHC competes with steam turbine efficiency (30–38 %), not full CCPP efficiency (55–62 %) — penalty scope is narrower than initially expected
- LHHW kinetic model validated: 99.98 % conversion at base case, with physically meaningful heat-limited behavior
- Maximum H₂ output: 0.461 kg/s (Line 6, MCH 30 ton/hr, SR 0.89)

## Phase 2 — LHS + Surrogate + NSGA-II (Pending)

Planned approach:

- LHS with 4 variables (SR, MCH, P, U), 500–1,000 samples per line
- Surrogate model: ANN / RF / GPR comparison
- NSGA-II: 4-line independent Pareto fronts
- Overlay comparison with base case (no LOHC integration)

## Engineering Implications

- **Line 6 (zero-penalty)**: hydrogen production from CCPP waste heat with no measurable power output cost
- **Line 4**: avoid — ~50,000 kW penalty makes integration economically unattractive
- **Line 5**: attractive — small penalty + higher source temperature extends MCH conversion range
- **Line 9**: moderate penalty + additional steam-side error boundary constraint

## Limitations

- Phase 1 grid sweep used 2 variables (SR, MCH); full 4-variable LHS pending
- Steady-state Aspen Plus model; dynamic transients not captured
- Economic analysis (LOHC system cost, electricity price, H₂ market value) not yet included
- LHHW kinetic parameters from a single literature reference (Usman 2012)

→ Built with: [Aspen Automation Framework](/development/aspen-automation)
