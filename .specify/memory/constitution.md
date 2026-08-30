<!--
同步影响报告
版本变更：1.0.0 -> 1.1.0
修改原则：
- Specification First -> 规格先行
- User-Visible Value -> 用户可见价值
- Frontend Stack Consistency -> 前端技术栈一致性
- Quality Gates -> 质量门禁
- Human Approval Gates -> 人工审批门禁
新增原则：
- 中文文档
- 提交审批
新增章节：无
移除章节：无
模板同步：
- 已更新 .specify/templates/plan-template.md
- 已更新 .specify/templates/spec-template.md
- 已更新 .specify/templates/tasks-template.md
- 已更新 .specify/templates/checklist-template.md
- 已更新 .specify/templates/constitution-template.md
- 不适用 .specify/templates/commands/，当前仓库不存在该目录
后续事项：无
-->
# Team Spec 宪法

## Core Principles

### I. 规格先行

每个 feature 必须先创建 Spec Kit feature 目录，并至少包含 `spec.md`、`plan.md`
和 `tasks.md`。实现必须能追溯到 `spec.md` 中的用户故事、功能需求和验收场景。

**理由**：项目以可追踪的规范先行流程为核心，任何代码变更都需要先有可审查的需求、
设计和任务依据。

### II. 用户可见价值

功能必须优先围绕可独立验证的用户旅程组织。UI 变更在编码前必须描述可见状态、
错误处理、响应式行为和验收方式。

**理由**：每个 feature 都应能单独展示价值，避免只有内部实现而缺少用户可感知结果。

### III. 前端技术栈一致性

本项目使用 React 19、TypeScript、Vite 和 Tailwind CSS。新增前端代码必须遵循该技术栈；
如果确需引入新依赖或替换技术选择，必须先在 `plan.md` 中说明原因、影响和替代方案。

**理由**：统一技术栈可以降低维护成本，让 Spec Kit 产物和源码结构保持一致。

### IV. 质量门禁

影响范围较大的变更在交付前必须通过以下检查：

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

检查失败会阻塞交付、代码提交和对外声明完成状态。涉及 UI 的变更还必须完成桌面端和
移动端视觉检查，确认没有文本重叠、内容溢出或不可读模块。

**理由**：质量门禁让需求、实现和验证闭环，减少只完成编码但无法交付的风险。

### V. 人工审批门禁

涉及 UI 的功能必须先产出 `ui-design.md` 并获得人工确认，之后才能进入测试用例生成或编码。
当需求、方案、任务或验证结果发生关键变化时，必须更新对应 feature 产物。

**理由**：人工审批保证页面结构、交互和展示重点在实现前已经达成一致。

### VI. 中文文档

本项目后续需求、计划、任务、设计、验证和交付说明默认使用中文。必要的英文技术名词、
命令、文件名、包名和产品名可以保留原文。

**理由**：统一文档语言可以降低协作和审查成本，并让 Spec Kit 产物更容易被连续阅读。

### VII. 提交审批

修改完成后不得自动创建 git commit。只有在用户明确要求提交时，才可以展示最终 diff、
验证结果和提交信息，并等待人工确认后执行提交。

**理由**：提交是项目历史的一部分，必须由人工明确确认，避免未审查变更进入版本历史。

## Project Constraints

- 源码默认放在 `src/` 目录下；只有配置或工具链变更确有需要时，才可以调整目录结构。
- 新代码优先使用 TypeScript。
- 样式优先使用 Tailwind utility class；当局部 CSS 更清晰时，可以使用 CSS 规则。
- 不得将 `node_modules`、`dist` 或其它构建产物纳入版本控制。
- 不得引入新依赖，除非 `plan.md` 已说明必要性和影响。
- 对外展示文案必须保持工程说明视角，不使用职业求职导向表达。

## Development Workflow

新 feature 默认使用官方 Spec Kit Skills：

1. `$speckit-constitution`
2. `$speckit-specify`
3. `$speckit-plan`
4. `$speckit-tasks`
5. `$speckit-implement`

每个 feature 的主产物必须写入 `specs/[编号-feature-name]/`，并保持 `spec.md`、`plan.md`
和 `tasks.md` 为当前事实来源。

项目自定义的 `team-spec-*` Skills 可以补充官方流程，但必须读取并更新当前 feature 目录中的
官方产物，不得创建替代主产物。单阶段返工时，可以直接使用对应阶段 Skill，但仍要遵守
规格先行、中文文档、人工审批和质量门禁。

## Governance

本宪法优先于临时工作流说明。所有新需求、实现计划、任务拆解、UI 设计、验证记录和交付说明
都必须检查是否符合本宪法。

宪法变更必须满足以下规则：

- 变更必须直接更新 `.specify/memory/constitution.md`。
- 变更必须在文件顶部的同步影响报告中说明版本变化、原则变化、模板同步和后续事项。
- 如果原则变更影响模板、`AGENTS.md`、README 或当前 feature 产物，必须同步更新或明确标记为后续事项。
- 版本号遵循语义化版本：
  - MAJOR：删除或重定义核心治理原则，导致既有流程不再兼容。
  - MINOR：新增原则、章节或实质扩展治理要求。
  - PATCH：措辞澄清、翻译、错别字或不改变治理含义的修正。

**Version**: 1.1.0 | **Ratified**: 2026-06-09 | **Last Amended**: 2026-08-30
