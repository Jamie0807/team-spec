# 任务：Spec Kit 演示工作台

**输入**：来自 `specs/002-spec-kit-demo-workbench/` 的设计文档。

**前置产物**：`spec.md`、`plan.md`、`research.md`、`data-model.md`、`contracts/ui-contract.md`、`quickstart.md`

**测试**：当前未配置专用测试框架。通过 build、lint、format check、spellcheck 和 quickstart 手动场景验证。

**组织方式**：任务按用户故事分组，便于独立实现和验证。

## 阶段 1：准备（共享基础）

**目的**：确认文档、约束和实现范围。

- [ ] T001 确认 `specs/002-spec-kit-demo-workbench/spec.md`、`plan.md`、`research.md`、`data-model.md`、`contracts/ui-contract.md` 和 `quickstart.md` 已存在
- [ ] T002 确认 `.specify/feature.json` 指向 `specs/002-spec-kit-demo-workbench`
- [ ] T003 确认 `AGENTS.md` 的 Spec Kit 上下文指向 `specs/002-spec-kit-demo-workbench/plan.md`

---

## 阶段 2：基础能力（阻塞前置）

**目的**：建立工作台数据、类型和 UI 设计审批门禁。

**关键门禁**：UI 设计必须先写入 `specs/002-spec-kit-demo-workbench/ui-design.md` 并获得人工确认，之后才能进入编码实现。

- [ ] T004 在 `specs/002-spec-kit-demo-workbench/ui-design.md` 中定义工作台首页布局、视觉风格、模块层级和移动端表现，并等待人工审批
- [ ] T005 [P] 在 `src/types/workbench.ts` 中定义 `Feature`、`SpecKitArtifact`、`WorkflowStage`、`QualityGate`、`KnowledgeNote` 和 `TaskColumn` 类型
- [ ] T006 [P] 在 `src/data/workbench.ts` 中创建静态数据，覆盖流程阶段、feature 证据、质量门禁、任务阶段和知识笔记
- [ ] T007 在 `src/data/workbench.ts` 中确保 `001-login-form` 的核心产物路径指向真实文件

---

## 阶段 3：用户故事 1 - 理解项目定位与流程（优先级：P1）🎯 MVP

**目标**：外部访问者打开应用后，可以快速理解这是一个用于演示 Spec Kit 规范先行交付流程的 AI 开发工作台。

**独立测试**：打开应用首页，确认首屏展示 `Team Spec Workbench`、项目说明、摘要指标和 Spec Kit 流程时间线。

### 用户故事 1 实现

- [ ] T008 [P] [US1] 在 `src/components/MetricsStrip.tsx` 中实现摘要指标展示组件
- [ ] T009 [P] [US1] 在 `src/components/ProcessTimeline.tsx` 中实现 6 阶段 Spec Kit 流程时间线
- [ ] T010 [US1] 在 `src/App.tsx` 中实现工作台首页顶部说明区，并接入 `MetricsStrip` 与 `ProcessTimeline`
- [ ] T011 [US1] 在 `src/App.tsx` 中替换单一登录页首屏，使默认体验表达 `Team Spec Workbench`

**检查点**：US1 完成后，首页应能独立展示项目定位和 Spec Kit 流程，不依赖其它用户故事。

---

## 阶段 4：用户故事 2 - 查看功能证据链（优先级：P1）

**目标**：外部访问者可以看到已交付功能与 Spec Kit 产物之间的关系。

**独立测试**：查看功能证据区域，确认 `001-login-form` 展示为已完成示例，并列出规格、计划、任务和验证记录状态。

### 用户故事 2 实现

- [ ] T012 [P] [US2] 在 `src/components/EvidenceCard.tsx` 中实现 feature 证据卡片组件
- [ ] T013 [P] [US2] 在 `src/components/SpecBrowser.tsx` 中实现 feature 产物状态列表
- [ ] T014 [US2] 在 `src/App.tsx` 中接入 `EvidenceCard` 和 `SpecBrowser`
- [ ] T015 [US2] 在 `README.md` 中新增功能证据地图，并链接到 `specs/001-login-form/` 和 `specs/002-spec-kit-demo-workbench/` 的核心产物

