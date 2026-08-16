---
name: new-project
description: "Create or update a resumable vault project packet with README, optional GOAL, and completion-only RESULT files."
---

# New Project

1. Resolve the configured Super-vault through `~/.config/context/vault.md`.
2. Read the vault root `AGENTS.md`, `README.md`, and `projects/README.md`.
3. Search existing project titles and slugs before creating a packet.
4. When a matching project has an unrelated active `GOAL.md`, preserve it and create a separate bounded project packet.
5. Use `templates/project/README.md` as the required resumable front door.
6. Add `GOAL.md` only when a bounded outcome needs more acceptance detail.
7. Add `result.md` only when completion evidence exists.
8. Keep implementation truth in its code repository; link to it from the
   packet.
9. Run `bun run check`.

Report the packet path, files created or updated, ownership links, and anything
left unverified.
