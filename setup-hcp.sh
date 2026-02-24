#!/bin/bash
# ============================================================
# AI Grad Course: Setup Guide
# ============================================================
#
# This script guides you through installing Claude Code and
# understanding the HCP tool ecosystem. Run it section by
# section — don't just execute the whole thing blindly.
#
# Usage: Read through this file and run commands one at a time.
#        Or ask Claude Code: "Read setup-hcp.sh and help me
#        set up my environment"
#
# ============================================================

echo "🎓 AI Grad Course: Environment Setup"
echo "====================================="
echo ""

# --- SECTION 1: Prerequisites ---
echo "--- Section 1: Prerequisites ---"

# Check Node.js version (Claude Code requires 18+)
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -ge 18 ]; then
        echo "  [OK] Node.js $(node -v) installed"
    else
        echo "  [!!] Node.js $(node -v) is too old. Need 18+."
        echo "       Install via: brew install node"
    fi
else
    echo "  [!!] Node.js not found."
    echo "       Install via: brew install node"
fi

# Check git
if command -v git &> /dev/null; then
    echo "  [OK] Git $(git --version | cut -d' ' -f3) installed"
else
    echo "  [!!] Git not found."
    echo "       Install via: xcode-select --install"
fi

echo ""

# --- SECTION 2: Install Claude Code ---
echo "--- Section 2: Install Claude Code ---"
echo ""
echo "  Run this command to install Claude Code globally:"
echo ""
echo "    npm install -g @anthropic-ai/claude-code"
echo ""
echo "  After installation, verify with:"
echo ""
echo "    claude --version"
echo ""
echo "  Start your first session:"
echo ""
echo "    claude"
echo ""
echo "  Note: You'll need an Anthropic API key or an"
echo "  organization license. Ask your team lead if unsure."
echo ""

# --- SECTION 3: Claude Code Config Structure ---
echo "--- Section 3: Config Structure ---"
echo ""
echo "  Claude Code config lives in ~/.claude/"
echo ""
echo "  Key files and folders:"
echo "    ~/.claude/CLAUDE.md        - Your personal preferences"
echo "    ~/.claude/rules/           - Domain-specific rules"
echo "    ~/.claude/agents/          - Custom agent definitions"
echo "    ~/.claude/skills/          - Slash command skills"
echo "    ~/.claude/settings.json    - Permissions, hooks, plugins"
echo ""
echo "  This course includes templates to get you started."
echo "  See sandbox/templates/ for starter files."
echo ""

# --- SECTION 4: Create Config Directories ---
echo "--- Section 4: Create Config Directories ---"

# Create the directory structure if it doesn't exist
mkdir -p ~/.claude/rules
mkdir -p ~/.claude/agents
mkdir -p ~/.claude/skills
echo "  [OK] Config directories created at ~/.claude/"
echo ""

# --- SECTION 5: HCP-Specific Tools (Conceptual) ---
echo "--- Section 5: HCP Tools (Conceptual) ---"
echo ""
echo "  At Housecall Pro, teams use several external tools"
echo "  that can be connected to Claude Code via MCP:"
echo ""
echo "  1. Snowflake (Data Warehouse)"
echo "     - For querying analytics data"
echo "     - Setup: Ask your data team for access"
echo "     - Docs: Internal wiki > Data > Snowflake Access"
echo ""
echo "  2. Vercel (Deployment)"
echo "     - For deploying web applications"
echo "     - Setup: Ask your team lead for org access"
echo "     - Docs: Internal wiki > Engineering > Vercel"
echo ""
echo "  3. GitHub (Code Hosting)"
echo "     - For PRs, issues, code review"
echo "     - Setup: gh auth login"
echo "     - Docs: https://cli.github.com/"
echo ""
echo "  4. Playwright (Browser Testing)"
echo "     - For automated browser testing"
echo "     - Plugin: playwright@claude-plugins-official"
echo "     - Docs: https://playwright.dev/"
echo ""
echo "  Note: Your team lead will help you set up specific"
echo "  tool connections. This course covers the concepts"
echo "  so you understand how they work."
echo ""

# --- SECTION 6: Recommended Plugins ---
echo "--- Section 6: Recommended Plugins ---"
echo ""
echo "  These plugins are useful for most developers:"
echo ""
echo "  - playwright (browser automation)"
echo "  - superpowers (enhanced workflows)"
echo "  - everything-claude-code (comprehensive tools)"
echo ""
echo "  Install plugins through Claude Code settings."
echo "  See rolands-setup/settings.json for an example config."
echo ""

# --- SECTION 7: Start the Course ---
echo "--- Section 7: Start the Course! ---"
echo ""
echo "  You're ready to begin. Run:"
echo ""
echo "    cd $(dirname "$0")"
echo "    claude"
echo ""
echo "  Then tell Claude: 'Help me with exercise 1'"
echo ""
echo "  Good luck! 🎓"
echo ""
