import React from 'react';
import { 
  Building2, 
  ShieldAlert, 
  Activity, 
  DollarSign, 
  CalendarDays, 
  ClipboardList, 
  CloudSun, 
  BookOpenCheck, 
  Layers, 
  FileCheck2,
  Code2
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenContracts, onOpenAudit, systemHealthy }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'safety', label: 'Site Safety (PPE)', icon: ShieldAlert },
    { id: 'cracks', label: 'Crack Analysis', icon: Activity },
    { id: 'valuation', label: 'Valuation Studio', icon: DollarSign },
    { id: 'planning', label: 'WBS & Schedule', icon: CalendarDays },
    { id: 'logs', label: 'Daily Site Logs', icon: ClipboardList },
    { id: 'weather', label: 'Weather Advisory', icon: CloudSun },
    { id: 'knowledge', label: 'Standards & QA/QC', icon: BookOpenCheck },
    { id: 'multimodal', label: 'Multimodal Studio', icon: Layers }
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand-section">
          <div className="brand-icon">
            <Building2 size={24} />
          </div>
          <div>
            <div className="brand-title">
              <span>Multimodal Construction Intelligence</span>
              <span className="brand-badge">v2.0 ENTERPRISE</span>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', letterSpacing: '0.02em' }}>
              Full-Stack Decision Support • FastApi & React • Multimodal LLM
            </div>
          </div>
        </div>

        <nav className="tabs-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="nav-actions">
          <div className="status-pill" title="FastAPI Engine Connected">
            <span className="status-dot"></span>
            <span>API {systemHealthy ? 'ONLINE' : 'SYNCING'}</span>
          </div>

          <button 
            className="btn btn-secondary btn-sm"
            onClick={onOpenContracts}
            title="Inspect Strict JSON Data Contracts"
          >
            <Code2 size={15} />
            <span>JSON Contracts</span>
          </button>

          <button 
            className="btn btn-primary btn-sm"
            onClick={onOpenAudit}
          >
            <FileCheck2 size={15} />
            <span>Audit Report</span>
          </button>
        </div>
      </div>
    </header>
  );
}
