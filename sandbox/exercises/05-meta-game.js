// ============================================================
// Exercise 05: The Meta Game
// ============================================================
//
// This is the final exercise. Everything before this was setup.
// The real skill is the feedback loop: using Claude Code to
// improve how you use Claude Code.
//
// PREREQUISITE: Complete Exercises 01-04 first.
//
// ============================================================

// --- TASK 1: Self-Audit Your Config ---
//
// Ask Claude: "Read my ~/.claude/CLAUDE.md and my rules files
//              in ~/.claude/rules/. Audit them:
//              - What's working well?
//              - What's missing?
//              - What would you add based on best practices?"
//
// This is the most powerful move in Claude Code: asking the
// AI to improve its own instructions. Meta, right?
// Concept: Claude can critique and improve its own config.


// --- TASK 2: Compare Your Config to Roland's ---
//
// Ask Claude: "Compare my ~/.claude/CLAUDE.md to
//              rolands-setup/CLAUDE.md. What patterns from
//              Roland's setup should I adopt? What should I
//              skip because it doesn't fit my workflow?"
//
// Not everything in an experienced user's config will fit you.
// The goal is to find patterns that match YOUR needs.
// Concept: Learn from others, but build for yourself.


// --- TASK 3: The Coaching Loop ---
//
// Use Claude Code on a REAL task from your work. It could be:
//   - Understanding a codebase you just joined
//   - Writing a small function or utility
//   - Reviewing code someone else wrote
//   - Finding a bug in existing code
//
// After completing the task, ask Claude:
//   "What went well in our session? What could I have done
//    differently to get better results? What should I add
//    to my CLAUDE.md based on this experience?"
//
// Concept: Every real session is a learning opportunity.
// Update your config based on what you discover.


// --- TASK 4: Design a Dream Agent ---
//
// Ask Claude: "Help me design an agent I wish existed for my
//              team. Here's what my team does: [describe your
//              team's work]. What would be the most useful
//              agent to have?"
//
// You might not have enough team context to build this yet —
// that's fine. The goal is to DESIGN it, not ship it. Think
// about what would save you (or your team) the most time:
//   - Codebase navigator: "Explain how [feature] works"
//   - PR preparer: "Format this change as a good PR"
//   - Onboarding helper: "Walk me through [team process]"
//   - Style enforcer: "Review this code for team conventions"
//
// Save the design to ~/.claude/agents/ — you can refine it
// after you've been on the team for a few weeks.
// Concept: The best agents encode tribal knowledge.


// --- TASK 5: Write a Hook ---
//
// Ask Claude: "Help me create a PostToolUse hook that warns
//              me when I edit a file but forget to add tests.
//              Show me the settings.json format."
//
// Start simple. Hooks are powerful but can be annoying if
// they're too aggressive. One good hook > five noisy ones.
// Concept: Hooks automate the checks you'd otherwise forget.


// --- TASK 6: Your Next 3 Moves ---
//
// Ask Claude: "Based on everything I've learned in these
//              exercises, what are the 3 most impactful things
//              I should do next to level up with Claude Code
//              at work? Be specific and practical."
//
// Don't overthink this — you don't need a rigid 30-day plan.
// You need 3 concrete next actions you'll actually do:
//   - Maybe it's "use Claude Code to understand my team's codebase"
//   - Maybe it's "set up an MCP connection to [tool I use daily]"
//   - Maybe it's "build an agent for [repetitive task]"
//
// Save them somewhere you'll actually look at them.
// Concept: Consistency > intensity. 30 minutes daily > 8-hour binges.


// --- TASK 7: Pay It Forward ---
//
// Ask Claude: "Help me write a 5-minute guide I can share
//              with a teammate to get them started with
//              Claude Code. Keep it practical and friendly."
//
// Teaching is the best way to solidify learning. If you can
// explain it to someone else, you truly understand it.
// Concept: The best engineers lift others up.


// ============================================================
// CONGRATULATIONS! You've completed the course.
//
// Remember the meta insight: Claude Code gets better as YOU
// get better at instructing it. Your CLAUDE.md, rules, and
// agents are living documents — update them constantly.
//
// The feedback loop never ends:
//   Do real work → Notice patterns → Update config → Repeat
// ============================================================

const tasks = [
  "Self-audit your config",
  "Compare your config to Roland's",
  "The coaching loop (real task)",
  "Design a dream agent",
  "Write your first hook",
  "Your next 3 moves",
  "Pay it forward — teach a teammate"
]

console.log("\n  Exercise 05: The Meta Game")
console.log("  ===========================\n")
tasks.forEach((task, i) => {
  console.log(`  [ ] Task ${i + 1}: ${task}`)
})
console.log("\n  The feedback loop never ends. Keep improving!\n")
console.log("  🎓 Course complete. You're ready.\n")
