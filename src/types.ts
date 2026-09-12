export type ActiveView = 
  | 'home-visao-geral'
  | 'soft-landing-implantacao'
  | 'societario-governanca'
  | 'analise-documental-contratos'
  | 'repositorio-minutas-padrao'
  | 'gerenciamento'
  | 'gerenciamento-operacoes';

export interface SoftLandingCompany {
  id: string;
  name: string;
  countryCode: string;
  jurisdiction: string;
  corporateType: string;
  stage: number; // 1 to 5
  stageName: string;
  progressPercent: number;
  stageStatusDescription: string;
  residentAttorney: string;
  leadPartner: string;
  nextMilestone: string;
  slaDeadline: string;
  slaDaysRemaining: number;
  rdeIedAmount?: string;
  avatarInitials: string;
}

export interface CaseDemand {
  id: string;
  clientName: string;
  clientDoc: string; // CNPJ or NIF
  demandType: string;
  squad: string;
  status: 'Sem Pendências' | 'Aguardando Assinatura Cliente' | 'Em Revisão Sênior' | 'Exigência JUCESP';
  slaLabel: string;
  slaStatus: 'safe' | 'warning' | 'critical';
  actionLabel: string;
  actionType: 'details' | 'signature' | 'review' | 'cure';
  detailsText?: string;
}

export interface ContractReviewItem {
  id: string;
  title: string;
  subtitle: string;
  docType: string;
  docTypeColor: string;
  clientName: string;
  clientDoc: string;
  assigneeName: string;
  assigneeRole: string;
  assigneeAvatar?: string;
  assigneeInitials?: string;
  workflowStatus: string;
  workflowIcon: string;
  slaRemaining: string;
  slaSubtext: string;
  isUrgent?: boolean;
  isCompleted?: boolean;
  priority: 'ALTA' | 'MÉDIA' | 'BAIXA';
  riskCategory: 'Tributário' | 'Societário' | 'Contratual' | 'Comercial';
}

export interface CorporatePartner {
  name: string;
  origin: string;
  type: 'Sócio PJ Estrangeiro' | 'Sócio PJ Nacional' | 'Pessoa Física';
  tag?: string;
  quotas: number;
  sharePercent: number;
  shareValue: string;
  representativeName: string;
  representativeRole: string;
  validity: string;
}

export interface CorporateActHistory {
  id: string;
  title: string;
  status: string;
  description: string;
  date: string;
  protocolNumber: string;
  bookReference?: string;
  hasDocument: boolean;
}

export interface SquadAllocation {
  id: string;
  number: string;
  title: string;
  leader: string;
  teamSize: number;
  slaRate: string;
  capacityPercent: number;
  activeProjectsCount: number;
  pendingNotice: string;
  isWarning?: boolean;
  focusArea?: string;
}

export interface CalendarEvent {
  dayOfWeek: string;
  dayOfMonth: number;
  isToday?: boolean;
  events: {
    id: string;
    title: string;
    subtext: string;
    type: 'fatal' | 'protocol' | 'meeting' | 'opinion';
  }[];
}

export interface StandardTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  version: string;
  usageCount: number;
  tags: string[];
  sampleClause?: string;
}
