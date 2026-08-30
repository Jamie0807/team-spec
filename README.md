# Team Spec Workbench

Team Spec Workbench 是一个基于 React 19、Vite、TypeScript 和 Tailwind CSS 的前端工程演示项目，用来展示如何通过 GitHub Spec Kit 按“规范先行”的方式交付功能。

项目将应用页面和仓库文档结合起来：应用首页展示工作台形态、流程阶段、任务和知识沉淀；`specs/` 目录保留每个 feature 的规格、计划、任务和验证记录。

## 项目亮点

- 使用 Spec Kit 管理 feature，从自然语言需求进入 `spec.md`、`plan.md` 和 `tasks.md`。
- 每个功能都有独立 feature 目录，便于追踪需求、设计、任务和验证结果。
- 应用首页展示 Spec Kit 流程、feature 证据链、任务阶段和知识笔记。
- 保留 `001-login-form` 作为已完成的真实功能示例。
- 项目约定后续文档默认使用中文，保留必要英文技术名词、命令和文件名。

## Spec Kit 工作流

本项目已通过 `specify init --integration codex` 初始化 GitHub Spec Kit。

核心流程：

```text
Constitution -> Specify -> Plan -> Tasks -> Implement -> Verify
```

对应产物：

```text
.specify/memory/constitution.md
specs/<feature>/spec.md
specs/<feature>/plan.md
specs/<feature>/tasks.md
specs/<feature>/test-result.md
```

对应 Codex Skills：

```text
$speckit-constitution
$speckit-specify
$speckit-plan
$speckit-tasks
$speckit-implement
```

## 功能证据地图

### 001-login-form

已完成的登录表单示例，包含邮箱和密码校验、记住我、提交中状态和模拟成功反馈。

- [spec.md](specs/001-login-form/spec.md)
- [plan.md](specs/001-login-form/plan.md)
- [tasks.md](specs/001-login-form/tasks.md)
- [quickstart.md](specs/001-login-form/quickstart.md)
- [test-result.md](specs/001-login-form/test-result.md)

### 002-spec-kit-demo-workbench

当前 active feature，将默认首页升级为 Spec Kit 演示工作台，并改写 README 的对外展示结构。

- [spec.md](specs/002-spec-kit-demo-workbench/spec.md)
- [plan.md](specs/002-spec-kit-demo-workbench/plan.md)
- [tasks.md](specs/002-spec-kit-demo-workbench/tasks.md)
- [research.md](specs/002-spec-kit-demo-workbench/research.md)
- [data-model.md](specs/002-spec-kit-demo-workbench/data-model.md)
- [ui-design.md](specs/002-spec-kit-demo-workbench/ui-design.md)
- [quickstart.md](specs/002-spec-kit-demo-workbench/quickstart.md)
- [test-result.md](specs/002-spec-kit-demo-workbench/test-result.md)
- [contracts/ui-contract.md](specs/002-spec-kit-demo-workbench/contracts/ui-contract.md)

## 应用页面

当前首页是 `Team Spec Workbench` 单页工作台，包含：

- 项目定位和 active feature 状态
- Spec Kit 六阶段流程时间线
- feature 证据卡片
- Spec Browser 演示预览
- Team Tasks 任务阶段看板
- Knowledge Notes 知识笔记
- `001-login-form` 登录表单交付结果

## 技术栈

- React 19
- Vite
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- cspell
- GitHub Spec Kit

## 本地运行

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

## 仓库结构

```text
.
├── .agents/skills/                       # Codex Skills
├── .specify/                             # Spec Kit 配置、模板、脚本和治理规则
├── docs/superpowers/specs/               # 前期设计说明
├── specs/001-login-form/                 # 登录表单 feature 产物
├── specs/002-spec-kit-demo-workbench/    # 演示工作台 feature 产物
├── src/                                  # React 应用源码
├── AGENTS.md                             # Agent 协作说明
├── package.json                          # npm 脚本与依赖
└── README.md
```

## 项目约定

- 新需求优先从 `$speckit-specify` 开始。
- 每个功能必须使用独立 Spec Kit feature 目录。
- 涉及 UI 的功能，需要先产出 `ui-design.md` 并获得人工确认。
- 后续需求、计划、任务、设计、验证和交付说明默认使用中文。
- 修改完成后不自动创建 git commit；需要提交时先展示 diff、检查结果和提交信息，并等待确认。
