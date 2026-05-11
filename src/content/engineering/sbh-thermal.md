---
title: SBH Thermal Simulation
status: published
summary: Physics-based thermal scenario study across 5 heat-recovery configurations for the SBH hydrogen system — extending experimental observations into systematic design comparison.
date: "2024"
tags:
  - Thermal Simulation
  - ODE
  - Heat Recovery
  - Scenario Analysis
chapters:
  - number: 1
    title: Background
  - number: 2
    title: Model
  - number: 3
    title: Simulation
  - number: 4
    title: Scenarios
  - number: 5
    title: Results
---

## Motivation

The experimental SBH system revealed that thermal management is a critical design constraint at bench scale. Experiments can only measure a few conditions; simulation answers *what if* questions:

- What if the reactor had an external heat recovery coil?
- What if the purification module were thermally integrated with the reactor?
- What operating conditions minimize thermal stress while maintaining hydrogen output?

## Scenarios

Five reactor configurations compared under identical model equations and operating parameters:

1. **Baseline** — no heat recovery (reference)
2. **Wrap coil (A)** — external coil around reactor body, simple retrofit
3. **Internal coil (B)** — coil inside the reactor for direct heat extraction
4. **Embedded purification (C)** — purification module thermally integrated with reactor
5. **Hybrid (D)** — internal coil + embedded purification combined

## Results

| Scenario | Peak Temp (°C) | Heat Recovered (%) | Notes |
|----------|---------------|--------------------|-------|
| Baseline | *** | 0 | Reference |
| Wrap coil (A) | *** | *** % | Simple retrofit |
| Internal coil (B) | *** | *** % | Most effective cooling |
| Embedded purification (C) | *** | *** % | Heat reuse |
| Hybrid (D) | *** | *** % | Best overall |

> *Quantitative scenario values withheld pending publication. Relative ranking and qualitative trends are described below.*

**Findings**

- Baseline shows rapid temperature rise that can exceed safe operating limits at high SBH concentrations
- Internal coil provides the most effective peak temperature reduction among individual strategies
- Embedded purification successfully recovers useful heat while slightly reducing reactor cooling effectiveness
- Hybrid achieves the best balance of thermal control and heat utilization, but introduces more complex control requirements
- Temperature rise is most sensitive to hydrogen generation rate during the early phase of operation
- Embedded purification shows mutually beneficial coupling: reaction heat improves CO catalysis efficiency while reducing reactor temperature

## Design Implications

- **Portable systems prioritizing simplicity**: external wrap coil gives meaningful improvement with minimal design change
- **Systems prioritizing thermal performance**: internal coil is preferred
- **Purification-efficiency-critical systems**: thermal integration of the purification module is worthwhile

## Limitations

- Lumped thermal model does not capture spatial temperature gradients within the reactor
- Catalyst activity degradation over time is not modeled
- Coil heat transfer coefficients estimated from correlations; experimental measurement would improve accuracy

→ Next: [CCPP-LOHC Optimization](/engineering/ccpp-lohc) applies the same methodology — parameterized simulation, scenario comparison, performance ranking — at MW-scale industrial integration.
