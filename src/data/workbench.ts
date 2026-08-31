import type {
  Feature,
  KnowledgeNote,
  Metric,
  QualityGate,
  TaskColumn,
  WorkflowStage,
} from '../types/workbench';

export const metrics: Metric[] = [
  {
    label: '已完成 feature',
    value: '1',
    description: '001-login-form 已完成并记录验证结果',
  },
  {
    label: '当前 active feature',
    value: '002',
    description: 'Spec Kit 演示工作台正在实现',
  },
  {
    label: 'Spec Kit 产物',
    value: '15+',
    description: '覆盖规格、计划、任务、设计和验证记录',
  },
  {
    label: '质量门禁',
    value: '5/5',
    description: '命令检查和 UI 人工确认均已通过',
  },
];

export const workflowStages: WorkflowStage[] = [
  {
    name: 'Constitution',
    title: '原则',
    order: 1,
    purpose: '确立项目原则、技术约束和质量门禁。',
    evidence: '.specify/memory/constitution.md',
    evidenceLabel: '项目级原则文档',
    status: 'passed',
  },
  {
    name: 'Specify',
    title: '需求',
    order: 2,
    purpose: '把自然语言需求转成可验证的用户故事和功能需求。',
    evidence: 'specs/002-spec-kit-demo-workbench/spec.md',
    evidenceLabel: '002 需求规格文档',
    status: 'passed',
  },
  {
    name: 'Plan',
    title: '计划',
    order: 3,
    purpose: '明确技术上下文、结构决策和设计产物。',
    evidence: 'specs/002-spec-kit-demo-workbench/plan.md',
    evidenceLabel: '002 实现计划文档',
    status: 'passed',
  },
  {
    name: 'Tasks',
    title: '任务',
    order: 4,
    purpose: '按用户故事生成可执行、可追踪的任务清单。',
    evidence: 'specs/002-spec-kit-demo-workbench/tasks.md',
    evidenceLabel: '002 任务清单',
    status: 'passed',
  },
  {
    name: 'Implement',
    title: '实现',
    order: 5,
    purpose: '根据已批准的设计和任务完成前端实现。',
    evidence: [
      'src/App.tsx',
      'src/components/',
      'src/data/workbench.ts',
      'src/types/workbench.ts',
    ],
    evidenceLabel: '002 实现产物',
    status: 'passed',
  },
  {
    name: 'Verify',
    title: '验证',
    order: 6,
    purpose: '运行质量检查并记录手动验证结果。',
    evidence: 'specs/002-spec-kit-demo-workbench/test-result.md',
    evidenceLabel: '002 验证记录',
    status: 'passed',
  },
];

export const features: Feature[] = [
  {
    id: '001',
    name: 'login-form',
    title: '用户登录表单',
    status: 'completed',
    priority: 'P1',
    summary: '提供邮箱、密码、记住我、字段校验和模拟登录反馈。',
    artifacts: [
      {
        label: 'spec.md',
        path: 'specs/001-login-form/spec.md',
        status: 'ready',
        description: '用户故事、功能需求和成功标准',
      },
      {
        label: 'plan.md',
        path: 'specs/001-login-form/plan.md',
        status: 'ready',
        description: '技术计划和约束检查',
      },
      {
        label: 'tasks.md',
        path: 'specs/001-login-form/tasks.md',
        status: 'ready',
        description: '按用户故事拆分的实现任务',
      },
      {
        label: 'test-result.md',
        path: 'specs/001-login-form/test-result.md',
        status: 'ready',
        description: '构建、检查和手动验证记录',
      },
    ],
  },
  {
    id: '002',
    name: 'spec-kit-demo-workbench',
    title: 'Spec Kit 演示工作台',
    status: 'in-progress',
    priority: 'P1',
    summary: '将项目首页升级为展示流程、证据、任务和知识沉淀的工作台。',
    artifacts: [
      {
        label: 'spec.md',
        path: 'specs/002-spec-kit-demo-workbench/spec.md',
        status: 'ready',
        description: '公开展示工作台的需求规格',
      },
      {
        label: 'plan.md',
        path: 'specs/002-spec-kit-demo-workbench/plan.md',
        status: 'ready',
        description: '静态数据和组件拆分计划',
      },
      {
        label: 'tasks.md',
        path: 'specs/002-spec-kit-demo-workbench/tasks.md',
        status: 'ready',
        description: '实现任务和验证门禁',
      },
      {
        label: 'test-result.md',
        path: 'specs/002-spec-kit-demo-workbench/test-result.md',
        status: 'ready',
        description: '命令检查和 UI 人工确认记录',
      },
    ],
  },
];

export const qualityGates: QualityGate[] = [
  {
    name: '生产构建',
    command: 'npm run build',
    status: 'passed',
    scope: 'TypeScript 编译和 Vite 构建',
  },
  {
    name: '代码检查',
    command: 'npm run lint',
    status: 'passed',
    scope: 'ESLint 规则和 React hooks 检查',
  },
  {
    name: '格式检查',
    command: 'npm run format:check',
    status: 'passed',
    scope: 'Prettier 文档和源码格式',
  },
  {
    name: '拼写检查',
    command: 'npm run spellcheck',
    status: 'passed',
    scope: '项目术语和英文拼写',
  },
  {
    name: '视觉检查',
    command: 'quickstart 手动场景',
    status: 'passed',
    scope: '桌面和移动端布局已人工确认',
  },
];

export const taskColumns: TaskColumn[] = [
  {
    title: '准备',
    description: '确认 feature 产物和协作约定。',
    tasks: [
      {
        title: '检查 spec/plan/tasks',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '确认 active feature',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '记录中文文档约定',
        status: 'done',
        verification: 'passed',
      },
    ],
  },
  {
    title: '基础能力',
    description: '建立共享数据、类型和 UI 审批门禁。',
    tasks: [
      {
        title: '完成 UI 设计审批',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '定义工作台类型',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '创建静态展示数据',
        status: 'done',
        verification: 'passed',
      },
    ],
  },
  {
    title: '用户故事',
    description: '按 P1 到 P2 交付可独立验证的页面能力。',
    tasks: [
      {
        title: '首页定位与流程',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '功能证据链',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '能力预览',
        status: 'done',
        verification: 'passed',
      },
      {
        title: 'README 展示',
        status: 'done',
        verification: 'passed',
      },
    ],
  },
  {
    title: '验证',
    description: '完成质量门禁和手动场景检查。',
    tasks: [
      {
        title: '响应式检查',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '文案检查',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '构建与 lint',
        status: 'done',
        verification: 'passed',
      },
      {
        title: '记录验证结果',
        status: 'done',
        verification: 'passed',
      },
    ],
  },
];

export const knowledgeNotes: KnowledgeNote[] = [
  {
    title: '静态数据优先',
    category: 'decision',
    summary:
      '第一阶段用静态数据稳定展示流程和证据链，避免扩大到后端或文件解析。',
    relatedFeatureId: '002',
  },
  {
    title: '登录表单降级为 evidence',
    category: 'design',
    summary: '保留 001 的实际交付结果，但让默认首页表达更完整的工作台概念。',
    relatedFeatureId: '001',
  },
  {
    title: '质量门禁可追踪',
    category: 'validation',
    summary:
      '每个 feature 完成前都需要通过构建、代码检查、格式检查和拼写检查。',
    relatedFeatureId: '002',
  },
];
