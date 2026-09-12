import React, { useState } from 'react';
import { X, Building2, Check, AlertCircle, Calendar, User, FileText } from 'lucide-react';
import { CaseDemand } from '../types';

interface NewIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCase: (newCase: CaseDemand) => void;
}

export const NewIntakeModal: React.FC<NewIntakeModalProps> = ({
  isOpen,
  onClose,
  onAddCase,
}) => {
  const [clientName, setClientName] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [demandType, setDemandType] = useState('Registro RDE-IED & Abertura CNPJ');
  const [squad, setSquad] = useState('Squad Soft Landing');
  const [slaDays, setSlaDays] = useState('D+3');
  const [priority, setPriority] = useState<'normal' | 'urgent'>('normal');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;

    const newCase: CaseDemand = {
      id: `case-${Date.now()}`,
      clientName: clientName.trim(),
      clientDoc: docNumber ? docNumber.trim() : 'Em fase de protocolo',
      demandType,
      squad,
      status: priority === 'urgent' ? 'Aguardando Assinatura Cliente' : 'Sem Pendências',
      slaLabel: `${slaDays} • SLA seguro`,
      slaStatus: priority === 'urgent' ? 'warning' : 'safe',
      actionLabel: 'Ver Detalhes',
      actionType: 'details',
      detailsText: 'Demanda protocolada via intake inteligente. Triagem automatizada com checklist regulatório atribuído ao squad competente.',
    };

    onAddCase(newCase);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#eff4ff] bg-[#f8f9ff]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#0051d5]">
              Workflow Consultivo & LegalOps
            </span>
            <h3 className="text-lg font-bold text-[#0b1c30]">Nova Solicitação de Análise / Intake</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#76777d] hover:text-[#0b1c30] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
              Empresa Cliente / Razão Social
            </label>
            <input
              required
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Ex: BioGenomics Latam Ltda."
              className="w-full h-9 px-3 text-sm bg-white rounded-lg border border-[#cbd5e1] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                CNPJ / NIF de Origem
              </label>
              <input
                type="text"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                placeholder="Ex: NIF DE: 4891002"
                className="w-full h-9 px-3 text-sm bg-white rounded-lg border border-[#cbd5e1] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                Squad Responsável
              </label>
              <select
                value={squad}
                onChange={(e) => setSquad(e.target.value)}
                className="w-full h-9 px-3 text-sm bg-white rounded-lg border border-[#cbd5e1] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
              >
                <option value="Squad Soft Landing">Squad Soft Landing</option>
                <option value="Squad Societário">Squad Societário</option>
                <option value="Squad Consultivo">Squad Consultivo</option>
                <option value="Squad Paralegal">Squad Paralegal</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
              Tipo de Ato / Demanda
            </label>
            <select
              value={demandType}
              onChange={(e) => setDemandType(e.target.value)}
              className="w-full h-9 px-3 text-sm bg-white rounded-lg border border-[#cbd5e1] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
            >
              <option value="Registro RDE-IED & Abertura CNPJ">Registro RDE-IED & Abertura CNPJ (Soft Landing)</option>
              <option value="Alteração Contratual & QSA (Vesting)">Alteração Contratual & QSA (Vesting)</option>
              <option value="Parecer Preço de Transferência & Royalties">Parecer Preço de Transferência & Royalties</option>
              <option value="Transformação de Tipo Jurídico (Ltda p/ S.A.)">Transformação de Tipo Jurídico (Ltda p/ S.A.)</option>
              <option value="Procurações Consulares & Registro DBE">Procurações Consulares & Registro DBE</option>
              <option value="Revisão de Acordo de Quotistas & Drag Along">Revisão de Acordo de Quotistas & Drag Along</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                Prazo Previsto (SLA)
              </label>
              <select
                value={slaDays}
                onChange={(e) => setSlaDays(e.target.value)}
                className="w-full h-9 px-3 text-sm bg-white rounded-lg border border-[#cbd5e1] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
              >
                <option value="D+2 (48h)">D+2 (48 horas)</option>
                <option value="D+3">D+3 (3 dias úteis)</option>
                <option value="D+5">D+5 (5 dias úteis)</option>
                <option value="D+10">D+10 (Conclusivo)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                Classificação de Risco
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPriority('normal')}
                  className={`flex-1 h-9 rounded-lg text-xs font-semibold transition-all ${
                    priority === 'normal'
                      ? 'bg-[#eff4ff] text-[#0051d5] border border-[#0051d5]/40'
                      : 'bg-[#f8f9ff] text-[#76777d] border border-[#cbd5e1]'
                  }`}
                >
                  Normal
                </button>
                <button
                  type="button"
                  onClick={() => setPriority('urgent')}
                  className={`flex-1 h-9 rounded-lg text-xs font-semibold transition-all ${
                    priority === 'urgent'
                      ? 'bg-rose-50 text-rose-700 border border-rose-300'
                      : 'bg-[#f8f9ff] text-[#76777d] border border-[#cbd5e1]'
                  }`}
                >
                  Prioritário
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#eff4ff]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#45464d] hover:bg-[#eff4ff] rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold bg-[#0051d5] text-white hover:bg-[#003ea8] rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Cadastrar Demanda</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
