---
title: CCPP-LOHC Optimization
section: simulation
status: draft
summary: Multi-objective optimization of a combined-cycle power plant integrated with LOHC hydrogen production — Aspen Plus simulation, analysed along two complementary tracks (Linear Regression for publication; ML surrogate + NSGA-II for downstream optimization).
date: "2025"
tags:
  - CCPP
  - LOHC
  - Aspen Plus
  - Linear Regression
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
    title: Track A — Linear Regression
  - number: 5
    title: Track B — Surrogate + NSGA-II
  - number: 6
    title: Results
---

## Motivation

Combined-cycle power plants (CCPP) are among the most efficient fossil-fuel power generation technologies, and their integration with hydrogen production via Liquid Organic Hydrogen Carriers (LOHC) represents a pathway to lower-carbon operation. Optimizing such a system is non-trivial:

- Many interacting design variables (turbine parameters, LOHC flow rates, heat integration points)
- Each Aspen Plus simulation takes minutes — too slow for iterative optimization
- Multiple competing objectives (power output, hydrogen production, efficiency) require multi-objective treatment

The solution: build a shared Aspen Plus + Python automation pipeline, then analyse the resulting dataset along two tracks suited to different audiences and goals.

## Approach — Two Analysis Tracks

The two tracks share the **same process model and DOE dataset**; they diverge only in how the dataset is interpreted.

### Track A — Linear Regression (Publication track)

The track currently driving the manuscript.

- Aspen Plus DOE dataset → linear regression per output (power output, H₂ production, system efficiency, etc.)
- Coefficient inspection reveals **direct sensitivity** of each output to design variables (SR, MCH, P, U)
- Penalty-vs-recovery trade-offs read straight from regression slopes per heat-recovery line (Line 4 / 5 / 6 / 9)
- Lower model complexity → cleaner attribution and easier review for journal readers
- Suited to the linearly-dominated operating region observed in Phase 1 grid sweep

### Track B — Surrogate Modeling + NSGA-II (Optimization track)

The longer-horizon optimization track, kept in reserve for future scale-up of the study.

- Trained four ML surrogate models (RF, GB, NN, GP) on the same simulation dataset
- Bayesian optimization (single-objective) and **NSGA-II** (multi-objective) on top of the surrogate
- Pareto-front exploration across efficiency, hydrogen output, and power penalty
- Enables thousands of optimization evaluations per minute once the surrogate is trained
- Reserved for follow-up work where non-linear interactions become dominant

## Phase 1 — Grid Sweep (Complete)

4-line heat recovery comparison across the design grid (SR × MCH) per line:

| Line | Location | Temp | Success Rate | Penalty | E1 Impact |
|------|----------|------|-------------|---------|-----------|
| Line 6 | Post-SH gas | *** °C | *** | ~*** kW | None |
| Line 5 | Post-GT gas | *** °C | *** | ~*** kW | None |
| Line 9 | Post-SH steam | *** °C | *** | ~*** kW | None |
| Line 4 | Post-combustion | *** °C | *** | ~*** kW | Linear decrease |

> *Quantitative values withheld pending publication. Penalty rankings and qualitative findings are summarized below.*

**Key findings (qualitative)**

- **Zero-penalty heat recovery zone** discovered at Line 6: LOHC integration causes no measurable reduction in CCPP power output
- 4-line penalty ranking: **Line 6 < Line 5 < Line 9 < Line 4** (lowest to highest penalty)
- LOHC competes with steam turbine efficiency, not full CCPP efficiency — penalty scope is narrower than initially expected
- LHHW kinetic model validated at base case with physically meaningful heat-limited behavior
- Maximum H₂ output achieved at Line 6 (high MCH, near-maximum SR)

## Phase 2 — Linear Regression + Surrogate Comparison (In progress)

Planned dataset shared by both tracks:

- LHS with 4 variables (SR, MCH, P, U), 500–1,000 samples per line
- **Track A**: per-output linear regression; coefficient and partial-effect interpretation
- **Track B**: ANN / RF / GPR surrogate comparison; NSGA-II 4-line independent Pareto fronts
- Overlay comparison with base case (no LOHC integration)

## Engineering Implications

TBD

## Limitations

TBD

→ Built with: [Aspen Automation Framework](/development/aspen-automation)
