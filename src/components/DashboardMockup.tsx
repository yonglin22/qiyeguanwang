import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const metrics = [
  { label: '月度营收', value: '¥1,284,500', change: '+12.5%', up: true, icon: DollarSign },
  { label: '活跃用户', value: '23,847', change: '+8.2%', up: true, icon: Users },
  { label: '转化率', value: '4.28%', change: '+0.6%', up: true, icon: ShoppingCart },
  { label: '获客成本', value: '¥42.5', change: '-3.1%', up: false, icon: TrendingUp },
];

const chartBars = [40, 55, 45, 65, 80, 72, 90, 85, 95, 88, 78, 92];

export default function DashboardMockup() {
  return (
    <div className="relative animate-float">
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-elevated border border-neutral-200/60 overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
          </div>
          <span className="text-xs text-neutral-400 font-medium">CodexFlow Dashboard</span>
          <div className="w-16" />
        </div>

        <div className="p-5 lg:p-8">
          {/* AI Query */}
          <div className="bg-primary-50 rounded-md px-4 py-3 mb-5 flex items-center gap-3">
            <div className="w-6 h-6 bg-primary-600 rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-bold">AI</span>
            </div>
            <p className="text-sm text-primary-900 font-medium">
              "上月营收增长的主要驱动因素是什么？"
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-3 mb-5">
            {metrics.map((m) => (
              <div key={m.label} className="bg-neutral-50 rounded-md p-3 lg:p-4">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <m.icon className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-[11px] text-neutral-500">{m.label}</span>
                </div>
                <div className="text-base lg:text-lg font-semibold tracking-tight">{m.value}</div>
                <div
                  className={`flex items-center gap-0.5 text-[11px] font-semibold mt-0.5 ${
                    m.up ? 'text-secondary-600' : 'text-error-600'
                  }`}
                >
                  {m.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {m.change}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-neutral-50 rounded-md p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-neutral-700">营收趋势</span>
              <span className="text-[11px] text-neutral-400">近12个月</span>
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {chartBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-primary-600/15 transition-all duration-500"
                  style={{ height: `${h}%` }}
                >
                  <div
                    className="w-full rounded-t-sm bg-primary-600"
                    style={{ height: `${55 + Math.sin(i * 0.8) * 30}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -inset-4 bg-primary-500/5 rounded-2xl -z-10 blur-2xl" />
    </div>
  );
}
