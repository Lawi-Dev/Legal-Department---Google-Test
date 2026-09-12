import React, { useState } from 'react';
import { 
  PlaneLanding, 
  Building2, 
  FileCheck2, 
  CreditCard, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  PlusCircle, 
  FileText, 
  Scale, 
  ShieldAlert, 
  FolderLock, 
  Sparkles,
  SlidersHorizontal,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { ActiveView } from '../types';
import { LAWYERS_AVATARS, FEED_UPDATES } from '../data/mockData';

interface HomeCockpitViewProps {
  onNavigate: (view: ActiveView) => void;
  onOpenNewIntake: () => void;
  onSelectReviewItem: (title: string) => void;
}

export const HomeCockpitView: React.FC<HomeCockpitViewProps> = ({
  onNavigate,
  onOpenNewIntake,
  onSelectReviewItem,
}) => {
  const [timeRange, setTimeRange] = useState<'30days' | 'quarter' | 'year'>('30days');
  const [notificationBannerDismissed, setNotificationBannerDismissed] = useState(false);

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Executive Personalized Welcome Banner */}
      {!notificationBannerDismissed && (
        <div className="relative w-full rounded-2xl bg-[#0f172a] border border-[#1e293b] p-6 lg:p-7 text-white shadow-lg overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute right-1/3 -bottom-16 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold tracking-widest uppercase font-mono text-[#38bdf8] bg-sky-950/60 border border-sky-800/40 px-2.5 py-0.5 rounded-full">
                  TERÇA-FEIRA • 18 AGO 2026
                </span>
                <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-block">•</span>
                <span className="text-[11px] text-slate-300 font-medium hidden sm:inline-block">Lawi-Hub Corporate Cockpit</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-headline mb-2">
                Bom dia, Camila.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <span className="text-amber-300 font-semibold">6 prazos em risco</span> e <span className="text-emerald-300 font-semibold">3 casos aguardando sua ação</span> hoje. O parecer da <span className="text-white font-semibold underline decoration-sky-400/60 underline-offset-2">FinScale FinTech</span> vence hoje às 18h — comece por ele.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <button
                onClick={() => onSelectReviewItem('Revisão de SPA & Acordo de Não-Concorrência')}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Revisar Parecer FinScale</span>
              </button>
              <button
                onClick={onOpenNewIntake}
                className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Novo Intake</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Command & Filter Deck */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pt-1">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#dbe1ff] text-[#00174b] text-[11px] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
              Transacional & Advisory Hub
            </span>
            <span className="text-[#45464d] text-[11px]">SLA Global Atendimento: 98.4%</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0b1c30] tracking-tight font-headline">
            Visão Geral do Usuário & Operações
          </h2>
          <p className="text-xs sm:text-sm text-[#45464d] max-w-3xl mt-0.5">
            Acompanhamento consolidado de implantações (Soft Landing), atos societários, minutas e despachos sob sua liderança direta.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center bg-white rounded-lg p-0.5 shadow-xs border border-[#e2e8f0]">
            <button
              onClick={() => setTimeRange('30days')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                timeRange === '30days' ? 'bg-[#0b1c30] text-white shadow-xs' : 'text-[#45464d] hover:text-[#0b1c30]'
              }`}
            >
              Últimos 30 dias
            </button>
            <button
              onClick={() => setTimeRange('quarter')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                timeRange === 'quarter' ? 'bg-[#0b1c30] text-white shadow-xs' : 'text-[#45464d] hover:text-[#0b1c30]'
              }`}
            >
              Trimestre Vigente
            </button>
            <button
              onClick={() => setTimeRange('year')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                timeRange === 'year' ? 'bg-[#0b1c30] text-white shadow-xs' : 'text-[#45464d] hover:text-[#0b1c30]'
              }`}
            >
              Ano 2026
            </button>
          </div>

          <button
            onClick={() => onNavigate('gerenciamento')}
            className="h-9 px-3.5 rounded-lg bg-white text-[#0b1c30] text-xs font-semibold flex items-center gap-1.5 shadow-xs border border-[#e2e8f0] hover:bg-[#f8f9ff] transition-all"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#76777d]" />
            <span>Filtros Avançados</span>
          </button>

          <button
            onClick={onOpenNewIntake}
            className="h-9 px-3.5 rounded-lg bg-[#0051d5] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs hover:bg-[#003ea8] transition-all"
          >
            <span>+ Nova Demanda / Intake</span>
          </button>
        </div>
      </div>

      {/* KPI Grid (Executive Health Check) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: Soft Landing */}
        <div 
          onClick={() => onNavigate('soft-landing-implantacao')}
          className="relative bg-white rounded-xl p-5 shadow-xs border border-[#e2e8f0]/80 overflow-hidden flex flex-col justify-between hover:border-[#0051d5]/40 cursor-pointer transition-all"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051d5]"></div>
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">
                Empresas em Soft Landing
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold text-[#0b1c30] font-headline">18</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">
                  +3 no trimestre
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0051d5]">
              <PlaneLanding className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 bg-[#eff4ff]/60 rounded-lg p-2.5 flex flex-col gap-1.5 border border-[#eff4ff]">
            <div className="flex justify-between text-xs text-[#45464d]">
              <span>8 Junta Comercial & CNPJ</span>
              <span className="font-semibold text-[#0b1c30]">44%</span>
            </div>
            <div className="w-full h-1.5 bg-[#dce9ff] rounded-full overflow-hidden flex">
              <div className="bg-[#0051d5] h-full" style={{ width: '44%' }}></div>
              <div className="bg-[#316bf3] h-full" style={{ width: '33%' }}></div>
              <div className="bg-[#0b1c30] h-full" style={{ width: '23%' }}></div>
            </div>
            <div className="flex justify-between text-[10px] text-[#76777d] pt-0.5">
              <span>6 BACEN / Contas C/C</span>
              <span>4 Licenças / Alvarás</span>
            </div>
          </div>
        </div>

        {/* Card 2: Atos Societários */}
        <div 
          onClick={() => onNavigate('societario-governanca')}
          className="relative bg-white rounded-xl p-5 shadow-xs border border-[#e2e8f0]/80 overflow-hidden flex flex-col justify-between hover:border-[#0051d5]/40 cursor-pointer transition-all"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#0b1c30]"></div>
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">
                Atos Societários em Andamento
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold text-[#0b1c30] font-headline">42</span>
                <span className="text-[11px] font-semibold text-[#45464d] bg-[#f1f5f9] px-1.5 py-0.5 rounded">
                  12 com certidões
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#f1f5f9] flex items-center justify-center text-[#0b1c30]">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1 text-center">
            <div className="bg-[#f8f9ff] p-2 rounded border border-[#eff4ff]">
              <span className="block text-xs font-bold text-[#0b1c30]">14</span>
              <span className="text-[10px] text-[#76777d]">Alt. Contratuais</span>
            </div>
            <div className="bg-[#f8f9ff] p-2 rounded border border-[#eff4ff]">
              <span className="block text-xs font-bold text-[#0b1c30]">8</span>
              <span className="text-[10px] text-[#76777d]">Acordos / Vesting</span>
            </div>
            <div className="bg-[#f8f9ff] p-2 rounded border border-[#eff4ff]">
              <span className="block text-xs font-bold text-[#0b1c30]">20</span>
              <span className="text-[10px] text-[#76777d]">Atas & Ord.</span>
            </div>
          </div>
        </div>

        {/* Card 3: Análises Contratuais */}
        <div 
          onClick={() => onNavigate('analise-documental-contratos')}
          className="relative bg-white rounded-xl p-5 shadow-xs border border-[#e2e8f0]/80 overflow-hidden flex flex-col justify-between hover:border-[#0051d5]/40 cursor-pointer transition-all"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#316bf3]"></div>
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">
                Análises Contratuais & Pareceres
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold text-[#0b1c30] font-headline">35</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                  98% no prazo
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#316bf3]">
              <FileCheck2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between p-2.5 bg-[#eff4ff]/70 rounded-lg border border-[#eff4ff]">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#76777d] uppercase font-semibold">SLA Médio de Turnaround</span>
              <span className="text-sm font-bold text-[#0b1c30]">1.8 dias úteis</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-700 bg-white px-2 py-1 rounded shadow-xs text-xs font-bold border border-emerald-200/40">
              <Clock className="w-3 h-3" />
              <span>-0.4d vs SLA</span>
            </div>
          </div>
        </div>

        {/* Card 4: Honorários Consultivos */}
        <div 
          onClick={() => onNavigate('gerenciamento')}
          className="relative bg-white rounded-xl p-5 shadow-xs border border-[#e2e8f0]/80 overflow-hidden flex flex-col justify-between hover:border-[#0051d5]/40 cursor-pointer transition-all"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#131b2e]"></div>
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">
                Honorários Consultivos (YTD)
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-[#0b1c30] font-headline">R$ 2.45M</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0b1c30]">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 space-y-1 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#45464d] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0051d5]"></span>
                Retainers Recorrentes
              </span>
              <span className="font-semibold text-[#0b1c30]">R$ 1.80M (73%)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#45464d] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#76777d]"></span>
                Projetos M&A / Inbound
              </span>
              <span className="font-semibold text-[#0b1c30]">R$ 650k (27%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout (Pipeline + Pareceres) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left Column: Pipeline de Soft Landing & Inbound Corporativo (7 cols) */}
        <div className="xl:col-span-7 bg-white rounded-xl shadow-xs border border-[#e2e8f0]/80 overflow-hidden">
          <div className="p-5 flex items-center justify-between bg-[#eff4ff]/40 border-b border-[#eff4ff]">
            <div>
              <div className="flex items-center gap-2">
                <PlaneLanding className="w-5 h-5 text-[#0051d5]" />
                <h3 className="text-base font-bold text-[#0b1c30] font-headline">
                  Pipeline de Soft Landing & Inbound Corporativo
                </h3>
              </div>
              <p className="text-xs text-[#76777d] mt-0.5">
                Implantação de subsidiárias e filiais estrangeiras no Brasil em regime consultivo
              </p>
            </div>
            <button
              onClick={() => onNavigate('soft-landing-implantacao')}
              className="text-xs font-semibold text-[#0051d5] hover:underline flex items-center gap-1"
            >
              <span>Ver todas as 18</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-[#eff4ff]">
            {/* Item 1 */}
            <div className="p-5 hover:bg-[#eff4ff]/20 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#dce9ff] flex items-center justify-center font-bold text-xs text-[#0051d5]">
                    UK
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#0b1c30]">FinScale FinTech UK Ltd.</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#eff4ff] text-[#0051d5] font-semibold">
                        Ltda. Estrangeira
                      </span>
                    </div>
                    <span className="text-xs text-[#76777d]">
                      Subsidiária SP • Representante Legal Residente: Camila V.
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dbe1ff] text-[#00174b] text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
                    BACEN / Registro RDE-IED
                  </span>
                  <span className="block text-[11px] text-[#ba1a1a] font-semibold mt-0.5">
                    Prazo Crítico: Hoje 18h
                  </span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-4 gap-1 pt-1">
                <div className="h-1.5 rounded-full bg-[#0051d5]"></div>
                <div className="h-1.5 rounded-full bg-[#0051d5]"></div>
                <div className="h-1.5 rounded-full bg-[#0051d5] animate-pulse"></div>
                <div className="h-1.5 rounded-full bg-[#dce9ff]"></div>
              </div>
              <div className="flex justify-between text-[11px] text-[#76777d] mt-1.5">
                <span className="text-[#0b1c30] font-medium">✓ Procuração Haia</span>
                <span className="text-[#0b1c30] font-medium">✓ JUCESP & CNPJ</span>
                <span className="text-[#0051d5] font-semibold">Em curso: BACEN / C/C</span>
                <span>Alvará & Inscrição Mun.</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-5 hover:bg-[#eff4ff]/20 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#f1f5f9] flex items-center justify-center font-bold text-xs text-[#0b1c30]">
                    SE
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#0b1c30]">Nordic CleanEnergy AB</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#f1f5f9] text-[#45464d] font-semibold">
                        S.A. Fechada
                      </span>
                    </div>
                    <span className="text-xs text-[#76777d]">
                      Holding Operacional • Coordenação Societária: Henrique S.
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#0b1c30] text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#76777d]"></span>
                    JUCESP & CNPJ Matriz
                  </span>
                  <span className="block text-[11px] text-[#76777d] mt-0.5">
                    Protocolo em análise prévia
                  </span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-4 gap-1 pt-1">
                <div className="h-1.5 rounded-full bg-[#0051d5]"></div>
                <div className="h-1.5 rounded-full bg-[#0051d5] animate-pulse"></div>
                <div className="h-1.5 rounded-full bg-[#dce9ff]"></div>
                <div className="h-1.5 rounded-full bg-[#dce9ff]"></div>
              </div>
              <div className="flex justify-between text-[11px] text-[#76777d] mt-1.5">
                <span className="text-[#0b1c30] font-medium">✓ CNPJ Não Residente</span>
                <span className="text-[#0b1c30] font-semibold">Em curso: Junta Comercial</span>
                <span>Conta Não Residente</span>
                <span>Licenças Ambientais</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-5 hover:bg-[#eff4ff]/20 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center font-bold text-xs text-emerald-800">
                    US
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#0b1c30]">Aether AI Corp Delaware</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 font-semibold">
                        Ltda. Tech Branch
                      </span>
                    </div>
                    <span className="text-xs text-[#76777d]">
                      Filial R&D Campinas • Consultor: Beatriz F.
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    Licenças Finais & Contas C/C
                  </span>
                  <span className="block text-[11px] text-emerald-700 font-semibold mt-0.5">
                    Fase conclusiva
                  </span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-4 gap-1 pt-1">
                <div className="h-1.5 rounded-full bg-[#0051d5]"></div>
                <div className="h-1.5 rounded-full bg-[#0051d5]"></div>
                <div className="h-1.5 rounded-full bg-[#0051d5]"></div>
                <div className="h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
              <div className="flex justify-between text-[11px] text-[#76777d] mt-1.5">
                <span className="text-[#0b1c30] font-medium">✓ DBE Aprovado</span>
                <span className="text-[#0b1c30] font-medium">✓ CNPJ Ativo</span>
                <span className="text-[#0b1c30] font-medium">✓ RDE-IED Bacen</span>
                <span className="text-emerald-700 font-bold">Alvará & Conta C/C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Fila de Pareceres Urgentes (5 cols) */}
        <div className="xl:col-span-5 bg-white rounded-xl shadow-xs border border-[#e2e8f0]/80 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff] mb-4">
              <div>
                <h3 className="text-base font-bold text-[#0b1c30] font-headline">
                  Fila de Pareceres & Revisão Contratual
                </h3>
                <span className="text-xs text-[#76777d]">Demandas consultivas sob controle rigoroso de SLA</span>
              </div>
              <Clock className="w-5 h-5 text-[#76777d]" />
            </div>

            <div className="space-y-3">
              {/* Item 1: SPA M&A */}
              <div className="p-3.5 bg-[#eff4ff]/40 rounded-xl flex flex-col gap-2 border-l-4 border-[#ba1a1a]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#ffdad6] text-[#93000a]">
                        PRIORIDADE ALTA
                      </span>
                      <span className="text-xs text-[#76777d] font-medium">M&A / Transacional</span>
                    </div>
                    <h4 className="text-[13px] font-bold text-[#0b1c30] mt-1 leading-snug">
                      Revisão de SPA & Acordo de Não-Concorrência
                    </h4>
                    <p className="text-xs text-[#45464d] mt-0.5">
                      Target: HealthTech SaaS • Comprador multinacional alemão
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#ba1a1a] bg-[#ffdad6]/60 px-1.5 py-0.5 rounded shrink-0">
                    Hoje 18:00
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#dce9ff]/60">
                  <div className="flex items-center gap-2">
                    <img
                      src={LAWYERS_AVATARS.camila}
                      alt="Camila Vasconcellos"
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-semibold text-[#0b1c30]">Camila Vasconcellos</span>
                  </div>
                  <button
                    onClick={() => onSelectReviewItem('Revisão de SPA & Acordo de Não-Concorrência')}
                    className="text-xs text-[#0051d5] font-semibold hover:underline"
                  >
                    Abrir Redline (v3)
                  </button>
                </div>
              </div>

              {/* Item 2: Parecer Tributário Software */}
              <div className="p-3.5 bg-[#eff4ff]/40 rounded-xl flex flex-col gap-2 border-l-4 border-[#0051d5]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#dbe1ff] text-[#00174b]">
                        PRIORIDADE MÉDIA
                      </span>
                      <span className="text-xs text-[#76777d] font-medium">Estruturação Fiscal / SaaS</span>
                    </div>
                    <h4 className="text-[13px] font-bold text-[#0b1c30] mt-1 leading-snug">
                      Parecer: Tributação de Royalties de Software via Irlanda
                    </h4>
                    <p className="text-xs text-[#45464d] mt-0.5">
                      Análise de retenção de IRRF e incidência de CIDE remessas cross-border
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#45464d] bg-[#f1f5f9] px-1.5 py-0.5 rounded shrink-0">
                    Amanhã 12:00
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#dce9ff]/60">
                  <div className="flex items-center gap-2">
                    <img
                      src={LAWYERS_AVATARS.ricardo}
                      alt="Ricardo Mendes"
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-semibold text-[#0b1c30]">Ricardo Mendes</span>
                  </div>
                  <button
                    onClick={() => onSelectReviewItem('Parecer Tributário Software')}
                    className="text-xs text-[#0051d5] font-semibold hover:underline"
                  >
                    Minuta Preliminar
                  </button>
                </div>
              </div>

              {/* Item 3: Acordo Quotistas */}
              <div className="p-3.5 bg-[#eff4ff]/40 rounded-xl flex flex-col gap-2 border-l-4 border-amber-500">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                        PRIORIDADE ALTA
                      </span>
                      <span className="text-xs text-[#76777d] font-medium">Societário & Cap Table</span>
                    </div>
                    <h4 className="text-[13px] font-bold text-[#0b1c30] mt-1 leading-snug">
                      Revisão de Acordo de Quotistas & Drag/Tag Along
                    </h4>
                    <p className="text-xs text-[#45464d] mt-0.5">
                      Rodada Seed Extension (R$ 8M) • Cláusulas de Liquidation Preference
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#45464d] bg-[#f1f5f9] px-1.5 py-0.5 rounded shrink-0">
                    Em 48h
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#dce9ff]/60">
                  <div className="flex items-center gap-2">
                    <img
                      src={LAWYERS_AVATARS.beatriz}
                      alt="Beatriz Fontana"
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-semibold text-[#0b1c30]">Beatriz Fontana</span>
                  </div>
                  <button
                    onClick={() => onSelectReviewItem('Revisão de Acordo de Quotistas')}
                    className="text-xs text-[#0051d5] font-semibold hover:underline"
                  >
                    Conferir Cláusulas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: AÇÕES RÁPIDAS CONSULTIVAS + FEED DE PROTOCOLOS (Replacing static calendars) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Side: Painel de Ações Rápidas Consultivas */}
        <div className="bg-[#131b2e] text-white rounded-xl shadow-xs p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#6ffbbe]" />
                <h3 className="text-base font-bold text-white font-headline">
                  Ações Rápidas Consultivas
                </h3>
              </div>
              <span className="text-[10px] text-[#7c839b] uppercase tracking-wider font-bold">
                Templates Padronizados
              </span>
            </div>
            <p className="text-xs text-[#7c839b] mb-4">
              Inicie novos fluxos transacionais, protocolos ou atos societários com templates validados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => onNavigate('soft-landing-implantacao')}
                className="p-3.5 bg-white/10 hover:bg-white/15 rounded-xl text-left transition-all group flex flex-col justify-between h-24"
              >
                <div className="flex justify-between items-start">
                  <PlaneLanding className="w-5 h-5 text-[#6ffbbe]" />
                  <ArrowRight className="w-4 h-4 text-[#7c839b] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Novo Soft Landing</span>
                  <span className="text-[11px] text-[#7c839b]">Workflow completo de entrada</span>
                </div>
              </button>

              <button
                onClick={() => onNavigate('societario-governanca')}
                className="p-3.5 bg-white/10 hover:bg-white/15 rounded-xl text-left transition-all group flex flex-col justify-between h-24"
              >
                <div className="flex justify-between items-start">
                  <Building2 className="w-5 h-5 text-[#dbe1ff]" />
                  <ArrowRight className="w-4 h-4 text-[#7c839b] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Alteração Contratual / QSA</span>
                  <span className="text-[11px] text-[#7c839b]">Quotas, capital social ou sede</span>
                </div>
              </button>

              <button
                onClick={() => onNavigate('analise-documental-contratos')}
                className="p-3.5 bg-white/10 hover:bg-white/15 rounded-xl text-left transition-all group flex flex-col justify-between h-24"
              >
                <div className="flex justify-between items-start">
                  <Scale className="w-5 h-5 text-[#b4c5ff]" />
                  <ArrowRight className="w-4 h-4 text-[#7c839b] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Solicitar Parecer Técnico</span>
                  <span className="text-[11px] text-[#7c839b]">Tributário, societário ou LGPD</span>
                </div>
              </button>

              <button
                onClick={() => onNavigate('repositorio-minutas-padrao')}
                className="p-3.5 bg-white/10 hover:bg-white/15 rounded-xl text-left transition-all group flex flex-col justify-between h-24"
              >
                <div className="flex justify-between items-start">
                  <FileText className="w-5 h-5 text-[#4edea3]" />
                  <ArrowRight className="w-4 h-4 text-[#7c839b] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Emitir NDA / Minuta Padrão</span>
                  <span className="text-[11px] text-[#7c839b]">Bilíngue com assinatura digital</span>
                </div>
              </button>

              <button
                onClick={() => onNavigate('repositorio-minutas-padrao')}
                className="p-3.5 bg-white/10 hover:bg-white/15 rounded-xl text-left transition-all group flex flex-col justify-between h-24 sm:col-span-2"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <FolderLock className="w-5 h-5 text-amber-300" />
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                      Mandato Diretor Não-Residente
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7c839b] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Emitir Procuração Societária (Apostila de Haia)
                  </span>
                  <span className="text-[11px] text-[#7c839b]">
                    Minuta padrão em conformidade com Instrução Normativa DREI 81/2020
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#7c839b]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 24 minutas institucionais sincronizadas
            </span>
            <button
              onClick={() => onNavigate('repositorio-minutas-padrao')}
              className="text-[#6ffbbe] hover:underline font-semibold"
            >
              Acessar Repositório →
            </button>
          </div>
        </div>

        {/* Right Side: Feed de Protocolos & Deferimentos em Tempo Real */}
        <div className="bg-white rounded-xl shadow-xs border border-[#e2e8f0]/80 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#eff4ff]">
              <div>
                <h3 className="text-base font-bold text-[#0b1c30] font-headline">
                  Feed de Protocolos & Deferimentos
                </h3>
                <span className="text-xs text-[#76777d]">
                  Sincronização em tempo real com órgãos reguladores e juntas comerciais
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0051d5] animate-ping"></span>
                <span className="text-[11px] font-bold text-[#0051d5] uppercase tracking-wider">Ao vivo</span>
              </div>
            </div>

            <div className="relative pl-5 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#eff4ff]">
              {FEED_UPDATES.map((item) => (
                <div key={item.id} className="relative flex flex-col gap-0.5 group">
                  <span className={`absolute -left-[22px] top-1.5 w-3 h-3 rounded-full ${item.dotColor} ring-4 ring-white`}></span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0b1c30] flex items-center gap-1.5">
                      {item.agency}
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                    </span>
                    <span className="text-[10px] text-[#76777d]">{item.time}</span>
                  </div>
                  <p className="text-xs font-bold text-[#0b1c30] mt-0.5">{item.title}</p>
                  <span className="text-[11px] text-[#76777d]">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#eff4ff] flex items-center justify-between text-xs">
            <span className="text-[#76777d]">Última checagem automática: há 3 min</span>
            <button
              onClick={() => onNavigate('gerenciamento-operacoes')}
              className="text-[#0051d5] hover:underline font-semibold flex items-center gap-1"
            >
              <span>Histórico Completo de Deferimentos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
