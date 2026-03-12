import { ArrowRight } from 'lucide-react';

interface ProductsProps {
  language: string;
  onProductClick: (id: string) => void;
}

export default function Products({ language, onProductClick }: ProductsProps) {
  const t = {
    zh: {
      title: '产品中心',
      subtitle: '三大核心石材加工设备，助力高效生产。',
      btnSpecs: '规格参数',
      products: [
        {
          id: 'polishing',
          name: '全自动大理石磨机',
          category: '磨机',
          desc: '多功能自动抛光，效果如镜。适用于各种石材板材高效抛光。',
          img: '/assets/polishing.jpg',
        },
        {
          id: 'gangsaw',
          name: '大理石框架锯',
          category: '框架锯',
          desc: '高效稳定切割，让每一块大理石价值最大化。',
          img: '/assets/gangsaw.jpg',
        },
        {
          id: 'wiresaw',
          name: '金刚石线锯',
          category: '线锯',
          desc: '智能切割巨型石材或特殊异型，安全、精准且高效。',
          img: '/assets/wiresaw.jpg',
        },
      ],
    },
    en: {
      title: 'Products',
      subtitle: 'Three Core Stone Processing Machines—Enhance Production Efficiency.',
      btnSpecs: 'Specifications',
      products: [
        {
          id: 'polishing',
          name: 'Automatic Polishing Line',
          category: 'Polishing',
          desc: 'Versatile automatic surface finishing for brilliant mirror-grade results on any stone slabs.',
          img: '/assets/polishing.jpg',
        },
        {
          id: 'gangsaw',
          name: 'Diamond Marble Gang Saw',
          category: 'Gang Saw',
          desc: 'Efficient and stable cutting to maximize the value of every marble block.',
          img: '/assets/gangsaw.jpg',
        },
        {
          id: 'wiresaw',
          name: 'Diamond Wire Saw',
          category: 'Wire Saw',
          desc: 'Smart, safe, and precise cutting for large stone blocks or special shapes.',
          img: '/assets/wiresaw.jpg',
        },
      ],
    },
  };

  const text = language === 'zh' ? t.zh : t.en;

  return (
    <div className="py-16 lg:py-24 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0B3C5D] mb-4">{text.title}</h1>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#0B3C5D]/75 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-16 max-w-6xl w-full px-4">
          {text.products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-[#0B3C5D]/10 shadow-md flex flex-col hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-[#0B3C5D]/5">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">{product.name}</h3>
                <p className="text-[#0B3C5D]/70 text-sm mb-6 flex-1">{product.desc}</p>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // 防止点击穿透或被父元素干扰
                    console.log("产品列表点击了 ID:", product.id);
                    onProductClick(product.id);
                  }}
                  className="inline-flex items-center gap-2 text-[#00AEEF] font-semibold text-sm hover:text-[#1D70B8] transition-colors cursor-pointer"
                >
                  {text.btnSpecs} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}