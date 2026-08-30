# 实现计划：Spec Kit 演示工作台

**分支**：`002-spec-kit-demo-workbench` | **日期**：2026-08-30 | **规格**：[spec.md](./spec.md)

**输入**：来自 `specs/002-spec-kit-demo-workbench/spec.md` 的功能规格

## 概要

将当前单一登录页改造为 `Team Spec Workbench` 首页，用静态数据展示 Spec Kit 流程、功能证据链、工作台能力预览和项目质量门禁。实现保持前端静态化，不引入后端、实时 AI 集成或运行时 Markdown 解析；README 同步改写为对外展示型项目说明，并链接 feature 产物。

## 技术上下文

**语言/版本**：TypeScript 5.8.3、React 19.1.0

**主要依赖**：Vite 7.0.0、Tailwind CSS 4.1.11、React DOM 19.1.0

**存储**：不使用持久化存储；工作台展示数据以内置静态数据表示

**测试**：`npm run build`、`npm run lint`、`npm run format:check`、`npm run spellcheck`，并进行桌面与移动端视觉检查

**目标平台**：现代浏览器中的单页前端应用

**项目类型**：前端 Web 应用

**性能目标**：首屏内容在本地开发环境中即时可见；静态页面不依赖网络请求才能展示核心内容

**约束**：不新增真实后端、真实鉴权、运行时 Markdown 解析或实时 AI 集成；不出现简历、招聘、面试或作品集导向文案

**规模/范围**：第一阶段展示 1 个已完成 feature、3 个工作台能力预览模块、6 个 Spec Kit 流程阶段和 README 证据地图

## 宪法检查

*门禁：Phase 0 research 前必须通过；Phase 1 design 后重新检查。*

- **Specification First**：通过。当前 feature 已创建 `specs/002-spec-kit-demo-workbench/spec.md`，实现前会生成 `plan.md` 和 `tasks.md`。
- **User-Visible Value**：通过。规格按 4 个可独立测试的用户故事组织，覆盖首页理解、证据链、能力预览和 README。
- **Frontend Stack Consistency**：通过。计划继续使用 React 19、TypeScript、Vite 和 Tailwind CSS，不新增依赖。
- **Quality Gates**：通过。交付前运行 build、lint、format check、spellcheck 和视觉检查。
- **Human Approval Gates**：通过。涉及 UI 改造，需在实现前完成 UI 设计并获得人工审批。

## 项目结构

### 文档（本 feature）

```text
specs/002-spec-kit-demo-workbench/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-contract.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### 源码（仓库根目录）

```text
src/
├── App.tsx
├── main.tsx
├── styles.css
├── data/
│   └── workbench.ts
├── components/
│   ├── EvidenceCard.tsx
│   ├── KnowledgeNotes.tsx
│   ├── LoginEvidence.tsx
│   ├── MetricsStrip.tsx
│   ├── ProcessTimeline.tsx
│   ├── SpecBrowser.tsx
│   └── TeamTasks.tsx
└── types/
    └── workbench.ts
```

**结构决策**：保持单页应用，不新增路由。将工作台展示数据集中在 `src/data/workbench.ts`，共享类型放在 `src/types/workbench.ts`，UI 分解为小型展示组件。当前登录表单逻辑从 `App.tsx` 移入 `LoginEvidence.tsx`，作为 `001-login-form` 的已交付能力证据保留。

## Phase 0：研究结论

见 [research.md](./research.md)。

## Phase 1：设计产物

- 数据模型：[data-model.md](./data-model.md)
- UI 合约：[contracts/ui-contract.md](./contracts/ui-contract.md)
- 验证指南：[quickstart.md](./quickstart.md)

## 宪法复查

- **Specification First**：通过。当前计划产物已覆盖 `spec.md` 中全部功能需求，并为 tasks 阶段提供结构。
- **User-Visible Value**：通过。页面和 README 都围绕外部访问者理解流程与证据链展开。
- **Frontend Stack Consistency**：通过。未计划引入新依赖或替换项目技术栈。
- **Quality Gates**：通过。验证命令与宪法一致。
- **Human Approval Gates**：通过。实现前必须补充 UI 设计并等待人工确认。

## 复杂度跟踪

无宪法例外或复杂度豁免。
