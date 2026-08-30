import constitutionContent from '../../.specify/memory/constitution.md?raw';
import loginPlanContent from '../../specs/001-login-form/plan.md?raw';
import loginSpecContent from '../../specs/001-login-form/spec.md?raw';
import loginTasksContent from '../../specs/001-login-form/tasks.md?raw';
import loginTestResultContent from '../../specs/001-login-form/test-result.md?raw';
import workbenchPlanContent from '../../specs/002-spec-kit-demo-workbench/plan.md?raw';
import workbenchSpecContent from '../../specs/002-spec-kit-demo-workbench/spec.md?raw';
import workbenchTasksContent from '../../specs/002-spec-kit-demo-workbench/tasks.md?raw';
import workbenchTestResultContent from '../../specs/002-spec-kit-demo-workbench/test-result.md?raw';

export type WorkbenchDocument = {
  path: string;
  title: string;
  content: string;
};

export const workbenchDocuments: Record<string, WorkbenchDocument> = {
  '.specify/memory/constitution.md': {
    path: '.specify/memory/constitution.md',
    title: '项目级原则文档',
    content: constitutionContent,
  },
  'specs/001-login-form/spec.md': {
    path: 'specs/001-login-form/spec.md',
    title: '001 需求规格文档',
    content: loginSpecContent,
  },
  'specs/001-login-form/plan.md': {
    path: 'specs/001-login-form/plan.md',
    title: '001 实现计划文档',
    content: loginPlanContent,
  },
  'specs/001-login-form/tasks.md': {
    path: 'specs/001-login-form/tasks.md',
    title: '001 任务清单',
    content: loginTasksContent,
  },
  'specs/001-login-form/test-result.md': {
    path: 'specs/001-login-form/test-result.md',
    title: '001 验证记录',
    content: loginTestResultContent,
  },
  'specs/002-spec-kit-demo-workbench/spec.md': {
    path: 'specs/002-spec-kit-demo-workbench/spec.md',
    title: '002 需求规格文档',
    content: workbenchSpecContent,
  },
  'specs/002-spec-kit-demo-workbench/plan.md': {
    path: 'specs/002-spec-kit-demo-workbench/plan.md',
    title: '002 实现计划文档',
    content: workbenchPlanContent,
  },
  'specs/002-spec-kit-demo-workbench/tasks.md': {
    path: 'specs/002-spec-kit-demo-workbench/tasks.md',
    title: '002 任务清单',
    content: workbenchTasksContent,
  },
  'specs/002-spec-kit-demo-workbench/test-result.md': {
    path: 'specs/002-spec-kit-demo-workbench/test-result.md',
    title: '002 验证记录',
    content: workbenchTestResultContent,
  },
};
