// ============================================================
// Exercise 03: Skills, Agents & Plugins
// ============================================================
//
// You've got the basics and your own config. Now let's explore
// the power tools: agents that specialize in specific tasks,
// skills that create workflows, and plugins that extend Claude.
//
// PREREQUISITE: Complete Exercises 01 and 02 first.
//
// ============================================================

// --- TASK 1: Explore Agent Files ---
//
// Ask Claude: "List all files in rolands-setup/agents/ and
//              read the planner.md agent file"
//
// Notice the structure of an agent file:
//   1. YAML frontmatter (name, description, tools, model)
//   2. System prompt (role, process, format, best practices)
//
// Concept: Agents are markdown files that create specialized
// sub-instances of Claude with focused expertise.


// --- TASK 2: Compare Agents ---
//
// Ask Claude: "Read rolands-setup/agents/code-reviewer.md and
//              rolands-setup/agents/tdd-guide.md. Compare their
//              approaches — how are they different?"
//
// Key differences to notice:
//   - Tools they have access to (Read-only vs Read+Write)
//   - Their review criteria and checklists
//   - When they're meant to be used
//
// Concept: Good agents are opinionated and focused. Each one
// owns a specific part of the development workflow.


// --- TASK 3: Understand Agent Orchestration ---
//
// Ask Claude: "Read rolands-setup/rules/agents.md and explain
//              how agents work together"
//
// The key insight: agents can run in parallel for independent
// tasks, and they chain together for complex workflows:
//   planner → architect → tdd-guide → code-reviewer
//
// Concept: Agent orchestration = using the right specialist
// at the right time, like assembling a team.


// --- TASK 4: Study the Hooks System ---
//
// Ask Claude: "Read rolands-setup/rules/hooks.md and the hooks
//              section in rolands-setup/settings.json. Explain
//              how hooks automate quality checks."
//
// Hooks are automation triggers:
//   - PreToolUse: Block or warn before actions
//   - PostToolUse: Auto-format, check, verify after actions
//   - SessionEnd: Final audit before closing
//
// Concept: Hooks turn manual checks into automatic guardrails.


// --- TASK 5: Explore the Skills Example ---
//
// Ask Claude: "Read rolands-setup/skills-example/SKILL.md and
//              explain the difference between skills and agents"
//
// Skills vs Agents:
//   - Skills = slash commands (/commit, /review-pr)
//   - Agents = specialized sub-instances (planner, reviewer)
//   - Skills activate on command; agents are called by Claude
//
// Concept: Skills are user-triggered. Agents are system-triggered.


// --- TASK 6: Build Your Own Agent ---
//
// Ask Claude: "Read the template at sandbox/templates/starter-agent.md
//              and help me create a custom agent for [your use case]"
//
// BEFORE YOU START: Ask yourself — "Will I do this task repeatedly,
// or just once?" If it's a one-time thing, it's a project, not an
// agent. Agents are for tasks you'll run again and again.
//
// Ideas for your first agent:
//   - A code explainer that breaks down complex functions
//   - A documentation writer for your team's style
//   - A PR description generator
//   - A bug report formatter
//
// Save it to: ~/.claude/agents/my-agent.md
// Concept: The best agents encode YOUR team's specific knowledge.


// --- TASK 7: Test Your Agent ---
//
// After creating your agent, start a new session and test it.
// Ask Claude to use your agent on a real task.
//
// Iterate: Was the output useful? What would you change in the
// agent's system prompt to make it better?
//
// TIP: If you get bored reading your agent's output, it's too long.
// Good agent output is punchy and scannable. Tell your agent to be
// concise in its system prompt, and iterate until the output is
// something you'd actually read every time.
//
// Concept: Agent development is iterative. Write, test, improve.


// ============================================================
// DONE? Move on to Exercise 04: sandbox/exercises/04-mcp-and-tools.js
// ============================================================

const tasks = [
  "Explore agent files",
  "Compare different agents",
  "Understand agent orchestration",
  "Study the hooks system",
  "Explore skills vs agents",
  "Build your own agent",
  "Test and iterate on your agent"
]

console.log("\n  Exercise 03: Skills, Agents & Plugins")
console.log("  ======================================\n")
tasks.forEach((task, i) => {
  console.log(`  [ ] Task ${i + 1}: ${task}`)
})
console.log("\n  Agents are your force multipliers. Build wisely!\n")
