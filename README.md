# Claude Code from Zero

**An interactive course for AI Grads at Housecall Pro**

Learn Claude Code by using Claude Code. No slides required — this course teaches itself.

---

## How This Course Works

1. Open this project folder in Claude Code: `cd ai-grad-course && claude`
2. Claude becomes your teacher (it reads the `CLAUDE.md` in this folder)
3. Work through exercises in `sandbox/exercises/` — ask Claude for help when stuck
4. Study `rolands-setup/` to see what a real production config looks like
5. Build your own setup as you go

**Important:** This course uses **Claude Code** — the terminal/CLI tool. It is *not* the Claude desktop app or Claude.ai in your browser. Claude Code runs in your terminal and can read, write, and execute code directly in your project.

**The meta insight:** You're learning Claude Code *inside* Claude Code. The tool you're learning is also your teacher.

---

## Module 1: Getting Started

### 1.1 What is Claude Code?

Claude Code is a CLI (command-line interface) tool that puts an AI assistant directly in your terminal. Unlike ChatGPT or Claude.ai in a browser, Claude Code:

- **Lives in your terminal** — where your code already is
- **Reads and writes files** — it can see your entire project
- **Runs commands** — it executes code, runs tests, manages git
- **Learns your preferences** — via config files you control

Think of it as pair programming with an AI that never gets tired and reads documentation instantly.

### 1.2 Installation

```bash
# Install Claude Code (one command, no prerequisites)
curl -fsSL https://claude.ai/install.sh | bash

# Verify installation
claude --version

# Start your first session
claude
```

### 1.3 Terminal Basics (If You Need Them)

| Command | What it does | Example |
|---------|-------------|---------|
| `pwd` | Print working directory (where am I?) | `pwd` → `/Users/you/projects` |
| `ls` | List files in current directory | `ls` → shows files and folders |
| `cd` | Change directory | `cd ai-grad-course` |
| `mkdir` | Make a new directory | `mkdir my-project` |
| `cat` | Display file contents | `cat README.md` |

### 1.4 Your First Session

```bash
cd ai-grad-course
claude
```

Once inside Claude Code, try:
- "What files are in this project?"
- "Read the file sandbox/exercises/01-hello-claude.js"
- "What exercise should I start with?"

### 1.5 Key Concepts

- **Session**: A conversation with Claude Code (start with `claude`, end with `/exit`)
- **Context**: What Claude knows about your project (it reads files you reference)
- **Tools**: Actions Claude can take (read files, write files, run commands, search)
- **Permissions**: You control what Claude is allowed to do

**Exercise:** Complete `sandbox/exercises/01-hello-claude.js`

---

## Module 2: Teaching Claude Who You Are

### 2.1 The Config Hierarchy

Claude Code reads configuration in layers:

```
~/.claude/CLAUDE.md          ← Global (all projects)
~/.claude/rules/*.md         ← Global rules (coding style, testing, etc.)
~/.claude/settings.json      ← Global settings (permissions, hooks, plugins)
./CLAUDE.md                  ← Project-level (this project only)
./.claude/settings.json      ← Project-level settings
```

**Key insight:** Global config = your preferences. Project config = project-specific instructions.

### 2.2 CLAUDE.md — Your AI's Instruction Manual

This is the most important file. It tells Claude:
- How you like to work (workflow preferences)
- What tools are available (databases, APIs, etc.)
- What rules to follow (coding style, testing requirements)
- What to never do (guardrails)

See `rolands-setup/CLAUDE.md` for a real production example.

### 2.3 Rules Files

Rules live in `~/.claude/rules/` and cover specific domains:

```
rules/
  coding-style.md    ← Immutability, file organization, error handling
  git-workflow.md    ← Commit formats, PR workflow
  testing.md         ← TDD requirements, coverage thresholds
  security.md        ← Secret management, OWASP checks
  performance.md     ← Model selection, context management
  patterns.md        ← API patterns, hooks, repository pattern
  hooks.md           ← Automation hooks (pre/post tool use)
  agents.md          ← Agent orchestration guide
```

See `rolands-setup/rules/` for all 8 rule files from a real setup.

### 2.4 Settings & Permissions

`settings.json` controls what Claude can and can't do:

