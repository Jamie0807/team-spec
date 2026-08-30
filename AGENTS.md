# AGENTS.md

本文档记录 Codex 和其他 coding agent 在本仓库中工作的项目约定。

## 项目概览

本仓库是一个基于 Vite 和 TypeScript 的 React 19 前端应用。

核心工具：

- React 19
- Vite
- TypeScript
- Tailwind CSS
- ESLint 代码检查
- Prettier 格式检查
- cspell 拼写检查

本仓库已初始化 GitHub Spec Kit，相关配置位于 `.specify/`，官方 Codex
Skills 位于 `.agents/skills/speckit-*`。

## 常用命令

安装依赖：

```sh
npm install
```

启动开发服务器：

```sh
npm run dev
```

生产构建：

```sh
npm run build
```

运行 ESLint：

```sh
npm run lint
```

使用 Prettier 格式化文件：

```sh
npm run format
```

只检查格式，不写入修改：

```sh
npm run format:check
```

运行 cspell：

```sh
npm run spellcheck
```

## 开发约定

- 源码放在 `src/` 目录下。
- 新代码优先使用 TypeScript。
- 样式优先使用 Tailwind utility class；当局部 CSS 更清晰时，可以使用 CSS 规则。
- 构建产物不要纳入版本控制。
- 不要提交 `node_modules` 或 `dist`。
- 当项目命令、工具链或协作约定变化时，同步更新本文档。

## Skill 工作流

新需求或完整功能交付默认优先使用官方 Spec Kit Skill：

1. `$speckit-constitution`：确立项目原则。
2. `$speckit-specify`：创建基线需求规范。
3. `$speckit-plan`：创建实现计划。
4. `$speckit-tasks`：生成可执行任务。
5. `$speckit-implement`：执行实现。

每个功能必须使用 Spec Kit feature 目录，例如 `specs/001-login-form/`，并至少包含：

- `spec.md`
- `plan.md`
- `tasks.md`

如需本项目自定义的 9 阶段门禁流程，再从 `$team-spec-delivery-orchestrator` 开始。

该调度 Skill 会按顺序调用以下独立 Skill：

1. `$team-spec-requirement-review`：需求评审。
2. `$team-spec-requirement-breakdown`：需求拆解。
3. `$team-spec-solution-design`：方案调研设计。
4. `$team-spec-ui-design`：UI 设计，并等待人工审批。
5. `$team-spec-test-case-generation`：测试用例生成。
6. `$team-spec-implementation`：编码实现。
7. `$team-spec-code-review-verification`：代码审查验证。
8. `$team-spec-testing`：测试和检查。
9. `$team-spec-git-commit`：人工确认后提交。

单阶段返工时，可以直接调用对应 `$team-spec-*` Skill，但必须读取并更新当前 feature
目录中的 `spec.md`、`plan.md` 或 `tasks.md`，不要创建替代主产物。

UI 设计完成后必须等待人工审批，审批前不得进入测试用例生成或编码。git 提交前必须展示
diff、检查结果和提交信息，并等待人工确认。

## 验证方式

交付代码变更前，运行与本次修改相关的检查。对于影响范围较大的修改，优先运行：

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

<!-- SPECKIT START -->

当前 active feature：

- `specs/002-spec-kit-demo-workbench/`

如需了解技术栈、项目结构、验证命令和当前实现计划，请读取：

- `specs/002-spec-kit-demo-workbench/plan.md`

<!-- SPECKIT END -->
