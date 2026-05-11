---
title: SBH Hydrogen Energy System
status: published
summary: Bench-scale integrated testbed converting sodium borohydride hydrolysis into electricity via PEM fuel cell, with full system thermal characterization.
date: "2024"
tags:
  - SBH
  - Hydrolysis
  - PEM Fuel Cell
  - Thermal Analysis
  - Bench-scale
chapters:
  - number: 1
    title: Background
  - number: 2
    title: System
  - number: 3
    title: Experiment
  - number: 4
    title: Model
  - number: 5
    title: Analysis
  - number: 6
    title: Results
---

## Background

Sodium borohydride (NaBH4) hydrolysis produces hydrogen on demand without high-pressure storage:

```
NaBH4 + 2H2O → NaBO2 + 4H2    ΔH ≈ −210 kJ/mol H2
```

This allows a compact, on-demand bench system to be built and operated in a lab setting — generation rate is directly controlled by catalyst exposure and concentration, with no pressure valves required. The reaction is strongly exothermic, so thermal management is not optional, it determines stability.

The PEM fuel cell requires hydrogen purity > 99.97% with CO < 10 ppm; even trace CO irreversibly poisons Pt anode catalysts. A purification stage between the reactor and fuel cell exists specifically because these two subsystems have incompatible tolerances.

## System Architecture

The system converts chemical energy in sodium borohydride into electricity via a PEM fuel cell. Hydrogen is generated on demand through catalytic hydrolysis, purified, and fed directly to the fuel cell anode.

**Components**

- **SBH Hydrogen Production Reactor** — exothermic catalytic hydrolysis; generation rate controlled by catalyst activity and SBH concentration
- **Gas Purification Unit** — removes water vapor and trace CO before fuel cell entry; CO < 10 ppm requirement
- **PEM Fuel Cell Module** — converts H2 and O2 to electricity; characterized by IV curves and EIS
- **Measurement** — thermocouples at key system points, hydrogen flow meter, EIS spectrometer

**System Integration**

The subsystems are coupled through: gas flow path (H2 reactor → purification → fuel cell anode), thermal interaction (heat propagation through the system), and flow rate balance (generation rate must match consumption).

## Characterization

**IV Curve** maps voltage vs. current density across three loss regimes: activation (low current), ohmic (mid), and mass transport (high). Power density peaks in the ohmic region.

**EIS** applies a small AC perturbation across a frequency range to measure impedance components — the Nyquist plot reveals R_ohm (membrane resistance), R_ct (charge transfer kinetics), and Warburg (gas diffusion). CO poisoning shows up as increased R_ct before performance degradation is visible in the IV curve.

## Results

| Metric | Value | Notes |
|--------|-------|-------|
| H2 generation rate | *** mL/min | At *** wt% SBH |
| Peak power density | *** mW/cm² | Clean H2 condition |
| System efficiency | *** % | At operating point |
| Reactor temperature rise | *** °C | During generation |

> *Quantitative results withheld pending publication. Order of magnitude and methodology are described above.*

**Findings**

- SBH hydrolysis produces a stable and controllable hydrogen supply, but thermal management is a critical design constraint at bench scale
- PEM fuel cell performance was strongly sensitive to hydrogen purity — CO levels above ~10 ppm caused measurable power loss
- Integrated system operation revealed thermal coupling effects not observable in isolated component testing
- The thermal model successfully reproduced experimental temperature profiles, providing a validated basis for subsequent scenario simulation

## Limitations

- Results are specific to lab-scale conditions; thermal behavior differs significantly at larger scales
- Catalyst deactivation over long operation was observed but not fully characterized
- Humidity management between purification and fuel cell was simplified

→ Next: [Thermal System Simulation](/engineering/sbh-thermal) extended this experiment into a multi-scenario heat-recovery study.