```json
{
  "permissions": {
    "allow": ["Bash(npm test:*)"],
    "defaultMode": "plan"
  }
}
```

- **allow**: Commands Claude can run without asking
- **defaultMode**: `"plan"` means Claude plans before acting (safer for beginners)

### 2.5 Building Your Own Config

Start with the templates in `sandbox/templates/`:
1. `starter-claude.md` — Skeleton CLAUDE.md with placeholders
2. `starter-rules.md` — Example coding style rules
3. `starter-agent.md` — Example agent definition

**Exercise:** Complete `sandbox/exercises/02-build-your-claudemd.js`

---

## Module 3: Superpowers — Skills, Agents & Plugins

### 3.1 What Are Agents?

Agents are specialized sub-AI-instances with focused expertise:

| Agent | What it does |
|-------|-------------|
| `planner` | Creates implementation plans for complex features |
| `code-reviewer` | Reviews code for quality, security, maintainability |
| `tdd-guide` | Enforces test-driven development workflow |
| `architect` | Designs system architecture |
| `security-reviewer` | Finds vulnerabilities (OWASP Top 10) |
| `build-error-resolver` | Fixes build/type errors with minimal changes |

Agents live in `~/.claude/agents/` as markdown files. See `rolands-setup/agents/` for real examples.

### 3.2 How Agents Work

An agent file has two parts:

```markdown
---
name: my-agent
description: What this agent does
tools: ["Read", "Grep", "Glob"]
model: opus
---

You are an expert in [domain]...

## Your Role
- Do this
- Check that
- Never do this other thing
```

The YAML frontmatter configures the agent. The markdown body is its system prompt.

### 3.3 Skills & Plugins

- **Skills**: Slash commands (`/commit`, `/review-pr`) that expand into full prompts
- **Plugins**: Installable packages that add tools, agents, and skills
- **MCP Servers**: External tool connections (databases, APIs, browsers)

### 3.4 Real-World Agent Orchestration

From `rolands-setup/rules/agents.md`:

```
Complex feature request → planner agent → architect agent → tdd-guide → code-reviewer
```

Agents can run in parallel for independent tasks (e.g., security review + performance review + type checking).

### 3.5 Building Your Own Agent

The best agents are:
- **Focused**: One job, done well
- **Opinionated**: Clear standards, not wishy-washy
- **Actionable**: Produce concrete output (code, reports, plans)

See `sandbox/templates/starter-agent.md` for a template.

**Exercise:** Complete `sandbox/exercises/03-skills-and-agents.js`

---

## Module 4: MCP & External Tools

### 4.1 What is MCP?

**Model Context Protocol (MCP)** is how Claude Code connects to external systems. Think of it as "USB ports for AI" — a standard way to plug in tools.

```
Claude Code ←→ MCP Server ←→ External System
                              (Database, API, Browser, etc.)
```

### 4.2 Common MCP Connections

| MCP Server | Connects to | Use case |
|-----------|------------|----------|
| Playwright | Web browser | Automated testing, screenshots |
| Supabase | PostgreSQL database | Query data, manage schemas |
| GitHub | GitHub API | PRs, issues, code review |
| Slack | Slack API | Send messages, read channels |

### 4.3 How MCP Tools Appear

When an MCP server is connected, its tools show up as available actions:

```
mcp__playwright__browser_navigate    → Navigate to a URL
mcp__playwright__browser_snapshot    → Get page accessibility tree
mcp__supabase__query                 → Run SQL queries
```

You don't need to install these yourself — they come from plugins or project config.

### 4.4 HCP-Specific Tools (Conceptual)

At Housecall Pro, teams use tools like:
- **Snowflake** — Data warehouse for analytics queries
- **Vercel** — Deployment platform for web apps
- **GitHub** — Code hosting and collaboration

Your team lead will help you set up specific tool connections. This course covers the *concepts* so you understand how they work.

### 4.5 The Permission Model

MCP tools respect the same permission system:

```json
{
  "permissions": {
    "allow": ["mcp__playwright"]
  }
}
```

Always start with restrictive permissions and open up as needed.

**Exercise:** Complete `sandbox/exercises/04-mcp-and-tools.js`

---

## Module 5: The Meta Game

### 5.1 The Coaching Loop

The most powerful use of Claude Code is the feedback loop:

