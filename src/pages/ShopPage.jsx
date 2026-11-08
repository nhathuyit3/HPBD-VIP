import { useState } from 'react';
import { motion } from 'framer-motion';
import './ShopPage.css';

export default function ShopPage({ data, lang, onNext }) {
  const [isClicked, setIsClicked] = useState(false);
  const t = data.translations[lang] || data.translations['vi'];

  const handleImageClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onNext();
    }, 600);
  };

  const floatingFlowers = [
    { symbol: '🌸', left: '4%', duration: '4.5s', delay: '0.1s', size: '1.5rem' },
    { symbol: '🌷', left: '12%', duration: '6.0s', delay: '1.2s', size: '1.7rem' },
    { symbol: '💖', left: '20%', duration: '5.2s', delay: '0.5s', size: '1.4rem' },
    { symbol: '✨', left: '28%', duration: '4.8s', delay: '2.0s', size: '1.6rem' },
    { symbol: '🌸', left: '35%', duration: '5.8s', delay: '0.8s', size: '1.8rem' },
    { symbol: '🌺', left: '44%', duration: '6.5s', delay: '1.5s', size: '1.5rem' },
    { symbol: '⭐', left: '52%', duration: '4.2s', delay: '0.3s', size: '1.3rem' },
    { symbol: '🌷', left: '60%', duration: '5.5s', delay: '1.8s', size: '1.7rem' },
    { symbol: '💖', left: '68%', duration: '4.9s', delay: '0.9s', size: '1.6rem' },
    { symbol: '🌸', left: '76%', duration: '6.2s', delay: '2.2s', size: '1.5rem' },
    { symbol: '✨', left: '84%', duration: '5.1s', delay: '0.4s', size: '1.8rem' },
    { symbol: '🌷', left: '92%', duration: '5.7s', delay: '1.1s', size: '1.4rem' }
  ];

  return (
    <motion.div 
      className="shop-page-wrapper"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="shop-floating-bg">
        {floatingFlowers.map((item, index) => (
          <span
            key={index}
            className="shop-floating-element"
            style={{
              left: item.left,
              animationDuration: item.duration,
              animationDelay: item.delay,
              fontSize: item.size
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>

      <div className="shop-content-container">
        <div className="shop-text-side">
          <p className="shop-sub-header">{t.shopSubTitle}</p>
          <h1 className="shop-main-title">
            {t.shopTitleLine1}<br/>
            {t.shopTitleLine2}<br/>
            <span className="highlight-text">{t.shopTitleHighlight}</span><br/>
            {t.shopTitleLine3}
          </h1>
          <p className="shop-footer-note">{t.shopFooterNote}</p>
        </div>

        <div className="shop-image-side" onClick={handleImageClick}>
          <motion.img 
            src={`${import.meta.env.BASE_URL}${data.shopImage}`}
            alt="Tiệm hoa" 
            className="shop-transparent-img"
            animate={isClicked ? { scale: 1.08, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            title="Chạm vào tiệm hoa để tiếp tục"
          />
        </div>
      </div>
    </motion.div>
  );
}