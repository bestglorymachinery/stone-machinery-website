import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('zh');
  // 记录当前查看的产品 ID
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  // 这里的 handleProductClick 是跳转的核心
  const handleProductClick = (id: string) => {
    console.log("正在跳转至产品详情，ID:", id); // 调试用
    setActiveProductId(id);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'instant' }); // 立即回到顶部
  };

  // 监听页面变化，确保每次切换都回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} language={language} />;
      case 'products':
        return <Products language={language} onProductClick={handleProductClick} />;
      case 'about':
        return <About language={language} />;
      case 'contact':
        return <Contact language={language} />;
      case 'product-detail':
        return (
          <ProductDetail
            language={language}
            productId={activeProductId}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return <Home setCurrentPage={setCurrentPage} language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#0B3C5D] bg-[#F5F7FA] antialiased">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
      />
      
      {/* 使用 key 强制 React 在页面切换时销毁旧组件并创建新组件 */}
      <main className="flex-grow" key={currentPage}>
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} language={language} />
    </div>
  );
}