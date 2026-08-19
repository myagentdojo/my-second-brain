import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"

/**
 * `nextAction` is the machine-readable recovery step. Its constructor no
 * longer defaults, so omitting it fails to compile — but a site can still
 * satisfy the type while naming the command that just failed. `check` runs on
 * every operation, so no error may send a caller back to it.
 */
const source = readFileSync(join(import.meta.dir, "claude-development-installation.ts"), "utf8")

function constructions(): { code: string; body: string }[] {
	const found: { code: string; body: string }[] = []
	const pattern = /new ClaudeDevelopmentInstallationError\(\s*"([A-Z_]+)",([\s\S]*?)\n\t*\)/g
	let match = pattern.exec(source)
	while (match) {
		found.push({ code: match[1] as string, body: match[2] as string })
		match = pattern.exec(source)
	}
	return found
}

test("every error states a recovery step", () => {
	const silent = constructions()
		.filter((entry) => !entry.body.includes("nextAction"))
		.map((entry) => entry.code)

	expect(silent).toEqual([])
})

test("no recovery step is a bare rerun of the command that failed", () => {
	// Naming `check` after a repair step is a precondition, not a loop. Naming
	// it as the whole recovery is the defect: the caller repeats the failure.
	const looping = constructions()
		.filter((entry) => /nextAction:\s*\n?\s*"Run `bun run dev -- claude check/.test(entry.body))
		.map((entry) => entry.code)

	expect(looping).toEqual([])
})

test("the constructor keeps no default recovery step to inherit", () => {
	expect(source).not.toMatch(/nextAction\s*=\s*options\.nextAction\s*\?\?/)
})
