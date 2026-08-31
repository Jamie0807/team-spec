import type { WorkflowStage } from '../types/workbench';

const statusLabels: Record<WorkflowStage['status'], string> = {
  passed: '已完成',
  pending: '进行中',
  planned: '待执行',
};

const statusClasses: Record<WorkflowStage['status'], string> = {
  passed: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  pending: 'border-cyan-200 bg-cyan-50 text-cyan-800',
  planned: 'border-slate-200 bg-slate-100 text-slate-700',
};

type ProcessTimelineProps = {
  stages: WorkflowStage[];
  onOpenDocument: (path: string) => void;
};

const isDocumentPath = (path: string) => path.endsWith('.md');

const getEvidencePaths = (evidence: WorkflowStage['evidence']) =>
  Array.isArray(evidence) ? evidence : [evidence];

export function ProcessTimeline({
  onOpenDocument,
  stages,
}: ProcessTimelineProps) {
  return (
    <section className="space-y-4" id="process">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-cyan-700">Spec Kit 流程</p>
          <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
            从原则到验证的交付路径
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          每个阶段都产生可检查的产物，让需求、实现和验证保持可追踪。
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        {stages.map((stage) => {
          const evidencePaths = getEvidencePaths(stage.evidence);

          return (
            <article
              className="min-w-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              key={stage.name}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {stage.order}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusClasses[stage.status]}`}
                >
                  {statusLabels[stage.status]}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">
                {stage.title}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-normal text-slate-400">
                {stage.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stage.purpose}
              </p>
              <p className="mt-3 text-xs font-semibold text-slate-500">
                {stage.evidenceLabel}
              </p>
              <div className="mt-1 grid gap-1.5">
                {evidencePaths.map((path) =>
                  isDocumentPath(path) ? (
                    <button
                      className="block w-full min-w-0 overflow-hidden break-all rounded-md bg-slate-50 px-2 py-1.5 text-left text-xs font-medium text-cyan-700 transition hover:bg-cyan-50 hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                      key={path}
                      onClick={() => onOpenDocument(path)}
                      type="button"
                    >
                      {path}
                    </button>
                  ) : (
                    <p
                      className="w-full min-w-0 overflow-hidden break-all rounded-md bg-slate-50 px-2 py-1.5 text-xs text-slate-500"
                      key={path}
                    >
                      {path}
                    </p>
                  ),
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
