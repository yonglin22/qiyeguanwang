import { ArrowRight, Database, FileSpreadsheet, ShoppingBag, Users } from 'lucide-react';

const sources = [
  { name: '广告平台', icon: ShoppingBag, status: '已连接', records: '128,340', color: 'primary' as const },
  { name: 'CRM 系统', icon: Users, status: '已连接', records: '45,210', color: 'secondary' as const },
  { name: 'ERP 系统', icon: Database, status: '已连接', records: '89,600', color: 'accent' as const },
  { name: 'Excel 报表', icon: FileSpreadsheet, status: '同步中', records: '12,800', color: 'primary' as const },
];

const unifiedMetrics = [
  { label: '总营收', value: '¥3,247,800', change: '+15.3%', up: true },
  { label: '获客成本', value: '¥38.5', change: '-8.2%', up: true },
  { label: '转化率', value: '5.72%', change: '+1.1%', up: true },
  { label: '活跃客户', value: '2,847', change: '+12.4%', up: true },
];

export default function MockupDataAggregation() {
  return (
    <div className="bg-white rounded-xl border border-neutral-200/60 shadow-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        </div>
        <span className="text-[11px] text-neutral-400 font-medium">数据源管理</span>
        <div className="w-12" />
      </div>

      <div className="p-5 lg:p-6 space-y-5">
        {/* Data Sources */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-neutral-700">数据源</span>
            <span className="text-[10px] text-primary-600 font-medium">4 / 10 已使用</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {sources.map((s) => (
              <div key={s.name} className="bg-neutral-50 rounded-lg p-3 flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${
                  s.color === 'primary' ? 'bg-primary-50' : s.color === 'secondary' ? 'bg-secondary-50' : 'bg-accent-50'
                }`}>
                  <s.icon className={`w-4 h-4 ${
                    s.color === 'primary' ? 'text-primary-600' : s.color === 'secondary' ? 'text-secondary-600' : 'text-accent-600'
                  }`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold text-neutral-800 truncate">{s.name}</p>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.status === '已连接' ? 'bg-secondary-500' : 'bg-accent-500'}`} />
                    <span className="text-[9px] text-neutral-500">{s.status} · {s.records}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sync indicator */}
        <div className="flex items-center justify-center gap-2 py-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          <div className="flex items-center gap-1.5 bg-primary-50 rounded-full px-3 py-1">
            <ArrowRight className="w-3 h-3 text-primary-500" />
            <span className="text-[10px] font-semibold text-primary-600">自动同步 · 每5分钟</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        </div>

        {/* Unified Metrics */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-neutral-700">统一看板</span>
            <span className="text-[10px] text-neutral-400">实时</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {unifiedMetrics.map((m) => (
              <div key={m.label} className="bg-neutral-50 rounded-lg p-3">
                <p className="text-[10px] text-neutral-500 mb-0.5">{m.label}</p>
                <p className="text-sm font-semibold tracking-tight">{m.value}</p>
                <span className={`text-[10px] font-semibold ${m.up ? 'text-secondary-600' : 'text-error-600'}`}>
                  {m.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
