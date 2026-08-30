import type { Feature } from '../types/workbench';

type SpecBrowserProps = {
  features: Feature[];
  onOpenDocument: (path: string) => void;
};

export function SpecBrowser({ features, onOpenDocument }: SpecBrowserProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-cyan-700">Spec Browser</p>
          <h2 className="text-xl font-semibold text-slate-950">
            Feature 产物状态
          </h2>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
          演示预览
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {features.map((feature) => {
          const readyCount = feature.artifacts.filter(
            (artifact) => artifact.status === 'ready',
          ).length;

          return (
            <article
              className="border-t border-slate-100 pt-4"
              key={feature.id}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-950">
                  {feature.id} · {feature.title}
                </h3>
                <span className="text-sm text-slate-500">
                  {readyCount}/{feature.artifacts.length} 产物就绪
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {feature.artifacts.map((artifact) => (
                  <button
                    className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-cyan-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                    key={`${feature.id}-${artifact.label}`}
                    onClick={() => onOpenDocument(artifact.path)}
                    type="button"
                  >
                    {artifact.label}
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
