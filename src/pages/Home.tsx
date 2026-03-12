import { ArrowRight, ShieldCheck, Zap, Wrench } from 'lucide-react';

export default function Home({ setCurrentPage, language }: { setCurrentPage: (page: string) => void, language: string }) {
  const t = {
    zh: {
      heroTitle1: '意大利技术',
      heroTitle2: '致力打造中国最好的石材机械',
      heroDesc: '专业研发制造高端石材切割、抛光及异型加工设备。以工业级标准，为全球 B2B 客户提供可靠装备。',
      btnExplore: '探索产品',
      btnQuote: '获取报价',
      featuresTitle: '为什么选择百代兴机械',
      f1Title: '高效生产力',
      f1Desc: '最新自动化控制系统，提升加工速度，降低人工干预，确保 24 小时稳定运行。',
      f2Title: '最优品质',
      f2Desc: '核心部件进口品牌，床身高低温处理，十年不变形，经久耐用。',
      f3Title: '全方位售后',
      f3Desc: '安装、调试、培训及终身技术支持，全球服务网络快速响应。',
    },
    en: {
      heroTitle1: 'ITALIAN CRAFTSMANSHIP, CHINESE INTELLIGENCE',
      heroTitle2: 'REFINING STONE PROCESSING STANDARDS',
      heroDesc: 'R&D and manufacturing of high-end stone cutting, polishing, and profiling equipment. Industrial-grade solutions for global B2B partners.',
      btnExplore: 'Explore Products',
      btnQuote: 'Get a Quote',
      featuresTitle: 'Why Choose Best Glory',
      f1Title: 'High Productivity',
      f1Desc: 'Latest automation control for higher throughput, less manual intervention, 24/7 stable operation.',
      f2Title: 'Military-Grade Quality',
      f2Desc: 'Premium components, heat-treated beds, no deformation over decades.',
      f3Title: 'Full Support',
      f3Desc: 'Installation, training, and lifetime technical support with a global service network.',
    },
  };

  const text = language === 'zh' ? t.zh : t.en;
  const isEn = language !== 'zh';

  return (
    <div>
      {/* Hero with overlay */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/homepagebackground.jpg"
            alt="Industrial Machinery"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/90 via-[#0B3C5D]/75 to-[#1D70B8]/70"
            aria-hidden
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-widest mb-4">
            {language === 'zh' ? '工业级石材装备' : 'Industrial Stone Equipment'}
          </p>
          <h1
            className={`font-bold text-white leading-tight tracking-tight mb-6 ${
              isEn ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl' : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'
            }`}
          >
            {text.heroTitle1}<br />
            <span className="text-[#00AEEF]">{text.heroTitle2}</span>
          </h1>
          <p className={`text-white/90 max-w-2xl mx-auto mb-10 ${isEn ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>
            {text.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('products')}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-[#00AEEF] text-white shadow-lg hover:bg-[#1D70B8] hover:shadow-xl transition-all duration-200 btn-cta-hover ${isEn ? 'text-sm sm:text-base' : 'text-base'}`}
            >
              {text.btnExplore}
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0B3C5D] transition-all duration-200 ${isEn ? 'text-sm sm:text-base' : 'text-base'}`}
            >
              {text.btnQuote}
            </button>
          </div>
        </div>
      </section>

      {/* Features - gradient blue section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B3C5D] mb-3">{text.featuresTitle}</h2>
            <div className="w-16 h-1 bg-[#00AEEF] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-white rounded-xl p-8 shadow-md border border-[#0B3C5D]/5 card-hover">
              <div className="w-14 h-14 rounded-xl bg-[#0B3C5D] flex items-center justify-center mb-6 text-[#00AEEF]">
                <Zap className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">{text.f1Title}</h3>
              <p className="text-[#0B3C5D]/70 leading-relaxed">{text.f1Desc}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-[#0B3C5D]/5 card-hover">
              <div className="w-14 h-14 rounded-xl bg-[#0B3C5D] flex items-center justify-center mb-6 text-[#00AEEF]">
                <ShieldCheck className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">{text.f2Title}</h3>
              <p className="text-[#0B3C5D]/70 leading-relaxed">{text.f2Desc}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-[#0B3C5D]/5 card-hover">
              <div className="w-14 h-14 rounded-xl bg-[#0B3C5D] flex items-center justify-center mb-6 text-[#00AEEF]">
                <Wrench className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">{text.f3Title}</h3>
              <p className="text-[#0B3C5D]/70 leading-relaxed">{text.f3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
