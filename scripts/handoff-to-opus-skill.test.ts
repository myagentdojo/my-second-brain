import { describe, expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"

const root = join(import.meta.dir, "..")
const skill = readFileSync(join(root, "plugin", "skills", "handoff-to-opus", "SKILL.md"), "utf8")
const supervisedDelivery = readFileSync(
	join(root, "plugin", "skills", "handoff-to-opus", "references", "supervised-delivery.md"),
	"utf8",
)
const codeRabbitExactRange = readFileSync(
	join(root, "plugin", "skills", "handoff-to-opus", "references", "coderabbit-exact-range.md"),
	"utf8",
)
const normalizedSkill = skill.replaceAll(/\s+/g, " ")
const normalizedDelivery = supervisedDelivery.replaceAll(/\s+/g, " ")
const normalizedCodeRabbit = codeRabbitExactRange.replaceAll(/\s+/g, " ")

describe("handoff-to-opus model-only contract", () => {
	test("publishes one narrow explicit trigger", () => {
		expect(skill).toMatch(/^---\nname: handoff-to-opus\n/)
		expect(skill).toContain("latest user request explicitly names this skill")
		expect(skill).toContain("Inferred usefulness is absent intent")
		expect(skill).toContain("This is a behavioral gate")
		expect(skill).toContain("Runtime-level Codex enforcement is not proved")
		expect(skill).toContain("No task supplied: ask which bounded unit")
		expect(skill).not.toContain("disable-model-invocation")
	})

	test("keeps the main skill as a thin branch router", () => {
		expect(skill.split("\n").length).toBeLessThan(50)
		for (const required of [
			"invoking agent as **Supervisor**",
			"monitoring, intervention",
			"references/supervised-delivery.md",
			"references/coderabbit-exact-range.md",
			"Stop before commit, push, PR, merge, activation, destructive cleanup",
		]) {
			expect(normalizedSkill).toContain(required)
		}
	})

	test("binds visible supervision, durable rollover, and fresh review", () => {
		for (const required of [
			"progress only at preflight, first RED, first GREEN, blocker, and handback",
			"make routine implementation decisions",
			"materially change the public contract",
			"named acceptance checks are the verification contract",
			"only for genuinely independent work required by a concrete finding",
			"installed `handoff` and `code-review` skills",
			"tmux list-clients -F '#{client_tty}|#{client_pid}|#{session_name}|#{client_name}'",
			"ancestry reaches Ghostty",
			"stop with `ghostty_client_absent`",
			"multiple clients",
			"tmux new-window -d -P -F '#{window_id}' -t <session> -n <unique-name> -c <owner-checkout>",
			"tmux display-message -c <client_tty>",
			"claude --model <approved-opus-model> --effort <approved-effort>",
			"stage-only or no-launch route",
			"Verify the resolved model and effort",
			"one falsifiable artifact within five minutes",
			"At that deadline, interrupt broad reconnaissance",
			"wrong seam",
			"an abstraction not earned by the accepted spec",
			"Before a third correction on the same issue",
			"At `ctx:50%` or lower",
			"$HOME/.claude/statusline-command.sh",
			"Supervisor enter `/handoff <continuation purpose>`",
			"OS temporary-file path",
			"model, approved implementation effort",
			"keep the old session intact",
			"prohibit further implementation",
			"Snapshot HEAD, index, worktree, and untracked state",
			"`--permission-mode plan` and report-only authority",
			"Supervisor explicitly invoke `code-review`",
			"Any drift invalidates the review",
		]) {
			expect(normalizedDelivery).toContain(required)
		}
	})

	test("binds one report-only exact-range CodeRabbit review", () => {
		for (const required of [
			"approved base SHA, target SHA, expected commit count",
			"expected ancestor",
			"commit count and file inventory match the packet",
			"dedicated clean checkout",
			"coderabbit --version",
			"Refuse unsupported or unapproved versions",
			"coderabbit review --help",
			"caffeinate -dimsu coderabbit review --agent --committed --base-commit <base> --dir <checkout>",
			"directory mode `0700`",
			"files mode `0600`",
			"Do not auto-fix or apply suggestions",
			"one completed event",
			"Any drift invalidates the receipt",
		]) {
			expect(normalizedCodeRabbit).toContain(required)
		}
		expect(normalizedCodeRabbit).not.toContain("--type committed")
	})
})
