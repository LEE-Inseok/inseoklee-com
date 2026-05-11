---
title: SBH Thermal Reactor Framework
type: framework
summary: ODE-based thermal simulation framework for reactor configurations — separates model definition, scenario specification, and execution. Powers the 5-scenario heat recovery comparison study.
date: "2024"
tags:
  - Python
  - SciPy
  - ODE
  - Reactor Modeling
---

## Problem

The thermal simulation study required running the same energy balance equations across 5 reactor configurations × multiple parameter variations. Hardcoding each scenario separately leads to duplicated equation logic, manual parameter management, and difficulty adding new scenarios.

## Solution

Three-layer separation:

| Stage | Description |
|-------|-------------|
| **Model definition** | Energy balance ODEs for reactor + heat recovery structures |
| **Scenario configuration** | Parameter sets for each system configuration (baseline, wrap coil, internal coil, embedded purification, hybrid) |
| **Simulation execution** | ODE integration across all scenarios using `scipy.integrate.solve_ivp` |
| **Post-processing** | Temperature profile comparison, heat recovery quantification, scenario ranking |

## Before / After

**Before**: Individual scripts per scenario, copy-pasted ODE logic, manual result collection.

**After**: Single model definition reused across all scenarios. New scenario = add one parameter dictionary. Results automatically collected and compared.

## Impact

- 5 scenarios compared systematically with identical model equations
- Parameter sensitivity analysis enabled without code modification
- Fully reproducible — any scenario can be re-run with exact parameters logged

## Repository

→ Part of the broader [Aspen Automation framework](https://github.com/LEE-Inseok/aspen-automation).
