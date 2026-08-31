export type FeatureStatus = 'completed' | 'in-progress' | 'planned';

export type ArtifactStatus = 'ready' | 'draft' | 'planned';

export type GateStatus = 'passed' | 'pending' | 'planned';

export type NoteCategory = 'decision' | 'design' | 'validation';

export type TaskStatus = 'done' | 'active' | 'pending';

export type VerificationStatus = 'passed' | 'pending' | 'planned';

export type SpecKitArtifact = {
  label: string;
  path: string;
  status: ArtifactStatus;
  description: string;
};

export type Feature = {
  id: string;
  name: string;
  title: string;
  status: FeatureStatus;
  priority: 'P1' | 'P2' | 'P3';
  summary: string;
  artifacts: SpecKitArtifact[];
};

export type WorkflowStage = {
  name: string;
  title: string;
  order: number;
  purpose: string;
  evidence: string | string[];
  evidenceLabel: string;
  status: GateStatus;
};

export type QualityGate = {
  name: string;
  command: string;
  status: GateStatus;
  scope: string;
};

export type KnowledgeNote = {
  title: string;
  category: NoteCategory;
  summary: string;
  relatedFeatureId: string;
};

export type TaskColumn = {
  title: string;
  description: string;
  tasks: {
    title: string;
    status: TaskStatus;
    verification: VerificationStatus;
  }[];
};

export type Metric = {
  label: string;
  value: string;
  description: string;
};
