# Spec Kit Demo Workbench Design

## Purpose

Transform this repository from a single login-form example into an external-facing
portfolio project that demonstrates a complete Spec Kit workflow. The project
should show both a usable AI development workbench experience and the evidence
trail behind each delivered feature.

The primary audience is recruiters, interviewers, and engineering reviewers who
open the GitHub repository or run the app from a resume link.

## Positioning

The project will be presented as **Team Spec Workbench**: an AI-assisted
development workbench for managing team features, project knowledge, and
delivery evidence through Spec Kit.

The portfolio message is:

> Built a React 19 + TypeScript workbench that demonstrates specification-first
> delivery with Spec Kit, where every feature is backed by spec, plan, tasks, and
> verification artifacts.

## MVP Scope

The first public-facing milestone is a resume MVP:

- Rewrite the README as an external project showcase.
- Replace the current single-purpose login page with a workbench-oriented home
  experience.
- Show the Spec Kit process as a first-class workflow:
  `Constitution -> Specify -> Plan -> Tasks -> Implement -> Verify`.
- Use the existing `001-login-form` feature as the first completed evidence
  example.
- Introduce static demo sections for future workbench capabilities:
  `Spec Browser`, `Team Tasks`, and `Knowledge Notes`.

The MVP should let a reviewer understand the project in roughly three minutes.

## Spec Kit Requirement

Every new product requirement must be represented through Spec Kit artifacts
before implementation.

For the first MVP, create a new feature directory:

```text
specs/002-spec-kit-demo-workbench/
```

It must include at minimum:

```text
spec.md
plan.md
tasks.md
```

The README refresh, workbench home page, feature evidence cards, process
timeline, and static demo sections all belong to this feature. Later standalone
capabilities should receive their own feature directories, for example:

- `003-spec-browser`
- `004-team-task-board`
- `005-knowledge-notes`

## Application Design

The app should feel like a focused developer workbench rather than a marketing
landing page. It should use dense, scannable sections and restrained visual
styling.

The first screen should include:

- Project title: `Team Spec Workbench`
- Short description of the AI-assisted Spec Kit workflow
- Summary metrics for completed features, Spec Kit artifacts, and quality gates
- A process timeline from constitution through verification
- A featured evidence card for `001-login-form`

The core sections should include:

- `Spec Browser`: a compact list of feature artifacts and their status
- `Team Tasks`: a board-style summary of task phases from `tasks.md`
- `Knowledge Notes`: a collection of decisions, design notes, and validation
  learnings

The current login form can remain available as evidence of the first delivered
feature, but the default user experience should communicate the broader
workbench concept.

## README Design

The README should be written for an external reviewer. It should lead with the
project story, then provide practical details.

Recommended structure:

1. Project overview
2. Resume highlights
3. Spec Kit workflow
4. Feature evidence map
5. Application screenshots or screen summary
6. Tech stack
7. Local setup
8. Quality checks
9. Repository structure

The README should make the Spec Kit evidence easy to inspect by linking to the
feature artifacts in `specs/`.

## Verification

Before calling the MVP complete, run:

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

Also perform a visual sanity check of the workbench page at desktop and mobile
widths to confirm that text, buttons, cards, and timeline content do not overlap
or overflow.

## Out of Scope For First MVP

- Real authentication
- Backend persistence
- Parsing markdown files at runtime
- Multi-user collaboration
- Live AI integrations
- Full task editing workflows

These can be introduced later as separate Spec Kit-backed features.

