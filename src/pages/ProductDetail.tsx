import React from 'react';

interface ProductDetailProps {
  language: string;
  productId: string | null;
  setCurrentPage: (page: string) => void;
}

export default function ProductDetail({ language, productId, setCurrentPage }: ProductDetailProps) {
  const productData: any = {
    zh: {
      polishing: {
        name: '全自动连续磨机',
        img: '/assets/polishing.jpg',
        paramImg: '/assets/parameter1.jpg',
      },
      gangsaw: {
        name: '大理石框架锯',
        img: '/assets/gangsaw.jpg',
        paramImg: '/assets/parameter2.jpg',
      },
      wiresaw: {
        name: '金刚石绳锯机',
        img: '/assets/wiresaw.jpg',
        paramImg: '/assets/parameter3.jpg',
      }
    },
    en: {
      polishing: {
        name: 'Automatic Polishing Machine',
        img: '/assets/polishing.jpg',
        paramImg: '/assets/parameter1.jpg',
      },
      gangsaw: {
        name: 'Diamond Marble Gang Saw',
        img: '/assets/gangsaw.jpg',
        paramImg: '/assets/parameter2.jpg',
      },
      wiresaw: {
        name: 'Diamond Wire Saw Machine',
        img: '/assets/wiresaw.jpg',
        paramImg: '/assets/parameter3.jpg',
      }
    }
  };

  const lang = language === 'zh' ? 'zh' : 'en';
  // 这里的 productId 对应 App.tsx 传过来的 id，若无则默认为第一个
  const activeId = productId || 'polishing';
  const product = productData[lang][activeId] || productData[lang]['polishing'];

  return (
    <div className="py-20 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* 返回按钮 */}
        <button 
          onClick={() => setCurrentPage('products')}
          className="mb-8 text-[#0B3C5D] flex items-center hover:text-[#00AEEF] transition-colors font-medium"
        >
          <span className="mr-2 text-xl">←</span> {language === 'zh' ? '返回产品列表' : 'Back to Products'}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          
          {/* 左侧：产品主图 */}
          <div className="overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-inner">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* 右侧：产品信息与参数图片 */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#0B3C5D] mb-6">{product.name}</h1>
            
            <div className="flex-1">
              <h2 className="text-xl font-semibold border-b border-gray-100 pb-2 text-[#0B3C5D] mb-4">
                {language === 'zh' ? '技术参数' : 'Technical Specifications'}
              </h2>
              
              {/* 参数图片显示区域 */}
              <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                <img 
                  src={product.paramImg} 
                  alt="Specifications" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* 询价按钮 */}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="mt-10 w-full bg-[#00AEEF] text-white py-4 rounded-xl font-bold hover:bg-[#1D70B8] transition-all shadow-md active:scale-[0.98]"
            >
              {language === 'zh' ? '立即询价' : 'Inquiry Now'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}