---
name: new-note
description: "Create or update one canonical vault note for a person, area, system, organization, product, decision, reference, or inbox capture."
---

# New Note

1. Resolve the configured Super-vault through `~/.config/context/vault.md`.
2. Read the vault root `AGENTS.md` and `README.md`.
3. Read the destination family `README.md`.
4. Search for the canonical existing note before creating one.
5. Read `templates/manifest.json`; choose the mapped family template.
6. Fill the universal frontmatter from `schemas/frontmatter-contract.json`.
7. Add family fields only when its contract requires them. Remove empty optional
   fields.
8. Keep confirmed facts, self-report, and interpretation distinct when the
   difference affects a decision.
9. Run `bun run check`.

Report the canonical path, whether it was created or updated, source evidence,
and anything left unverified.
