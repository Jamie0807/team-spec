---
name: team-spec-solution-design
description: 在需求拆解后使用。该 Skill 基于当前代码库调研并产出 React 19、Vite、Tailwind CSS、TypeScript 项目的技术方案设计。
---

# Team Spec 方案调研设计

## 输入

- `spec.md`。
- `plan.md`。
- 产物目录。

## 输出

方案内容优先写入或修订 `plan.md`、`research.md`、`data-model.md`、`quickstart.md`；如需补充记录，可写入
`solution-design.md`。

## 执行步骤

1. 先检查当前代码、配置和项目约定，再提出改动方案。
2. 将目标行为映射到受影响的组件、模块、样式和脚本。
3. 选择符合 React 19、Vite、TypeScript 和 Tailwind CSS 的实现方式。
4. 描述数据流、状态归属、接口和关键边界情况。
5. 定义本次变更的验证策略。

## 完成标准

- 实现路径已经足够明确，后续编码不需要再做关键决策。
- 已记录风险和假设。
- `plan.md` 已包含可执行的技术上下文、结构决策和验证策略。
