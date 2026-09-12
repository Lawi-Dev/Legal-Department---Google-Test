import React from 'react';
import { ActiveView } from '../types';
import { 
  LayoutDashboard, 
  PlaneLanding, 
  Building2, 
  FileText, 
  FolderArchive, 
  BarChart3, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  activeView: ActiveView;
  onSelectView: (view: ActiveView) => void;
  mobileOpen: boolean;
  onToggleMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  onSelectView,
  mobileOpen,
  onToggleMobile,
}) => {
  const isGerenciamentoSection = activeView === 'gerenciamento' || activeView === 'gerenciamento-operacoes';

  const navItems = [
    {
      id: 'home-visao-geral' as ActiveView,
      label: 'Home / Visão Geral',
      icon: LayoutDashboard,
    },
    {
      id: 'soft-landing-implantacao' as ActiveView,
      label: 'Soft Landing & Implantação',
      icon: PlaneLanding,
    },
    {
      id: 'societario-governanca' as ActiveView,
      label: 'Societário & Governança',
      icon: Building2,
    },
    {
      id: 'analise-documental-contratos' as ActiveView,
      label: 'Análise Documental & Contratos',
      icon: FileText,
    },
    {
      id: 'repositorio-minutas-padrao' as ActiveView,
      label: 'Repositório & Minutas Padrão',
      icon: FolderArchive,
    },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-xs"
          onClick={onToggleMobile}
        />
      )}

      <aside 
        className={`fixed left-0 top-0 h-full w-72 bg-white z-50 flex flex-col justify-between border-r border-[#e2e8f0]/80 shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          {/* Logo Header */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-[#eff4ff]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0b1c30] flex items-center justify-center text-white shadow-xs">
                <span className="font-bold text-base tracking-tighter">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg font-bold tracking-tight text-[#0b1c30] leading-none">
                  Lawi-Hub
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#76777d] tracking-widest mt-0.5">
                  Corporate & Advisory
                </span>
              </div>
            </div>
            <button 
              onClick={onToggleMobile} 
              className="lg:hidden text-[#45464d] hover:text-[#0b1c30]"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="px-4 py-3">
            <div className="px-2 py-1 mb-1">
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-bold">
                Prática Consultiva
              </span>
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectView(item.id);
                      if (mobileOpen) onToggleMobile();
                    }}
                    className={`w-full px-3 py-2 rounded-lg text-left text-[13px] font-medium transition-all flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-[#131b2e] text-white font-semibold shadow-xs'
                        : 'text-[#45464d] hover:bg-[#eff4ff] hover:text-[#0b1c30]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#76777d]'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}

              {/* Gerenciamento Header & Sub-items */}
              <div className="mt-1">
                <button
                  onClick={() => {
                    onSelectView('gerenciamento');
                    if (mobileOpen) onToggleMobile();
                  }}
                  className={`w-full px-3 py-2 rounded-lg text-left text-[13px] font-semibold transition-all flex items-center justify-between ${
                    activeView === 'gerenciamento'
                      ? 'bg-[#131b2e] text-white shadow-xs'
                      : 'text-[#0b1c30] hover:bg-[#eff4ff]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <BarChart3 className={`w-4 h-4 ${activeView === 'gerenciamento' ? 'text-white' : 'text-[#76777d]'}`} />
                    <span>Gerenciamento</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
                </button>

                {/* Sub-item: Operações */}
                <div className="flex flex-col pl-6 mt-1">
                  <button
                    onClick={() => {
                      onSelectView('gerenciamento-operacoes');
                      if (mobileOpen) onToggleMobile();
                    }}
                    className={`w-full px-3 py-1.5 rounded-lg text-[13px] transition-all flex items-center justify-between ${
                      activeView === 'gerenciamento-operacoes'
                        ? 'bg-[#eff4ff] text-[#0051d5] font-bold shadow-xs'
                        : 'text-[#45464d] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        activeView === 'gerenciamento-operacoes' ? 'bg-[#0051d5]' : 'bg-[#c6c6cd]'
                      }`}></span>
                      <span>Operações</span>
                    </div>
                    {activeView === 'gerenciamento-operacoes' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
                    )}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Compliance & Governance Pill Card */}
        <div className="p-4">
          <div className="bg-[#eff4ff] rounded-xl p-3.5 flex flex-col gap-1 border border-[#e2e8f0]/40">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#45464d] uppercase font-bold tracking-wider">
                Compliance & Governança
              </span>
              <span className="h-2 w-2 rounded-full bg-[#0051d5] animate-pulse"></span>
            </div>
            <span className="text-[12px] text-[#0b1c30] font-bold leading-tight">
              100% Consultivo e Regulatório
            </span>
            <p className="text-[11px] text-[#45464d] leading-relaxed mt-0.5">
              Gestão de atos societários, contratos transacionais e soft landing sem passivos judiciais.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
