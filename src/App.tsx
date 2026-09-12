import React, { useState } from 'react';
import { ActiveView, CaseDemand, SoftLandingCompany } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SearchModal } from './components/SearchModal';
import { NewIntakeModal } from './components/NewIntakeModal';
import { CaseDetailsModal } from './components/CaseDetailsModal';

import { HomeCockpitView } from './views/HomeCockpitView';
import { SoftLandingView } from './views/SoftLandingView';
import { CorporateGovernanceView } from './views/CorporateGovernanceView';
import { DocumentAnalysisView } from './views/DocumentAnalysisView';
import { ExecutiveManagementView } from './views/ExecutiveManagementView';
import { OperationsCasesView } from './views/OperationsCasesView';
import { RepositoryVaultView } from './views/RepositoryVaultView';

import { INITIAL_OPERATIONAL_CASES } from './data/mockData';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home-visao-geral');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [newIntakeOpen, setNewIntakeOpen] = useState(false);
  
  const [cases, setCases] = useState<CaseDemand[]>(INITIAL_OPERATIONAL_CASES);
  const [selectedCase, setSelectedCase] = useState<CaseDemand | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAddCase = (newCase: CaseDemand) => {
    setCases((prev) => [newCase, ...prev]);
    showToast(`Nova demanda "${newCase.clientName}" protocolada com sucesso!`);
  };

  const handleUpdateCaseStatus = (caseId: string, newStatus: CaseDemand['status'], message: string) => {
    setCases((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? {
              ...c,
              status: newStatus,
              slaStatus: 'safe',
              actionLabel: 'Ver Detalhes',
              actionType: 'details',
            }
          : c
      )
    );
    showToast(message);
  };

  const handleSelectReviewItem = (title: string) => {
    setActiveView('analise-documental-contratos');
    showToast(`Carregando instrumento: ${title}`);
  };

  const handleSelectSoftLandingCompany = (company: SoftLandingCompany) => {
    showToast(`Dossiê de ${company.name} aberto no Bacen e Receita Federal.`);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0b1c30] text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Persistent Left Navigation Sidebar */}
      <Sidebar
        activeView={activeView}
        onSelectView={(view) => setActiveView(view)}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen(!mobileOpen)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-h-screen">
        {/* Fixed Header */}
        <Header
          onOpenSearch={() => setSearchOpen(true)}
          onOpenNewIntake={() => setNewIntakeOpen(true)}
          onToggleMobileMenu={() => setMobileOpen(!mobileOpen)}
        />

        {/* Dynamic View Container */}
        <main className="flex-1 pt-20 pb-12 px-4 sm:px-8 max-w-7xl w-full mx-auto">
          {activeView === 'home-visao-geral' && (
            <HomeCockpitView
              onNavigate={(view) => setActiveView(view)}
              onOpenNewIntake={() => setNewIntakeOpen(true)}
              onSelectReviewItem={handleSelectReviewItem}
            />
          )}

          {activeView === 'soft-landing-implantacao' && (
            <SoftLandingView
              onOpenNewIntake={() => setNewIntakeOpen(true)}
              onNavigate={(view) => setActiveView(view)}
              onSelectCompany={handleSelectSoftLandingCompany}
            />
          )}

          {activeView === 'societario-governanca' && (
            <CorporateGovernanceView
              onOpenNewIntake={() => setNewIntakeOpen(true)}
              onNavigate={(view) => setActiveView(view)}
            />
          )}

          {activeView === 'analise-documental-contratos' && (
            <DocumentAnalysisView
              onOpenNewIntake={() => setNewIntakeOpen(true)}
              onNavigate={(view) => setActiveView(view)}
              onSelectReviewItem={handleSelectReviewItem}
            />
          )}

          {activeView === 'gerenciamento' && (
            <ExecutiveManagementView
              onNavigate={(view) => setActiveView(view)}
              onOpenNewIntake={() => setNewIntakeOpen(true)}
            />
          )}

          {activeView === 'gerenciamento-operacoes' && (
            <OperationsCasesView
              cases={cases}
              onOpenNewIntake={() => setNewIntakeOpen(true)}
              onSelectCase={(caseItem) => setSelectedCase(caseItem)}
              onNavigate={(view) => setActiveView(view)}
            />
          )}

          {activeView === 'repositorio-minutas-padrao' && (
            <RepositoryVaultView />
          )}
        </main>
      </div>

      {/* Search / Command Palette Modal (Ctrl + K) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={(view) => setActiveView(view)}
      />

      {/* New Legal Intake Modal */}
      <NewIntakeModal
        isOpen={newIntakeOpen}
        onClose={() => setNewIntakeOpen(false)}
        onAddCase={handleAddCase}
      />

      {/* Case Details & Action Modal */}
      <CaseDetailsModal
        caseItem={selectedCase}
        onClose={() => setSelectedCase(null)}
        onUpdateStatus={handleUpdateCaseStatus}
      />
    </div>
  );
}

export default App;
