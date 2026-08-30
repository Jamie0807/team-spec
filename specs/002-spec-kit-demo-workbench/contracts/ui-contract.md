# UI 合约：Spec Kit 演示工作台

## 首页合约

首页必须以 `Team Spec Workbench` 作为主要标题，并在首屏说明该项目用于演示 AI 辅助的 Spec Kit 规范先行交付流程。

首页必须包含以下区域：

1. 顶部说明区
2. 摘要指标区
3. Spec Kit 流程时间线
4. Feature 证据区域
5. Spec Browser 演示区
6. Team Tasks 演示区
7. Knowledge Notes 演示区
8. 登录表单 evidence 区域

## 文案合约

页面可以使用以下中性表达：

- 对外展示
- 工程演示
- 技术分享
- 工程评审
- 项目亮点

## Evidence 合约

`001-login-form` 必须展示为已完成 feature，并展示以下产物状态：

- `spec.md`
- `plan.md`
- `tasks.md`
- `test-result.md`

`002-spec-kit-demo-workbench` 在实现完成前可以展示为进行中，但不得暗示已完成验证。

Spec Kit 流程时间线必须区分项目级产物和当前 feature 产物：

- `Constitution` 的证据入口必须标注为项目级原则文档，不得表达为 `002-spec-kit-demo-workbench` 的需求文档。
- `Specify` 的证据入口必须标注为 `002` 需求规格文档，并指向 `specs/002-spec-kit-demo-workbench/spec.md`。
- `Plan`、`Tasks` 和 `Verify` 必须标注为 `002` 对应阶段产物。
- `.md` 证据路径必须可以在应用内点击查看，不能依赖直接打开仓库根目录文件路径。
- 应用内文档查看必须展示 UTF-8 Markdown 阅读视图，避免浏览器路由、静态资源策略或原文符号暴露导致阅读困难。
- 非 Markdown 目录路径只展示为证据位置。

## 响应式合约

- 移动端宽度下，主要区域必须单列展示。
- 桌面端宽度下，允许使用多列布局提高信息密度。
- 任何视口下，时间线、卡片、指标和任务内容不得重叠或溢出。

## README 合约

README 必须包含：

- 项目概览
- 项目亮点
- Spec Kit 工作流
- 功能证据地图
- 技术栈
- 本地运行方式
- 质量检查方式
- 仓库结构

README 必须链接到：

- `specs/001-login-form/spec.md`
- `specs/001-login-form/plan.md`
- `specs/001-login-form/tasks.md`
- `specs/001-login-form/test-result.md`
- `specs/002-spec-kit-demo-workbench/spec.md`
- `specs/002-spec-kit-demo-workbench/plan.md`
- `specs/002-spec-kit-demo-workbench/tasks.md`
