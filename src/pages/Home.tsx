import { Link } from 'react-router-dom';
import { ArrowRight, Brain, LineChart, MessageSquareText, Zap, BarChart3 } from 'lucide-react';
import DashboardMockup from '../components/DashboardMockup';
import LogoWall from '../components/LogoWall';
import SEO from '../components/SEO';

const features = [
  {
    icon: LineChart,
    pain: '数据散落在5个系统？',
    title: '多源数据自动汇总',
    desc: '广告、销售、CRM一键连通，告别手工拼表',
  },
  {
    icon: Brain,
    pain: '报表看完了还是不知道该干嘛？',
    title: 'AI 诊断 + 行动建议',
    desc: '不只告诉你"跌了"，还告诉你"为什么"和"该做什么"',
  },
  {
    icon: MessageSquareText,
    pain: '周报月报每周手动做？',
    title: '看板与报告自动生成',
    desc: '日报周报自动推送，经营状况随时掌握',
  },
  {
    icon: Zap,
    pain: '出问题了才发现？',
    title: '智能告警',
    desc: '异常波动秒级识别并推送，不漏掉任何关键信号',
  },
];

const stats = [
  { value: '1天', label: '从签约到数据跑通' },
  { value: '<3秒', label: '异常发现到推送' },
  { value: '70%', label: '报表整理时间减少' },
  { value: '500+', label: '企业客户' },
];

const steps = [
  { num: '01', title: '接入数据源', desc: '连接现有系统，1天完成' },
  { num: '02', title: 'AI 配置看板', desc: '智能识别指标，无需手动拖拽' },
  { num: '03', title: '收到第一条建议', desc: 'AI 主动推送洞察和行动建议' },
];

const faqs = [
  { q: '接入需要多长时间？', a: '标准数据源1天内完成，SaaS工具约2小时。' },
  { q: '需要数据分析师吗？', a: '不需要。AI 直接输出建议动作，业务人员就能用。' },
  { q: '数据安全吗？', a: '传输加密，存储加密，支持私有化部署。已通过 SOC 2 Type II 认证。' },
  { q: '能接入哪些系统？', a: '广告平台、CRM、ERP、Excel等20+数据源，持续增加中。' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="CodexFlow - AI数据看板与经营分析助手，让数据替你说话"
        description="自动汇总广告、销售、CRM数据，AI诊断异常并给出行动建议。最快1天接入，预约产品演示即可体验。"
      />
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 via-white to-white pointer-events-none" />
        <div className="container-app relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-xl">
              <div className="badge mb-6 animate-fade-in">
                <Zap className="w-3.5 h-3.5" />
                最快1天接入，7天试用
              </div>
              <h1 className="t-h1 mb-6 animate-fade-in animate-delay-100">
                不再猜数据
                <br />
                <span className="gradient-text">每周多做3个关键决策</span>
              </h1>
              <p className="t-body-lg mb-8 animate-fade-in animate-delay-200">
                把广告、销售、CRM数据自动汇总成一张经营驾驶舱，
                AI 直接告诉你为什么波动、下一步该做什么。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
                <Link to="demo" className="btn-primary group">
                  预约产品演示
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link to="features" className="btn-secondary">
                  查看功能详情
                </Link>
              </div>
            </div>
            <div className="animate-fade-in animate-delay-200">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo Wall ── */}
      <LogoWall />

      {/* ── Features (Pain-driven) ── */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="t-h2 mb-4">
              不是更多报表，是更明确的行动
            </h2>
            <p className="t-body-lg">
              你不缺数据，缺的是从数据到决策的最短路径。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-hover group">
                <p className="text-sm font-medium text-accent-600 mb-3">{f.pain}</p>
                <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <f.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="t-h4 mb-2">{f.title}</h3>
                <p className="t-body-md">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-neutral-50">
        <div className="container-app">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold tracking-tight mb-1">{s.value}</div>
                <div className="t-body-sm text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section-padding">
        <div className="container-app">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="t-h2 mb-4">三步上手</h2>
            <p className="t-body-lg">不需要部署，不需要培训，1天开始用。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((item) => (
              <div key={item.num} className="text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-neutral-200 mb-4">{item.num}</div>
                <h3 className="t-h4 mb-2">{item.title}</h3>
                <p className="t-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-app">
          <div className="max-w-3xl mx-auto">
            <h2 className="t-h2 text-center mb-12">常见问题</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-md p-6 border border-neutral-200">
                  <h3 className="t-h4 mb-2">{faq.q}</h3>
                  <p className="t-body-md">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-app text-center">
          <div className="max-w-2xl mx-auto">
            <BarChart3 className="w-10 h-10 text-primary-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              今天开始，让数据替你说话
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              1天接入，7天试用，不需要信用卡。
            </p>
            <Link to="demo" className="btn-inverted group">
              预约产品演示
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
