import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Filter, 
  Plus, 
  ChevronRight, 
  Edit3, 
  Download, 
  ShieldCheck, 
  Eye, 
  PenTool,
  Scale,
  Copy
} from 'lucide-react';
import { ContractReviewItem, ActiveView } from '../types';
import { INITIAL_CONTRACT_REVIEWS, USER_PROFILE } from '../data/mockData';

interface DocumentAnalysisViewProps {
  onOpenNewIntake: () => void;
  onNavigate: (view: ActiveView) => void;
  onSelectReviewItem: (title: string) => void;
}

export const DocumentAnalysisView: React.FC<DocumentAnalysisViewProps> = ({
  onOpenNewIntake,
  onNavigate,
  onSelectReviewItem,
}) => {
  const [reviews, setReviews] = useState<ContractReviewItem[]>(INITIAL_CONTRACT_REVIEWS);
  const [activeTab, setActiveTab] = useState<'all' | 'urgent' | 'redline' | 'waiting' | 'done'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReviews = reviews.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.assigneeName.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'urgent') return matchesSearch && item.isUrgent;
    if (activeTab === 'redline') return matchesSearch && item.workflowStatus.includes('Redline');
    if (activeTab === 'waiting') return matchesSearch && item.workflowStatus.includes('Assinatura');
    if (activeTab === 'done') return matchesSearch && item.isCompleted;
    return matchesSearch;
  });

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0051d5]">
              Esteira Transacional & LegalOps
            </span>
            <span className="text-[#c6c6cd]">•</span>
            <span className="text-xs text-[#76777d]">29 Solicitações em Fila</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1c30] font-headline">
            Análise Documental, Contratos & Pareceres
          </h1>
          <p className="text-xs sm:text-sm text-[#45464d] mt-1 max-w-3xl">
            Esteira consultiva para redação, redline, negociação com contrapartes e emissão de pareceres jurídicos.
          </p>
        </div>

        <button
          onClick={onOpenNewIntake}
          className="h-10 px-4 rounded-xl bg-[#0051d5] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#003ea8] transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ Submeter Novo Instrumento</span>
        </button>
      </div>

      {/* 4 Metrics of Workflow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Solicitações em Fila
            </span>
            <FileText className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">29</span>
            <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
              +5 hoje
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">12 redlines • 10 pareceres • 7 minutas</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Tempo Médio de Revisão
            </span>
            <Clock className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">1.6 dias</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              -0.4d vs SLA
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">SLA Meta: 2 dias úteis</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Minutas Padrão Utilizadas
            </span>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">82%</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              Alta eficiência
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">Redução drástica de tempo de negociação</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Contratos Aprovados no Mês
            </span>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">114</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              100% digitais
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">Validade jurídica via assinatura qualificada</span>
        </div>
      </div>

      {/* Fila Interativa de Instrumentos */}
      <div className="bg-white rounded-xl shadow-xs border border-[#e2e8f0]/80 overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-2 p-3 sm:px-6 border-b border-[#eff4ff] bg-[#f8f9ff] overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-white text-[#0051d5] shadow-xs'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Todos os Instrumentos (29)
          </button>
          <button
            onClick={() => setActiveTab('urgent')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'urgent'
                ? 'bg-rose-100 text-rose-800 shadow-xs'
                : 'text-[#76777d] hover:text-rose-700'
            }`}
          >
            Urgentes / Alta Prioridade (4)
          </button>
          <button
            onClick={() => setActiveTab('redline')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'redline'
                ? 'bg-white text-[#0051d5] shadow-xs'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Em Redline / Minuta (12)
          </button>
          <button
            onClick={() => setActiveTab('waiting')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'waiting'
                ? 'bg-white text-[#0051d5] shadow-xs'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Aguardando Aprovação Cliente (8)
          </button>
          <button
            onClick={() => setActiveTab('done')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'done'
                ? 'bg-white text-emerald-800 shadow-xs'
                : 'text-[#76777d] hover:text-emerald-700'
            }`}
          >
            Pareceres Emitidos (5)
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 sm:p-5 border-b border-[#eff4ff] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#76777d]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por título, cliente, responsável..."
              className="w-full h-9 pl-9 pr-4 bg-[#f8f9ff] text-xs text-[#0b1c30] placeholder-[#76777d] rounded-lg border border-[#e2e8f0] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#76777d]">
            <span>Exibindo {filteredReviews.length} demandas ativas</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f8f9ff] text-[#76777d] font-bold border-b border-[#eff4ff]">
              <tr>
                <th className="py-3.5 px-4">Instrumento Jurídico & Versão</th>
                <th className="py-3.5 px-4">Tipo / Matéria</th>
                <th className="py-3.5 px-4">Empresa Cliente / Doc</th>
                <th className="py-3.5 px-4">Responsável pela Análise</th>
                <th className="py-3.5 px-4">Status do Workflow</th>
                <th className="py-3.5 px-4">SLA Restante</th>
                <th className="py-3.5 px-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eff4ff]">
              {filteredReviews.map((item) => (
                <tr key={item.id} className="hover:bg-[#eff4ff]/20 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0051d5] shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0b1c30] text-sm block">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-[#76777d]">{item.subtitle}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded bg-[#f1f5f9] text-[#45464d] font-semibold">
                      {item.docType}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-semibold text-[#0b1c30] block">{item.clientName}</span>
                    <span className="text-[11px] text-[#76777d]">{item.clientDoc}</span>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {item.assigneeAvatar ? (
                        <img
                          src={item.assigneeAvatar}
                          alt={item.assigneeName}
                          className="w-6 h-6 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-[#131b2e] text-white text-[10px] font-bold flex items-center justify-center">
                          {item.assigneeInitials}
                        </div>
                      )}
                      <div>
                        <span className="font-semibold text-[#0b1c30] block leading-none">
                          {item.assigneeName}
                        </span>
                        <span className="text-[10px] text-[#76777d]">{item.assigneeRole}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-[11px] font-semibold bg-[#eff4ff] text-[#0051d5] inline-block">
                      {item.workflowStatus}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`font-bold block ${
                      item.isUrgent ? 'text-rose-600' : 'text-[#0b1c30]'
                    }`}>
                      {item.slaRemaining}
                    </span>
                    <span className="text-[10px] text-[#76777d]">{item.slaSubtext}</span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => onSelectReviewItem(item.title)}
                      className="px-3 py-1.5 rounded-lg bg-[#0051d5] hover:bg-[#003ea8] text-white font-bold text-xs transition-colors"
                    >
                      Abrir Redline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Repositório de Templates em Destaque */}
      <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]/80 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-[#eff4ff] mb-4">
          <div>
            <h3 className="text-base font-bold text-[#0b1c30] font-headline">
              Repositório de Templates Padronizados Lawi-Hub
            </h3>
            <p className="text-xs text-[#76777d]">
              Minutas blindadas com aprovação de sócios seniores prontas para uso
            </p>
          </div>
          <button
            onClick={() => onNavigate('repositorio-minutas-padrao')}
            className="text-xs font-bold text-[#0051d5] hover:underline"
          >
            Ver catálogo completo →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => onNavigate('repositorio-minutas-padrao')}
            className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff] cursor-pointer transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#0051d5]">28 modelos</span>
              <FileText className="w-4 h-4 text-[#0051d5]" />
            </div>
            <h4 className="text-sm font-bold text-[#0b1c30]">Acordos Societários & Vesting</h4>
            <p className="text-xs text-[#76777d] mt-1">Cláusulas de cliff, aceleração, tag e drag along.</p>
          </div>

          <div 
            onClick={() => onNavigate('repositorio-minutas-padrao')}
            className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff] cursor-pointer transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#0051d5]">34 modelos</span>
              <FileText className="w-4 h-4 text-[#0051d5]" />
            </div>
            <h4 className="text-sm font-bold text-[#0b1c30]">Contratos SaaS & Licenciamento</h4>
            <p className="text-xs text-[#76777d] mt-1">MSAs, DPAs, SLAs e aditivos de privacidade LGPD.</p>
          </div>

          <div 
            onClick={() => onNavigate('repositorio-minutas-padrao')}
            className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff] cursor-pointer transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#0051d5]">19 modelos</span>
              <FileText className="w-4 h-4 text-[#0051d5]" />
            </div>
            <h4 className="text-sm font-bold text-[#0b1c30]">NDAs & Confidencialidade</h4>
            <p className="text-xs text-[#76777d] mt-1">Modelos unilaterais e bilaterais em português e inglês.</p>
          </div>

          <div 
            onClick={() => onNavigate('repositorio-minutas-padrao')}
            className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff] cursor-pointer transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#0051d5]">22 modelos</span>
              <FileText className="w-4 h-4 text-[#0051d5]" />
            </div>
            <h4 className="text-sm font-bold text-[#0b1c30]">Procurações Consulares & DREI</h4>
            <p className="text-xs text-[#76777d] mt-1">Mandatos de sócio estrangeiro com poderes do art. 119.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
