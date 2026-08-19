import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"

/**
 * `nextAction` is the machine-readable recovery step, so an agent that trusts
 * it must not be sent back to the command that just failed. The generic
 * default names `check`, which is a loop for any error `check` itself raises.
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

test("every inspection error states a recovery step other than rerunning check", () => {
	// Codes reachable from `check`, where the default would name the failing
	// command. Errors raised only by install or restore may still point at
	// `check`, because there it is a genuine next step.
	const inspectionCodes = new Set([
		"DEVELOPMENT_MARKETPLACE_MISMATCH",
		"PRODUCTION_MARKETPLACE_MISSING",
		"DEVELOPMENT_MARKETPLACE_MISSING",
		"UNKNOWN_PLUGIN_IDENTITY",
		"NON_USER_PLUGIN_IDENTITY",
		"AMBIGUOUS_PLUGIN_IDENTITY",
		"DEVELOPMENT_LINK_MISMATCH",
	])

	const silent = constructions()
		.filter((entry) => inspectionCodes.has(entry.code))
		.filter((entry) => !entry.body.includes("nextAction"))
		.map((entry) => entry.code)

	expect(silent).toEqual([])
})
