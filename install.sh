#!/bin/bash
set -e

# ============================================================
# AI Grad Course: One-Command Installer
# ============================================================
#
# Usage:
#   curl -sSL https://raw.githubusercontent.com/Codefied/Innovation-Playground/main/install.sh | bash
#
# What this does:
#   1. Checks prerequisites (git)
#   2. Installs Claude Code via native installer
#   3. Clones the course repo to ~/ai-grad-course
#   4. Sets up ~/.claude/ config directory with starter templates
#   5. Prints next steps
#
# ============================================================

REPO_URL="https://github.com/Codefied/Innovation-Playground.git"
COURSE_DIR="$HOME/ai-grad-course"
CLAUDE_DIR="$HOME/.claude"

# NOTE: This course uses Claude Code — the terminal/CLI version of Claude.
# It is NOT the same as the Claude desktop app (Claude.ai).
# Claude Code runs in your terminal and can read/write files directly.

# --- Colors ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

print_step() {
    echo ""
    echo -e "${BLUE}${BOLD}[$1/5]${NC} ${BOLD}$2${NC}"
    echo "─────────────────────────────────────────"
}

print_ok() {
    echo -e "  ${GREEN}[OK]${NC} $1"
}

print_warn() {
    echo -e "  ${YELLOW}[!!]${NC} $1"
}

print_fail() {
    echo -e "  ${RED}[FAIL]${NC} $1"
}

# --- Welcome Banner ---
echo ""
echo -e "${BOLD}============================================${NC}"
echo -e "${BOLD}  AI Grad Course: Claude Code from Zero${NC}"
echo -e "${BOLD}============================================${NC}"
echo ""
echo "  This installer will set up everything you"
echo "  need to start learning Claude Code."
echo ""
echo -e "  ${YELLOW}Note: Claude Code is the terminal/CLI tool.${NC}"
echo "  It is NOT the Claude desktop app (Claude.ai)."
echo ""
echo "  It will:"
echo "    - Verify git is installed"
echo "    - Install Claude Code (the AI coding tool)"
echo "    - Clone the course materials"
echo "    - Set up your Claude Code config"
echo ""

# ===========================================================
# Step 1: Check git
# ===========================================================
print_step 1 "Checking git..."

if command -v git &> /dev/null; then
    print_ok "Git $(git --version | cut -d' ' -f3) installed"
else
    print_fail "Git not found."
    echo ""
    echo "  Install Xcode Command Line Tools:"
    echo "    xcode-select --install"
    echo ""
    exit 1
fi

# ===========================================================
# Step 2: Install Claude Code
# ===========================================================
print_step 2 "Installing Claude Code..."

if command -v claude &> /dev/null; then
    print_ok "Claude Code already installed ($(claude --version 2>/dev/null || echo 'version unknown'))"
else
    echo "  Running: curl -fsSL https://claude.ai/install.sh | bash"
    if curl -fsSL https://claude.ai/install.sh | bash; then
        print_ok "Claude Code installed successfully"
    else
        print_fail "Claude Code installation failed."
        echo ""
        echo "  Try running manually:"
        echo "    curl -fsSL https://claude.ai/install.sh | bash"
        echo ""
        exit 1
    fi
fi

# ===========================================================
# Step 3: Clone the course repo
# ===========================================================
print_step 3 "Cloning course materials..."

if [ -d "$COURSE_DIR" ]; then
    print_warn "Directory $COURSE_DIR already exists."
    echo "  Pulling latest changes instead..."
    cd "$COURSE_DIR" && git pull origin main
    print_ok "Course materials updated"
else
    echo "  Cloning to $COURSE_DIR..."
    git clone "$REPO_URL" "$COURSE_DIR"
    print_ok "Course materials cloned to $COURSE_DIR"
fi

# ===========================================================
# Step 4: Set up ~/.claude/ config
# ===========================================================
print_step 4 "Setting up Claude Code config..."

# Create directory structure
mkdir -p "$CLAUDE_DIR/rules"
mkdir -p "$CLAUDE_DIR/agents"
mkdir -p "$CLAUDE_DIR/skills"
print_ok "Created ~/.claude/ directory structure"

# Copy starter CLAUDE.md (only if not already present)
if [ -f "$CLAUDE_DIR/CLAUDE.md" ]; then
    print_warn "~/.claude/CLAUDE.md already exists — skipping (your config is safe)"
else
    cp "$COURSE_DIR/sandbox/templates/starter-claude.md" "$CLAUDE_DIR/CLAUDE.md"
    print_ok "Copied starter CLAUDE.md to ~/.claude/"
fi

# Copy starter rules (only if not already present)
if [ -f "$CLAUDE_DIR/rules/coding-style.md" ]; then
    print_warn "~/.claude/rules/coding-style.md already exists — skipping"
else
    cp "$COURSE_DIR/sandbox/templates/starter-rules.md" "$CLAUDE_DIR/rules/coding-style.md"
    print_ok "Copied starter coding-style rules to ~/.claude/rules/"
fi

# Copy starter agent template (only if not already present)
if [ -f "$CLAUDE_DIR/agents/my-custom-agent.md" ]; then
    print_warn "~/.claude/agents/my-custom-agent.md already exists — skipping"
else
    cp "$COURSE_DIR/sandbox/templates/starter-agent.md" "$CLAUDE_DIR/agents/my-custom-agent.md"
    print_ok "Copied starter agent template to ~/.claude/agents/"
fi

# ===========================================================
# Step 5: Done!
# ===========================================================
print_step 5 "Setup complete!"

echo ""
echo -e "${GREEN}${BOLD}  You're almost ready to start learning!${NC}"
echo ""
echo "  Two things left to do:"
echo ""
echo -e "  ${BOLD}1. Authenticate Claude Code${NC}"
echo "     Run this command and follow the prompts:"
echo ""
echo -e "     ${BLUE}claude${NC}"
echo ""
echo "     (Your team lead will provide auth instructions —"
echo "      either an API key or org SSO login.)"
echo ""
echo -e "  ${BOLD}2. Start the course${NC}"
echo "     Once authenticated, run:"
echo ""
echo -e "     ${BLUE}cd ~/ai-grad-course && claude${NC}"
echo ""
echo "     Then type: ${BOLD}Help me with exercise 1${NC}"
echo ""
echo "─────────────────────────────────────────"
echo -e "  ${BOLD}What got installed:${NC}"
echo "    Claude Code      → $(which claude 2>/dev/null || echo 'claude')"
echo "    Course materials  → ~/ai-grad-course/"
echo "    Your config       → ~/.claude/"
echo "─────────────────────────────────────────"
echo ""
echo "  Questions? Ask your team lead or message #ai-grads on Slack."
echo ""
