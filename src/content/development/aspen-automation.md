---
title: Aspen Automation Framework
type: framework
summary: Python pipeline turning Aspen Plus into an automated engine — DOE, parallel simulation, surrogate training, optimization. 1,575 cases in hours instead of weeks.
date: "2024"
tags:
  - Python
  - COM API
  - DOE
  - Surrogate Modeling
  - NSGA-II
  - Bayesian Optimization
---

## What it is

A Python pipeline that turns Aspen Plus from an interactive tool into an automated engine — DOE generation, parallel simulation, surrogate training, and optimization, end to end.

## Highlights

- **1,575 simulations completed in hours** instead of weeks of manual clicking
- COM-driven engine with failure isolation — one crashed case never aborts the run
- Surrogate comparison (RF · GB · NN · GP) feeding Bayesian and NSGA-II optimizers
- Configuration-driven: a new study is a new YAML file, not new code
- Powers the [CCPP-LOHC Optimization](/research/ccpp-lohc) study end-to-end

## Repository

→ [github.com/LEE-Inseok/aspen-automation](https://github.com/LEE-Inseok/aspen-automation)
