# 数据模型：Spec Kit 演示工作台

## Feature

表示一个通过 Spec Kit 管理的功能单元。

**字段**：

- `id`：feature 编号，例如 `001`
- `name`：feature 名称，例如 `login-form`
- `title`：面向用户展示的标题
- `status`：`completed`、`in-progress` 或 `planned`
- `priority`：`P1`、`P2` 或 `P3`
- `summary`：一句话说明该 feature 的用户价值
- `artifacts`：关联的 Spec Kit 产物列表

**关系**：

- 一个 Feature 可以关联多个 Spec Kit 产物
- 一个 Feature 可以关联多个任务阶段和知识笔记

## Spec Kit Artifact

表示 feature 交付过程中的文档证据。

**字段**：

- `label`：产物名称，例如 `spec.md`
- `path`：仓库内相对路径
- `status`：`ready`、`draft` 或 `planned`
- `description`：该产物在流程中的作用

**验证规则**：

- 已完成 feature 的核心产物路径必须指向仓库内真实文件
- 规划中产物必须清晰标记为 `planned`

## Workflow Stage

表示 Spec Kit 流程中的一个阶段。

**字段**：

- `name`：阶段名，例如 `Specify`
- `order`：流程顺序
- `purpose`：该阶段解决的问题
- `evidence`：该阶段产生或引用的证据

**验证规则**：

- 首页必须展示 6 个阶段：`Constitution`、`Specify`、`Plan`、`Tasks`、`Implement`、`Verify`
- 阶段顺序必须与 Spec Kit 工作流一致

## Quality Gate

表示交付完成前需要通过的检查。

**字段**：

- `name`：检查名称
- `command`：检查命令或人工检查说明
- `status`：`passed`、`pending` 或 `planned`
- `scope`：检查覆盖范围

## Knowledge Note

表示需求决策、技术方案或验证复盘。

**字段**：

- `title`：笔记标题
- `category`：`decision`、`design` 或 `validation`
- `summary`：笔记摘要
- `relatedFeatureId`：关联 feature 编号

## Task Column

表示任务看板中的阶段列。

**字段**：

- `title`：列标题
- `description`：阶段说明
- `tasks`：任务摘要列表

## 状态流转

Feature 状态按以下方向演进：

```text
planned -> in-progress -> completed
```

Spec Kit 产物状态按以下方向演进：

```text
planned -> draft -> ready
```
