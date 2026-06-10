---
name: team-spec-test-case-generation
description: 在方案设计和 UI 审批后使用。该 Skill 在编码前生成测试用例和验证场景。
---

# Team Spec 测试用例生成

## 输入

- `spec.md`。
- `plan.md`。
- `tasks.md`。
- 涉及 UI 时，需要已审批的 `ui-design.md`。
- 产物目录。

## 输出

测试说明优先写入或补强 `quickstart.md`；如需补充记录，可写入
`test-cases.md`。

## 执行步骤

1. 将验收标准转换成具体测试场景。
2. 覆盖主路径、边界情况、回归场景和失败状态。
3. 标明哪些检查自动执行，哪些需要人工检查。
4. 除非方案设计另有要求，否则使用仓库默认检查命令。

## 默认检查

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

## 完成标准

- `test-cases.md` 已列出验证本次变更所需的场景。
- 默认命令检查已纳入测试计划，除非明确不适用。
