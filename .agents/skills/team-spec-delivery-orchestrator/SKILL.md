---
name: team-spec-delivery-orchestrator
description: 当用户希望在本仓库中从需求到 git 提交完整交付一个功能或变更时使用。该 Skill 负责按顺序调度需求评审、需求拆解、方案调研设计、UI 设计审批、测试用例生成、编码、代码审查验证、测试和 git 提交。
---

# Team Spec 交付调度

这是本仓库新功能和完整变更的补充入口。默认仍优先使用官方 Spec Kit
Skill；本 Skill 只负责把 9 阶段门禁映射到官方 `spec.md`、`plan.md` 和
`tasks.md` 主线。

## 输入

- 用户原始需求。
- 可选：`feature_name`。
- 可选：`commit_scope`。

## 产物目录

使用 Spec Kit feature 目录：`specs/<NNN>-<feature>/`。目录内必须包含：

- `spec.md`
- `plan.md`
- `tasks.md`

## 调度顺序

按以下顺序使用官方 Spec Kit Skill 和项目子 Skill：

1. `$speckit-specify`，生成或更新 `spec.md`。
2. `$team-spec-requirement-review`，审查 `spec.md`。
3. `$team-spec-requirement-breakdown`，将拆解结果反映到 `spec.md` 的用户故事和验收标准。
4. `$speckit-plan`，生成或更新 `plan.md`、`research.md`、`data-model.md`、`quickstart.md`。
5. `$team-spec-solution-design`，审查并补强 `plan.md`。
6. `$team-spec-ui-design`，生成 UI 设计补充并等待人工审批。
7. `$speckit-tasks`，生成 `tasks.md`。
8. `$team-spec-test-case-generation`，补强 `quickstart.md` 或测试说明。
9. `$speckit-implement` 或 `$team-spec-implementation`，执行实现。
10. `$team-spec-code-review-verification`。
11. `$team-spec-testing`。
12. `$team-spec-git-commit`。

## 人工门禁

- UI 设计完成后必须暂停，等待用户明确审批。
- git 提交前必须暂停，等待用户确认最终 diff、检查结果和提交信息。
- 如果代码审查或测试失败，回到编码阶段修复，然后重新审查和测试。

## 交接规则

- 每个子 Skill 都必须接收同一个 Spec Kit feature 目录。
- 每个子 Skill 必须读取自己依赖的 `spec.md`、`plan.md`、`tasks.md`。
- 除非用户明确只要求单阶段工作，否则不要跳过步骤。
