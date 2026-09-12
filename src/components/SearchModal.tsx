import React, { useState, useEffect } from 'react';
import { Search, X, Building2, FileText, ArrowRight, PlaneLanding, Briefcase } from 'lucide-react';
import { ActiveView } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ActiveView) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Ctrl+K / Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Can be toggled externally
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchItems = [
    {
      id: 'item-1',
      title: 'FinScale Global Tech Ltd. / FinScale FinTech UK',
      category: 'Empresas em Soft Landing',
      details: 'NIF UK: GB849201 • Registro RDE-IED & Abertura CNPJ',
      view: 'soft-landing-implantacao' as ActiveView,
      icon: PlaneLanding,
    },
    {
      id: 'item-2',
      title: 'Nexa Retail Tech Brasil Ltda.',
      category: 'Societário & Governança',
      details: 'CNPJ: 38.921.849/0001-44 • NIRE 35.234.901-2 • Cap Table & QSA',
      view: 'societario-governanca' as ActiveView,
      icon: Building2,
    },
    {
      id: 'item-3',
      title: 'Nordic CleanEnergy AB',
      category: 'Casos Operacionais',
      details: 'CNPJ: 54.128.902/0001-33 • Alteração Contratual & QSA (Vesting)',
      view: 'gerenciamento-operacoes' as ActiveView,
      icon: Briefcase,
    },
    {
      id: 'item-4',
      title: 'Acordo de Acionistas & Vesting - Série A',
      category: 'Contratos & Pareceres',
      details: 'Draft v3.2 • 42 páginas • Em Redline c/ Investidor',
      view: 'analise-documental-contratos' as ActiveView,
      icon: FileText,
    },
    {
      id: 'item-5',
      title: 'Parecer Jurídico Remessa Royalties de Software (Irlanda)',
      category: 'Contratos & Pareceres',
      details: 'Lei 14.596/23 • Preços de Transferência • Minuta Pronta',
      view: 'analise-documental-contratos' as ActiveView,
      icon: FileText,
    },
    {
      id: 'item-6',
      title: 'Painel Executivo C-Level (Performance & Faturamento)',
      category: 'Gerenciamento & Performance',
      details: 'Faturamento Consultivo YTD R$ 2.45M • SLA Geral 98.4%',
      view: 'gerenciamento' as ActiveView,
      icon: Briefcase,
    },
  ];

  const filtered = query.trim() === ''
    ? searchItems
    : searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.details.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-[#eff4ff]">
          <Search className="w-5 h-5 text-[#76777d]" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar empresas, sócios, atos societários, contratos, NIF/CNPJ..."
            className="w-full ml-3 text-sm text-[#0b1c30] placeholder-[#76777d] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#76777d] hover:text-[#0b1c30] hover:bg-[#eff4ff]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[#f8f9ff]">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#76777d]">
              Nenhum registro encontrado para "{query}".
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.view);
                    onClose();
                  }}
                  className="p-3 rounded-xl hover:bg-[#eff4ff] cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eff4ff] group-hover:bg-[#dce9ff] flex items-center justify-center text-[#0051d5]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#0b1c30] group-hover:text-[#0051d5] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#45464d] font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-xs text-[#76777d] mt-0.5">{item.details}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#76777d] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#f8f9ff] border-t border-[#eff4ff] flex items-center justify-between text-[11px] text-[#76777d]">
          <span>Use as setas para navegar, Enter para selecionar</span>
          <span className="font-semibold text-[#0051d5]">Lawi-Hub Command Palette</span>
        </div>
      </div>
    </div>
  );
};
