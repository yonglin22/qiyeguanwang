import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Menu, X } from 'lucide-react';

const navLinks = [
  { label: '功能', href: 'features' },
  { label: '定价', href: 'pricing' },
  { label: '关于', href: 'about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-app">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center group-hover:bg-primary-700 transition-colors">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">CodexFlow</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="demo" className="btn-primary-sm">
              预约产品演示
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200">
          <div className="container-app py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2.5 px-2 text-sm font-medium rounded-md transition-colors min-h-[44px] flex items-center ${
                  location.pathname === link.href
                    ? 'text-neutral-900 bg-neutral-50'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="demo" className="btn-primary-sm w-full justify-center">
                预约产品演示
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
