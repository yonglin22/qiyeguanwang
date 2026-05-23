import { Lightbulb, ArrowUpRight, Clock, User, CheckCircle2, AlertTriangle } from 'lucide-react';

const suggestions = [
  {
    priority: 'high' as const,
    title: '调整抖音渠道预算分配',
    detail: '将抖音投放预算从 ¥45,000/月 降至 ¥30,000/月，转移至微信渠道',
    impact: '预计 CAC 降低 18%',
    confidence: '87%',
    owner: '张明远',
  },
  {
    priority: 'medium' as const,
    title: '优化移动端落地页',
    detail: '移动端跳出率 45% 高于均值，建议 A/B 测试新落地页方案',
    impact: '预计转化率回升 5%',
    confidence: '72%',
    owner: '李思琪',
  },
];

const recentActions = [
  { title: '增加微信渠道投放', status: 'done' as const, date: '5/18' },
  { title: '优化搜索关键词', status: 'doing' as const, date: '5/20' },
  { title: '调整落地页 CTA', status: 'todo' as const, date: '5/22' },
];

export default function MockupActionSuggestion() {
  return (
    <div className="bg-white rounded-xl border border-neutral-200/60 shadow-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        </div>
        <span className="text-[11px] text-neutral-400 font-medium">行动建议</span>
        <div className="w-12" />
      </div>

      <div className="p-5 lg:p-6 space-y-5">
        {/* Suggestion Cards */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-accent-500" />
            <span className="text-xs font-semibold text-neutral-700">AI 建议</span>
            <span className="text-[9px] bg-accent-50 text-accent-600 px-1.5 py-0.5 rounded-full font-medium">2 条新建议</span>
          </div>
          <div className="space-y-3">
            {suggestions.map((s) => (
              <div key={s.title} className={`rounded-lg p-4 border ${
                s.priority === 'high' ? 'border-accent-200 bg-accent-50/50' : 'border-neutral-200 bg-neutral-50/50'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                      s.priority === 'high' ? 'bg-accent-100 text-accent-700' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {s.priority === 'high' ? '高优先' : '中优先'}
                    </span>
                    <h4 className="text-xs font-semibold text-neutral-800">{s.title}</h4>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                </div>
                <p className="text-[11px] text-neutral-600 mb-2.5">{s.detail}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-secondary-700 bg-secondary-50 px-2 py-0.5 rounded-full">
                    <ArrowUpRight className="w-2.5 h-2.5" />
                    {s.impact}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                    置信度 {s.confidence}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-neutral-500">
                    <User className="w-2.5 h-2.5" />
                    {s.owner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Tracker */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-semibold text-neutral-700">执行跟踪</span>
          </div>
          <div className="space-y-2">
            {recentActions.map((a) => (
              <div key={a.title} className="flex items-center gap-3 bg-neutral-50 rounded-md px-3 py-2">
                <div className="flex-shrink-0">
                  {a.status === 'done' ? (
                    <CheckCircle2 className="w-4 h-4 text-secondary-500" />
                  ) : a.status === 'doing' ? (
                    <div className="w-4 h-4 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" style={{ animationDuration: '1s' }} />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-neutral-400" />
                  )}
                </div>
                <span className={`text-[11px] flex-1 ${
                  a.status === 'done' ? 'text-neutral-500 line-through' :
                  a.status === 'doing' ? 'text-neutral-800 font-medium' :
                  'text-neutral-600'
                }`}>{a.title}</span>
                <span className="text-[10px] text-neutral-400">{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
