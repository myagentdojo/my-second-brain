---
name: handoff-to-opus
description: "User-requested Opus handoff: supervise one bounded coding unit through fresh implementation, rollover, review, and exact-range CodeRabbit lanes."
---

# Handoff to Opus

Run only when the latest user request explicitly names this skill or explicitly
asks to hand one bounded unit to Opus. Inferred usefulness is absent intent;
ask for explicit invocation before launching Opus.

This is a behavioral gate. Runtime-level Codex enforcement is not proved.

## Resolve the unit

1. Resolve one outcome, owner checkout, issue or spec, acceptance checks, and
   stop boundary.
2. Reconcile current Git state, active writers, accepted decisions, and granted
   authority.
3. For a dirty owner checkout, record the pre-edit HEAD, index, tracked and
   untracked inventory, named custody hashes, and every other owner's paths.
   This baseline is the recovery oracle.
4. Keep the invoking agent as **Supervisor**. Own scope, approvals, checkout
   custody, monitoring, intervention, review disposition, and final handback.
5. Ask one question only when the unit, writer, or authority is materially
   ambiguous.

No task supplied: ask which bounded unit and checkout Opus should receive.

## Route the work

Read [supervised delivery](references/supervised-delivery.md) before launching
the implementation or review session. Complete its handoff, visibility,
intervention, rollover, and review gates.

After the reviewed exact commit exists, read
[exact-range CodeRabbit](references/coderabbit-exact-range.md). Complete that
report-only lane once for the approved range.

Stop before commit, push, PR, merge, activation, destructive cleanup, or
external mutation unless the user explicitly grants that authority.
