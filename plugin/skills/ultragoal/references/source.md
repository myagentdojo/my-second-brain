# Ultragoal Adaptation Record

- Upstream:
  [jxnl/personal-monorepo-template](https://github.com/jxnl/personal-monorepo-template/blob/df863768495aaf524a2bf9b5b25ef2622a2591a1/.codex/skills/ultragoal/SKILL.md)
- Upstream commit: `df863768495aaf524a2bf9b5b25ef2622a2591a1`
- Checked: 2026-08-06
- Local adaptation edited: 2026-08-06
- Local plugin version: `0.1.0`

Preserved:

- Design, critique, activation, and continuation modes.
- Explicit activation before calling `create_goal`.
- Objective, boundary, verifier, and completion-proof discipline.
- No inferred token budget.

Adapted:

- Use the vault project packet as durable state.
- Keep `README.md` required, `GOAL.md` optional, and `result.md`
  completion-only.
- Remove the default `WORKLOG.md`; this vault preserves durable meaning, not
  activity logs.
