import type { Feature } from '../types/workbench';

const featureStatusLabels: Record<Feature['status'], string> = {
  completed: '已完成',
  'in-progress': '进行中',
  planned: '规划中',
};

const artifactStatusLabels: Record<
  Feature['artifacts'][number]['status'],
  string
> = {
  ready: '已就绪',
  draft: '草稿',
  planned: '规划中',
};

type EvidenceCardProps = {
  feature: Feature;
  onOpenDocument: (path: string) => void;
};

export function EvidenceCard({ feature, onOpenDocument }: EvidenceCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-cyan-700">
            {feature.id} / {feature.name}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-950">
            {feature.title}
          </h3>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
          {featureStatusLabels[feature.status]} · {feature.priority}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">{feature.summary}</p>

      <div className="mt-5 grid gap-2">
        {feature.artifacts.map((artifact) => (
          <div
            className="grid min-w-0 gap-2 rounded-md border border-slate-100 bg-slate-50 p-3 sm:grid-cols-[140px_minmax(0,1fr)_auto]"
            key={`${feature.id}-${artifact.label}`}
          >
            <button
              className="text-left font-mono text-sm font-semibold text-cyan-700 transition hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              onClick={() => onOpenDocument(artifact.path)}
              type="button"
            >
              {artifact.label}
            </button>
            <button
              className="min-w-0 overflow-hidden break-all text-left text-sm text-slate-600 transition hover:text-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              onClick={() => onOpenDocument(artifact.path)}
              type="button"
            >
              {artifact.path}
            </button>
            <span className="text-sm font-medium text-slate-700">
              {artifactStatusLabels[artifact.status]}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
