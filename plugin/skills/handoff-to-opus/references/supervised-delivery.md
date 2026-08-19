# Supervised delivery

## Package the unit

Give Opus:

- one observable outcome;
- exact inclusions, exclusions, owner paths, and preserved state;
- accepted decisions and invariants;
- current fixed point and write custody;
- named acceptance checks;
- the first falsifiable artifact;
- approval and stop boundaries;
- progress only at preflight, first RED, first GREEN, blocker, and handback.

Tell Opus: make routine implementation decisions; ask only when two reasonable
interpretations would materially change the public contract. The named
acceptance checks are the verification contract. Add another self-review,
recheck, or verification agent only for genuinely independent work required by
a concrete finding.

Use `high` effort by default. Use `xhigh` only for a genuinely broad,
cross-package unit. Bind one approved model and implementation effort for the
unit and every continuation.

## Preflight dependencies

Before creating a window, prove the implementation harness can discover the
installed `handoff` skill. For **Two-axis** review, also prove it can discover
the installed `code-review` skill. Stop before launch when a dependency required
by the bound mode is absent or unreadable. **Single-agent** review neither
requires nor invokes `code-review`.

Use repository-native commands and runners for every verification lane. Do not
use MCP runners for tests, typecheck, lint, format, or other proof. If the
native owner cannot express the named proof, stop before substituting another
runner and return the exact missing capability to the Supervisor.

## Launch visibly

1. Capture the exact attached client with
   `tmux list-clients -F '#{client_tty}|#{client_pid}|#{session_name}|#{client_name}'`.
   Follow each `client_pid` process ancestry and retain only a client whose
   ancestry reaches Ghostty. If zero remain, stop with `ghostty_client_absent`.
   If multiple remain, ask Nathan which `client_tty` to use.
2. Count clients attached to the selected session. When it has multiple
   clients, stop for explicit approval of the collateral current-window change
   or approval to create a dedicated session for the selected client.
3. Create one unique window in the owner checkout and retain its returned ID:
   `tmux new-window -d -P -F '#{window_id}' -t <session> -n <unique-name> -c <owner-checkout>`.
   Select that `window_id`, switch only the exact client, then verify
   `client_tty`, session, `window_id`, and `pane_current_path` with
   `tmux display-message -c <client_tty> -p '#{client_tty}|#{session_name}|#{window_id}|#{pane_current_path}'`.
4. Launch a fresh session with `claude --model <approved-opus-model> --effort
   <approved-effort>` from the verified pane. When a repository development
   launcher owns discovery but cannot forward model and effort, use its
   stage-only or no-launch route, then append its discovered plugin arguments
   to that exact Claude command.
5. Prove the resolved model and effort accept one no-work probe turn before
   delivering the task packet. A banner, alias, or setting that displays an
   effort does not prove the model accepts it. Treat a rejected effort as an
   unlaunched session, rebind a supported approved effort, and deliver the
   packet once. Never let a rejected first turn consume the packet.
6. Use Plan Mode for read-only preparation and normal interactive permissions
   for implementation.

Stop when the exact client cannot be identified or switched. Do not substitute
another tmux session or a hidden background process.

## Supervise implementation

- Require one falsifiable artifact within five minutes after grounding.
- At that deadline, interrupt broad reconnaissance and request the named
  artifact.
- Intervene on the wrong seam, scope crossing, contradicted accepted invariant,
  an abstraction not earned by the accepted spec, another writer's files,
  ungranted authority, or a repeated blocker without new evidence.
- When RED needs a deliberate source perturbation, require the exact revert
  before the next unrelated edit. Record the perturbed path, the restoring diff,
  and the GREEN rerun that proves restoration. An unreverted perturbation in a
  shared checkout is a blocker, not a pending step.
- Keep shared dirty-checkout inspection read-only. Use a separate clean checkout
  for counterfactual proof. Never stash, reset, restore, checkout, clean, or
  switch branches to isolate a hypothesis in the shared checkout. A violation
  ends the session at read-only inventory and Supervisor handoff.
- End the implementation session at its verified handback or approved commit
  boundary. Use a fresh context for review.
- Before a third correction on the same issue, roll over through `handoff` with
  a corrected task packet instead of continuing the degraded session.

## Roll over context

Require the Claude status line to expose `ctx:<remaining>%`; its current owner
is `$HOME/.claude/statusline-command.sh`. Stop before a long unit when the
signal is absent. Read the value as context remaining.

At `ctx:50%` or lower:

1. Let the current atomic command settle.
2. Have the Supervisor enter `/handoff <continuation purpose>` into the exact
   implementation pane. Require its returned OS temporary-file path and a
   checkpoint containing the unit, fixed point, touched files, diff state,
   completed proof, unresolved findings, model, approved implementation
   effort, remaining approvals, and one next safe action.
3. Have the Supervisor read and validate that path before exiting the old
   session.
4. Exit or clear the old session, launch a fresh implementation continuation,
   reapply the checkpointed model and effort, and rebuild live Git and process
   state from the checkpoint.

An in-chat summary is not a rollover checkpoint. Never continue implementation
below the threshold.

If `handoff` is undiscoverable or returns no readable path, keep the old
session intact, prohibit further implementation, and report the exact missing
dependency or unreadable checkpoint.

## Review separately

1. Snapshot HEAD, index, worktree, and untracked state. Use a dedicated clean
   checkout when the reviewed target is committed; otherwise retain the owner
   checkout needed to expose the exact uncommitted diff.
2. Bind one review delegation mode before launch:
   - **Two-axis**: explicitly invoke `code-review`; admit only its declared
     Standards and Spec sub-agents.
   - **Single-agent**: when the user or packet forbids sub-agents, do not invoke
     `code-review`; give the fresh reviewer both axes and require direct review.
   Never combine a no-sub-agents packet with the sub-agent-owning workflow.
3. Start a fresh Opus session with `--permission-mode plan` and report-only
   authority. Give it the exact fixed point and implementation diff. Require
   standards and correctness findings with exact evidence under the bound mode.
4. Recheck HEAD, index, worktree, and untracked state after review. Any drift
   invalidates the review. Keep activation, push, PR, and external effects
   outside the reviewer authority.
5. Have the Supervisor validate every finding. Route accepted fixes to a fresh
   implementation session, then use a fresh reviewer.
6. Stop after one repair cycle unless the user approves another.

## Hand back

Report the implementation, continuation, and review windows; model and effort;
checkpoint paths; touched files and proof; remaining gaps; reviewed range;
finding dispositions; private receipt location and retention owner; and one
next approval or safe action.
