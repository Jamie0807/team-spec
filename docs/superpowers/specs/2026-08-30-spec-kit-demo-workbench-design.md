# Spec Kit 演示工作台设计

## 目标

将本仓库从单一的登录表示例，升级为一个适合对外展示的作品集项目，用来演示完整的
Spec Kit 工作流。项目需要同时展示一个可运行的 AI 开发工作台体验，以及每个已交付
功能背后的需求、计划、任务和验证证据链。

主要受众是通过简历链接打开 GitHub 仓库或运行项目的招聘方、面试官和工程评审者。

## 项目定位

项目对外命名为 **Team Spec Workbench**：一个面向开发团队的 AI 辅助开发工作台，
用于通过 Spec Kit 管理团队功能、项目知识和交付证据。

简历中的核心表达可以是：

> 构建了一个基于 React 19 和 TypeScript 的开发工作台，展示如何使用 Spec Kit
> 进行规范先行的功能交付；每个功能都具备 spec、plan、tasks 和验证记录。

## MVP 范围

第一阶段目标是完成适合写入简历的 MVP：

- 将 README 改写为对外展示型项目说明。
- 将当前单一登录页改造为工作台导向的首页体验。
- 将 Spec Kit 流程作为页面中的一等信息展示：
  `Constitution -> Specify -> Plan -> Tasks -> Implement -> Verify`。
- 使用现有 `001-login-form` 作为第一个已完成的功能证据示例。
- 引入静态演示模块，为后续工作台能力预留产品形态：
  `Spec Browser`、`Team Tasks` 和 `Knowledge Notes`。

MVP 的成功标准是：评审者在约三分钟内能理解项目目标、技术栈、Spec Kit 流程和已完成
功能的证据链。

## Spec Kit 要求

所有新的产品需求都必须先通过 Spec Kit 产物表达，再进入实现。

第一阶段 MVP 应创建新的 feature 目录：

```text
specs/002-spec-kit-demo-workbench/
```

该目录至少包含：

```text
spec.md
plan.md
tasks.md
```

README 改造、工作台首页、功能证据卡片、流程时间线和静态演示模块都归入这个 feature。
后续独立能力应继续创建单独的 feature 目录，例如：

- `003-spec-browser`
- `004-team-task-board`
- `005-knowledge-notes`

## 应用设计

应用应该像一个专注的开发者工作台，而不是营销落地页。界面需要保持信息密度、可扫描性
和克制的视觉风格。

首屏应包含：

- 项目标题：`Team Spec Workbench`
- AI 辅助 Spec Kit 工作流的简短说明
- 已完成功能数、Spec Kit 产物数和质量门禁状态等摘要指标
- 从 constitution 到 verification 的流程时间线
- `001-login-form` 的功能证据卡片

核心展示区域应包含：

- `Spec Browser`：紧凑展示每个 feature 的产物及状态
- `Team Tasks`：用看板形式展示从 `tasks.md` 映射出的任务阶段
- `Knowledge Notes`：展示需求决策、技术方案和验证复盘

当前登录表单可以保留为第一个已交付功能的证据，但默认用户体验应该传达更完整的
workbench 概念。

## README 设计

README 应面向外部评审者编写，先讲项目故事，再提供实践细节。

建议结构：

1. 项目概览
2. 简历亮点
3. Spec Kit 工作流
4. 功能证据地图
5. 应用截图或页面说明
6. 技术栈
7. 本地运行方式
8. 质量检查
9. 仓库结构

README 需要让 Spec Kit 证据易于检查，并直接链接到 `specs/` 中的 feature 产物。

## 验证方式

在宣布 MVP 完成前，运行：

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```

同时在桌面和移动端宽度下进行视觉检查，确认工作台页面中的文本、按钮、卡片和时间线
内容没有重叠或溢出。

## 第一阶段不包含

- 真实登录鉴权
- 后端持久化
- 运行时解析 Markdown 文件
- 多用户协作
- 真实 AI 集成
- 完整任务编辑工作流

这些能力后续可以作为独立的 Spec Kit feature 继续扩展。
