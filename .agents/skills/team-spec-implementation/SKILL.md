---
name: team-spec-implementation
description: 在需求、方案、必要的 UI 审批和测试用例准备完成后使用。该 Skill 负责按已批准产物实现代码变更。
---

# Team Spec 编码实现

## 输入

- `spec.md`。
- `plan.md`。
- `tasks.md`。
- `quickstart.md` 或 `test-cases.md`。
- 涉及 UI 时，需要已审批的 `ui-design.md`。
- 产物目录。

## 执行步骤

1. 编辑前读取所有相关产物。
2. 检查当前代码库并遵循已有约定。
3. 按 `tasks.md` 的任务顺序实施，用最小且完整的改动满足已批准方案。
4. 除非配置或工具链变更必要，否则源码保持在 `src/` 下。
5. 新前端代码优先使用 TypeScript 和 Tailwind CSS。
6. 不做无关重构。

## 完成标准

- 代码变更符合已批准的 `spec.md`、`plan.md`、`tasks.md`、UI 和测试用例。
- 实现中发现的新假设已记录到产物目录。
