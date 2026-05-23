import { Link } from 'react-router-dom';
import {
  Brain,
  MessageSquareText,
  LineChart,
  Zap,
  Shield,
  Database,
  Users,
  ArrowRight,
  BarChart3,
  Sparkles,
  Target,
} from 'lucide-react';
import SEO from '../components/SEO';
import MockupDataAggregation from '../components/MockupDataAggregation';
import MockupAIDiagnosis from '../components/MockupAIDiagnosis';
import MockupActionSuggestion from '../components/MockupActionSuggestion';

const coreFeatures = [
  {
    icon: LineChart,
    title: '多源数据自动汇总',
    subtitle: '数据散落？一键收齐',
    desc: '广告平台、CRM、ERP、Excel，自动汇总到一张看板。不再手工拼表，不再等IT排期。',
    highlights: ['20+ 数据源一键连接', '数据自动同步', '统一口径消除歧义'],
    mockup: <MockupDataAggregation />,
  },
  {
    icon: Brain,
    title: 'AI 诊断异常',
    subtitle: '数据异常？AI 先帮你查',
    desc: '自动追踪波动根源，从渠道、产品、用户行为交叉归因。秒级定位原因，不用逐层下钻。',
    highlights: ['多维度交叉归因', '异常波动自动追踪', '归因路径可视化'],
    mockup: <MockupAIDiagnosis />,
  },
  {
    icon: MessageSquareText,
    title: '行动建议',
    subtitle: '知道原因后呢？直接告诉你该做什么',
    desc: '不只说"转化率跌了12%"，还说"建议调整XX渠道预算，预计回升8%"。AI 输出的是动作，不是数字。',
    highlights: ['建议可直接执行', '量化预期收益', '一键分配到负责人'],
    mockup: <MockupActionSuggestion />,
  },
];

const moreFeatures = [
  { icon: MessageSquareText, title: '日报周报自动生成', desc: '报告自动推送至企微/飞书/邮件，经营状况随时掌握，会议前不再临时抱佛脚' },
  { icon: Database, title: '多源数据接入', desc: 'MySQL、PostgreSQL、Excel、飞书、企业微信等 20+ 数据源一键连接' },
  { icon: Users, title: '团队协作与权限', desc: '看板共享、评论批注、细粒度权限控制，适合团队协作场景' },
  { icon: Zap, title: '智能告警', desc: '基于 AI 的异常检测，关键指标偏离时秒级推送至企微/飞书/邮件' },
  { icon: Shield, title: '数据安全合规', desc: 'SOC 2 Type II 认证，数据加密传输与存储，支持私有化部署' },
  { icon: Target, title: '目标追踪', desc: 'OKR 对齐，目标进度实时可视化，自动识别风险项' },
  { icon: Sparkles, title: '预测分析', desc: '基于历史数据的趋势预测，提前预判业务走向' },
  { icon: BarChart3, title: '业务视角模板', desc: '电商、SaaS、零售等行业模板开箱即用，不需要高门槛数据能力' },
];

export default function Features() {
  return (
    <>
      <SEO
        title="CodexFlow 功能 - AI诊断、行动建议、自动报告"
        description="多源数据自动汇总，AI诊断异常原因，直接输出行动建议，日报周报自动生成。1天接入，业务人员就能用。"
      />
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50/40 to-white">
        <div className="container-app">
          <div className="max-w-3xl">
            <h1 className="t-h1 mb-6">
              不是更多报表<br />
              <span className="gradient-text">是更明确的行动</span>
            </h1>
            <p className="t-body-lg">
              CodexFlow 不给你更多数据，而是给你更明确的行动方向。
              从数据到决策，最短路径。
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="section-padding">
        <div className="container-app">
          <div className="space-y-20 lg:space-y-28">
            {coreFeatures.map((f, i) => (
              <div
                key={f.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center mb-5">
                    <f.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <p className="t-overline text-primary-600 mb-2">{f.subtitle}</p>
                  <h2 className="t-h2 mb-4">{f.title}</h2>
                  <p className="t-body-lg mb-6">{f.desc}</p>
                  <ul className="space-y-3">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-neutral-700">
                        <div className="w-5 h-5 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                        </div>
                        <span className="text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative z-10">
                    {f.mockup}
                  </div>
                  <div className="absolute -inset-4 bg-primary-500/5 rounded-2xl -z-10 blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Features ── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-app">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="t-h2 mb-4">还有这些</h2>
            <p className="t-body-lg">从数据接入到安全合规，覆盖企业经营分析全链路</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreFeatures.map((f) => (
              <div key={f.title} className="card-hover group">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center mb-4 shadow-soft group-hover:bg-primary-50 transition-colors">
                  <f.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="t-h4 mb-2">{f.title}</h3>
                <p className="t-body-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding">
        <div className="container-app text-center">
          <div className="max-w-2xl mx-auto">
            <BarChart3 className="w-10 h-10 text-primary-600 mx-auto mb-6" />
            <h2 className="t-h2 mb-4">1天接入，亲眼看看效果</h2>
            <p className="t-body-lg mb-8">预约产品演示后可开启7天试用，不需要信用卡</p>
            <Link to="demo" className="btn-primary group">
              预约产品演示
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
