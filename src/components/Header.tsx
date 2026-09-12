import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, Plus, Building2, CheckCircle2, FileText, AlertTriangle } from 'lucide-react';
import { USER_PROFILE, FEED_UPDATES } from '../data/mockData';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenNewIntake: () => void;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenNewIntake,
  onToggleMobileMenu,
}) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-16 bg-[#f8f9ff]/90 backdrop-blur-xl z-30 px-4 sm:px-8 flex items-center justify-between border-b border-[#e2e8f0]/60 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      {/* Left Search Bar & Mobile Trigger */}
      <div className="flex items-center gap-3 w-full max-w-xl">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-lg text-[#45464d] hover:bg-white transition-colors"
          aria-label="Abrir menu lateral"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div 
          onClick={onOpenSearch}
          className="relative w-full flex items-center cursor-pointer group"
        >
          <Search className="absolute left-3.5 w-4 h-4 text-[#76777d] group-hover:text-[#0051d5] transition-colors pointer-events-none" />
          <div className="w-full h-9 pl-10 pr-16 bg-white rounded-lg text-[13px] text-[#45464d] flex items-center border border-[#e2e8f0]/60 shadow-[0_1px_3px_rgba(15,23,42,0.04)] group-hover:border-[#0051d5]/40 transition-all">
            <span className="truncate">Buscar empresas, atos societários, contratos, NIF/CNPJ...</span>
          </div>
          <div className="absolute right-2.5 flex items-center">
            <kbd className="text-[10px] font-semibold text-[#76777d] bg-[#dce9ff]/60 px-1.5 py-0.5 rounded tracking-wide border border-[#cbd5e1]/40">
              Ctrl + K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right Action Items & Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Action Buttons */}
        <button
          onClick={onOpenNewIntake}
          className="hidden md:flex h-9 px-3.5 rounded-lg bg-[#0051d5] text-white text-[13px] font-semibold items-center gap-1.5 shadow-xs hover:bg-[#003ea8] transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>+ Nova Demanda (Intake)</span>
        </button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="Notificações"
            className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#45464d] hover:text-[#0b1c30] hover:bg-white transition-all border border-transparent hover:border-[#e2e8f0]/60"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#0051d5] ring-2 ring-[#f8f9ff]"></span>
          </button>

          {notificationsOpen && (
            <div 
              className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-[#e2e8f0] p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              onMouseLeave={() => setNotificationsOpen(false)}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff]">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#0b1c30]">Notificações & Protocolos</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-[#dce9ff] text-[#0051d5] text-[10px] font-bold">4 novos</span>
                </div>
                <span className="text-[11px] text-[#0051d5] font-semibold cursor-pointer hover:underline">
                  Marcar lidas
                </span>
              </div>

              <div className="divide-y divide-[#eff4ff] max-h-80 overflow-y-auto custom-scrollbar mt-1">
                {FEED_UPDATES.map((item) => (
                  <div key={item.id} className="py-2.5 hover:bg-[#f8f9ff] px-1 rounded-md transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#0b1c30]">{item.agency}</span>
                      <span className="text-[10px] text-[#76777d]">{item.time}</span>
                    </div>
                    <p className="text-[12px] font-semibold text-[#0b1c30] mt-0.5">{item.title}</p>
                    <span className="text-[11px] text-[#45464d] line-clamp-1">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-px bg-[#dce9ff] mx-1"></div>

        {/* User Profile */}
        <div className="relative">
          <div
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center gap-2.5 pl-1 cursor-pointer group select-none"
          >
            <img
              src={USER_PROFILE.avatarUrl}
              alt={USER_PROFILE.name}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#c6c6cd]/50 group-hover:ring-[#0051d5]"
              referrerPolicy="no-referrer"
            />
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-[12px] font-bold text-[#0b1c30] leading-tight group-hover:text-[#0051d5] transition-colors">
                {USER_PROFILE.name}
              </span>
              <span className="text-[11px] text-[#76777d] leading-none mt-0.5">
                {USER_PROFILE.title}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-[#76777d] group-hover:text-[#0b1c30] transition-transform" />
          </div>

          {userDropdownOpen && (
            <div 
              className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#e2e8f0] p-3 z-50"
              onMouseLeave={() => setUserDropdownOpen(false)}
            >
              <div className="p-2 border-b border-[#eff4ff]">
                <p className="text-[13px] font-bold text-[#0b1c30]">{USER_PROFILE.name}</p>
                <p className="text-[11px] text-[#76777d]">{USER_PROFILE.email}</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-[#eff4ff] text-[#0051d5] text-[10px] font-bold">
                  Sócia de Capital • OAB/SP
                </span>
              </div>
              <div className="pt-2 flex flex-col gap-1 text-[12px] text-[#45464d]">
                <button className="px-2 py-1.5 rounded hover:bg-[#eff4ff] text-left">Preferências do Painel</button>
                <button className="px-2 py-1.5 rounded hover:bg-[#eff4ff] text-left">Chaves de Assinatura Digital</button>
                <button className="px-2 py-1.5 rounded hover:bg-[#eff4ff] text-left text-red-600">Encerrar Sessão</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