**检查点**：US2 完成后，页面和 README 都应能说明 feature 与 Spec Kit 产物之间的关系。

---

## 阶段 5：用户故事 3 - 浏览工作台能力预览（优先级：P2）

**目标**：外部访问者可以理解后续工作台能力，包括 Spec Browser、Team Tasks 和 Knowledge Notes。

**独立测试**：打开首页，确认三个演示模块都有清晰标题、状态、内容和用途。

### 用户故事 3 实现

- [ ] T016 [P] [US3] 在 `src/components/TeamTasks.tsx` 中实现任务阶段看板
- [ ] T017 [P] [US3] 在 `src/components/KnowledgeNotes.tsx` 中实现知识笔记模块
- [ ] T018 [US3] 在 `src/App.tsx` 中接入 `TeamTasks` 和 `KnowledgeNotes`
- [ ] T019 [US3] 在 `src/App.tsx` 中明确将未完成能力标记为演示预览或规划中

**检查点**：US3 完成后，工作台应具备真实业务小应用的产品形态，但不暗示未完成能力已经上线。

---

## 阶段 6：用户故事 4 - 通过 README 了解项目结构（优先级：P2）

**目标**：外部访问者可以通过 README 理解项目目标、技术栈、Spec Kit 流程、功能证据地图、本地运行方式和质量检查方式。

**独立测试**：打开 README，确认包含项目概览、项目亮点、Spec Kit 工作流、功能证据地图、运行命令和质量检查命令。

### 用户故事 4 实现

- [ ] T020 [US4] 在 `README.md` 中重写项目概览和项目亮点
- [ ] T021 [US4] 在 `README.md` 中补充 Spec Kit 工作流说明和当前 feature 目录结构
- [ ] T022 [US4] 在 `README.md` 中补充本地运行、构建、预览和质量检查命令
- [ ] T023 [US4] 在 `README.md` 中确保所有仓库内链接指向真实文件

**检查点**：US4 完成后，不运行应用也能通过 README 理解项目用途和证据链。

---

## 最终阶段：打磨与横切事项

**目的**：验证质量门禁、视觉可用性和文案约束。

- [ ] T024 在 `src/App.tsx` 和 `src/components/*.tsx` 中检查响应式布局，确保桌面与移动端没有文本重叠、内容溢出或不可读模块
- [ ] T025 在 `README.md`、`src/App.tsx`、`src/components/*.tsx` 和 `specs/002-spec-kit-demo-workbench/` 中搜索并移除职业求职导向文案
- [ ] T026 运行 `npm run build`
- [ ] T027 运行 `npm run lint`
- [ ] T028 运行 `npm run format:check`
- [ ] T029 运行 `npm run spellcheck`
- [ ] T030 按 `specs/002-spec-kit-demo-workbench/quickstart.md` 完成手动验证，并将结果记录到 `specs/002-spec-kit-demo-workbench/test-result.md`

## 依赖与执行顺序

- 阶段 1 必须先完成，确认 feature 文档和上下文指针正确。
- 阶段 2 是所有页面实现的前置条件，尤其 T004 的 UI 设计审批必须先完成。
- US1 和 US2 都是 P1，基础能力完成后优先按 US1 -> US2 顺序实现。
- US3 和 US4 是 P2，可以在 US1/US2 完成后并行推进。
- 最终阶段依赖所有目标用户故事完成。

## 并行机会

- T005 和 T006 可以并行，但 T007 依赖 T006。
- T008 和 T009 可以并行。
- T012 和 T013 可以并行。
- T016 和 T017 可以并行。
- README 相关任务 T020、T021、T022 可以在页面组件实现后并行整理，但 T023 需要最后统一校验链接。

## 实现策略

MVP 优先：

1. 完成阶段 1 和阶段 2。
2. 完成 US1，让首页先能讲清楚项目定位和流程。
3. 完成 US2，让功能证据链可见。
4. 完成 US3 和 US4，补齐工作台能力预览和 README。
5. 运行最终质量门禁并记录验证结果。
