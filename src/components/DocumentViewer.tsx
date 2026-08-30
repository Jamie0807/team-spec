import type { WorkbenchDocument } from '../data/documentContents';
import type { ReactNode } from 'react';

type DocumentViewerProps = {
  document: WorkbenchDocument | null;
  onClose: () => void;
};

const renderInlineMarkdown = (text: string) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.95em] text-cyan-800"
          key={`${part}-${index}`}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong
          className="font-semibold text-slate-950"
          key={`${part}-${index}`}
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

const renderMarkdownBlocks = (content: string) => {
  const blocks: ReactNode[] = [];
  const lines = content.split('\n');
  let listItems: ReactNode[] = [];
  let orderedListItems: ReactNode[] = [];
  let codeLines: string[] = [];
  let isCodeBlock = false;

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push(
        <ul
          className="my-3 list-disc space-y-1 pl-5"
          key={`ul-${blocks.length}`}
        >
          {listItems}
        </ul>,
      );
      listItems = [];
    }

    if (orderedListItems.length > 0) {
      blocks.push(
        <ol
          className="my-3 list-decimal space-y-1 pl-5"
          key={`ol-${blocks.length}`}
        >
          {orderedListItems}
        </ol>,
      );
      orderedListItems = [];
    }
  };

  const flushCodeBlock = () => {
    if (codeLines.length > 0) {
      blocks.push(
        <pre
          className="my-4 overflow-x-auto rounded-md bg-slate-950 p-4 text-sm leading-6 text-slate-100"
          key={`code-${blocks.length}`}
        >
          <code>{codeLines.join('\n')}</code>
        </pre>,
      );
      codeLines = [];
    }
  };

  lines.forEach((line, index) => {
    if (line.startsWith('```')) {
      if (isCodeBlock) {
        flushCodeBlock();
        isCodeBlock = false;
      } else {
        flushList();
        isCodeBlock = true;
      }
      return;
    }

    if (isCodeBlock) {
      codeLines.push(line);
      return;
    }

    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushList();
      return;
    }

    const headingMatch = trimmedLine.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2];

      if (level === 1) {
        blocks.push(
          <h1
            className="mb-4 mt-1 text-3xl font-semibold leading-tight text-slate-950"
            key={`h1-${index}`}
          >
            {renderInlineMarkdown(text)}
          </h1>,
        );
        return;
      }

      if (level === 2) {
        blocks.push(
          <h2
            className="mb-3 mt-6 text-2xl font-semibold leading-tight text-slate-950"
            key={`h2-${index}`}
          >
            {renderInlineMarkdown(text)}
          </h2>,
        );
        return;
      }

      blocks.push(
        <h3
          className="mb-2 mt-5 text-lg font-semibold leading-snug text-slate-950"
          key={`h3-${index}`}
        >
          {renderInlineMarkdown(text)}
        </h3>,
      );
      return;
    }

    const unorderedMatch = trimmedLine.match(/^- (.+)$/);
    if (unorderedMatch) {
      if (orderedListItems.length > 0) {
        flushList();
      }
      listItems.push(
        <li className="leading-7" key={`li-${index}`}>
          {renderInlineMarkdown(unorderedMatch[1])}
        </li>,
      );
      return;
    }

    const orderedMatch = trimmedLine.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      if (listItems.length > 0) {
        flushList();
      }
      orderedListItems.push(
        <li className="leading-7" key={`oli-${index}`}>
          {renderInlineMarkdown(orderedMatch[1])}
        </li>,
      );
      return;
    }

    flushList();
    blocks.push(
      <p className="my-3 leading-7 text-slate-700" key={`p-${index}`}>
        {renderInlineMarkdown(trimmedLine)}
      </p>,
    );
  });

  flushList();
  flushCodeBlock();

  return blocks;
};

export function DocumentViewer({ document, onClose }: DocumentViewerProps) {
  if (!document) {
    return null;
  }

  return (
    <div
      aria-labelledby="document-viewer-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end bg-slate-950/60 p-0 sm:items-center sm:p-6"
      role="dialog"
    >
      <section className="flex max-h-[90vh] w-full flex-col overflow-hidden rounded-t-lg bg-white shadow-xl sm:mx-auto sm:max-w-5xl sm:rounded-lg">
        <header className="flex flex-col gap-3 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-5">
          <div>
            <p className="text-sm font-semibold text-cyan-700">
              {document.title}
            </p>
            <h2
              className="mt-1 break-words font-mono text-base font-semibold text-slate-950"
              id="document-viewer-title"
            >
              {document.path}
            </h2>
          </div>
          <button
            className="self-start rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            onClick={onClose}
            type="button"
          >
            关闭
          </button>
        </header>
        <div className="overflow-auto bg-white px-4 py-5 sm:px-6">
          <article className="max-w-none break-words text-sm text-slate-700 sm:text-base">
            {renderMarkdownBlocks(document.content)}
          </article>
        </div>
      </section>
    </div>
  );
}
