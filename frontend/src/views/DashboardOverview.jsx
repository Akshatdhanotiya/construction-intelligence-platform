import React from 'react';
import { 
  Building2, 
  ShieldAlert, 
  Activity, 
  DollarSign, 
  CalendarDays, 
  CloudSun, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  FileCheck2
} from 'lucide-react';
import MetricCard from '../components/MetricCard';

export default function DashboardOverview({ onNavigate, onOpenAudit }) {
  const epics = [
    {
      id: 'safety',
      title: 'Site Safety Monitoring',
      desc: 'Multimodal PPE detection (hardhat, vest, harness) & OSHA 1926 hazard alerts.',
      icon: ShieldAlert,
      badge: '92.5% Compliant',
      color: 'amber'
    },
    {
      id: 'cracks',
      title: 'Crack & Defect Diagnostics',
      desc: 'Computer vision crack width estimation, shear classification & epoxy repair specs.',
      badge: '3.85mm Shear Alert',
      icon: Activity,
      color: 'rose'
    },
    {
      id: 'valuation',
      title: 'Real Estate Valuation Studio',
      desc: 'Hedonic pricing, construction grade multipliers, ESG LEED premium & market comps.',
      badge: '$91.4M Projected',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      id: 'planning',
      title: 'WBS & Schedule Engine',
      desc: 'Critical path method, Gantt scheduling, milestone tracking & contingency budgeting.',
      badge: '465 Day Critical Path',
      icon: CalendarDays,
      color: 'cyan'
    },
    {
      id: 'weather',
      title: 'Weather-Aware Advisory',
      desc: 'Micro-climate impact on concrete curing windows, crane wind thresholds & storm holds.',
      badge: 'Crane Hold at 15:00',
      icon: CloudSun,
      color: 'indigo'
    },
    {
      id: 'multimodal',
      title: 'Multimodal Inspection Studio',
      desc: 'Unified multi-angle image inspection, defect heatmaps, and blueprint review.',
      badge: 'Multi-Sensor Ready',
      icon: Building2,
      color: 'amber'
    }
  ];

  return (
    <div>
      {/* View Header */}
      <div className="view-header">
        <div className="view-title-group">
          <h2>
            <Building2 size={28} color="var(--amber-400)" />
            <span>Construction Decision Support Dashboard</span>
          </h2>
          <p className="view-description">
            Real-time multimodal intelligence aggregating structural health, computer vision safety compliance, 
            algorithmic valuation, predictive weather holds, and schedule critical paths.
          </p>
        </div>

        <button className="btn btn-primary" onClick={onOpenAudit}>
          <FileCheck2 size={16} />
          <span>Generate Full Site Audit</span>
        </button>
      </div>

      {/* Top Level Metric KPIs */}
      <div className="metric-grid">
        <MetricCard
          label="Site Safety Score"
          value="88 / 100"
          subtext="PPE Compliance 92.5%"
          badgeText="ELEVATED"
          icon={ShieldAlert}
          colorVariant="amber"
        />
        <MetricCard
          label="Active Defect Severity"
          value="84 / 100"
          subtext="Pillar 14 Shear Defect"
          badgeText="CRITICAL"
          icon={Activity}
          colorVariant="rose"
        />
        <MetricCard
          label="Project Valuation"
          value="$91.42 M"
          subtext="185,000 sqft CBD Grade A+"
          badgeText="+14.2% 5-YR ROI"
          icon={DollarSign}
          colorVariant="emerald"
        />
        <MetricCard
          label="Schedule Timeline"
          value="465 Days"
          subtext="Critical Path Optimized"
          badgeText="10 MILESTONES"
          icon={CalendarDays}
          colorVariant="cyan"
        />
      </div>

      {/* Critical Active Alert Bar */}
      <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertTriangle size={24} color="var(--rose-danger)" />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--rose-danger)', fontSize: '0.95rem' }}>
              HIGH PRIORITY MULTIMODAL ENGINEERING ALERT
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Shear crack (width 3.85mm) on Level 2 Pillar 14 exceeds ACI 224R thresholds. Gust winds of 42 km/h forecast after 15:00 require tower crane shut-off.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-secondary btn-sm" onClick={() => onNavigate('cracks')}>
            Inspect Crack
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => onNavigate('weather')}>
            View Weather Window
          </button>
        </div>
      </div>

      {/* Platform Epics Matrix */}
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.2rem' }}>Multimodal Platform Intelligence Modules (9 Epics)</h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Strict JSON Data Contract Validated</span>
      </div>

      <div className="three-col-grid">
        {epics.map((epic) => {
          const Icon = epic.icon;
          return (
            <div 
              key={epic.id} 
              className="glass-panel" 
              style={{ padding: '24px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              onClick={() => onNavigate(epic.id)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div className={`metric-icon-wrap`} style={{ width: '42px', height: '42px' }}>
                    <Icon size={20} />
                  </div>
                  <span className={`badge badge-${epic.color}`}>{epic.badge}</span>
                </div>

                <h4 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>{epic.title}</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {epic.desc}
                </p>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--amber-400)' }}>
                <span>Launch Workspace</span>
                <ArrowRight size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
