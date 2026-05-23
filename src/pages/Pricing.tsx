import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const plans = [
  {
    name: '入门版',
    price: '299',
    unit: '/月',
    desc: '适合10人以下初创团队',
    cta: '申请试用',
    features: [
      '3 个数据源接入',
      '5 个看板',
      'AI 问答（500次/月）',
      '基础告警',
      '邮件支持',
    ],
  },
  {
    name: '专业版',
    price: '899',
    unit: '/月',
    desc: '适合10-100人成长团队',
    cta: '预约产品演示',
    popular: true,
    features: [
      '10 个数据源接入',
      '无限看板',
      'AI 问答（无限次）',
      'AI 诊断 + 行动建议',
      '智能告警 + 预测',
      '团队协作（10人）',
      '专属客户成功经理',
    ],
  },
  {
    name: '企业版',
    price: '定制',
    unit: '',
    desc: '适合100人以上企业，私有化部署',
    cta: '联系销售',
    features: [
      '无限数据源',
      '无限看板',
      'AI 全功能',
      '私有化部署',
      'SSO + 细粒度权限',
      'SLA 99.99%',
      '定制开发支持',
      '7x24 专属支持',
    ],
  },
];

const faqs = [
  {
    q: '接入需要多长时间？',
    a: '标准数据源1天内完成，SaaS工具约2小时。我们有专属客户成功经理全程协助。',
  },
  {
    q: '可以免费试用吗？',
    a: '入门版和专业版均提供7天试用，无需绑定信用卡。试用期间可体验全部功能。',
  },
  {
    q: '如何升级方案？',
    a: '控制台一键升级，数据与看板自动迁移，无停机时间。升级后按差价补费。',
  },
  {
    q: '团队人数超过限制怎么办？',
    a: '专业版支持额外购买席位（¥59/人/月）。企业版无人数限制。',
  },
  {
    q: '数据如何保证安全？',
    a: '所有数据传输使用 TLS 1.3 加密，存储使用 AES-256 加密。已通过 SOC 2 Type II 认证，企业版支持私有化部署。',
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Pricing() {
  return (
    <>
      <SEO
        title="CodexFlow 定价 - 从¥299/月起，支持预约产品演示"
        description="透明定价无隐藏费用。入门版¥299/月，专业版¥899/月，企业版定制。支持预约产品演示与7天试用，随时升级。"
      />

      <section className="min-h-screen flex items-center bg-apple-bg section-padding">
        <div className="container-app text-center">
          <motion.div {...reveal} className="max-w-4xl mx-auto">
            <h1 className="t-h1 text-apple-ink mb-6">选一个适合你团队的方案</h1>
            <p className="t-body-lg max-w-2xl mx-auto mb-10">
              从 10 人团队到企业级组织，统一的数据决策能力一步到位。
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link to="demo" className="btn-primary">
                预约产品演示
              </Link>
              <Link to="features" className="btn-secondary inline-flex items-center gap-1">
                查看功能详情
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-apple-bgAlt section-padding">
        <div className="container-app">
          <motion.div {...reveal}>
            <div className="text-center mb-16">
              <h2 className="t-h2 text-apple-ink mb-4">定价一目了然</h2>
              <p className="t-body-lg">按团队阶段选择，后续可随时升级。</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className="h-full bg-[#ededf0] rounded-2xl p-8 lg:p-10 flex flex-col"
                >
                  <div className="mb-8">
                    <p className="text-sm text-apple-subtext mb-3">{plan.popular ? '推荐方案' : '标准方案'}</p>
                    <h3 className="text-3xl font-semibold tracking-[-0.02em] text-apple-ink mb-2">{plan.name}</h3>
                    <p className="text-base text-apple-subtext mb-6">{plan.desc}</p>
                    <div className="flex items-end gap-1">
                      <span className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-apple-ink">
                        {plan.price !== '定制' && '¥'}
                        {plan.price}
                      </span>
                      <span className="text-base text-apple-subtext mb-2">{plan.unit}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-apple-subtext">
                        <Check className="w-4 h-4 mt-1 text-apple-ink flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="demo" className="btn-primary w-full justify-center">
                    {plan.cta}
                  </Link>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-apple-bg section-padding">
        <div className="container-app">
          <motion.div {...reveal} className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="t-h2 text-apple-ink mb-4">常见问题</h2>
              <p className="t-body-lg">你关心的上线、试用和安全问题都在这里。</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <article key={faq.q} className="bg-apple-bgAlt rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-apple-ink mb-3">{faq.q}</h3>
                  <p className="text-base text-apple-subtext leading-relaxed">{faq.a}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
