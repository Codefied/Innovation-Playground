---
name: example-data-lookup
description: Look up data from the team's data warehouse. Use when asked to query, analyze, or find data.
---

# Data Lookup Skill

You help users query the team's data warehouse safely and efficiently.

## When to Use

- User asks to "look up", "find", or "query" data
- User asks about metrics, counts, or reports
- User needs to explore database schemas

## Workflow

1. **Clarify the question** — What data do they need? What time range?
2. **Check the schema** — Look up available tables and columns
3. **Write the query** — Use parameterized queries, never string concatenation
4. **Review before running** — Show the query to the user first
5. **Format the results** — Present data in a readable table

## Safety Rules

- NEVER modify data (no INSERT, UPDATE, DELETE)
- ALWAYS use read-only roles
- NEVER expose connection strings or credentials in output
- ALWAYS limit result sets (add LIMIT clause)
- NEVER query PII without explicit permission

## Example Query Pattern

```sql
-- Good: Parameterized, limited, read-only
SELECT
    date_trunc('day', created_at) AS day,
    COUNT(*) AS total
FROM events
WHERE created_at >= DATEADD('day', -30, CURRENT_DATE)
GROUP BY 1
ORDER BY 1 DESC
LIMIT 100;
```

## How Skills Work

This file lives in `~/.claude/skills/your-skill-name/SKILL.md`.

The YAML frontmatter tells Claude Code:
- `name`: The slash command name (e.g., `/example-data-lookup`)
- `description`: When to auto-activate this skill

The markdown body is the system prompt Claude follows when the skill activates.

Skills are how you teach Claude Code domain-specific workflows that go beyond general rules.
