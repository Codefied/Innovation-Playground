// ============================================================
// Exercise 01: Hello, Claude Code
// ============================================================
//
// Welcome! This is your first exercise. You're going to learn
// the basics of working with Claude Code by doing real tasks.
//
// HOW TO USE THIS FILE:
// 1. Open Claude Code in the ai-grad-course folder:
//    cd ai-grad-course && claude
// 2. Ask Claude to read this file:
//    "Read the file sandbox/exercises/01-hello-claude.js"
// 3. Work through each task below, one at a time
// 4. Ask Claude for help if you get stuck!
//
// ============================================================

// --- TASK 1: Explore Your Environment ---
//
// Ask Claude Code these questions:
//   - "What directory am I in?"
//   - "What files are in this project?"
//   - "What's in the sandbox folder?"
//
// These teach you how Claude navigates your file system.
// Concept: Claude uses tools like Glob and Bash(ls) to see files.


// --- TASK 2: Read a File ---
//
// Ask Claude: "Read the README.md file and summarize it for me"
//
// After Claude summarizes, try opening README.md yourself (in a text
// editor or Finder). Is there more content than Claude showed you?
// Claude reads the real file, but a summary is still a summary.
//
// This is different from ChatGPT — Claude Code sees your real files.
// Concept: The Read tool lets Claude see any file in your project.


// --- TASK 3: Write Your First File ---
//
// Ask Claude: "Create a file called sandbox/my-first-file.js
//              that exports a function called greet(name) which
//              returns 'Hello, <name>! Welcome to Claude Code.'"
//
// After Claude creates it, ask: "Read sandbox/my-first-file.js"
// to verify it was created correctly.
// Concept: The Write tool creates new files. The Read tool verifies.


// --- TASK 4: Run Some Code ---
//
// Ask Claude: "Run my-first-file.js and test the greet function"
//
// Claude will use the Bash tool to execute Node.js code.
// Concept: Claude can run commands in your terminal, just like you would.


// --- TASK 5: Edit a File ---
//
// Ask Claude: "Edit sandbox/my-first-file.js to also export a function
//              called farewell(name) that returns 'Goodbye, <name>!
//              See you next time.'"
//
// Then ask Claude to run the updated file to test both functions.
// Concept: The Edit tool modifies existing files without rewriting them.


// --- TASK 6: Search the Project ---
//
// Ask Claude: "Find all files in this project that mention 'agent'"
//
// Claude will use Grep to search file contents — like a supercharged
// find-and-replace across your whole project.
// Concept: Grep searches content. Glob searches file names/patterns.


// --- TASK 7: Reflect ---
//
// Ask Claude: "What tools did you use to complete these tasks?
//              Explain each one in simple terms."
//
// This teaches you the core toolkit:
//   - Read: See file contents
//   - Write: Create new files
//   - Edit: Modify existing files
//   - Bash: Run terminal commands
//   - Glob: Find files by name pattern
//   - Grep: Search file contents
//
// These six tools are the foundation of everything Claude Code does.


// ============================================================
// DONE? Move on to Exercise 02: sandbox/exercises/02-build-your-claudemd.js
// ============================================================

// This file is executable — it prints your progress when run directly.
const tasks = [
  "Explore your environment",
  "Read a file",
  "Write your first file",
  "Run some code",
  "Edit a file",
  "Search the project",
  "Reflect on tools used"
]

console.log("\n  Exercise 01: Hello, Claude Code")
console.log("  ================================\n")
tasks.forEach((task, i) => {
  console.log(`  [ ] Task ${i + 1}: ${task}`)
})
console.log("\n  Ask Claude to help you with each task!\n")
