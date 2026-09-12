import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart2, 
  Award, 
  CheckCircle2, 
  Clock, 
  Filter, 
  ArrowUpRight, 
  Zap, 
  Users, 
  Building2, 
  PlaneLanding, 
  ShieldCheck, 
  ChevronRight,
  Download
} from 'lucide-react';
import { ActiveView } from '../types';

interface ExecutiveManagementViewProps {
  onNavigate: (view: ActiveView) => void;
  onOpenNewIntake: () => void;
}

export const ExecutiveManagementView: React.FC<ExecutiveManagementViewProps> = ({
  onNavigate,
  onOpenNewIntake,
}) => {
  const [period, setPeriod] = useState<'month' | 'quarter' | 'year'>('year');

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0051d5]">
              Lawi-Hub Corporate Practice
            </span>
            <span className="text-[#c6c6cd]">•</span>
            <span className="text-xs text-[#76777d]">C-Level Executive View</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1c30] font-headline">
            Painel Executivo & Inteligência de Performance
          </h1>
          <p className="text-xs sm:text-sm text-[#45464d] mt-1 max-w-3xl">
            Gestão consolidada de receita corporativa, SLA de atendimento, esteira de conversão e vitórias da prática.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center bg-white rounded-lg p-0.5 shadow-xs border border-[#e2e8f0]">
            <button
              onClick={() => setPeriod('month')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                period === 'month' ? 'bg-[#0b1c30] text-white shadow-xs' : 'text-[#45464d]'
              }`}
            >
              Mês Vigente (Ago/26)
            </button>
            <button
              onClick={() => setPeriod('quarter')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                period === 'quarter' ? 'bg-[#0b1c30] text-white shadow-xs' : 'text-[#45464d]'
              }`}
            >
              Trimestre (Q3/26)
            </button>
            <button
              onClick={() => setPeriod('year')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                period === 'year' ? 'bg-[#0b1c30] text-white shadow-xs' : 'text-[#45464d]'
              }`}
            >
              Anual (YTD 2026)
            </button>
          </div>

          <button
            onClick={() => onNavigate('gerenciamento-operacoes')}
            className="h-9 px-3.5 rounded-lg bg-[#0051d5] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs hover:bg-[#003ea8] transition-all"
          >
            <span>Ver Painel Operacional →</span>
          </button>
        </div>
      </div>

      {/* 4 Top Metric Cards (C-Level Financials & Ops) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Faturamento Consultivo */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
                Faturamento Consultivo (YTD)
              </span>
              <TrendingUp className="w-5 h-5 text-[#0051d5]" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#0b1c30] font-headline">R$ 2.450.000</span>
            </div>
            <span className="block text-xs text-emerald-700 font-semibold mt-1">
              Meta 2026: R$ 3.2M • 76.5% atingido
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#eff4ff] space-y-1 text-xs">
            <div className="flex justify-between text-[#45464d]">
              <span>Retainers Recorrentes:</span>
              <span className="font-bold text-[#0b1c30]">R$ 1.80M (73.5%)</span>
            </div>
            <div className="flex justify-between text-[#45464d]">
              <span>M&A / Inbound Projetos:</span>
              <span className="font-bold text-[#0b1c30]">R$ 650k (26.5%)</span>
            </div>
          </div>
        </div>

        {/* Card 2: MRR Médio */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
                MRR Médio por Cliente
              </span>
              <DollarSign className="w-5 h-5 text-[#0051d5]" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#0b1c30] font-headline">R$ 48.500</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                +14.2% YoY
              </span>
            </div>
            <span className="block text-xs text-[#76777d] mt-1">
              Ticket Médio Soft Landing: R$ 85.000
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#eff4ff] text-xs">
            <span className="text-emerald-700 font-bold block">Churn Zero (18 meses)</span>
            <span className="text-[#76777d]">Retenção integral em clientes multinacionais</span>
          </div>
        </div>

        {/* Card 3: Faturamento Mês Vigente */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
                Faturamento Mês Vigente
              </span>
              <BarChart2 className="w-5 h-5 text-[#0051d5]" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#0b1c30] font-headline">R$ 340.000</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                100% adimplente
              </span>
            </div>
            <span className="block text-xs text-[#76777d] mt-1">
              Ciclo médio de cobrança: 11.4 dias
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#eff4ff] text-xs">
            <span className="text-[#0b1c30] font-bold block">Emissão NF-e 100% Automatizada</span>
            <span className="text-[#76777d]">Integração bancária com DDA direto</span>
          </div>
        </div>

        {/* Card 4: Margem de Contribuição */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
                Margem de Contribuição
              </span>
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#0b1c30] font-headline">68.2%</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                +3.1% vs Target
              </span>
            </div>
            <span className="block text-xs text-[#76777d] mt-1">
              Legal Spend vs Honorários: 3.8x ROI
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#eff4ff] text-xs">
            <span className="text-[#0b1c30] font-bold block">Alta Alavancagem Operacional</span>
            <span className="text-[#76777d]">Eficiência com automação e squads dedicados</span>
          </div>
        </div>
      </div>

      {/* Central Section: SLA History Chart + Inbound Conversion Funnel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left: SLA History Vector Curve (7 cols) */}
        <div className="xl:col-span-7 bg-white rounded-xl p-6 border border-[#e2e8f0]/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#eff4ff] mb-4">
              <div>
                <h3 className="text-base font-bold text-[#0b1c30] font-headline">
                  Evolução Temporal de SLA por Vertical
                </h3>
                <p className="text-xs text-[#76777d]">
                  Cumprimento rigoroso de prazos acordados em contrato consultivo (Jan - Ago 2026)
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-[#0051d5]">
                  <span className="w-2 h-2 rounded-full bg-[#0051d5]"></span> Soft Landing 99.1%
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-[#0b1c30]">
                  <span className="w-2 h-2 rounded-full bg-[#0b1c30]"></span> Societário 98.0%
                </span>
              </div>
            </div>

            {/* Interactive Vector SVG Chart */}
            <div className="relative h-60 w-full mt-2">
              <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradientSoftLanding" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0051d5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0051d5" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="90" x2="600" y2="90" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="140" x2="600" y2="140" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />

                {/* Area under curve */}
                <path
                  d="M 0,100 Q 80,60 160,50 T 320,40 T 480,25 T 600,20 L 600,200 L 0,200 Z"
                  fill="url(#gradientSoftLanding)"
                />

                {/* Main Curve: Soft Landing */}
                <path
                  d="M 0,100 Q 80,60 160,50 T 320,40 T 480,25 T 600,20"
                  fill="none"
                  stroke="#0051d5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Secondary Curve: Societário */}
                <path
                  d="M 0,115 Q 80,90 160,70 T 320,55 T 480,45 T 600,38"
                  fill="none"
                  stroke="#0b1c30"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                />

                {/* Data Points */}
                <circle cx="160" cy="50" r="4" fill="#0051d5" stroke="#ffffff" strokeWidth="2" />
                <circle cx="320" cy="40" r="4" fill="#0051d5" stroke="#ffffff" strokeWidth="2" />
                <circle cx="480" cy="25" r="4" fill="#0051d5" stroke="#ffffff" strokeWidth="2" />
                <circle cx="600" cy="20" r="5" fill="#0051d5" stroke="#ffffff" strokeWidth="2" />
              </svg>

              {/* Month Labels */}
              <div className="flex justify-between text-[11px] text-[#76777d] mt-2 font-medium px-1">
                <span>Jan</span>
                <span>Fev</span>
                <span>Mar</span>
                <span>Abr</span>
                <span>Mai</span>
                <span>Jun</span>
                <span>Jul</span>
                <span className="font-bold text-[#0051d5]">Ago (Atual)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-[#eff4ff] flex flex-wrap items-center justify-between text-xs text-[#76777d]">
            <span>Média ponderada do escritório: <strong className="text-[#0b1c30]">98.4%</strong> no prazo</span>
            <span className="text-emerald-700 font-semibold">Zero perdas de prazos fatais em 2026</span>
          </div>
        </div>

        {/* Right: Funil de Captura & Conversão de Leads Corporativos (5 cols) */}
        <div className="xl:col-span-5 bg-white rounded-xl p-6 border border-[#e2e8f0]/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="pb-4 border-b border-[#eff4ff] mb-4">
              <h3 className="text-base font-bold text-[#0b1c30] font-headline">
                Funil de Inbound & Conversão de Clientes
              </h3>
              <p className="text-xs text-[#76777d]">
                Taxa de conversão geral: <span className="font-bold text-[#0051d5]">26.2%</span> (Média mercado: 14%)
              </p>
            </div>

            <div className="space-y-3">
              {/* Etapa 1 */}
              <div className="p-3 bg-[#eff4ff]/60 rounded-xl border border-[#eff4ff] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#76777d] uppercase">01. Leads Recebidos</span>
                  <p className="text-sm font-bold text-[#0b1c30]">42 empresas estrangeiras</p>
                </div>
                <span className="text-xs font-semibold text-[#0051d5]">100%</span>
              </div>

              {/* Etapa 2 */}
              <div className="p-3 bg-[#eff4ff]/60 rounded-xl border border-[#eff4ff] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#76777d] uppercase">02. Qualificação Legal</span>
                  <p className="text-sm font-bold text-[#0b1c30]">31 fit consultivo aprovado</p>
                </div>
                <span className="text-xs font-semibold text-[#0051d5]">73.8%</span>
              </div>

              {/* Etapa 3 */}
              <div className="p-3 bg-[#eff4ff]/60 rounded-xl border border-[#eff4ff] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#76777d] uppercase">03. Propostas Enviadas</span>
                  <p className="text-sm font-bold text-[#0b1c30]">19 minutas de contratação</p>
                </div>
                <span className="text-xs font-semibold text-[#0051d5]">45.2%</span>
              </div>

              {/* Etapa 4 */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 uppercase">04. Contratos Fechados</span>
                  <p className="text-sm font-bold text-emerald-950">11 novos clientes ativos</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded shadow-xs">
                  26.2% Final
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-[#eff4ff] text-xs text-[#76777d] flex justify-between">
            <span>Origens: Câmaras de Comércio (48%), Bancos (32%)</span>
            <button onClick={onOpenNewIntake} className="text-[#0051d5] font-bold hover:underline">
              + Novo Lead
            </button>
          </div>
        </div>
      </div>

      {/* Hall de Vitórias & Eficiência da Semana */}
      <div className="bg-[#131b2e] text-white rounded-xl p-6 shadow-md">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-headline">
                Hall de Vitórias & Eficiência da Prática (Semana Vigente)
              </h3>
              <p className="text-xs text-[#7c839b]">
                Conquistas corporativas e deferimentos sem exigências celebrados pelo time
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-700/40 px-3 py-1 rounded-full">
            5 Novas Conquistas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#6ffbbe] tracking-wider">Soft Landing Recorde</span>
              <h4 className="text-sm font-bold text-white mt-1">FinScale UK concluída em D+4</h4>
              <p className="text-xs text-[#7c839b] mt-1">
                JUCESP deferida em primeira análise sem qualquer exigência e RDE-IED Bacen regularizado em 24h.
              </p>
            </div>
            <div className="mt-3 text-[11px] text-white/80 font-medium">Lead: Dra. Camila Vasconcellos</div>
          </div>

          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">Novo Retainer</span>
              <h4 className="text-sm font-bold text-white mt-1">Nordic CleanEnergy: R$ 420k/ano</h4>
              <p className="text-xs text-[#7c839b] mt-1">
                Assinatura de contrato anual para gestão de governança e contratos de fornecimento de energia.
              </p>
            </div>
            <div className="mt-3 text-[11px] text-white/80 font-medium">Squad 02 Societário</div>
          </div>

          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Agilidade Técnica</span>
              <h4 className="text-sm font-bold text-white mt-1">Parecer Aether AI em 36 horas</h4>
              <p className="text-xs text-[#7c839b] mt-1">
                Estruturação de preços de transferência e retenção tributária para remessas de software via Irlanda.
              </p>
            </div>
            <div className="mt-3 text-[11px] text-white/80 font-medium">Lead: Dr. Rafael Lima</div>
          </div>
        </div>
      </div>
    </div>
  );
};
