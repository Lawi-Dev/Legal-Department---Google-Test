import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Users, 
  Search, 
  Filter, 
  Plus, 
  ChevronRight, 
  Send, 
  Edit3, 
  Check, 
  Calendar as CalendarIcon,
  ChevronLeft,
  ArrowRight,
  Info
} from 'lucide-react';
import { CaseDemand, ActiveView } from '../types';
import { 
  INITIAL_OPERATIONAL_CASES, 
  SQUADS_ALLOCATION, 
  OPERATIONAL_CALENDAR 
} from '../data/mockData';

interface OperationsCasesViewProps {
  cases: CaseDemand[];
  onOpenNewIntake: () => void;
  onSelectCase: (caseItem: CaseDemand) => void;
  onNavigate: (view: ActiveView) => void;
}

export const OperationsCasesView: React.FC<OperationsCasesViewProps> = ({
  cases,
  onOpenNewIntake,
  onSelectCase,
  onNavigate,
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'safe' | 'client' | 'exigency'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [calendarViewMode, setCalendarViewMode] = useState<'week' | 'month'>('week');

  const filteredCases = cases.filter((c) => {
    const matchesSearch = c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.demandType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.squad.toLowerCase().includes(searchQuery.toLowerCase());
    if (statusFilter === 'safe') return matchesSearch && c.status === 'Sem Pendências';
    if (statusFilter === 'client') return matchesSearch && c.status === 'Aguardando Assinatura Cliente';
    if (statusFilter === 'exigency') return matchesSearch && (c.status === 'Exigência JUCESP' || c.status === 'Em Revisão Sênior');
    return matchesSearch;
  });

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0051d5]">
              Gerenciamento • Operações & Casos
            </span>
            <span className="text-[#c6c6cd]">•</span>
            <span className="text-xs text-[#76777d]">84 Casos Ativos no Mês</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1c30] font-headline">
            Painel de Operações & Execução de Casos
          </h1>
          <p className="text-xs sm:text-sm text-[#45464d] mt-1 max-w-3xl">
            Acompanhamento em tempo real de demandas, esteira de produção, prazos fatais e capacidade operacional dos squads.
          </p>
        </div>

        <button
          onClick={onOpenNewIntake}
          className="h-10 px-4 rounded-xl bg-[#0051d5] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#003ea8] transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ Nova Demanda / Intake</span>
        </button>
      </div>

      {/* 4 KPI Mini-Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Casos Ativos no Mês
            </span>
            <Briefcase className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">84</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              +12 vs anterior
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">68 sem pendências • 16 em ação</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              SLA de Entrega
            </span>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">98.4%</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              Meta: 95%
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">Excelente pontualidade nas entregas</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Prazos Fatais na Semana
            </span>
            <Clock className="w-5 h-5 text-rose-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">6</span>
            <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
              2 vencem hoje
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">1 exigência JUCESP + 1 parecer</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Eficiência de Alocação
            </span>
            <Users className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">82%</span>
            <span className="text-xs font-semibold text-[#0051d5] bg-[#eff4ff] px-1.5 py-0.5 rounded">
              Balanceado
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">4 squads operando em capacidade ideal</span>
        </div>
      </div>

      {/* Tabela Esteira de Casos & Demandas em Andamento */}
      <div className="bg-white rounded-xl shadow-xs border border-[#e2e8f0]/80 overflow-hidden">
        {/* Status Filter Buttons */}
        <div className="flex items-center gap-2 p-3 sm:px-6 border-b border-[#eff4ff] bg-[#f8f9ff] overflow-x-auto">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              statusFilter === 'all'
                ? 'bg-white text-[#0051d5] shadow-xs'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Todos os Casos (84)
          </button>
          <button
            onClick={() => setStatusFilter('safe')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              statusFilter === 'safe'
                ? 'bg-white text-emerald-800 shadow-xs'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Sem Pendências (68)
          </button>
          <button
            onClick={() => setStatusFilter('client')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              statusFilter === 'client'
                ? 'bg-white text-amber-800 shadow-xs'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Aguardando Cliente (11)
          </button>
          <button
            onClick={() => setStatusFilter('exigency')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              statusFilter === 'exigency'
                ? 'bg-rose-100 text-rose-800 shadow-xs'
                : 'text-[#76777d] hover:text-rose-700'
            }`}
          >
            Em Diligência / Exigência (5)
          </button>
        </div>

        {/* Search */}
        <div className="p-4 sm:p-5 border-b border-[#eff4ff] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#76777d]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar caso, cliente, protocolo..."
              className="w-full h-9 pl-9 pr-4 bg-[#f8f9ff] text-xs text-[#0b1c30] placeholder-[#76777d] rounded-lg border border-[#e2e8f0] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
            />
          </div>

          <span className="text-xs text-[#76777d]">
            Mostrando {filteredCases.length} de {cases.length} casos
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f8f9ff] text-[#76777d] font-bold border-b border-[#eff4ff]">
              <tr>
                <th className="py-3.5 px-4">Cliente / Empresa</th>
                <th className="py-3.5 px-4">Demanda / Tipo de Ato</th>
                <th className="py-3.5 px-4">Squad Responsável</th>
                <th className="py-3.5 px-4">Status Operacional</th>
                <th className="py-3.5 px-4">SLA / Prazo Fatal</th>
                <th className="py-3.5 px-4 text-right">Ação Rápida</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eff4ff]">
              {filteredCases.map((caseItem) => (
                <tr key={caseItem.id} className="hover:bg-[#eff4ff]/20 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-bold text-[#0b1c30] text-sm block">
                      {caseItem.clientName}
                    </span>
                    <span className="text-[11px] text-[#76777d]">{caseItem.clientDoc}</span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-semibold text-[#0b1c30]">{caseItem.demandType}</span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded bg-[#f1f5f9] text-[#45464d] font-medium">
                      {caseItem.squad}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-block ${
                      caseItem.status === 'Exigência JUCESP'
                        ? 'bg-rose-100 text-rose-800'
                        : caseItem.status === 'Aguardando Assinatura Cliente'
                        ? 'bg-amber-100 text-amber-800'
                        : caseItem.status === 'Em Revisão Sênior'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {caseItem.status}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`font-bold ${
                      caseItem.slaStatus === 'critical'
                        ? 'text-rose-600'
                        : caseItem.slaStatus === 'warning'
                        ? 'text-amber-600'
                        : 'text-[#0b1c30]'
                    }`}>
                      {caseItem.slaLabel}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => onSelectCase(caseItem)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        caseItem.actionType === 'cure'
                          ? 'bg-rose-600 hover:bg-rose-700 text-white'
                          : caseItem.actionType === 'signature'
                          ? 'bg-[#0051d5] hover:bg-[#003ea8] text-white'
                          : caseItem.actionType === 'review'
                          ? 'bg-[#0b1c30] hover:bg-black text-white'
                          : 'bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0051d5]'
                      }`}
                    >
                      {caseItem.actionLabel}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination bar */}
        <div className="p-4 border-t border-[#eff4ff] bg-[#f8f9ff] flex items-center justify-between text-xs text-[#76777d]">
          <span>Exibindo 1 a 5 de 84 casos corporativos</span>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 rounded bg-white border border-[#e2e8f0] text-[#76777d] hover:bg-[#eff4ff] font-semibold">
              Anterior
            </button>
            <button className="px-2.5 py-1 rounded bg-[#0051d5] text-white font-semibold shadow-xs">
              1
            </button>
            <button className="px-2.5 py-1 rounded bg-white border border-[#e2e8f0] text-[#76777d] hover:bg-[#eff4ff] font-semibold">
              2
            </button>
            <button className="px-2.5 py-1 rounded bg-white border border-[#e2e8f0] text-[#76777d] hover:bg-[#eff4ff] font-semibold">
              Próximo
            </button>
          </div>
        </div>
      </div>

      {/* Calendário Operacional & Marcos Críticos */}
      <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#eff4ff] mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0051d5]">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0b1c30] font-headline">
                Calendário Operacional & Marcos Críticos (Semana de 17 a 23 de Agosto de 2026)
              </h3>
              <p className="text-xs text-[#76777d]">
                Distribuição de assembleias, protocolos e prazos fatais de saneamento
              </p>
            </div>
          </div>

          <div className="flex items-center bg-[#f8f9ff] rounded-lg p-0.5 border border-[#e2e8f0]">
            <button
              onClick={() => setCalendarViewMode('week')}
              className={`px-3 py-1 rounded text-xs font-semibold ${
                calendarViewMode === 'week' ? 'bg-white shadow-xs text-[#0051d5]' : 'text-[#76777d]'
              }`}
            >
              Semana
            </button>
            <button
              onClick={() => setCalendarViewMode('month')}
              className={`px-3 py-1 rounded text-xs font-semibold ${
                calendarViewMode === 'month' ? 'bg-white shadow-xs text-[#0051d5]' : 'text-[#76777d]'
              }`}
            >
              Mês
            </button>
          </div>
        </div>

        {/* Week grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {OPERATIONAL_CALENDAR.map((day, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-3 flex flex-col justify-between min-h-[140px] border transition-all ${
                day.isToday
                  ? 'bg-blue-50/50 border-[#0051d5] ring-2 ring-[#0051d5]/15'
                  : 'bg-[#f8f9ff] border-[#e2e8f0]'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#e2e8f0]/60">
                <span className={`text-[11px] font-bold ${
                  day.isToday ? 'text-[#0051d5]' : 'text-[#45464d]'
                }`}>
                  {day.dayOfWeek}
                </span>
                <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                  day.isToday ? 'bg-[#0051d5] text-white shadow-xs' : 'text-[#0b1c30]'
                }`}>
                  {day.dayOfMonth}
                </span>
              </div>

              <div className="space-y-1.5 my-2 flex-1">
                {day.events.length === 0 ? (
                  <span className="text-[10px] text-[#76777d] italic block pt-3">Sem prazos</span>
                ) : (
                  day.events.map((ev) => (
                    <div
                      key={ev.id}
                      className={`p-1.5 rounded text-[11px] font-medium leading-tight ${
                        ev.type === 'fatal'
                          ? 'bg-rose-100 text-rose-900 border border-rose-200'
                          : ev.type === 'meeting'
                          ? 'bg-blue-100 text-blue-900 border border-blue-200'
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                      }`}
                    >
                      <span className="font-bold block truncate">{ev.title}</span>
                      <span className="text-[10px] opacity-80 block truncate">{ev.subtext}</span>
                    </div>
                  ))
                )}
              </div>

              {day.isToday && (
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#0051d5] text-center pt-1 border-t border-blue-200/60">
                  Hoje (Dia Crítico)
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Alocação de Equipes & Eficiência dos Squads */}
      <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]/80 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-[#eff4ff] mb-4">
          <div>
            <h3 className="text-base font-bold text-[#0b1c30] font-headline">
              Alocação de Equipes & Eficiência dos Squads
            </h3>
            <p className="text-xs text-[#76777d]">
              Distribuição de advogados, taxas de cumprimento de SLA e projetos ativos por unidade de prática
            </p>
          </div>
          <span className="text-xs text-[#0051d5] font-bold bg-[#eff4ff] px-2.5 py-1 rounded-full">
            4 Squads Operacionais
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SQUADS_ALLOCATION.map((sq) => (
            <div
              key={sq.id}
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                sq.isWarning
                  ? 'border-amber-200 bg-amber-50/30'
                  : 'border-[#e2e8f0] bg-[#f8f9ff]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#0051d5]">
                    {sq.number}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    SLA {sq.slaRate}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#0b1c30] leading-snug">{sq.title}</h4>
                <span className="text-xs text-[#76777d] block mt-1">Líder: {sq.leader}</span>

                {/* Capacity Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-[#45464d]">Ocupação</span>
                    <span className={sq.capacityPercent > 85 ? 'text-amber-700 font-bold' : 'text-[#0b1c30]'}>
                      {sq.capacityPercent}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#dce9ff] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        sq.capacityPercent > 85 ? 'bg-amber-500' : 'bg-[#0051d5]'
                      }`}
                      style={{ width: `${sq.capacityPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e2e8f0]/60 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0b1c30]">{sq.activeProjectsCount} projetos ativos</span>
                <span className={`text-[11px] font-semibold ${
                  sq.isWarning ? 'text-amber-800' : 'text-[#76777d]'
                }`}>
                  {sq.pendingNotice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
