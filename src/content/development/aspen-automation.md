---
slug: aspen-automation
title: Aspen Automation Framework
type: framework
summary: Python automation pipeline for Aspen Plus — DOE generation, parallel simulation execution, surrogate model training, and optimization. Enabled a 1,575-case study completed in hours instead of weeks.
date: "2024"
tags:
  - Python
  - COM API
  - DOE
  - Surrogate Modeling
  - NSGA-II
  - Bayesian Optimization
---

## Problem

Aspen Plus is designed for interactive use. Running thousands of simulations for DOE-based dataset generation manually requires opening the simulation file, setting each input, running, recording results — for every case. At ~2–5 minutes per run and 1,000+ cases required for surrogate model training, manual operation is not feasible.

## Solution

Full pipeline automation from simulation to optimization:

| Stage | Module | Description |
|-------|--------|-------------|
| Simulation | `aspen_simulation_engine` | Python COM interface to Aspen Plus |
| DOE | `model_doe_generator` (GUI) | Grid / LHS design of experiments |
| Data collection | `simulation_worker` | Parallel simulation execution |
| Preprocessing | `preprocessing_engine` | Outlier removal, normalization |
| Surrogate training | `SurrogateTrainingPipeline` | RF, GB, NN, GP model comparison |
| Optimization | `BayesianOptimizer`, `MultiObjectiveOptimizer` | Bayesian + NSGA-II |

## Impact

- **1,575 simulations** completed in hours (vs. weeks manually)
- Eliminated human transcription errors in parameter setting and result recording
- Reusable pipeline applicable to any Aspen Plus model with minimal reconfiguration
- Powers the CCPP-LOHC optimization study end-to-end

## Architecture Highlights

- Document-level Reinit pattern eliminates convergence propagation contamination across runs
- Modular separation: DOE / simulation / preprocessing / training / optimization
- Configuration-driven scenarios — new study = new YAML config, no code change
- Failure isolation: one simulation crash does not abort the run; failed cases are flagged and retried

## Repository

→ [github.com/LEE-Inseok/aspen-automation](https://github.com/LEE-Inseok/aspen-automation)
