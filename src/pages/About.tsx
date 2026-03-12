export default function About({ language }: { language: string }) {
  const products = [
    {
      zh: {
        name: '全自动大理石磨机',
        desc: '多功能自动抛光，效果如镜。',
      },
      en: {
        name: 'Automatic Polishing Line',
        desc: 'Efficient surface finishing, mirror-grade results.',
      },
      img: '/assets/polishing.jpg',
    },
    {
      zh: {
        name: '大理石框架锯',
        desc: '高效稳定切割，让每一块大理石价值最大化。',
      },
      en: {
        name: 'Diamond Marble Gang Saw',
        desc: 'Efficient and stable cutting to maximize the value of every marble block.',
      },
      img: '/assets/gangsaw.jpg',
    },
  ];

  const t = {
    zh: {
      title: '关于我们',
      heading: '二十年专注，铸就石材机械领军品牌',
      p1: '福建百代兴机械发展有限公司是由意大利百年石材机械品牌特玛富高利在中国投资创立的中意合资企业。',
      p2: '公司依托意大利方提供的全球领先石材机械核心技术，代表着行业技术发展前沿，专注于高端石材机械设备的研发与制造。核心产品包括大理石框架锯、磨机，花岗岩切割机、磨机，以及人造石整线生产加工设备。',
      p3: '以技术创新与品质卓越为根基，公司深度洞察客户与市场需求，持续迭代技术、研发新品、拓展全球市场，致力于树立高端石材机械品牌形象，为全球客户提供优质设备与专业服务。',
      stats: [
        { value: '20+', label: '行业经验 (年)' },
        { value: '80+', label: '出口国家' },
        { value: '50+', label: '技术专利' },
        { value: '10000+', label: '全球客户' },
      ],
      productsTitle: '核心产品线',
      products: products.map(({ zh, img }) => ({
        name: zh.name,
        desc: zh.desc,
        img,
      })),
      btnMore: '了解更多',
    },
    en: {
      title: 'About Us',
      heading: '20 Years of Focus, Building a Leading Brand in Stone Machinery',
      p1: 'Fujian Baidaixing Machinery Development Co., Ltd. is a Sino-Italian joint venture invested and established in China by Tonelli Ferrari, a century-old Italian brand of stone machinery.',
      p2: "Backed by the world's leading core technologies in stone machinery provided by the Italian side, the company represents the forefront of industry technological development and specializes in R&D and manufacturing of high-end stone machinery. Its core products include marble frame saws and grinding machines, granite cutting machines and grinding machines, as well as complete production and processing lines for engineered stone.",
      p3: 'Rooted in technological innovation and superior quality, the company deeply insights into customer and market demands, continuously iterates technologies, develops new products, and expands global markets. It is committed to building a high-end stone machinery brand image and providing global customers with high-quality equipment and professional services.',
      stats: [
        { value: '20+', label: 'Years Experience' },
        { value: '80+', label: 'Export Countries' },
        { value: '50+', label: 'Technical Patents' },
        { value: '10000+', label: 'Global Customers' },
      ],
      productsTitle: 'Core Product Line',
      products: products.map(({ en, img }) => ({
        name: en.name,
        desc: en.desc,
        img,
      })),
      btnMore: 'Learn More',
    },
  };

  const text = language === 'zh' ? t.zh : t.en;

  return (
    <div className="min-h-screen">
      {/* 顶部深蓝色背景介绍区域 */}
      <section className="py-12 lg:py-24 bg-gradient-to-br from-[#0B3C5D] via-[#0B3C5D] to-[#1D70B8] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页面主标题 */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">{text.title}</h1>
            <div className="w-16 h-1 bg-[#00AEEF] mx-auto rounded-full" />
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            
            {/* 左侧内容区：文字介绍 + 数据面板 */}
            <div className="flex flex-col justify-center space-y-8 order-1">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white/95 leading-tight">
                  {text.heading}
                </h2>
                <div className="space-y-4 text-white/90 text-base lg:text-lg leading-relaxed">
                  <p>{text.p1}</p>
                  <p>{text.p2}</p>
                  {'p3' in text && <p>{text.p3}</p>}
                </div>
              </div>
  
              {/* 行业数据卡片 - 在移动端紧随文字之后 */}
              <div className="grid grid-cols-2 gap-4">
                {text.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 border-l-4 border-l-[#00AEEF] hover:bg-white/20 transition-all"
                  >
                    <div className="text-2xl lg:text-3xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-white/80 font-medium mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
  
              {/* 次要工厂图片 - 仅在桌面端显示在左侧下方，增加细节感 */}
              <div className="hidden lg:flex gap-4">
                <img
                  src="/assets/factory1.jpg"
                  alt="Workshop"
                  className="flex-1 h-32 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-white/10"
                />
                <img
                  src="/assets/factory2.jpg"
                  alt="Production"
                  className="flex-1 h-32 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-white/10"
                />
              </div>
            </div>
  
            {/* 右侧/中间大图区：factory3 */}
            <div className="order-2 lg:order-2">
              <div className="relative h-full min-h-[300px] lg:min-h-[600px] group">
                {/* 图片背后的装饰性发光效果 */}
                <div className="absolute -inset-2 bg-[#00AEEF]/20 rounded-2xl blur-2xl group-hover:bg-[#00AEEF]/30 transition-all duration-700"></div>
                
                <img
                  src="/assets/factory3.jpg"
                  alt="Main Factory Facility"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/20 z-10"
                  loading="lazy"
                />
                
                {/* 图片上的浮动标签 */}
                <div className="absolute bottom-6 right-6 z-20 bg-[#0B3C5D]/90 backdrop-blur-md px-5 py-3 rounded-lg border border-white/20 shadow-xl hidden sm:block">
                  <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest mb-1">Global Standard</p>
                  <p className="text-white text-sm font-semibold">现代化生产车间</p>
                </div>
              </div>
            </div>
            
            {/* 移动端专用：次要小图在最后显示 */}
            <div className="grid grid-cols-2 gap-3 order-3 lg:hidden">
              <img src="/assets/factory1.jpg" className="h-24 w-full object-cover rounded-lg border border-white/10" alt="factory" />
              <img src="/assets/factory2.jpg" className="h-24 w-full object-cover rounded-lg border border-white/10" alt="factory" />
            </div>
  
          </div>
        </div>
      </section>
  
      {/* 下方核心产品线部分 */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-4xl font-bold text-[#0B3C5D] mb-12 text-center">
            {text.productsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {text.products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#0B3C5D] text-xl mb-3">{product.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
                  </div>
                  <button className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00AEEF] hover:bg-[#1D70B8] transition-colors shadow-sm">
                    {text.btnMore}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  
  );
}