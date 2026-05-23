import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

const footerLinks = {
  product: [
    { label: '功能', href: 'features' },
    { label: '定价', href: 'pricing' },
    { label: '预约产品演示', href: 'demo' },
  ],
  company: [
    { label: '关于我们', href: 'about' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-app py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">CodexFlow</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              让经营数据自动说人话，帮团队更快做对决策。
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="t-overline text-neutral-300 mb-4">产品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="t-overline text-neutral-300 mb-4">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="t-overline text-neutral-300 mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="text-sm text-neutral-400">1016020816@qq.com</li>
              <li className="text-sm text-neutral-400">18268346784</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">&copy; 2026 CodexFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-sm text-neutral-500 hover:text-neutral-300 cursor-pointer transition-colors">
              隐私政策
            </span>
            <span className="text-sm text-neutral-500 hover:text-neutral-300 cursor-pointer transition-colors">
              服务条款
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
