import { FormEvent, useState } from 'react';

type FormErrors = {
  email?: string;
  password?: string;
};

function App() {
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
    <main className="min-h-screen bg-zinc-950 px-5 py-8 text-zinc-100 sm:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-8 lg:grid-cols-[1fr_440px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
              Team Spec
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
              用规范驱动团队交付
            </h1>
            <p className="max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              登录后继续管理需求评审、方案设计、测试验证和代码提交流程。
            </p>
          </div>

          <div className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-3 lg:max-w-2xl">
            {['需求先行', '设计审批', '验证闭环'].map((item) => (
              <div
                className="border-l border-emerald-400/60 bg-white/[0.03] px-4 py-3"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <form
          className="rounded-lg bg-white p-6 text-zinc-950 shadow-2xl shadow-black/30 sm:p-8"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="mb-7 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-normal">登录</h2>
            <p className="text-sm leading-6 text-zinc-600">
              使用你的账号进入 Team Spec 工作台。
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
                className="text-sm font-medium text-zinc-800"
                htmlFor="email"
              >
                邮箱
              </label>
              <input
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
                className={`h-11 rounded-md border px-3 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 ${
                  errors.email ? 'border-red-400' : 'border-zinc-300'
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
                className="text-sm font-medium text-zinc-800"
                htmlFor="password"
              >
                密码
              </label>
              <input
                aria-describedby={
                  errors.password ? 'password-error' : undefined
                }
                aria-invalid={Boolean(errors.password)}
                autoComplete="current-password"
                className={`h-11 rounded-md border px-3 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 ${
                  errors.password ? 'border-red-400' : 'border-zinc-300'
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
            <label className="flex items-center gap-2 text-zinc-700">
              <input
                checked={rememberMe}
                className="size-4 rounded border-zinc-300 accent-emerald-600"
                onChange={(event) => setRememberMe(event.target.checked)}
                type="checkbox"
              />
              记住我
            </label>
            <button className="font-medium text-emerald-700" type="button">
              忘记密码？
            </button>
          </div>

          <button
            className="mt-7 h-11 w-full rounded-md bg-emerald-600 px-4 text-base font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? '正在登录...' : '登录'}
          </button>

          <p className="mt-5 text-center text-sm text-zinc-600">
            还没有账号？联系管理员开通。
          </p>
        </form>
      </section>
    </main>
  );
}

export default App;
