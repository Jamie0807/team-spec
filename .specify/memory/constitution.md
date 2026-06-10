# Team Spec Constitution

## Core Principles

### I. Specification First

Every feature starts with a Spec Kit feature directory containing `spec.md`,
`plan.md`, and `tasks.md`. Implementation should trace back to user stories,
functional requirements, and acceptance scenarios in `spec.md`.

### II. User-Visible Value

Features must prioritize independently testable user journeys. UI changes should
describe visible states, error handling, and responsive behavior before coding.

### III. Frontend Stack Consistency

The project uses React 19, TypeScript, Vite, and Tailwind CSS. New frontend code
must follow this stack unless a plan explicitly justifies a different choice.

### IV. Quality Gates

Broad changes must pass:

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

Failures block handoff and commit.

### V. Human Approval Gates

UI design must be approved before implementation starts. Git commits require
human approval after the final diff, validation result, and commit message are
shown.

## Project Constraints

- Keep source code under `src/` unless configuration or tooling changes require
  otherwise.
- Prefer TypeScript and Tailwind utility classes for new frontend code.
- Do not commit `node_modules` or `dist`.
- Do not introduce new dependencies without documenting the need in `plan.md`.

## Development Workflow

Use official Spec Kit Skills for new features:

1. `$speckit-specify`
2. `$speckit-plan`
3. `$speckit-tasks`
4. `$speckit-implement`

Project-specific `team-spec-*` Skills may supplement this flow, but they must
write or reference the official `spec.md`, `plan.md`, and `tasks.md` artifacts.

## Governance

This constitution supersedes ad hoc workflow notes. Updates must be reflected in
`AGENTS.md` and any affected Skill instructions.

**Version**: 1.0.0 | **Ratified**: 2026-06-09 | **Last Amended**:
2026-06-09
