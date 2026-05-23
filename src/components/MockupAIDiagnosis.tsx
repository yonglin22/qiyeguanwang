import { TrendingDown, ArrowDownRight, GitBranch } from 'lucide-react';

const anomalyAlert = {
  metric: '转化率',
  value: '3.21%',
  change: '-12.5%',
  period: '较上周',
};

const attributionPath = [
  { step: '转化率下降', detail: '3.21% → 下降12.5%', level: 0 },
  { step: '移动端访问量下降', detail: '环比 -18.3%', level: 1 },
  { step: '抖音渠道 CPM 上涨', detail: 'CPM ¥45 → ¥62', level: 2 },
  { step: '竞品同期加大投放', detail: '素材量增长 40%', level: 3 },
];

const relatedMetrics = [
  { label: '移动端占比', value: '62%', trend: 'down' as const },
  { label: '抖音获客成本', value: '¥58.3', trend: 'up' as const },
  { label: '页面停留时长', value: '1.8min', trend: 'down' as const },
  { label: '跳出率', value: '45.2%', trend: 'up' as const },
];

export default function MockupAIDiagnosis() {
  return (
    <div className="bg-white rounded-xl border border-neutral-200/60 shadow-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        </div>
        <span className="text-[11px] text-neutral-400 font-medium">AI 归因诊断</span>
        <div className="w-12" />
      </div>

      <div className="p-5 lg:p-6 space-y-5">
        {/* Anomaly Alert */}
        <div className="bg-error-50 rounded-lg p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-error-100 rounded-md flex items-center justify-center flex-shrink-0">
            <TrendingDown className="w-4 h-4 text-error-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold text-error-800">异常检测</span>
              <span className="text-[9px] bg-error-100 text-error-600 px-1.5 py-0.5 rounded-full font-medium">高优先级</span>
            </div>
            <p className="text-[11px] text-error-700">
              {anomalyAlert.metric}降至{anomalyAlert.value}
              <span className="font-semibold"> {anomalyAlert.change}</span> {anomalyAlert.period}
            </p>
          </div>
        </div>

        {/* Attribution Path */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-semibold text-neutral-700">归因路径</span>
          </div>
          <div className="space-y-0">
            {attributionPath.map((item, i) => (
              <div key={item.step} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                    i === 0 ? 'bg-error-100 text-error-600' :
                    i === attributionPath.length - 1 ? 'bg-accent-100 text-accent-700' :
                    'bg-primary-50 text-primary-600'
                  }`}>
                    {i + 1}
                  </div>
                  {i < attributionPath.length - 1 && (
                    <div className="w-px h-5 bg-neutral-200" />
                  )}
                </div>
                <div className="pb-3">
                  <p className="text-[11px] font-semibold text-neutral-800">{item.step}</p>
                  <p className="text-[10px] text-neutral-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Metrics */}
        <div>
          <span className="text-xs font-semibold text-neutral-700 mb-2 block">关联指标</span>
          <div className="grid grid-cols-2 gap-2">
            {relatedMetrics.map((m) => (
              <div key={m.label} className="bg-neutral-50 rounded-md p-2.5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-neutral-500">{m.label}</p>
                  <p className="text-xs font-semibold">{m.value}</p>
                </div>
                <ArrowDownRight className={`w-3.5 h-3.5 ${
                  m.trend === 'down' ? 'text-error-500 rotate-0' : 'text-secondary-500 rotate-180'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
