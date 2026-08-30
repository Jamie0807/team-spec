# 快速验证：Spec Kit 演示工作台

## 前置条件

- 已安装 Node.js 和 npm
- 已在项目根目录运行 `npm install`

## 本地启动

```sh
npm run dev
```

预期结果：

- Vite 启动本地开发服务器
- 浏览器打开后可以看到 `Team Spec Workbench` 首页

## 构建验证

```sh
npm run build
```

预期结果：

- TypeScript 编译通过
- Vite 生产构建通过

## 代码检查

```sh
npm run lint
```

预期结果：

- ESLint 无错误

## 格式检查

```sh
npm run format:check
```

预期结果：

- Prettier 检查通过

## 拼写检查

```sh
npm run spellcheck
```

预期结果：

- cspell 检查通过；如项目术语需要加入词典，应在提交前同步更新配置

## 手动场景验证

### 场景 1：首页定位

1. 打开应用首页。
2. 确认首屏展示 `Team Spec Workbench`。
3. 确认页面说明该项目用于演示 AI 辅助 Spec Kit 工作流。
4. 确认可以看到摘要指标和流程时间线。

### 场景 2：功能证据链

1. 找到 feature evidence 区域。
2. 确认 `001-login-form` 标记为已完成。
3. 确认能看到 `spec.md`、`plan.md`、`tasks.md` 和验证记录状态。

### 场景 3：工作台能力预览

1. 查看 `Spec Browser` 区域。
2. 查看 `Team Tasks` 区域。
3. 查看 `Knowledge Notes` 区域。
4. 确认三个区域都明确表现为静态演示或规划能力。

### 场景 4：README 证据地图

1. 打开 README。
2. 确认 README 包含项目概览、项目亮点、Spec Kit 工作流和功能证据地图。
3. 点击 feature 产物链接，确认链接指向真实文件。

### 场景 5：响应式检查

1. 使用桌面宽度查看页面，确认信息布局清晰。
2. 使用移动端宽度查看页面，确认页面单列展示。
3. 确认文本、卡片、时间线和任务内容没有重叠或溢出。
