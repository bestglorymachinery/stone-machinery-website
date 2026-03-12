import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer({ setCurrentPage, language }: { setCurrentPage: (page: string) => void; language: string }) {
  const t = {
    zh: {
      brand: '百代兴石材机械',
      desc: '为全球石材加工企业提供高效、精准、耐用的机械设备解决方案。二十年品质，工业制造的可靠伙伴。',
      linksTitle: '快速链接',
      home: '首页',
      products: '产品中心',
      about: '关于我们',
      contact: '联系我们',
      contactTitle: '联系方式',
      address: '中国福建省泉州市晋江五里工业区',
      cta: '获取报价',
      rights: '百代兴石材机械制造有限公司 版权所有',
    },
    en: {
      brand: 'Best Glory MACHINERY',
      desc: 'Efficient, precise, durable machinery solutions for global stone processing. 20 years of quality—your reliable industrial partner.',
      linksTitle: 'Quick Links',
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      contact: 'Contact',
      contactTitle: 'Contact Info',
      address: 'Wuli Industrial Park,  Quanzhou, Fujian, China',
      cta: 'Get a Quote',
      rights: 'Jinggong Stone Machinery Manufacturing Co., Ltd. All rights reserved.',
    },
  };

  const text = language === 'zh' ? t.zh : t.en;

  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center h-10 sm:h-11 w-auto max-w-[160px] rounded-lg bg-white/10 overflow-hidden px-2">
                <img
                  src="/assets/logo.png"
                  alt={text.brand}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </span>
              <span className="font-bold text-lg text-white">{text.brand}</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-6">{text.desc}</p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#00AEEF] text-white hover:bg-[#1D70B8] transition-colors"
            >
              {text.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">{text.linksTitle}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => setCurrentPage('home')} className="text-white/80 hover:text-[#00AEEF] transition-colors">
                  {text.home}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="text-white/80 hover:text-[#00AEEF] transition-colors">
                  {text.products}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="text-white/80 hover:text-[#00AEEF] transition-colors">
                  {text.about}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="text-white/80 hover:text-[#00AEEF] transition-colors">
                  {text.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">{text.contactTitle}</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#00AEEF] shrink-0 mt-0.5" />
                <span className="break-words">{text.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#00AEEF] shrink-0" />
                <span>+86 139 22834755</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#00AEEF] shrink-0" />
                <span>micromotor.cn@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} {text.rights}</p>
        </div>
      </div>
    </footer>
  );
}
