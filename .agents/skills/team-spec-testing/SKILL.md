---
name: team-spec-testing
description: 在代码审查验证后使用。该 Skill 运行仓库构建、代码检查、格式检查和拼写检查。
---

# Team Spec 测试

## 输入

- `test-cases.md`。
- 当前实现。
- 产物目录。

## 输出

在产物目录写入 `test-result.md`。

## 执行步骤

运行默认检查：

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

如果命令失败：

1. 在 `test-result.md` 中记录失败命令和关键输出。
2. 回到 `$team-spec-implementation` 修复。
3. 修复后重新执行代码审查和测试。

## 完成标准

- 所有必需检查通过，或失败已记录并路由修复。
- `test-result.md` 包含最终命令结果。
