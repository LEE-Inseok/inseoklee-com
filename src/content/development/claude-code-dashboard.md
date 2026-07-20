---
title: Claude Code Dashboard
type: dashboard
status: published
summary: A self-updating HTML dashboard of my entire Claude Code setup — custom agents, skills, hooks, and a GPT cross-validation loop — generated and maintained by the AI itself.
date: "2026"
tags:
  - Claude Code
  - Agent Orchestration
  - Automation
  - HTML/CSS/JS
---

## What it is

A single self-contained HTML page that visualizes my entire Claude Code configuration: 11 custom subagents, 30+ skills and commands, PostToolUse hooks, plugins, and the CLAUDE.md rules that orchestrate them. The dashboard is generated and incrementally updated by a custom `/dashboard` skill — Claude scans its own configuration files, diffs them against the page, and edits only the sections that changed.

**→ [View the live dashboard](/dashboard.html)**

## Highlights

- **Self-maintaining** — an incremental-update skill compares badge counts against the real config and touches only changed sections, appending a changelog entry per run
- **Agent orchestration map** — 11 role-specialized subagents (developer, debugger, architect, verifiers, …) with a color-coded delegation scheme
- **GPT cross-validation loop** — plans and core code changes are adversarially reviewed by a second LLM (GPT via Codex CLI) with a file-based audit trail, before implementation proceeds
- **Hook automation** — PostToolUse hooks enforce writing style and auto-trigger cross-validation when a plan is finalized
- **Sanitized publishing pipeline** — a script strips private data (research memory, workspaces, local paths) from the canonical dashboard to produce this public copy

## Why

Working with AI agents is only productive when the configuration is legible. This page is the answer to "what exactly is my setup right now?" — kept honest because the same AI that uses the configuration is the one that documents it.
