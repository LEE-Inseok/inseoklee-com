---
title: CCPP-LOHC Optimization
section: simulation
status: draft
summary: Multi-objective optimization of a combined-cycle power plant integrated with LOHC hydrogen production — Aspen Plus, ML surrogates, and NSGA-II.
date: "2025"
tags:
  - CCPP
  - LOHC
  - Aspen Plus
  - Linear Regression
  - Surrogate Modeling
  - NSGA-II
  - Multi-Objective Optimization
---

## What it is

Multi-objective optimization of a combined-cycle power plant (CCPP) integrated with LOHC hydrogen production. One Aspen Plus model and an automated DOE pipeline feed two analysis tracks: linear regression for the publication, ML surrogates + NSGA-II for large-scale optimization.

## Highlights

- **Zero-penalty heat-recovery zone found** — at the best integration point, LOHC production causes no measurable loss of CCPP power output
- Four integration lines ranked by power penalty: Line 6 < Line 5 < Line 9 < Line 4
- LOHC competes only with steam-turbine efficiency, not the full plant — the penalty scope is narrower than expected
- Surrogate models (RF · GB · NN · GP) + NSGA-II enable thousands of evaluations per minute for Pareto-front exploration

*Values withheld pending publication.*

→ Built with the [Aspen Automation Framework](/development/aspen-automation).
