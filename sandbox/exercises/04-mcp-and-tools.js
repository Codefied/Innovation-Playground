// ============================================================
// Exercise 04: MCP & External Tools
// ============================================================
//
// MCP (Model Context Protocol) is how Claude Code connects to
// the outside world — databases, browsers, APIs, and more.
// This exercise covers the concepts. Your team will help you
// set up specific connections.
//
// PREREQUISITE: Complete Exercises 01-03 first.
//
// ============================================================

// --- TASK 1: Understand the MCP Architecture ---
//
// Ask Claude: "Explain MCP (Model Context Protocol) like I'm
//              a new grad who's never seen it before. Use a
//              simple analogy."
//
// The key mental model:
//   Claude Code  ←→  MCP Server  ←→  External System
//   (your AI)        (adapter)       (database, browser, etc.)
//
// MCP servers are like USB adapters — they translate between
// Claude's tool interface and external systems.
// Concept: MCP = standardized way to plug tools into AI.


// --- TASK 2: See MCP in Action ---
//
// Ask Claude: "What MCP tools are currently available in this
//              session? List them and explain what each does."
//
// Depending on your plugins, you might see tools like:
//   mcp__playwright__browser_navigate
//   mcp__playwright__browser_snapshot
//
// Each MCP tool follows the pattern: mcp__<server>__<action>
// Concept: MCP tools appear alongside built-in tools (Read, Write, etc.)


// --- TASK 3: How Plugins Enable MCP ---
//
// Ask Claude: "Read rolands-setup/settings.json and explain
//              the enabledPlugins section. How do plugins
//              relate to MCP servers?"
//
// Plugins can bundle:
//   - MCP server connections (tools)
//   - Agent definitions
//   - Skills (slash commands)
//   - Rules and config
//
// Concept: Plugins are packages that install MCP servers,
// agents, skills, and rules all at once.


// --- TASK 4: The Permission Model ---
//
// Ask Claude: "How does Claude Code decide which MCP tools
//              it's allowed to use? Walk me through the
//              permission flow."
//
// Key concepts:
//   - permissions.allow in settings.json whitelists tools
//   - "defaultMode": "plan" makes Claude ask before acting
//   - Users approve/deny at runtime for unlisted tools
//
// Concept: You control what Claude can access. Start restrictive,
// open up as trust grows.


// --- TASK 5: Common MCP Use Cases ---
//
// Ask Claude: "Give me 5 real-world examples of how teams
//              use MCP at work. For each, explain the MCP
//              server, what it connects to, and why."
//
// Common patterns:
//   - Playwright → Browser automation and testing
//   - Database servers → Query data warehouses
//   - GitHub → PR management, issue tracking
//   - Slack → Team communication
//   - Vercel → Deployment management
//
// Concept: MCP is most powerful when it connects Claude to
// systems your team already uses.


// --- TASK 6: Build a Mental Model ---
//
// Ask Claude: "Help me draw an ASCII diagram of how Claude Code,
//              MCP servers, plugins, and external systems all
//              connect together. Save it to sandbox/mcp-diagram.txt"
//
// This exercise helps you visualize the full architecture.
// Understanding the layers helps you troubleshoot when things
// don't work.
// Concept: Architecture understanding > memorizing tool names.


// --- TASK 7: Plan Your Team's Setup ---
//
// Ask Claude: "Based on what I've learned, what MCP connections
//              would be most useful for a new developer at a
//              SaaS company? Help me make a wishlist."
//
// Think about:
//   - What databases does your team use?
//   - What deployment tools?
//   - What communication tools?
//   - What testing infrastructure?
//
// Your team lead will help you set these up. This exercise
// prepares you to have that conversation.
// Concept: Knowing what's possible > knowing how to configure.


// ============================================================
// DONE? Move on to Exercise 05: sandbox/exercises/05-meta-game.js
// ============================================================

const tasks = [
  "Understand MCP architecture",
  "See MCP tools in current session",
  "How plugins enable MCP",
  "Understand the permission model",
  "Common MCP use cases",
  "Build a mental model diagram",
  "Plan your team's ideal setup"
]

console.log("\n  Exercise 04: MCP & External Tools")
console.log("  ==================================\n")
tasks.forEach((task, i) => {
  console.log(`  [ ] Task ${i + 1}: ${task}`)
})
console.log("\n  MCP connects Claude to your team's world!\n")
