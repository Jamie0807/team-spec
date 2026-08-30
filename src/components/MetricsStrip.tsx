import type { Metric } from '../types/workbench';

type MetricsStripProps = {
  metrics: Metric[];
};

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <section
      aria-label="项目摘要指标"
      className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
    >
      {metrics.map((metric) => (
        <article
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          key={metric.label}
        >
          <p className="text-2xl font-semibold text-slate-950">
            {metric.value}
          </p>
          <h3 className="mt-2 text-sm font-semibold text-slate-800">
            {metric.label}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {metric.description}
          </p>
        </article>
      ))}
    </section>
  );
}
