---
title: LOHC-CCPP Interactive Dashboard
type: dashboard
status: published
summary: Browser-based analysis dashboard for the CCPP–LOHC heat-integration study — upload Aspen sweep results and explore energy, H2 production, conversion, and exergy across extraction lines. Ships with a 10-point trial dataset.
date: "2026"
tags:
  - JavaScript
  - Chart.js
  - SheetJS
  - Aspen Plus
  - Exergy Analysis
---

## What it is

A single-file, client-side dashboard for exploring the CCPP–LOHC dehydrogenation study: drop in Aspen Plus sweep results (Excel) and it renders total energy, H₂ production, MCH conversion, turbine power breakdown, and exergy metrics per extraction line — plus a side-by-side line comparison with a performance radar.

**→ [Open the live dashboard](/lohc-dashboard/)** — click *Load demo data* to explore a trial subset instantly.

## Highlights

- **Zero backend** — Excel parsing (SheetJS), thermodynamic post-processing, and charting (Chart.js) all run in the browser; uploaded files never leave your machine
- **Trial dataset included** — 15 evenly-spaced operating points per extraction line (Lines 5, 6, 9), sampled from the full 100-case v14 LHS study; the complete dataset accompanies the paper (in preparation)
- **Flexible column mapping** — alias-based schema matching tolerates renamed Aspen variables across model revisions
- **Line comparison mode** — picks the nearest matching operating point per line and compares five KPIs plus a normalized radar chart
- **Part of a pipeline** — consumes output from the [Aspen Automation Framework](/development/aspen-automation) powering the [CCPP-LOHC optimization study](/research/ccpp-lohc)
