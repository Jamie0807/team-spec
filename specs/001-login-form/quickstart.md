# 快速验证：登录表单

## 前置条件

安装依赖：

```sh
npm install
```

## 运行应用

```sh
npm run dev
```

预期结果：

- 应用展示 Team Spec 登录页面。
- 桌面端使用品牌区 + 登录表单的两栏布局。
- 移动端将品牌区堆叠在表单上方。

## 手动验证

1. 空字段提交，确认两个字段都显示错误。
2. 输入非法邮箱，确认邮箱错误出现。
3. 输入少于 8 个字符的密码，确认密码错误出现。
4. 输入 `name@example.com` 和至少 8 个字符的密码后提交。
5. 确认提交过程中按钮显示 `正在登录...`。
6. 确认模拟提交后显示成功提示。

## 自动检查

```sh
npm run build
npm run lint
npm run format:check
npm run spellcheck
```
