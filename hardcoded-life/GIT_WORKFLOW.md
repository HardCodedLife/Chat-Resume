# Git Workflow & Naming Conventions

To maintain a clean and traceable history, all agents and contributors must follow these standards.

## 1. Branching Strategy
- **`main`**: The stable production branch. No direct commits allowed.
- **`feature/task-name`**: For new features or tasks (e.g., `feature/ui-foundation`).
- **`fix/issue-name`**: For bug fixes.

## 2. Commit Message Format
We follow the **Conventional Commits** specification:
`<type>(<scope>): <description>`

### Types:
- **feat**: A new feature (corresponds to a Task completion).
- **fix**: A bug fix.
- **docs**: Documentation changes only.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **chore**: Updating build tasks, package manager configs, etc.

### Examples:
- `feat(ui): implement base Button and Card components`
- `feat(chat): connect frontend to Gemini API route`
- `fix(auth): resolve memory leak in chat history`
- `docs(plan): update PLAN.md with phase 2 completion`

## 3. Workflow Steps for Agents
1. **Sync**: Before starting a task, ensure you are on the latest code.
2. **Implement**: Execute the instructions in the `TASK_XX.md` file.
3. **Verify**: Run `npm run build` to ensure no regressions.
4. **Commit**: 
   - Stage changes: `git add .`
   - Commit with a meaningful message: `git commit -m "feat(task-id): brief description"`
5. **Update Plan**: Update `PLAN.md` and commit the update: `git commit -m "docs(plan): mark Phase X as complete"`

## 4. Naming Conventions
- **Files/Folders**: Use `kebab-case` for non-component files (e.g., `api/chat/route.ts`).
- **React Components**: Use `PascalCase` (e.g., `Button.tsx`, `ProjectCard.tsx`).
- **Variables/Functions**: Use `camelCase`.
