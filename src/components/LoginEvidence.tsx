import { FormEvent, useState } from 'react';

type FormErrors = {
  email?: string;
  password?: string;
};

export function LoginEvidence() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      nextErrors.email = '请输入邮箱。';
    } else if (!emailPattern.test(email)) {
      nextErrors.email = '请输入有效的邮箱地址。';
    }

    if (!password) {
      nextErrors.password = '请输入密码。';
    } else if (password.length < 8) {
      nextErrors.password = '密码至少需要 8 个字符。';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage('');

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('登录信息已验证，正在进入工作台。');
    }, 800);
  };

  return (
    <section
      className="grid gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1fr_420px]"
      id="login-evidence"
    >
      <div>
        <p className="text-sm font-semibold text-cyan-700">
          001-login-form evidence
        </p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-950">
          已交付功能示例：用户登录表单
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          这个表单保留了第一个 feature 的实际交付结果：字段校验、提交状态、
          记住我选项和模拟成功反馈。它对应 `001-login-form` 下的规格、计划、
          任务和验证记录。
        </p>
      </div>

      <form
        className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-slate-950"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-5 flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-normal">登录</h3>
          <p className="text-sm leading-6 text-slate-600">
            使用示例账号进入 Team Spec 工作台。
          </p>
        </div>

        {successMessage ? (
          <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {successMessage}
          </div>
        ) : null}

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-slate-800"
              htmlFor="email"
            >
              邮箱
            </label>
            <input
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              className={`h-11 rounded-md border bg-white px-3 text-base outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 ${
                errors.email ? 'border-red-400' : 'border-slate-300'
              }`}
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              type="email"
              value={email}
            />
            {errors.email ? (
              <p className="text-sm text-red-600" id="email-error">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-slate-800"
              htmlFor="password"
            >
              密码
            </label>
            <input
              aria-describedby={errors.password ? 'password-error' : undefined}
              aria-invalid={Boolean(errors.password)}
              autoComplete="current-password"
              className={`h-11 rounded-md border bg-white px-3 text-base outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 ${
                errors.password ? 'border-red-400' : 'border-slate-300'
              }`}
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="至少 8 个字符"
              type="password"
              value={password}
            />
            {errors.password ? (
              <p className="text-sm text-red-600" id="password-error">
                {errors.password}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-slate-700">
            <input
              checked={rememberMe}
              className="size-4 rounded border-slate-300 accent-cyan-700"
              onChange={(event) => setRememberMe(event.target.checked)}
              type="checkbox"
            />
            记住我
          </label>
          <button className="font-medium text-cyan-700" type="button">
            忘记密码？
          </button>
        </div>

        <button
          className="mt-7 h-11 w-full rounded-md bg-slate-950 px-4 text-base font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? '正在登录...' : '登录'}
        </button>

        <p className="mt-5 text-center text-sm text-slate-600">
          还没有账号？联系管理员开通。
        </p>
      </form>
    </section>
  );
}
