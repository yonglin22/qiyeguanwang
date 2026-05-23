import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Lightbulb, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const team = [
  { name: '张明远', role: 'CEO & 联合创始人', desc: '前 GrowingIO 产品VP，10年数据分析领域经验' },
  { name: '李思琪', role: 'CTO & 联合创始人', desc: '前字节跳动算法工程师，NLP 与数据智能专家' },
  { name: '王浩然', role: '设计负责人', desc: '前 Apple 交互设计师，专注企业级产品体验' },
  { name: '陈雨桐', role: '客户成功负责人', desc: '前 SaaS 企业客户总监，服务过 200+ B2B 客户' },
];

const values = [
  { icon: Target, title: '客户成功优先', desc: '我们衡量自己的唯一标准，是客户能否真正用数据做决策' },
  { icon: Lightbulb, title: 'AI 原生思维', desc: '不做 AI 贴片，从底层架构开始为 AI 而设计' },
  { icon: Heart, title: '极致简单', desc: '数据分析不应该有学习门槛，每个人都能与数据对话' },
  { icon: Shield, title: '安全可信', desc: '数据安全是底线，绝不妥协于合规与隐私保护' },
];

const milestones = [
  { year: '2023', event: 'CodexFlow 创立，获得天使轮融资' },
  { year: '2024 Q1', event: '产品上线，首批 50 家企业客户' },
  { year: '2024 Q3', event: '完成 A 轮融资，客户突破 200 家' },
  { year: '2025', event: '推出 AI 归因分析引擎，客户超 500 家' },
  { year: '2026', event: '发布预测分析模块，进军海外市场' },
];

export default function About() {
  return (
    <>
      <SEO
        title="CodexFlow 关于我们 - 让每家企业都能用数据做决策"
        description="创始团队来自数据分析与SaaS领域，致力于让中小企业像头部公司一样数据驱动。80%时间做决策，20%时间整理数据。"
      />
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50/40 to-white">
        <div className="container-app">
          <div className="max-w-3xl">
            <h1 className="t-h1 mb-6">
              我们做 CodexFlow，<br />
              <span className="gradient-text">因为亲眼见过团队被数据拖慢</span>
            </h1>
            <p className="t-body-lg">
              创始团队来自数据分析和 SaaS 领域，见过太多团队花 80% 时间整理数据，只有 20% 时间做决策。
              CodexFlow 要把这个比例反过来。
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding">
        <div className="container-app">
          <h2 className="t-h2 text-center mb-12">我们信什么</h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="card-hover group">
                <div className="w-10 h-10 bg-primary-50 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <v.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="t-h4 mb-2">{v.title}</h3>
                <p className="t-body-md">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-app">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="t-h2 mb-4">做这件事的人</h2>
            <p className="t-body-md">
              来自字节跳动、Apple、GrowingIO 等企业，深耕数据智能与企业服务
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <div key={person.name} className="card text-center">
                <div className="w-16 h-16 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-semibold text-neutral-500">
                    {person.name[0]}
                  </span>
                </div>
                <h3 className="t-h4 mb-0.5">{person.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{person.role}</p>
                <p className="t-body-sm text-neutral-500">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="section-padding">
        <div className="container-app">
          <div className="max-w-3xl mx-auto">
            <h2 className="t-h2 text-center mb-12">我们的进展</h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        i === milestones.length - 1 ? 'bg-primary-600' : 'bg-neutral-300'
                      }`}
                    />
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-neutral-200" />}
                  </div>
                  <div className="pb-2">
                    <div className="text-sm font-semibold text-primary-600 mb-1">{m.year}</div>
                    <p className="text-neutral-700">{m.event}</p>
                  </div>
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
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              一起把比例反过来
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              80% 时间做决策，20% 时间整理数据。这才是数据分析该有的样子。
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
