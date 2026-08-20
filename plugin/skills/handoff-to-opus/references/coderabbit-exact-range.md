# Exact-range CodeRabbit

Run this lane only after the reviewed exact commit exists.

## Bind the range

1. Carry the approved base SHA, target SHA, expected commit count, and expected
   file inventory from the unit packet.
2. Use a dedicated clean checkout whose HEAD equals the approved target. Verify
   the approved base is its expected ancestor and the exact `base...target`
   commit count and file inventory match the packet.
3. Record the exact base, target, branch or detached state, commit count, and
   file inventory.
4. Read and record the sanitized `coderabbit --version`. Compare it with the
   repository-approved version or range; when no owner exists, obtain explicit
   approval for the observed version. Refuse unsupported or unapproved versions.
5. Read the installed `coderabbit review --help` before selecting flags. Fail
   closed when the current CLI cannot bind the required committed range.
6. Verify authenticated status by shape only. Keep credentials, account
   identity, auth URLs, and cookies out of output.

The currently proven command shape is:

`caffeinate -dimsu coderabbit review --agent --committed --base-commit <base> --dir <checkout>`

The clean checkout binds the target when the CLI has no head selector. Never
review historical bytes from a newer or dirty checkout.

## Run once

1. Create a fresh private XDG receipt directory outside repositories and
   vaults with directory mode `0700` and files mode `0600`.
2. Run one report-only review. Capture stdout byte-for-byte as raw JSONL while
   preserving the process exit status. Do not auto-fix or apply suggestions.
3. Wait through heartbeats for the terminal event. Never rerun a completed
   review for the same exact range.
4. Require valid JSONL, one matching review context, one completed event, exit
   zero, and reviewed-file inventory equal to the preflight inventory.
5. Recheck HEAD, base binding, protected branch refs, status, index hash,
   cached diff, and worktree diff. Any drift invalidates the receipt.
6. Have the Supervisor independently classify valid findings, false positives,
   duplicates, and status noise.

Return an exact-range blocker before execution when checkout cleanliness,
range identity, CLI support, authentication shape, receipt custody, or
preservation cannot be proved.
