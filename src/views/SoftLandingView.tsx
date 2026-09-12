import React, { useState } from 'react';
import { 
  PlaneLanding, 
  Clock, 
  Coins, 
  ShieldCheck, 
  AlertTriangle, 
  Search, 
  Plus, 
  Filter, 
  CheckCircle, 
  ChevronRight,
  FileText,
  Building,
  UserCheck,
  Globe2,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { SoftLandingCompany, ActiveView } from '../types';
import { INITIAL_SOFT_LANDING_COMPANIES, USER_PROFILE, LAWYERS_AVATARS } from '../data/mockData';

interface SoftLandingViewProps {
  onOpenNewIntake: () => void;
  onNavigate: (view: ActiveView) => void;
  onSelectCompany: (company: SoftLandingCompany) => void;
}

export const SoftLandingView: React.FC<SoftLandingViewProps> = ({
  onOpenNewIntake,
  onNavigate,
  onSelectCompany,
}) => {
  const [companies, setCompanies] = useState<SoftLandingCompany[]>(INITIAL_SOFT_LANDING_COMPANIES);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [jurisdictionFilter, setJurisdictionFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [complianceNoticeDismissed, setComplianceNoticeDismissed] = useState(false);

  const filteredCompanies = companies.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.leadPartner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = selectedStage === null || c.stage === selectedStage;
    const matchesJurisdiction = jurisdictionFilter === 'ALL' || c.countryCode === jurisdictionFilter;
    const matchesType = typeFilter === 'ALL' || (typeFilter === 'LTDA' ? c.corporateType.includes('Limitada') : c.corporateType.includes('Anônima'));
    return matchesSearch && matchesStage && matchesJurisdiction && matchesType;
  });

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0051d5]">
              Legal Operations • Cross-Border
            </span>
            <span className="text-[#c6c6cd]">•</span>
            <span className="text-xs text-[#76777d]">20 Empresas Ativas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1c30] font-headline">
            Soft Landing & Implantação de Empresas
          </h1>
          <p className="text-xs sm:text-sm text-[#45464d] mt-1 max-w-3xl">
            Workflow regulatório completo para abertura de subsidiárias e holdings estrangeiras no Brasil.
          </p>
        </div>

        <button
          onClick={onOpenNewIntake}
          className="h-10 px-4 rounded-xl bg-[#0051d5] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#003ea8] transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ Nova Implantação (Soft Landing)</span>
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Total em Implantação
            </span>
            <PlaneLanding className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">20</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              +4 no trimestre
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">12 subsidiárias diretas • 8 holdings</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Tempo Médio (End-to-End)
            </span>
            <Clock className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">42 dias</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              -6d vs média Brasil
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">SLA Meta: 45 dias corridos</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              RDE-IED & Sisbacen
            </span>
            <Coins className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">R$ 148,5M</span>
            <span className="text-xs font-semibold text-[#0051d5] bg-[#eff4ff] px-1.5 py-0.5 rounded">
              100% regular
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">Volume total de capital estrangeiro registrado</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Compliance UBO
            </span>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">100%</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              Auditoria OK
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">Declarações de Beneficiário Final aprovadas na RFB</span>
        </div>
      </div>

      {/* Funil Regulatório de Implantação (5 Etapas) */}
      <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-[#0b1c30] font-headline">
              Funil Regulatório de Implantação
            </h3>
            <p className="text-xs text-[#76777d]">
              Clique em qualquer etapa para filtrar a esteira de projetos
            </p>
          </div>
          {selectedStage !== null && (
            <button
              onClick={() => setSelectedStage(null)}
              className="text-xs font-semibold text-[#0051d5] hover:underline self-start sm:self-auto"
            >
              Limpar filtro de etapa (Mostrar todas)
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Step 1 */}
          <div
            onClick={() => setSelectedStage(selectedStage === 1 ? null : 1)}
            className={`cursor-pointer rounded-xl p-4 border transition-all ${
              selectedStage === 1
                ? 'border-[#0051d5] bg-[#eff4ff] ring-2 ring-[#0051d5]/20'
                : 'border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff]/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-[#76777d]">ETAPA 01</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#0b1c30] shadow-xs">
                4
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#0b1c30] leading-snug">
              Estruturação & Docs Estrangeiros
            </h4>
            <p className="text-[11px] text-[#45464d] mt-1 line-clamp-2">
              Apostilamento de Haia, Procurações de Não-Residentes, Tradução Juramentada.
            </p>
            <div className="mt-3 text-[10px] font-bold text-[#0051d5]">Média: 12 dias</div>
          </div>

          {/* Step 2 (Current Bottleneck) */}
          <div
            onClick={() => setSelectedStage(selectedStage === 2 ? null : 2)}
            className={`cursor-pointer rounded-xl p-4 border transition-all relative ${
              selectedStage === 2
                ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-500/20'
                : 'border-amber-200 bg-amber-50/40 hover:bg-amber-50'
            }`}
          >
            <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-amber-500 text-white text-[9px] font-extrabold uppercase rounded-full shadow-xs">
              Gargalo JUCESP
            </span>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-amber-800">ETAPA 02</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#0b1c30] shadow-xs">
                7
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#0b1c30] leading-snug">
              Registro Societário & CNPJ
            </h4>
            <p className="text-[11px] text-[#45464d] mt-1 line-clamp-2">
              Elaboração de Contrato Social, DBE, Junta Comercial e Inscrição Estadual.
            </p>
            <div className="mt-3 text-[10px] font-bold text-amber-800">Média: 18 dias</div>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setSelectedStage(selectedStage === 3 ? null : 3)}
            className={`cursor-pointer rounded-xl p-4 border transition-all ${
              selectedStage === 3
                ? 'border-[#0051d5] bg-[#eff4ff] ring-2 ring-[#0051d5]/20'
                : 'border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff]/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-[#76777d]">ETAPA 03</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#0b1c30] shadow-xs">
                5
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#0b1c30] leading-snug">
              Registro BACEN & Câmbio
            </h4>
            <p className="text-[11px] text-[#45464d] mt-1 line-clamp-2">
              Cadastro RDE-IED, Vinculação de Declarante e Câmbio de Integralização.
            </p>
            <div className="mt-3 text-[10px] font-bold text-[#0051d5]">Média: 5 dias</div>
          </div>

          {/* Step 4 */}
          <div
            onClick={() => setSelectedStage(selectedStage === 4 ? null : 4)}
            className={`cursor-pointer rounded-xl p-4 border transition-all ${
              selectedStage === 4
                ? 'border-[#0051d5] bg-[#eff4ff] ring-2 ring-[#0051d5]/20'
                : 'border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff]/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-[#76777d]">ETAPA 04</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#0b1c30] shadow-xs">
                3
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#0b1c30] leading-snug">
              Contas Bancárias & Capital
            </h4>
            <p className="text-[11px] text-[#45464d] mt-1 line-clamp-2">
              Abertura de C/C PJ, KYC Avançado e Encerramento de Contratos Cambiais.
            </p>
            <div className="mt-3 text-[10px] font-bold text-[#0051d5]">Média: 10 dias</div>
          </div>

          {/* Step 5 */}
          <div
            onClick={() => setSelectedStage(selectedStage === 5 ? null : 5)}
            className={`cursor-pointer rounded-xl p-4 border transition-all ${
              selectedStage === 5
                ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/20'
                : 'border-[#e2e8f0] bg-[#f8f9ff] hover:bg-[#eff4ff]/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-emerald-800">ETAPA 05</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-emerald-800 shadow-xs">
                1
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#0b1c30] leading-snug">
              Licenças, Alvarás & Operação
            </h4>
            <p className="text-[11px] text-[#45464d] mt-1 line-clamp-2">
              Inscrição Municipal, CCM, Licença de Funcionamento e Certificado A1.
            </p>
            <div className="mt-3 text-[10px] font-bold text-emerald-700">Média: 7 dias</div>
          </div>
        </div>
      </div>

      {/* Alerta Crítico de Compliance */}
      {!complianceNoticeDismissed && (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                  Alerta Crítico de Compliance: Sócios Não-Residentes & UBO (IN RFB 2.119/2022)
                </span>
              </div>
              <p className="text-xs text-rose-900 mt-1 leading-relaxed">
                3 entidades estrangeiras possuem procurações consulares com vencimento inferior a 45 dias. A falta de renovação suspende movimentações no Sisbacen e na Receita Federal.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            <button
              onClick={() => onNavigate('repositorio-minutas-padrao')}
              className="px-3 py-1.5 bg-white hover:bg-rose-100 text-rose-900 border border-rose-300 rounded-lg text-xs font-bold transition-all shadow-xs"
            >
              Minuta de Procuração Consular
            </button>
            <button
              onClick={() => onNavigate('societario-governanca')}
              className="px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
            >
              Mapear Cadeia UBO
            </button>
          </div>
        </div>
      )}

      {/* Tabela de Projetos de Soft Landing em Execução */}
      <div className="bg-white rounded-xl shadow-xs border border-[#e2e8f0]/80 overflow-hidden">
        {/* Table Filters & Search */}
        <div className="p-4 sm:p-5 border-b border-[#eff4ff] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#76777d]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por empresa, jurisdição, responsável..."
              className="w-full h-9 pl-9 pr-4 bg-[#f8f9ff] text-xs text-[#0b1c30] placeholder-[#76777d] rounded-lg border border-[#e2e8f0] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={jurisdictionFilter}
              onChange={(e) => setJurisdictionFilter(e.target.value)}
              className="h-9 px-3 bg-[#f8f9ff] text-xs font-medium text-[#0b1c30] rounded-lg border border-[#e2e8f0] focus:outline-none"
            >
              <option value="ALL">Todas as Jurisdições</option>
              <option value="GB">Reino Unido (UK)</option>
              <option value="US">Estados Unidos (Delaware)</option>
              <option value="DE">Alemanha (DE)</option>
              <option value="JP">Japão (JP)</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="h-9 px-3 bg-[#f8f9ff] text-xs font-medium text-[#0b1c30] rounded-lg border border-[#e2e8f0] focus:outline-none"
            >
              <option value="ALL">Todos os Tipos</option>
              <option value="LTDA">Sociedade Limitada (Ltda.)</option>
              <option value="SA">Sociedade Anônima (S.A.)</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f8f9ff] text-[#76777d] font-bold border-b border-[#eff4ff]">
              <tr>
                <th className="py-3.5 px-4">Empresa / Jurisdição</th>
                <th className="py-3.5 px-4">Tipo Societário</th>
                <th className="py-3.5 px-4">Etapa Atual / Progresso</th>
                <th className="py-3.5 px-4">Procurador Residente & Lead</th>
                <th className="py-3.5 px-4">Próximo Marco / SLA</th>
                <th className="py-3.5 px-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eff4ff]">
              {filteredCompanies.map((company) => (
                <tr key={company.id} className="hover:bg-[#eff4ff]/20 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center font-bold text-xs text-[#0051d5]">
                        {company.avatarInitials}
                      </div>
                      <div>
                        <span className="font-bold text-[#0b1c30] text-sm block">
                          {company.name}
                        </span>
                        <span className="text-[11px] text-[#76777d]">
                          {company.jurisdiction}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded bg-[#f1f5f9] text-[#45464d] font-medium">
                      {company.corporateType}
                    </span>
                    {company.rdeIedAmount && (
                      <span className="block text-[10px] text-[#76777d] mt-1">
                        Capital: {company.rdeIedAmount}
                      </span>
                    )}
                  </td>

                  <td className="py-4 px-4">
                    <div className="w-48">
                      <div className="flex justify-between text-[11px] font-semibold mb-1">
                        <span className="text-[#0b1c30] truncate">{company.stageName}</span>
                        <span className="text-[#0051d5]">{company.progressPercent}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#eff4ff] rounded-full overflow-hidden">
                        <div
                          className="bg-[#0051d5] h-full rounded-full"
                          style={{ width: `${company.progressPercent}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-[#76777d] block mt-1">
                        {company.stageStatusDescription}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className="text-[#0b1c30] font-semibold block">{company.residentAttorney}</span>
                    <span className="text-[11px] text-[#76777d]">Lead: {company.leadPartner}</span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="text-[#0b1c30] font-semibold block">{company.nextMilestone}</span>
                    <span className={`text-[11px] font-bold ${
                      company.slaDaysRemaining <= 1
                        ? 'text-rose-600'
                        : company.slaDaysRemaining <= 3
                        ? 'text-amber-600'
                        : 'text-emerald-700'
                    }`}>
                      {company.slaDeadline} ({company.slaDaysRemaining}d restantes)
                    </span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => onSelectCompany(company)}
                      className="px-3 py-1.5 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0051d5] font-bold text-xs transition-colors"
                    >
                      Ver Dossiê
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Painéis Analíticos Inferiores (Kit Documental + SLAs + Equipe) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kit Documental Obrigatório */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff] mb-3">
            <h3 className="text-sm font-bold text-[#0b1c30] font-headline">
              Kit Documental Obrigatório
            </h3>
            <FileText className="w-4 h-4 text-[#76777d]" />
          </div>
          <p className="text-xs text-[#76777d] mb-3">
            Documentos exigidos para arquivamento de subsidiária com sócios estrangeiros:
          </p>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-[#0b1c30]">Procuração com Poderes de Citação (art. 119 Lei 6.404/76)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-[#0b1c30]">Apostila de Haia / Legalização Consular</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-[#0b1c30]">Tradução Juramentada por Tradutor Público Matriculado</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-[#0b1c30]">CNPJ de Sócio Não-Residente (Cademp Bacen)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-[#0b1c30]">Declaração de UBO / Beneficiário Final (IN RFB 2.119/22)</span>
            </li>
          </ul>
        </div>

        {/* SLAs Médios por Autarquia */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff] mb-3">
            <h3 className="text-sm font-bold text-[#0b1c30] font-headline">
              SLAs Médios por Autarquia (São Paulo)
            </h3>
            <Building className="w-4 h-4 text-[#76777d]" />
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-[#0b1c30]">JUCESP (Análise de Contrato Social)</span>
                <span className="text-[#0051d5] font-bold">8 dias</span>
              </div>
              <div className="w-full h-1.5 bg-[#eff4ff] rounded-full overflow-hidden">
                <div className="bg-[#0051d5] h-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-[#0b1c30]">Receita Federal (Emissão de CNPJ via DBE)</span>
                <span className="text-[#0051d5] font-bold">3 dias</span>
              </div>
              <div className="w-full h-1.5 bg-[#eff4ff] rounded-full overflow-hidden">
                <div className="bg-[#0051d5] h-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-[#0b1c30]">Banco Central (RDE-IED Sisbacen)</span>
                <span className="text-[#0051d5] font-bold">5 dias</span>
              </div>
              <div className="w-full h-1.5 bg-[#eff4ff] rounded-full overflow-hidden">
                <div className="bg-[#0051d5] h-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-[#0b1c30]">Prefeitura de SP (CCM & Alvará)</span>
                <span className="text-amber-700 font-bold">12 dias</span>
              </div>
              <div className="w-full h-1.5 bg-[#eff4ff] rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipe Dedicada • Soft Landing */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff] mb-3">
            <h3 className="text-sm font-bold text-[#0b1c30] font-headline">
              Equipe Dedicada • Soft Landing
            </h3>
            <UserCheck className="w-4 h-4 text-[#76777d]" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={USER_PROFILE.avatarUrl}
                  alt={USER_PROFILE.name}
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-xs font-bold text-[#0b1c30] block leading-tight">
                    {USER_PROFILE.name}
                  </span>
                  <span className="text-[10px] text-[#76777d]">Lead Partner • Cross-Border</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#0051d5] bg-[#eff4ff] px-2 py-0.5 rounded">
                8 projetos
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={LAWYERS_AVATARS.ricardo}
                  alt="Dr. Rafael Lima"
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-xs font-bold text-[#0b1c30] block leading-tight">
                    Dr. Rafael Lima
                  </span>
                  <span className="text-[10px] text-[#76777d]">Especialista Tributário & Câmbio</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#0b1c30] bg-[#f1f5f9] px-2 py-0.5 rounded">
                6 projetos
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#131b2e] text-white font-bold flex items-center justify-center text-xs">
                  AP
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0b1c30] block leading-tight">
                    Dr. André Prado
                  </span>
                  <span className="text-[10px] text-[#76777d]">Advogado Societário & JUCESP</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#0b1c30] bg-[#f1f5f9] px-2 py-0.5 rounded">
                4 projetos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
