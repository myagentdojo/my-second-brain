---
name: ultragoal
description: "Design, critique, activate, or continue a durable goal on Codex or Claude Code, with explicit success checks, bounded scope, and vault-native project state."
---

# Ultragoal

Use for work that must survive several agent turns without losing the objective.
Read [the adaptation record](references/source.md) before changing this skill.

## Modes

- **Design**: Shape the objective, boundary, proof, and next safe action.
- **Critique**: Find ambiguity, missing evidence, unsafe scope, or false completion.
- **Activate**: Start the persistent goal only after the user explicitly asks.
  How activation lands depends on the Harness. See [Activation by Harness](#activation-by-harness).
- **Continue**: Read the active goal and vault project packet, then take the next
  highest-value safe action.

## Workflow

1. Resolve the configured Super-vault through `~/.config/context/vault.md`.
2. Ground the request in the owning vault project and relevant source material.
3. Decide whether a persistent goal adds value. Keep short work as an ordinary
   task.
4. Define one concrete objective, explicit boundaries, acceptance checks, and a
   verifier.
5. Keep durable state in the project packet:
   - `README.md`: current state, ownership links, and next action.
   - `GOAL.md`: optional detail for a bounded active outcome.
   - `result.md`: completion evidence only.
6. Never create a running activity log. Promote decisions, findings, and proof
   into the canonical note instead.
7. Ask for user approval before irreversible, public, shared, or costly actions,
   or when the next action crosses a safety or ownership boundary.
8. Activate only after the user explicitly asks. Never infer activation from
   brainstorming, critique, or a request to draft `GOAL.md`. Follow
   [Activation by Harness](#activation-by-harness) for the calling contract.
9. Omit `token_budget` unless the user explicitly supplies one.
10. Continue until the acceptance checks pass or a genuine blocker prevents the
   next safe action.
11. Mark the goal complete only after the verifier confirms the result and the
    project packet records the evidence.

## Activation by Harness

Probe for the callable tool. Never infer it from a command's existence, or from
this skill having run before.

**Codex** exposes goal tools to skills, gated by `features.goals`. When
`create_goal` is present, call it with the objective. It sets and activates the
goal, and the current session then works toward it. Do not call `update_goal`;
terminal status belongs to the working session, not to activation.

**Claude Code** exposes no goal tools. `/goal` is a top-level user command that
a skill cannot invoke. Activation there means emitting a copyable `/goal` prompt
carrying the same objective, and telling the user it needs pasting. The durable
state in the vault project packet is what survives either way.

When neither path is available, say activation is unavailable and name the
missing primitive. Design, critique, and continuation still work, and the
project packet still holds the goal. Never report an emitted prompt as an
activated goal, and never treat a drafted `GOAL.md` as activation.

## Goal Packet

Before activation, make these fields unambiguous:

- **Objective**: One outcome, stated as observable change.
- **Why now**: The value of completing it.
- **In scope**: The systems, files, and people already authorized.
- **Out of scope**: Attractive work that would broaden the goal.
- **Acceptance**: Checks that distinguish done from plausible.
- **Verifier**: The command, review, or human confirmation that closes the goal.
- **Next action**: The first safe, concrete move.

## Active Goal Discipline

- Re-read the active goal and project `README.md` before each continuation.
- Prefer evidence over progress narration.
- Update durable state when the decision, boundary, or next action changes.
- Preserve unrelated work.
- Stop for user direction when completion needs new authority or a material
  change of scope.
