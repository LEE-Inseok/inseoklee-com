---
title: ALD Life-Cycle Assessment
section: ald
status: published
summary: Cradle-to-gate LCA of Ru atomic layer deposition — a measurement-informed inventory and scenario framework quantifying where the environmental burden of a precious-metal ALD process actually sits, from laboratory reactor to manufacturing scale.
date: "2026-07"
images:
  - /images/research/ald-lca/project-scheme.svg
tags: [ALD, LCA, Sustainability]
---

## What it is

A cradle-to-gate life-cycle assessment of ruthenium ALD, built as parallel case studies across deposition platforms under the ISO 14044 framework. The system boundary covers precursor synthesis from mining through sublimation purification, co-reactant and purge gases, process electricity, and exhaust abatement, referenced to 1 cm²·nm of dense film on the Korean electricity grid.

![Project scheme](/images/research/ald-lca/project-scheme.svg)

## Approach

The precursor inventory for Ru(EtCp)₂ is constructed at three levels of data specificity — a database proxy as a screening lower bound, a reconstructed synthesis route with stoichiometric modeling and industrial scale-up correction, and patent-derived process constraints — with platinum-group co-product allocation resolved at the unit-process level. An in-situ metrology campaign (power profiling, precursor mass balance, gas accounting, condition anchoring, exhaust mass closure) anchors the laboratory scenario with measured data, from which single-wafer, batch-furnace, and spatial-ALD manufacturing scenarios are projected.

Impacts are computed in Brightway 2.5 with ecoinvent 3.12, with pedigree-based Monte Carlo uncertainty propagation (n = 20,000) and sensitivity analyses over co-product allocation, electricity mix, and precursor utilization. Climate change (GWP100) and mineral resource scarcity (crustal scarcity indicator) are assessed in parallel. The full analysis is reproducible from archived inventory data through a single computational workflow.

## Status

Inventory model and computational pipeline are complete and validated against published Al₂O₃ ALD benchmarks; the manuscript is in preparation and the experimental campaign is scheduled.
