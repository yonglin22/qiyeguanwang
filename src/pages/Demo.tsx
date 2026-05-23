import { useState, type FormEvent } from 'react';
import { CheckCircle2, ArrowRight, Calendar, Clock, Video } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Demo() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    team_size: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    if (!supabase) {
      setErrorMsg('站点未配置数据服务，请先联系管理员：1016020816@qq.com');
      setFormState('error');
      return;
    }

    try {
      const { error } = await supabase.from('demo_requests').insert([
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          team_size: formData.team_size,
        },
      ]);

      if (error) throw error;
      setFormState('success');
    } catch {
      setErrorMsg('提交失败，请稍后重试或直接联系我们：1016020816@qq.com');
      setFormState('error');
    }
  };

  const seo = (
    <SEO
      title="CodexFlow 预约产品演示 - 1天接入，快速体验"
      description="填写信息即可预约 CodexFlow 产品演示。最快1天接入，支持7天试用，不需要信用卡。"
    />
  );

  if (formState === 'success') {
    return (
      <>
      {seo}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container-app">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
              <CheckCircle2 className="w-8 h-8 text-success-600" />
            </div>
            <h1 className="t-h2 mb-4 animate-fade-in animate-delay-100">体验申请已收到</h1>
            <p className="t-body-lg animate-fade-in animate-delay-200">
              我们的团队将在1个工作日内联系你，帮你安排产品体验。
            </p>
          </div>
        </div>
      </section>
      </>
    );
  }

  return (
    <>
      {seo}
      {/* ── Hero ── */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-primary-50/40 to-white">
        <div className="container-app">
          <div className="max-w-2xl">
            <h1 className="t-h1 mb-4">1天接入，立即预约产品演示</h1>
            <p className="t-body-lg">
              填写信息，我们帮你安排一次产品体验。不需要信用卡。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-app">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="input-label">
                    姓名
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                    placeholder="你的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="input-label">
                    公司名称
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="input"
                    placeholder="你的公司名称"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="input-label">
                    工作邮箱
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="team_size" className="input-label">
                    团队规模
                  </label>
                  <select
                    id="team_size"
                    required
                    value={formData.team_size}
                    onChange={(e) => setFormData({ ...formData, team_size: e.target.value })}
                    className="input appearance-none bg-white"
                  >
                    <option value="">请选择</option>
                    <option value="10-50">10-50人</option>
                    <option value="50-100">50-100人</option>
                    <option value="100-200">100-200人</option>
                    <option value="200-500">200-500人</option>
                    <option value="500+">500人以上</option>
                  </select>
                </div>

                {formState === 'error' && errorMsg && (
                  <div className="bg-error-50 text-error-600 text-sm px-4 py-3 rounded-md" role="alert">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="btn-primary w-full group"
                >
                  {formState === 'submitting' ? '提交中...' : '预约产品演示'}
                  {formState !== 'submitting' && (
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  )}
                </button>
              </form>
            </div>

            {/* ── What to expect ── */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <h3 className="t-h4 mb-6">接下来会发生什么</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-md flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">1. 确认时间</h4>
                      <p className="t-body-sm text-neutral-500">1个工作日内联系你，确认体验时间</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-md flex items-center justify-center flex-shrink-0">
                      <Video className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">2. 在线体验</h4>
                      <p className="t-body-sm text-neutral-500">30分钟，用你的真实数据演示</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-md flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">3. 开启7天试用</h4>
                      <p className="t-body-sm text-neutral-500">体验后开通试用，不需要信用卡</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-neutral-50 rounded-md">
                  <p className="t-body-sm text-neutral-600">
                    <span className="font-semibold">隐私承诺：</span>
                    你的信息仅用于安排体验，不会与第三方共享。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
