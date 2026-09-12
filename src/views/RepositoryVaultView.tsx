import React, { useState } from 'react';
import { 
  FolderArchive, 
  Search, 
  Filter, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Tag, 
  Layers, 
  ShieldCheck, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { StandardTemplate } from '../types';
import { TEMPLATES_VAULT } from '../data/mockData';

export const RepositoryVaultView: React.FC = () => {
  const [templates, setTemplates] = useState<StandardTemplate[]>(TEMPLATES_VAULT);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<StandardTemplate | null>(TEMPLATES_VAULT[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    'ALL',
    'Societário & Vesting',
    'Soft Landing & Governança',
    'Contratos SaaS & Tecnologia',
    'NDAs & Confidencialidade',
    'Tributário & Câmbio'
  ];

  const filtered = templates.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCategory === 'ALL' || t.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleCopyClause = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0051d5]">
              Knowledge Management • Vault Jurídico
            </span>
            <span className="text-[#c6c6cd]">•</span>
            <span className="text-xs text-[#76777d]">24 Minutas Padrão Institucionais</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1c30] font-headline">
            Repositório & Minutas Padrão
          </h1>
          <p className="text-xs sm:text-sm text-[#45464d] mt-1 max-w-3xl">
            Templates institucionais blindados, testados em auditorias e adequados à legislação brasileira e convenções da OCDE.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Minutas Auditadas 2026</span>
          </div>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e2e8f0]/80 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#76777d]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por template, cláusula, matéria ou palavra-chave..."
            className="w-full h-9 pl-9 pr-4 bg-[#f8f9ff] text-xs text-[#0b1c30] placeholder-[#76777d] rounded-lg border border-[#e2e8f0] focus:ring-1 focus:ring-[#0051d5] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0051d5] text-white shadow-xs'
                  : 'bg-[#f8f9ff] text-[#45464d] hover:bg-[#eff4ff] border border-[#e2e8f0]'
              }`}
            >
              {cat === 'ALL' ? 'Todas as Categorias' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: List on Left, Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Template Cards List (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTemplate(item)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedTemplate?.id === item.id
                  ? 'bg-[#eff4ff]/60 border-[#0051d5] ring-2 ring-[#0051d5]/15'
                  : 'bg-white border-[#e2e8f0]/80 hover:bg-[#f8f9ff]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0051d5] bg-[#dce9ff] px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-[#76777d]">
                    {item.version} • {item.usageCount} utilizações
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#0b1c30]">{item.title}</h3>
                <p className="text-xs text-[#45464d] mt-1 line-clamp-2">{item.description}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#eff4ff] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-[#f1f5f9] text-[#45464d] px-1.5 py-0.5 rounded font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="text-xs text-[#0051d5] font-bold hover:underline flex items-center gap-1">
                  <span>Pré-visualizar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Template Viewer / Clause Inspector (5 cols) */}
        <div className="lg:col-span-5">
          {selectedTemplate ? (
            <div className="bg-white rounded-xl p-5 border border-[#e2e8f0]/80 shadow-xs sticky top-20">
              <div className="pb-3 border-b border-[#eff4ff]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold text-[#0051d5]">{selectedTemplate.category}</span>
                  <span className="text-xs font-semibold text-[#76777d]">{selectedTemplate.version}</span>
                </div>
                <h3 className="text-base font-bold text-[#0b1c30] font-headline">{selectedTemplate.title}</h3>
                <p className="text-xs text-[#45464d] mt-1">{selectedTemplate.description}</p>
              </div>

              {/* Sample Clause Box */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#0b1c30] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#0051d5]" />
                    Cláusula Padrão Blindada
                  </span>
                  <button
                    onClick={() => handleCopyClause(selectedTemplate.sampleClause || '', selectedTemplate.id)}
                    className="text-xs font-semibold text-[#0051d5] hover:text-[#003ea8] flex items-center gap-1"
                  >
                    {copiedId === selectedTemplate.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Cláusula</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3.5 bg-[#f8f9ff] rounded-xl border border-[#eff4ff] text-xs text-[#0b1c30] leading-relaxed font-mono">
                  {selectedTemplate.sampleClause}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-[#eff4ff] flex items-center gap-2">
                <button
                  onClick={() => handleCopyClause(selectedTemplate.sampleClause || '', selectedTemplate.id)}
                  className="flex-1 h-9 rounded-lg bg-[#0051d5] hover:bg-[#003ea8] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Usar Minuta Integral</span>
                </button>
                <button
                  className="px-3 h-9 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0051d5] text-xs font-bold transition-all flex items-center justify-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOCX</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 border border-[#e2e8f0]/80 text-center text-xs text-[#76777d]">
              Selecione uma minuta à esquerda para visualizar suas cláusulas.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
