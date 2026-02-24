# Coding Style

## Naming Conventions

- **Variables**: camelCase (`userName`, `isActive`)
- **Functions**: camelCase, verb-first (`getUserById`, `validateInput`)
- **Components**: PascalCase (`UserProfile`, `NavBar`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_BASE_URL`)
- **Files**: kebab-case (`user-profile.tsx`, `api-client.ts`)

## Immutability

ALWAYS create new objects, NEVER mutate:

```javascript
// WRONG: Mutation
function updateUser(user, name) {
  user.name = name  // MUTATION!
  return user
}

// CORRECT: Immutability
function updateUser(user, name) {
  return {
    ...user,
    name
  }
}
```

## Error Handling

ALWAYS handle errors. Never let them silently fail:

```javascript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('User-friendly error message')
}
```

## File Organization

- Keep files small (200-400 lines typical, 800 max)
- One component/module per file
- Group by feature, not by type

## Code Quality Checklist

Before marking work complete:
- [ ] Code is readable and well-named
- [ ] Functions are small (< 50 lines)
- [ ] Proper error handling
- [ ] No hardcoded values
- [ ] No mutation (immutable patterns used)
