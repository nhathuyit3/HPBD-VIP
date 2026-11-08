import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PasscodePage from './pages/PasscodePage';
import ShopPage from './pages/ShopPage';
import PickFlowerPage from './pages/PickFlowerPage';
import RibbonPage from './pages/RibbonPage';
import LetterPage from './pages/LetterPage';
import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState('passcode'); 
  const [userBouquet, setUserBouquet] = useState([]);
  const [lang, setLang] = useState('vi'); // Mặc định tiếng Việt, có thể đổi sang 'ko'

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Không tải được data.json: HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((d) => setData(d))
      .catch((err) => {
        console.error("Lỗi tải data.json:", err);
      });
  }, []);

  if (!data) {
    return (
      <div style={{ padding: 30, textAlign: 'center' }}>
        Đang tải dữ liệu...
      </div>
    );
  }

  const toggleLanguage = () => {
    setLang(prev => prev === 'vi' ? 'ko' : 'vi');
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* NÚT CHUYỂN ĐỔI NGÔN NGỮ VIỆT - HÀN */}
      <motion.button 
        onClick={toggleLanguage}
        style={{
          position: 'fixed',
          top: '20px',
          right: '25px',
          zIndex: 999,
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: blur(8),
          border: '1.5px solid #ff758f',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#d64550',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        {lang === 'vi' ? '🇰🇷 한국어' : '🇻🇳 Tiếng Việt'}
      </motion.button>

      <AnimatePresence mode="wait">
        {currentPage === 'passcode' && (
          <PasscodePage 
            key="passcode"
            data={data} 
            lang={lang}
            onSuccess={() => setCurrentPage('shop')} 
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage 
            key="shop"
            data={data} 
            lang={lang}
            onNext={() => setCurrentPage('pickFlowers')} 
          />
        )}

        {currentPage === 'pickFlowers' && (
          <PickFlowerPage 
            key="pickFlowers"
            data={data} 
            lang={lang}
            onNext={(flowers) => {
              setUserBouquet(flowers);
              setCurrentPage('ribbon');
            }} 
          />
        )}

        {currentPage === 'ribbon' && (
          <RibbonPage 
            key="ribbon"
            data={data}
            lang={lang}
            userBouquet={userBouquet}
            onNext={() => setCurrentPage('letter')} 
          />
        )}

        {currentPage === 'letter' && (
          <LetterPage 
            key="letter"
            data={data}
            lang={lang}
            onClose={() => setCurrentPage('ribbon')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}