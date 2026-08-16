import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join, resolve } from "node:path"

import { claudeWatchSources } from "./dev"
import { pluginPayloadInventory } from "./plugin-files"

const root = resolve(import.meta.dir, "..")

test("Claude development watches workspace, runtime, manifest, and lock inputs", () => {
	const recursivePaths = new Set(
		claudeWatchSources.filter(({ recursive }) => recursive).map(({ relativePath }) => relativePath),
	)
	const filePaths = new Set(
		claudeWatchSources.filter(({ recursive }) => !recursive).map(({ relativePath }) => relativePath),
	)

	for (const relativePath of [
		"runtime",
		"packages",
		"plugin/skills",
		"plugin/hooks",
		"plugin/assets",
		"plugin/.claude-plugin",
		"plugin/.codex-plugin",
	]) {
		expect(recursivePaths.has(relativePath)).toBe(true)
	}
	for (const relativePath of ["package.json", "bun.lock", "bunfig.toml", "plugin.config.json"]) {
		expect(filePaths.has(relativePath)).toBe(true)
	}
})

test("Claude development stages an enabled session-only copy of the canonical payload", () => {
	const result = Bun.spawnSync({
		cmd: ["bun", "run", "scripts/dev.ts", "claude", "--check"],
		cwd: root,
		stdout: "pipe",
		stderr: "pipe",
	})
	expect(result.exitCode).toBe(0)
	expect(result.stdout.toString()).toContain("Claude development check passed")

	const stagedRoot = join(root, ".dev", "claude")
	const canonicalInventory = pluginPayloadInventory(root)
	expect(pluginPayloadInventory(stagedRoot)).toEqual(canonicalInventory)

	const manifestPath = ".claude-plugin/plugin.json"
	const canonicalManifest = JSON.parse(readFileSync(join(root, "plugin", manifestPath), "utf8"))
	const stagedManifest = JSON.parse(
		readFileSync(join(stagedRoot, "plugin", manifestPath), "utf8"),
	)
	expect(canonicalManifest.defaultEnabled).toBe(false)
	expect(stagedManifest).toEqual({ ...canonicalManifest, defaultEnabled: true })

	for (const relativePath of canonicalInventory) {
		if (relativePath === manifestPath) continue
		expect(readFileSync(join(stagedRoot, "plugin", relativePath))).toEqual(
			readFileSync(join(root, "plugin", relativePath)),
		)
	}
})