```
1. Work with Claude Code on real tasks
2. Notice what works and what doesn't
3. Update your CLAUDE.md and rules
4. Claude Code gets better at helping you
5. Repeat
```

This is *the* skill. Everything else is just setup.

### 5.2 Self-Audit

Periodically ask Claude Code to audit itself:

```
"Read my CLAUDE.md and rules files.
 What's working well? What's missing?
 What would you add based on our recent sessions?"
```

Claude can suggest improvements to its own instructions.

### 5.3 Building Your Own Tools

As you grow, you'll want to:
1. **Create custom agents** for your team's specific needs
2. **Write rules files** that encode your hard-won lessons
3. **Set up hooks** that automate repetitive checks
4. **Share configs** with teammates so everyone levels up

### 5.4 Your Next Moves

Don't overthink the plan. After completing the exercises, pick 3 concrete next actions:

| Timeframe | Example moves |
|-----------|--------------|
| This week | Use Claude Code to understand your team's codebase |
| Next week | Set up an MCP connection to a tool you use daily |
| This month | Build an agent for a task you do repeatedly |

### 5.5 What Great Looks Like

After this course, you should be able to:
- Start a Claude Code session and navigate any project
- Explain what CLAUDE.md, rules files, and agents do
- Build and customize your own configuration
- Understand how MCP connects to external systems
- Teach a teammate the basics

**Exercise:** Complete `sandbox/exercises/05-meta-game.js`

---

## Graduation Checklist

### Must Do (Required)
- [ ] Complete exercises 01-05
- [ ] Create your own `~/.claude/CLAUDE.md`
- [ ] Create at least one rules file in `~/.claude/rules/`
- [ ] Successfully use Claude Code on a real work task
- [ ] Explain to a teammate what CLAUDE.md does

### Should Do (Recommended)
- [ ] Create a custom agent in `~/.claude/agents/`
- [ ] Set up at least one hook in settings.json
- [ ] Read through all of `rolands-setup/` and understand each file
- [ ] Use Claude Code to review your own code
- [ ] Complete the self-audit in Exercise 05

### Stretch Goals
- [ ] Build an agent specific to your team's workflow
- [ ] Write a rules file that encodes a lesson you learned the hard way
- [ ] Help another grad get set up with Claude Code
- [ ] Contribute a tip or pattern to the team's shared knowledge base
- [ ] Set up an MCP connection to a team tool

---

## Project Structure

```
ai-grad-course/
  CLAUDE.md                          # Makes Claude your teacher in this folder
  README.md                          # This file — the full course guide
  setup-hcp.sh                       # Installation guide script
  sandbox/
    package.json                     # Minimal Node.js config for exercises
    exercises/
      01-hello-claude.js             # Basic interaction
      02-build-your-claudemd.js      # Configuration
      03-skills-and-agents.js        # Agent ecosystem
      04-mcp-and-tools.js            # External connections
      05-meta-game.js                # Self-improvement
    templates/
      starter-claude.md              # CLAUDE.md template
      starter-rules.md               # Rules file template
      starter-agent.md               # Agent file template
  rolands-setup/                     # Read-only reference example of a real config
    CLAUDE.md                        # Sanitized global CLAUDE.md
    settings.json                    # Sanitized settings
    rules/                           # All 8 rule files (safe as-is)
    agents/                          # 6 agent files (safe as-is)
    skills-example/
      SKILL.md                       # Generic skill template
```

---

## FAQ

**Q: I'm scared I'll break something.**
A: Claude Code asks permission before dangerous actions. Start with `"defaultMode": "plan"` in settings — Claude will plan before acting and ask for your approval.

**Q: How is this different from ChatGPT?**
A: Claude Code runs in your terminal, can read/write your actual project files, run tests, manage git, and connect to external tools. It's not a chatbot — it's a development environment.

**Q: What if Claude gives wrong code?**
A: Always review what Claude writes. Use the code-reviewer agent. Trust but verify.

**Q: Can I use this at work immediately?**
A: Yes! Start with read-only tasks (understanding code, finding files) before doing write operations on work repos.

**Q: Where do I get help?**
A: Ask Claude Code itself! Type your question in a session. For course-specific help, open this project folder first so Claude has the teaching context.
