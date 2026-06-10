# 任务：登录表单

**输入**：来自 `/specs/001-login-form/` 的设计文档。

**前置产物**：plan.md、spec.md、research.md、data-model.md、quickstart.md

**测试**：当前未配置专用测试框架。通过 build、lint、format check、spellcheck 和 quickstart 手动场景验证。

**组织方式**：任务按用户故事分组，便于独立实现和测试。

## 阶段 1：准备（共享基础）

**目的**：确认项目依赖和功能文档。

- [x] T001 确认 package.json 已配置 React 19、Vite、TypeScript、Tailwind CSS、ESLint、Prettier 和 cspell
- [x] T002 在 specs/001-login-form/ 创建 Spec Kit 功能产物

---

## 阶段 2：基础能力（阻塞前置）

**目的**：建立表单状态和校验基础。

- [x] T003 在 src/App.tsx 中定义表单状态和校验错误类型
- [x] T004 在 src/App.tsx 中实现邮箱和密码校验逻辑

---

## 阶段 3：用户故事 1 - 查看登录入口（优先级：P1）🎯 MVP

**目标**：用户可以从首屏识别登录入口。

**独立测试**：打开应用，确认桌面端无需滚动即可看到品牌区和登录表单。

### 用户故事 1 实现

- [x] T005 [US1] 在 src/App.tsx 中用登录页面布局替换占位内容
- [x] T006 [US1] 在 src/App.tsx 中添加桌面两栏和移动单列响应式布局
- [x] T007 [US1] 在 src/App.tsx 中添加品牌文案和功能亮点

---

## 阶段 4：用户故事 2 - 提交有效凭据（优先级：P1）

**目标**：用户可以提交有效凭据，并看到处理中和成功反馈。

**独立测试**：提交有效凭据，确认加载状态和成功状态。

### 用户故事 2 实现

- [x] T008 [US2] 在 src/App.tsx 中添加邮箱、密码、“记住我”和提交控件
- [x] T009 [US2] 在 src/App.tsx 中实现提交处理和模拟异步登录
- [x] T010 [US2] 在 src/App.tsx 中提交时禁用按钮并更新按钮文案
- [x] T011 [US2] 在 src/App.tsx 中模拟登录后展示成功反馈

---

## 阶段 5：用户故事 3 - 修正无效输入（优先级：P2）

**目标**：用户可以理解并修正无效邮箱或密码。

**独立测试**：提交无效输入，确认字段级错误。

### 用户故事 3 实现

- [x] T012 [US3] 在 src/App.tsx 中渲染邮箱校验信息
- [x] T013 [US3] 在 src/App.tsx 中渲染密码校验信息
- [x] T014 [US3] 在 src/App.tsx 中为无效字段添加 aria-invalid 和 aria-describedby 关联

---

## 最终阶段：打磨与横切事项

**目的**：验证质量门禁并记录结果。

- [x] T015 运行 npm run build
- [x] T016 运行 npm run lint
- [x] T017 运行 npm run format:check
- [x] T018 运行 npm run spellcheck
- [x] T019 在 specs/001-login-form/ 中记录审查和测试结果

## 依赖与执行顺序

- 准备阶段先于基础能力。
- 基础校验状态先于用户故事实现。
- US1 和 US2 都是 P1，基础能力完成后可以独立验证。
- US3 依赖阶段 2 的校验基础。

## 实现策略

MVP 优先：先完成 US1 和 US2，再补充 US3 校验反馈和最终质量门禁。
