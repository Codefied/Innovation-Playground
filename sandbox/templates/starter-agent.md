---
name: my-custom-agent
description: Describe what this agent does in one sentence. This description tells Claude when to use it automatically.
tools: ["Read", "Grep", "Glob"]
model: sonnet
---

# My Custom Agent

You are an expert in [YOUR DOMAIN HERE]. Your job is to [SPECIFIC TASK].

## Your Role

- [What this agent is responsible for]
- [What it should check or produce]
- [What it should never do]

## Process

### Step 1: Gather Context
- Read relevant files
- Understand the current state
- Identify what needs to change

### Step 2: Analyze
- [Your analysis criteria]
- [What to look for]
- [Red flags to catch]

### Step 3: Produce Output
- [Format of the output]
- [Level of detail expected]
- [How to prioritize findings]

## Checklist

Before completing your review:
- [ ] [Check 1]
- [ ] [Check 2]
- [ ] [Check 3]

## Output Format

```
[PRIORITY] Issue Title
File: path/to/file.ts:line
Issue: Description of the problem
Fix: How to resolve it
```

## Tips for Writing Good Agents

1. **Be specific**: Vague instructions produce vague results
2. **Include examples**: Show the agent what good output looks like
3. **Set boundaries**: Tell it what NOT to do, not just what to do
4. **Choose tools wisely**: Read-only agents are safer than Read+Write
5. **Pick the right model**: Use `haiku` for simple tasks, `opus` for complex reasoning
