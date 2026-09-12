import React from 'react';
import { X, CheckCircle, AlertTriangle, Clock, Building2, User, FileText, Send, Check } from 'lucide-react';
import { CaseDemand } from '../types';

interface CaseDetailsModalProps {
  caseItem: CaseDemand | null;
  onClose: () => void;
  onUpdateStatus: (caseId: string, newStatus: CaseDemand['status'], message: string) => void;
}

export const CaseDetailsModal: React.FC<CaseDetailsModalProps> = ({
  caseItem,
  onClose,
  onUpdateStatus,
}) => {
  if (!caseItem) return null;

  const handleCureExigency = () => {
    onUpdateStatus(caseItem.id, 'Sem Pendências', 'Exigência sanada com sucesso na JUCESP! Documentos suplementares protocolados.');
    onClose();
  };

  const handleChargeSignature = () => {
    onUpdateStatus(caseItem.id, 'Sem Pendências', 'Lembrete automático com link autenticado DocuSign reenviado aos signatários.');
    onClose();
  };

  const handleApproveDraft = () => {
    onUpdateStatus(caseItem.id, 'Sem Pendências', 'Minuta aprovada em revisão sênior e liberada para assinatura!');
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
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0051d5]">
                {caseItem.squad}
              </span>
              <span className="text-[#c6c6cd]">•</span>
              <span className="text-[11px] text-[#76777d]">{caseItem.clientDoc}</span>
            </div>
            <h3 className="text-lg font-bold text-[#0b1c30] mt-0.5">{caseItem.clientName}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#76777d] hover:text-[#0b1c30] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-[#eff4ff]/60 rounded-xl p-3.5 border border-[#dce9ff]">
            <span className="text-xs text-[#76777d] font-semibold uppercase">Tipo de Demanda</span>
            <p className="text-sm font-bold text-[#0b1c30] mt-0.5">{caseItem.demandType}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-[#76777d]">Status Atual:</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                caseItem.status === 'Exigência JUCESP'
                  ? 'bg-rose-100 text-rose-800'
                  : caseItem.status === 'Aguardando Assinatura Cliente'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                {caseItem.status}
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs text-[#76777d] font-semibold uppercase">Prazo & SLA Fatal</span>
            <p className="text-sm font-semibold text-[#0b1c30] mt-0.5">{caseItem.slaLabel}</p>
          </div>

          <div>
            <span className="text-xs text-[#76777d] font-semibold uppercase">Histórico e Parecer Operacional</span>
            <p className="text-xs text-[#45464d] leading-relaxed mt-1 bg-[#f8f9ff] p-3 rounded-lg border border-[#eff4ff]">
              {caseItem.detailsText || 'Demanda sob acompanhamento contínuo dos squads corporativos Lawi-Hub sem passivos judiciais ou bloqueios fazendários.'}
            </p>
          </div>

          {/* Context Actions */}
          <div className="pt-3 border-t border-[#eff4ff] flex flex-wrap items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-[#45464d] hover:bg-[#eff4ff] rounded-lg transition-colors"
            >
              Fechar
            </button>

            {caseItem.status === 'Exigência JUCESP' && (
              <button
                onClick={handleCureExigency}
                className="px-4 py-2 text-xs font-bold bg-[#ba1a1a] text-white hover:bg-[#93000a] rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Sanar Exigência (Protocolar)</span>
              </button>
            )}

            {caseItem.status === 'Aguardando Assinatura Cliente' && (
              <button
                onClick={handleChargeSignature}
                className="px-4 py-2 text-xs font-bold bg-[#0051d5] text-white hover:bg-[#003ea8] rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Cobrar Assinatura DocuSign</span>
              </button>
            )}

            {caseItem.status === 'Em Revisão Sênior' && (
              <button
                onClick={handleApproveDraft}
                className="px-4 py-2 text-xs font-bold bg-[#131b2e] text-white hover:bg-black rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Aprovar Minuta Final</span>
              </button>
            )}

            {caseItem.status === 'Sem Pendências' && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Caso em conformidade (SLA 99.1%)</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
