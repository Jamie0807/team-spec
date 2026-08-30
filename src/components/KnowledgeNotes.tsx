import type { KnowledgeNote } from '../types/workbench';

const categoryLabels: Record<KnowledgeNote['category'], string> = {
  decision: '决策',
  design: '设计',
  validation: '验证',
};

type KnowledgeNotesProps = {
  notes: KnowledgeNote[];
};

export function KnowledgeNotes({ notes }: KnowledgeNotesProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-cyan-700">Knowledge Notes</p>
          <h2 className="text-xl font-semibold text-slate-950">
            决策、设计与验证沉淀
          </h2>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
          演示预览
        </span>
      </div>

      <div className="mt-5 grid gap-3">
        {notes.map((note) => (
          <article
            className="rounded-lg border border-slate-100 bg-slate-50 p-4"
            key={note.title}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                {categoryLabels[note.category]}
              </span>
              <span className="text-xs text-slate-500">
                feature {note.relatedFeatureId}
              </span>
            </div>
            <h3 className="mt-3 font-semibold text-slate-950">{note.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {note.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
