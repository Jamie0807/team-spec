---
name: team-spec-code-review-verification
description: 在编码完成后使用。该 Skill 审查 diff，检查 bug、需求偏离、遗漏测试、可维护性风险和验证准备情况。
---

# Team Spec 代码审查验证

## 输入

- 所有前序产物。
- 当前 git diff。
- 产物目录。

## 输出

在产物目录写入 `code-review.md`。

## 执行步骤

1. 对照需求、方案、UI 设计和测试用例审查 diff。
2. 优先检查正确性 bug、行为回归、缺少验证和可维护性风险。
3. 如有发现，尽量提供文件和行号引用。
4. 如果存在阻塞问题，停止并回到 `$team-spec-implementation`。
5. 如果没有阻塞问题，记录剩余风险并进入测试阶段。

## 完成标准

- `code-review.md` 已记录审查发现，或明确说明没有阻塞问题。
- 阻塞问题已路由回编码阶段修复。
