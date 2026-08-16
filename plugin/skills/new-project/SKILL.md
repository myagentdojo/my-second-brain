---
name: new-project
description: "Create or update a resumable vault project packet with README, optional GOAL, and completion-only RESULT files."
---

# New Project

1. Read the vault root `AGENTS.md`, `README.md`, and `projects/README.md`.
2. Search existing project titles and slugs before creating a packet.
3. Use `templates/project/README.md` as the required resumable front door.
4. Add `GOAL.md` only when a bounded outcome needs more acceptance detail.
5. Add `result.md` only when completion evidence exists.
6. Keep implementation truth in its code repository; link to it from the
   packet.
7. Run `bun run check`.

Report the packet path, files created or updated, ownership links, and anything
left unverified.
