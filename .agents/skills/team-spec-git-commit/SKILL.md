---
name: team-spec-git-commit
description: 在代码审查和测试通过后使用。该 Skill 使用 Conventional Commits 准备并在人工审批后创建 git commit。
---

# Team Spec Git 提交

## 输入

- 已通过的 `test-result.md`。
- 当前 git diff。
- 可选：`commit_scope`。
- 产物目录。

## 执行步骤

1. 确认代码审查和测试都已通过。
2. 检查 `git status` 以及已暂存或未暂存 diff。
3. 准备 Conventional Commit 信息：`type(scope): summary`。
4. 向用户展示变更文件、验证摘要和建议提交信息。
5. 执行 `git commit` 前必须暂停等待人工审批。
6. 审批后只暂存相关文件并创建提交。

## 完成标准

- 用户已批准提交。
- commit 已创建，或用户选择手动处理提交。
