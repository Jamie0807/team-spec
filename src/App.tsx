import { useState } from 'react';
import { EvidenceCard } from './components/EvidenceCard';
import { DocumentViewer } from './components/DocumentViewer';
import { KnowledgeNotes } from './components/KnowledgeNotes';
import { LoginEvidence } from './components/LoginEvidence';
import { MetricsStrip } from './components/MetricsStrip';
import { ProcessTimeline } from './components/ProcessTimeline';
import { SpecBrowser } from './components/SpecBrowser';
import { TeamTasks } from './components/TeamTasks';
import { workbenchDocuments } from './data/documentContents';
import {
  features,
  knowledgeNotes,
  metrics,
  qualityGates,
  taskColumns,
  workflowStages,
} from './data/workbench';

function App() {
  const [activeDocumentPath, setActiveDocumentPath] = useState<string | null>(
    null,
  );

  const gateStatusLabels = {
    passed: '已通过',
    pending: '待确认',
    planned: '待执行',
  };
  const activeDocument = activeDocumentPath
    ? workbenchDocuments[activeDocumentPath]
    : null;

  const openDocument = (path: string) => {
    setActiveDocumentPath(path);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a className="text-base font-semibold text-slate-950" href="#top">
            Team Spec Workbench
          </a>
          <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <a className="hover:text-slate-950" href="#process">
              流程
            </a>
            <a className="hover:text-slate-950" href="#evidence">
              证据
            </a>
            <a className="hover:text-slate-950" href="#tasks">
              任务
            </a>
            <a className="hover:text-slate-950" href="#knowledge">
              知识
            </a>
          </div>
        </nav>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:py-10">
        <section
          className="grid gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1.3fr_0.7fr] lg:p-8"
          id="top"
        >
          <div className="flex flex-col justify-center gap-5">
            <p className="text-sm font-semibold text-cyan-700">
              AI 辅助的规范先行交付
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">
                Team Spec Workbench
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                一个用于展示 Spec Kit 工作流的开发工作台：每个功能都从
                spec、plan、tasks
                走到实现与验证，让需求、决策和交付证据保持一致。
              </p>
            </div>
            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              {['规格先行', '任务可追踪', '验证闭环'].map((item) => (
                <div
                  className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold text-cyan-300">
              当前 active feature
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              002 · Spec Kit 演示工作台
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              当前阶段：已完成 specification、planning、tasks、UI
              设计和页面实现，视觉验证待人工确认。
            </p>
            <dl className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                <dt className="text-slate-300">默认文档语言</dt>
                <dd className="font-medium">中文</dd>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                <dt className="text-slate-300">提交策略</dt>
                <dd className="font-medium">人工确认</dd>
              </div>
            </dl>
          </aside>
        </section>

        <MetricsStrip metrics={metrics} />
        <ProcessTimeline
          onOpenDocument={openDocument}
          stages={workflowStages}
        />

        <section className="space-y-4" id="evidence">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-700">
                Feature Evidence
              </p>
              <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
                功能交付证据链
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              每个 feature 都连接到对应的规格、计划、任务和验证记录。
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {features.map((feature) => (
              <EvidenceCard
                feature={feature}
                key={feature.id}
                onOpenDocument={openDocument}
              />
            ))}
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]" id="tasks">
          <SpecBrowser features={features} onOpenDocument={openDocument} />
          <TeamTasks columns={taskColumns} />
        </section>

        <section
          className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]"
          id="knowledge"
        >
          <KnowledgeNotes notes={knowledgeNotes} />
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-cyan-700">Quality Gates</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">
              交付前检查
            </h2>
            <div className="mt-5 grid gap-3">
              {qualityGates.map((gate) => (
                <div
                  className="grid gap-2 rounded-md border border-slate-100 bg-slate-50 p-3 sm:grid-cols-[120px_1fr_auto]"
                  key={gate.name}
                >
                  <span className="font-semibold text-slate-900">
                    {gate.name}
                  </span>
                  <span className="font-mono text-sm text-slate-600">
                    {gate.command}
                  </span>
                  <span className="text-sm text-slate-600">
                    {gateStatusLabels[gate.status]} · {gate.scope}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </section>

        <LoginEvidence />
      </div>
      <DocumentViewer
        document={activeDocument}
        onClose={() => setActiveDocumentPath(null)}
      />
    </main>
  );
}

export default App;
