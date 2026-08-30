import type { TaskColumn } from '../types/workbench';

const taskStatusLabels: Record<TaskColumn['tasks'][number]['status'], string> =
  {
    active: '进行中',
    done: '已完成',
    pending: '待执行',
  };

const verificationLabels: Record<
  TaskColumn['tasks'][number]['verification'],
  string
> = {
  passed: '验证通过',
  pending: '待确认',
  planned: '待验证',
};

type TeamTasksProps = {
  columns: TaskColumn[];
};

export function TeamTasks({ columns }: TeamTasksProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-cyan-700">Team Tasks</p>
          <h2 className="text-xl font-semibold text-slate-950">
            从 tasks.md 映射出的任务阶段
          </h2>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
          规划中
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {columns.map((column) => (
          <article
            className="rounded-lg border border-slate-100 bg-slate-50 p-4"
            key={column.title}
          >
            <h3 className="font-semibold text-slate-950">{column.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {column.description}
            </p>
            <ul className="mt-4 space-y-2">
              {column.tasks.map((task) => (
                <li
                  className="rounded-md border border-slate-200 bg-white p-2.5"
                  key={task.title}
                >
                  <p className="text-sm font-medium text-slate-800">
                    {task.title}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">
                      {taskStatusLabels[task.status]}
                    </span>
                    <span className="rounded-full bg-cyan-50 px-2 py-1 text-cyan-700">
                      {verificationLabels[task.verification]}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
