// ============================================================
// Exercise 02: Build Your CLAUDE.md
// ============================================================
//
// Now that you know the basics, it's time to teach Claude Code
// about YOU. The CLAUDE.md file is how you customize Claude's
// behavior for your projects.
//
// PREREQUISITE: Complete Exercise 01 first.
//
// ============================================================

// --- TASK 1: Understand CLAUDE.md ---
//
// Ask Claude: "Read the file CLAUDE.md in the project root
//              and explain what it does"
//
// Notice how the CLAUDE.md in THIS project makes Claude act
// as a teacher. That's the power of project-level config —
// it changes Claude's entire personality and behavior.
// Concept: CLAUDE.md is read at session start and shapes everything.


// --- TASK 2: Study a Real CLAUDE.md ---
//
// Ask Claude: "Read rolands-setup/CLAUDE.md and explain each section"
//
// This is a sanitized version of a real production CLAUDE.md.
// Notice the sections:
//   - Folder Organization: How projects are structured
//   - Workflow Preferences: How the developer likes to work
//   - Available Tools: What external tools are configured
//   - Session Learnings: Auto-appended notes across sessions
//
// Concept: A good CLAUDE.md captures your workflow, not just rules.


// --- TASK 3: Study Rules Files ---
//
// Ask Claude: "List all files in rolands-setup/rules/ and
//              give me a one-sentence summary of each"
//
// Rules files handle specific domains. They're loaded alongside
// CLAUDE.md and give Claude deep expertise in each area.
// Concept: Rules = domain expertise. CLAUDE.md = personal preferences.


// --- TASK 4: Create Your Own CLAUDE.md ---
//
// Ask Claude: "Read the template at sandbox/templates/starter-claude.md
//              and help me fill it out for my preferences"
//
// Claude will walk you through creating your personalized CLAUDE.md.
// Save it to your home directory when ready:
//   ~/.claude/CLAUDE.md
//
// Concept: Start with a template, then customize over time.


// --- TASK 5: Create Your First Rules File ---
//
// Ask Claude: "Read sandbox/templates/starter-rules.md and
//              help me create a coding style rules file based
//              on my preferences"
//
// Save it to: ~/.claude/rules/coding-style.md
//
// Concept: Rules files are additive — each one adds expertise
// without cluttering your main CLAUDE.md.


// --- TASK 6: Test Your Config ---
//
// Start a NEW Claude Code session (type /exit, then claude)
// and ask: "What do you know about my preferences?"
//
// Claude should reflect back what you put in your CLAUDE.md.
// If it doesn't, check that the files are in the right locations.
//
// HEADS UP: When you reopen Claude Code, it won't remember your
// previous conversation — that's how sessions work. Your CONFIG
// persists (CLAUDE.md, rules), but conversation history does not.
// To pick up where you left off, tell Claude:
//   "I'm working on the ai-grad-course, Exercise 02 Task 6."
//
// Concept: Config is loaded fresh each session. Changes take
// effect immediately on restart. Conversation memory does not carry over.


// --- TASK 7: The Settings File ---
//
// Ask Claude: "Read rolands-setup/settings.json and explain
//              what each section does"
//
// Key concepts to understand:
//   - permissions.allow: Auto-approved commands
//   - permissions.defaultMode: plan vs normal mode
//   - hooks: Automation that runs before/after tool use
//   - enabledPlugins: Installed plugin packages
//
// YOUR ACTION ITEM: Your settings.json can stay mostly empty for now.
// The one thing worth adding today is "defaultMode": "plan" — this
// makes Claude explain its plan before acting, which is safer while
// you're learning. Everything else (hooks, plugins) comes later.
//
// Concept: settings.json controls behavior. CLAUDE.md controls knowledge.


// ============================================================
// DONE? Move on to Exercise 03: sandbox/exercises/03-skills-and-agents.js
// ============================================================

const tasks = [
  "Understand CLAUDE.md purpose",
  "Study a real CLAUDE.md",
  "Study rules files",
  "Create your own CLAUDE.md",
  "Create your first rules file",
  "Test your config in a new session",
  "Understand settings.json"
]

console.log("\n  Exercise 02: Build Your CLAUDE.md")
console.log("  ==================================\n")
tasks.forEach((task, i) => {
  console.log(`  [ ] Task ${i + 1}: ${task}`)
})
console.log("\n  Your config is your superpower. Make it yours!\n")
