---
title: ALD-Lab-archive (RAG)
type: tool
status: draft
summary: RAG system over the ALD lab archive — accumulated documents and data, searchable and questionable in natural language. In active development.
date: "2026"
images:
  - src: /images/development/ald-lab-archive/01-architecture.png
    full: /images/development/ald-lab-archive/01-architecture-full.png
    captionTitle: System Architecture
    caption: >-
      Team members use the archive through a web app or an MCP connector in
      Claude / ChatGPT. The server only stores and searches — all LLM work runs
      elsewhere, so it costs nothing extra.
  - src: /images/development/ald-lab-archive/02-indexing-pipeline.png
    full: /images/development/ald-lab-archive/02-indexing-pipeline-full.png
    captionTitle: Indexing Pipeline (Flow A)
    caption: >-
      An uploaded paper is split into chunks and becomes searchable
      immediately. Related-paper candidates are queued at the same time — no
      LLM involved.
  - src: /images/development/ald-lab-archive/03-relationship-graph.png
    full: /images/development/ald-lab-archive/03-relationship-graph-full.png
    captionTitle: Relationship Graph (Flow B)
    caption: >-
      Two Claude models judge how each pair of papers relates. If they agree,
      the edge is confirmed; if not, it waits for human review.
tags:
  - RAG
  - Python
  - ALD
---

## What it is

A retrieval-augmented generation (RAG) system built on the ALD lab archive — indexing the group's accumulated documents and data so they can be searched and questioned in natural language.

In active development; details and repository link to follow.
