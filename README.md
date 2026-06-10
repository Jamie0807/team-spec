# Team Spec

基于 React 19、Vite、TypeScript 和 Tailwind CSS 的前端项目，并已接入
GitHub Spec Kit 与 Codex Skills，用于按“规范先行”的方式开发功能。

当前已实现功能：

- 用户登录表单
- 邮箱和密码校验
- 提交中状态
- 模拟登录成功提示
- 响应式登录页布局

## 技术栈

- React 19
- Vite
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- cspell
- GitHub Spec Kit

## 快速开始

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

预览构建产物：

```sh
npm run preview
```

## 质量检查

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

格式化代码和文档：

```sh
npm run format
```

## Spec Kit 主流程

本项目已通过 `specify init --integration codex` 初始化 GitHub Spec Kit。

## 安装 Spec Kit

如果新环境还没有 `uv` / `uvx`，先安装：

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

安装后如果当前 shell 找不到 `uvx`，执行：

```sh
source "$HOME/.local/bin/env"
```

在项目根目录初始化 Spec Kit + Codex Skills：

```sh
uvx --from git+https://github.com/github/spec-kit.git specify init --here --force --integration codex
```

初始化完成后，会生成：

```text
.specify/
.agents/skills/speckit-*
```

本项目已经完成上述初始化，通常不需要重复执行。

## Spec Kit 主流程

官方 Spec Kit 核心链路是：

```text
Constitution → Specify → Plan → Tasks → Implement
```

对应 Codex Skills：

```text
$speckit-constitution
$speckit-specify
$speckit-plan
$speckit-tasks
$speckit-implement
```

### 1. Constitution

确立项目原则、技术约束、质量门禁和治理规则。

主要产物：

```text
.specify/memory/constitution.md
```

### 2. Specify

根据自然语言需求生成功能规格。

主要产物：

```text
specs/<feature>/spec.md
specs/<feature>/checklists/requirements.md
.specify/feature.json
```

### 3. Plan

基于 `spec.md` 生成实现计划和设计产物。

常见产物：

```text
specs/<feature>/plan.md
specs/<feature>/research.md
specs/<feature>/data-model.md
specs/<feature>/quickstart.md
specs/<feature>/contracts/
```

### 4. Tasks

基于 `spec.md` 和 `plan.md` 生成可执行任务清单。

主要产物：

```text
specs/<feature>/tasks.md
```

### 5. Implement

按 `tasks.md` 执行编码实现，并运行项目质量检查。

## 当前 Feature

登录表单 feature 位于：

```text
specs/001-login-form/
```

核心产物：

- `spec.md`：用户故事、功能需求、成功标准和假设
- `plan.md`：技术方案、项目结构和约束检查
- `tasks.md`：按用户故事拆分的可执行任务
- `quickstart.md`：手动验证和自动检查方式
- `test-result.md`：最终验证结果

## 项目结构

```text
.
├── .agents/skills/           # Codex Skills，包含官方 speckit-* 和项目 team-spec-*
├── .specify/                 # Spec Kit 配置、模板、脚本和治理规则
├── specs/001-login-form/     # 登录表单 feature 规范与实现产物
├── src/                      # React 应用源码
├── AGENTS.md                 # Agent 协作说明
├── package.json              # npm 脚本与依赖
└── README.md
```

## 项目自定义 Skill

除官方 `$speckit-*` Skills 外，本项目还沉淀了 9 阶段补充流程：

```text
$team-spec-delivery-orchestrator
$team-spec-requirement-review
$team-spec-requirement-breakdown
$team-spec-solution-design
$team-spec-ui-design
$team-spec-test-case-generation
$team-spec-implementation
$team-spec-code-review-verification
$team-spec-testing
$team-spec-git-commit
```

这些 Skill 必须围绕官方 Spec Kit feature 目录工作，即读取或更新当前 feature 的
`spec.md`、`plan.md` 和 `tasks.md`，不要另起一套替代主产物。

## 开发约定

- 新功能优先从 `$speckit-specify` 开始。
- 涉及 UI 的功能，UI 设计必须人工确认后再编码。
- 提交前必须通过 build、lint、format check 和 spellcheck。
- 不提交 `node_modules` 和 `dist`。
