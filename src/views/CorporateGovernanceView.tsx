import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  FileCheck, 
  ShieldAlert, 
  Calendar, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Clock, 
  Plus, 
  CheckCircle2, 
  FileText, 
  AlertCircle,
  Briefcase
} from 'lucide-react';
import { ActiveView } from '../types';
import { NEXA_RETAIL_PARTNERS, NEXA_ACTS_HISTORY } from '../data/mockData';

interface CorporateGovernanceViewProps {
  onOpenNewIntake: () => void;
  onNavigate: (view: ActiveView) => void;
}

export const CorporateGovernanceView: React.FC<CorporateGovernanceViewProps> = ({
  onOpenNewIntake,
  onNavigate,
}) => {
  const [selectedTab, setSelectedTab] = useState<'captable' | 'acts' | 'powers' | 'structure'>('captable');
  const [selectedEntity, setSelectedEntity] = useState('nexa');

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0051d5]">
              Societário & M&A • Governança
            </span>
            <span className="text-[#c6c6cd]">•</span>
            <span className="text-xs text-[#76777d]">74 Entidades Monitoradas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1c30] font-headline">
            Societário & Governança Corporativa
          </h1>
          <p className="text-xs sm:text-sm text-[#45464d] mt-1 max-w-3xl">
            Gestão de quadros societários, aumentos de capital, atas de aprovação de contas e mandatos de administradores.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenNewIntake}
            className="h-10 px-4 rounded-xl bg-[#0051d5] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#003ea8] transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>+ Novo Ato Societário</span>
          </button>
        </div>
      </div>

      {/* 4 Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Entidades sob Gestão
            </span>
            <Building2 className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">74</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              100% ativas
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">48 Ltda. • 22 S.A. • 4 Holdings no Exterior</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Atos Próximos de Protocolo
            </span>
            <FileText className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">12</span>
            <span className="text-xs font-semibold text-[#0051d5] bg-[#eff4ff] px-1.5 py-0.5 rounded">
              Este mês
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">4 Aumentos de Capital • 8 Atas Ordinárias</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Procurações Vigentes
            </span>
            <FileCheck className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">158</span>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
              3 no radar
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">Controle contínuo de validade e representação</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#76777d] uppercase tracking-wider">
              Stock Options / Vesting
            </span>
            <Users className="w-5 h-5 text-[#0051d5]" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0b1c30] font-headline">28</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              Planos ativos
            </span>
          </div>
          <span className="block text-xs text-[#76777d] mt-2">Cláusulas de cliff e aceleração monitoradas</span>
        </div>
      </div>

      {/* Ficha da Entidade Selecionada */}
      <div className="bg-white rounded-xl border border-[#e2e8f0]/80 shadow-xs p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#eff4ff]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0b1c30] text-white flex items-center justify-center font-bold text-lg shadow-xs">
              NR
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-[#0b1c30] font-headline">
                  Nexa Retail Tech Brasil Ltda.
                </h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  SITUAÇÃO REGULAR
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#76777d] mt-1">
                <span>CNPJ: 38.921.849/0001-44</span>
                <span>•</span>
                <span>NIRE: 35.234.901-2</span>
                <span>•</span>
                <span>Data de Constituição: 14/03/2021</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="bg-[#f8f9ff] px-3 py-2 rounded-lg border border-[#e2e8f0]">
              <span className="text-[#76777d] block text-[10px] uppercase font-bold">Capital Social</span>
              <span className="text-sm font-bold text-[#0b1c30]">R$ 5.400.000,00</span>
            </div>
            <div className="bg-[#f8f9ff] px-3 py-2 rounded-lg border border-[#e2e8f0]">
              <span className="text-[#76777d] block text-[10px] uppercase font-bold">Sede Social</span>
              <span className="text-xs font-semibold text-[#0b1c30]">Itaim Bibi, São Paulo/SP</span>
            </div>
          </div>
        </div>

        {/* Abas da Empresa */}
        <div className="flex items-center gap-2 pt-4 border-b border-[#eff4ff] overflow-x-auto">
          <button
            onClick={() => setSelectedTab('captable')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap ${
              selectedTab === 'captable'
                ? 'text-[#0051d5]'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Cap Table & QSA
            {selectedTab === 'captable' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0051d5]"></span>
            )}
          </button>
          <button
            onClick={() => setSelectedTab('acts')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap ${
              selectedTab === 'acts'
                ? 'text-[#0051d5]'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Histórico de Atos (8)
            {selectedTab === 'acts' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0051d5]"></span>
            )}
          </button>
          <button
            onClick={() => setSelectedTab('powers')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap ${
              selectedTab === 'powers'
                ? 'text-[#0051d5]'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Procurações & Poderes (3)
            {selectedTab === 'powers' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0051d5]"></span>
            )}
          </button>
          <button
            onClick={() => setSelectedTab('structure')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap ${
              selectedTab === 'structure'
                ? 'text-[#0051d5]'
                : 'text-[#76777d] hover:text-[#0b1c30]'
            }`}
          >
            Estrutura Societária (Holdings)
            {selectedTab === 'structure' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0051d5]"></span>
            )}
          </button>
        </div>

        {/* Tab 1: Cap Table & QSA */}
        {selectedTab === 'captable' && (
          <div className="pt-5 space-y-6">
            {/* Visual Cap Table Proportional Bar */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#0b1c30] mb-2">
                <span>Composição de Capital (5.400.000 quotas a R$ 1,00 cada)</span>
                <span className="text-[#0051d5]">100% Totalmente Integralizado</span>
              </div>
              <div className="w-full h-4 rounded-lg bg-[#eff4ff] overflow-hidden flex shadow-inner">
                <div 
                  className="bg-[#0b1c30] h-full flex items-center justify-center text-[10px] font-bold text-white tracking-wider" 
                  style={{ width: '90%' }}
                >
                  Nexa Global Holdings BV (90%)
                </div>
                <div 
                  className="bg-[#0051d5] h-full flex items-center justify-center text-[10px] font-bold text-white tracking-wider" 
                  style={{ width: '10%' }}
                >
                  Key Personnel (10%)
                </div>
              </div>
            </div>

            {/* QSA Table */}
            <div className="overflow-x-auto rounded-xl border border-[#e2e8f0]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f8f9ff] text-[#76777d] font-bold border-b border-[#e2e8f0]">
                  <tr>
                    <th className="py-3 px-4">Sócio / Acionista</th>
                    <th className="py-3 px-4">Origem / Tipo</th>
                    <th className="py-3 px-4">Quotas / Ações</th>
                    <th className="py-3 px-4">% Participação</th>
                    <th className="py-3 px-4">Valor Nominal</th>
                    <th className="py-3 px-4">Representante Legal no Brasil</th>
                    <th className="py-3 px-4">Validade do Mandato</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eff4ff]">
                  {NEXA_RETAIL_PARTNERS.map((partner, i) => (
                    <tr key={i} className="hover:bg-[#eff4ff]/20">
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-[#0b1c30] block">{partner.name}</span>
                        {partner.tag && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#eff4ff] text-[#0051d5] font-semibold">
                            {partner.tag}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-[#45464d]">{partner.origin}</span>
                        <span className="block text-[10px] text-[#76777d]">{partner.type}</span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#0b1c30]">
                        {partner.quotas.toLocaleString('pt-BR')}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-[#0b1c30]">{partner.sharePercent.toFixed(1)}%</span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#0b1c30]">
                        {partner.shareValue}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-[#0b1c30] block">{partner.representativeName}</span>
                        <span className="text-[10px] text-[#76777d]">{partner.representativeRole}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-emerald-700 font-semibold">{partner.validity}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Histórico de Atos */}
        {selectedTab === 'acts' && (
          <div className="pt-5 space-y-4">
            <div className="relative pl-6 space-y-5 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e2e8f0]">
              {NEXA_ACTS_HISTORY.map((act) => (
                <div key={act.id} className="relative bg-[#f8f9ff] p-4 rounded-xl border border-[#eff4ff]">
                  <span className="absolute -left-[27px] top-4 w-3.5 h-3.5 rounded-full bg-[#0051d5] ring-4 ring-white"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-[#0b1c30]">{act.title}</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 self-start sm:self-auto">
                      {act.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#45464d] mt-1.5 leading-relaxed">
                    {act.description}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#e2e8f0]/60 text-[11px] text-[#76777d]">
                    <div className="flex items-center gap-3">
                      <span>Data: {act.date}</span>
                      <span>•</span>
                      <span>Protocolo: {act.protocolNumber}</span>
                    </div>
                    <button className="text-[#0051d5] hover:underline font-bold flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar Certidão (PDF)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Procurações & Poderes */}
        {selectedTab === 'powers' && (
          <div className="pt-5 space-y-3">
            <div className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8f9ff]">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#0b1c30]">Procuração com Poderes Especiais de Administração</h4>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">Vigente</span>
              </div>
              <p className="text-xs text-[#45464d] mt-1">
                Outorgante: Nexa Global Holdings BV • Outorgada: Dra. Camila Vasconcellos (OAB/SP 389.201). Poderes irrevogáveis perante RFB, SEFAZ, JUCESP e Instituições Financeiras para operações de câmbio de capital.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Estrutura Societária */}
        {selectedTab === 'structure' && (
          <div className="pt-5 p-6 bg-[#f8f9ff] rounded-xl border border-[#e2e8f0] text-center">
            <span className="text-xs uppercase font-bold text-[#0051d5] tracking-wider block mb-1">
              Organograma Corporativo & Cadeia de Controle
            </span>
            <p className="text-xs text-[#76777d] max-w-xl mx-auto mb-4">
              Nexa Global Holdings BV (Holanda) detém 90% da subsidiária operacional brasileira, com UBO mapeado e registrado no Cademp / Bacen sob protocolo 489.102.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#e2e8f0] text-xs font-bold text-[#0b1c30]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Cadeia Societária 100% Auditada e em Conformidade com a IN RFB 2.119/2022</span>
            </div>
          </div>
        )}
      </div>

      {/* Painel Lateral: Prazos Regulatórios & Livros Digitais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Prazos Regulatórios & Alertas */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff] mb-3">
            <h3 className="text-sm font-bold text-[#0b1c30] font-headline">
              Prazos Regulatórios & Obrigações Anuais
            </h3>
            <Calendar className="w-4 h-4 text-[#76777d]" />
          </div>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-[#f8f9ff] rounded-lg border border-[#eff4ff] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#0b1c30] block">
                  Aprovação Anual de Contas (Art. 1.078 Código Civil)
                </span>
                <span className="text-[11px] text-[#76777d]">
                  Prazo legal de 4 meses após término do exercício social (Até 30/Abril).
                </span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold shrink-0">
                Regular
              </span>
            </div>

            <div className="p-3 bg-[#f8f9ff] rounded-lg border border-[#eff4ff] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#0b1c30] block">
                  Declaração Econômico-Financeira (BACEN Censo)
                </span>
                <span className="text-[11px] text-[#76777d]">
                  Obrigatório para sociedades com patrimônio líquido superior a R$ 250M.
                </span>
              </div>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold shrink-0">
                Isento
              </span>
            </div>

            <div className="p-3 bg-[#f8f9ff] rounded-lg border border-[#eff4ff] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#0b1c30] block">
                  Atualização de Dados Cadastrais de Administradores
                </span>
                <span className="text-[11px] text-[#76777d]">
                  Revalidação de endereços e mandatos perante o CNPJ da RFB.
                </span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold shrink-0">
                Sincronizado
              </span>
            </div>
          </div>
        </div>

        {/* Livros Societários Digitais (IN DREI 82/2021) */}
        <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#eff4ff] mb-3">
            <h3 className="text-sm font-bold text-[#0b1c30] font-headline">
              Livros Societários Digitais (IN DREI 82/2021)
            </h3>
            <FileText className="w-4 h-4 text-[#76777d]" />
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-2.5 bg-[#f8f9ff] rounded-lg border border-[#eff4ff]">
              <div>
                <span className="font-bold text-[#0b1c30] block">Livro de Atas de Reunião de Sócios</span>
                <span className="text-[10px] text-[#76777d]">Livro Eletrônico Nº 02 • Termo de Abertura JUCESP</span>
              </div>
              <button className="text-[#0051d5] font-bold hover:underline">Abrir Livro</button>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-[#f8f9ff] rounded-lg border border-[#eff4ff]">
              <div>
                <span className="font-bold text-[#0b1c30] block">Livro de Registro de Quotas</span>
                <span className="text-[10px] text-[#76777d]">Livro Eletrônico Nº 01 • Autenticado digitalmente</span>
              </div>
              <button className="text-[#0051d5] font-bold hover:underline">Abrir Livro</button>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-[#f8f9ff] rounded-lg border border-[#eff4ff]">
              <div>
                <span className="font-bold text-[#0b1c30] block">Termo de Posse de Administradores</span>
                <span className="text-[10px] text-[#76777d]">Mandato em vigor de Rodrigo Mendonça</span>
              </div>
              <button className="text-[#0051d5] font-bold hover:underline">Abrir Termo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
