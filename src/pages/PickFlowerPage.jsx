import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import './PickFlowerPage.css';

const FlowerWithStem = ({ imageSrc }) => {
  return (
    <div className="flower-item-container">
      <svg className="flower-stem-svg" viewBox="0 0 100 190" fill="none">
        <defs>
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f9a72" />
            <stop offset="50%" stopColor="#73c298" />
            <stop offset="100%" stopColor="#3d7d5c" />
          </linearGradient>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#68b087" />
            <stop offset="100%" stopColor="#3b7a57" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7acb9e" />
            <stop offset="100%" stopColor="#468c65" />
          </linearGradient>
        </defs>

        <path d="M50,65 Q48,120 50,180" stroke="url(#stemGrad)" strokeWidth="8" strokeLinecap="round" />
        <path d="M50,135 Q20,110 15,90 Q25,85 45,120 Z" fill="url(#leafGrad1)" />
        <path d="M50,130 Q28,105 20,95" stroke="#2d5e43" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
        <path d="M50,145 Q80,120 85,100 Q75,95 55,130 Z" fill="url(#leafGrad2)" />
        <path d="M50,140 Q72,115 80,105" stroke="#2d5e43" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      </svg>
      <img src={imageSrc} alt="Flower" className="flower-png-img" />
    </div>
  );
};

export default function PickFlowerPage({ data, lang, onNext }) {
  const [selectedFlowers, setSelectedFlowers] = useState([]);
  const MAX_FLOWERS = 8;
  const t = data.translations[lang] || data.translations['vi'];

  // Cấu hình hiệu ứng chạy chữ (typing & repeating)
  const textChars = Array.from(t.pickAngelText || "");
  
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Tốc độ chạy giữa các chữ
        repeat: Infinity,
        repeatDelay: 3 // Thời gian nghỉ trước khi lặp lại từ đầu
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15 }
    }
  };

  const flowerTypes = [
    { id: 'tulip', name: t.flowerNames.daisy, image: '/src/assets/Em/daisy.png' },
    { id: 'sunflower', name: t.flowerNames.tulip, image: '/src/assets/Em/hibiscus.png' },
    { id: 'rose', name: t.flowerNames.baby, image: '/src/assets/Em/morning-glory.png' },
    { id: 'daisy', name: t.flowerNames.rose, image: '/src/assets/Em/rose.png' },
    { id: 'baby', name: t.flowerNames.sunflower, image: '/src/assets/Em/sunflower.png' }
  ];

  const handleSelectFlower = (flower) => {
    if (selectedFlowers.length < MAX_FLOWERS) {
      const angles = [-26, -18, -9, -3, 3, 9, 18, 26];
      const offsets = [-75, -52, -28, -10, 10, 28, 52, 75];
      
      const idx = selectedFlowers.length;
      const newFlowerItem = {
        ...flower,
        instanceId: Date.now() + Math.random(),
        rotation: angles[idx % angles.length],
        offsetX: offsets[idx % offsets.length]
      };

      setSelectedFlowers([...selectedFlowers, newFlowerItem]);
    }
  };

  const floatingFlowers = [
    { symbol: '🌸', left: '5%', duration: '4.8s', delay: '0.2s', size: '1.5rem' },
    { symbol: '🌷', left: '15%', duration: '5.5s', delay: '1.0s', size: '1.7rem' },
    { symbol: '💖', left: '25%', duration: '4.2s', delay: '1.8s', size: '1.4rem' },
    { symbol: '✨', left: '35%', duration: '6.0s', delay: '0.5s', size: '1.6rem' },
    { symbol: '🌸', left: '45%', duration: '5.0s', delay: '1.4s', size: '1.8rem' },
    { symbol: '🌺', left: '55%', duration: '5.8s', delay: '0.8s', size: '1.5rem' },
    { symbol: '⭐', left: '65%', duration: '4.5s', delay: '2.1s', size: '1.3rem' },
    { symbol: '🌷', left: '75%', duration: '6.2s', delay: '0.3s', size: '1.7rem' },
    { symbol: '💖', left: '85%', duration: '4.9s', delay: '1.5s', size: '1.6rem' },
    { symbol: '🌸', left: '94%', duration: '5.3s', delay: '0.9s', size: '1.5rem' }
  ];

  return (
    <motion.div 
      className="pick-page-wrapper"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, filter: 'blur(8px)', scale: 0.98 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pick-floating-bg">
        {floatingFlowers.map((item, index) => (
          <span
            key={index}
            className="pick-floating-element"
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

      <div className="pick-header">
        <h1 className="pick-main-title">
          {t.pickMainTitleLine1}<br/>
          <span className="highlight-script">{t.pickMainTitleHighlight}</span>
        </h1>
        <p className="pick-sub-title">
          {t.pickSubTitle}
        </p>
      </div>

      <div className="pick-workspace">
        <div className="flower-picker-shelf">
          {/* DIV GIỚI THIỆU VỚI HIỆU ỨNG CHẠY TỪNG CHỮ LẶP LẠI VÔ HẠN */}
          <motion.div 
            className="angel-intro-card"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Heart size={16} className="angel-icon" fill="#ff4d6d" color="#ff4d6d" />
            <motion.p 
              className="angel-intro-text"
              key={lang} // Reset lại animation khi chuyển đổi ngôn ngữ
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {textChars.map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flower-list">
            {flowerTypes.map((item) => (
              <motion.div 
                key={item.id} 
                className="flower-card"
                whileTap={{ scale: 0.92 }}
                onClick={() => handleSelectFlower(item)}
              >
                <FlowerWithStem imageSrc={item.image} />
                <span className="flower-name">{item.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="shelf-line"></div>
        </div>

        <div className="bouquet-area">
          {selectedFlowers.length < MAX_FLOWERS ? (
            <p className="bouquet-status-text">
              {selectedFlowers.length === 0 
                ? t.bouquetWaiting 
                : t.bouquetSelected.replace('{count}', selectedFlowers.length).replace('{max}', MAX_FLOWERS)}
            </p>
          ) : (
            <motion.button 
              className="add-ribbon-btn"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNext(selectedFlowers)}
            >
              <Sparkles size={17} color="#d64550" /> {t.addRibbonBtn}
            </motion.button>
          )}

          <div className="bouquet-wrapper">
            <div className="flowers-inside-bouquet">
              <AnimatePresence>
                {selectedFlowers.map((f, idx) => (
                  <motion.div 
                    key={f.instanceId} 
                    className="placed-flower-item"
                    style={{
                      left: `calc(50% + ${f.offsetX}px - 38px)`,
                      bottom: `${25 + (idx % 2) * 12}px`, 
                      transformOrigin: 'bottom center',
                      zIndex: idx + 1
                    }}
                    initial={{ y: -100, scale: 0.2, opacity: 0 }}
                    animate={{ y: 0, scale: 0.98, opacity: 1, rotate: f.rotation }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                  >
                    <div style={{ width: 75, height: 150 }}>
                      <FlowerWithStem imageSrc={f.image} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <svg className="bouquet-paper-svg" viewBox="0 0 260 230" fill="none">
              <path d="M25,10 L235,10 L175,205 Q130,220 85,205 Z" fill="rgba(255, 255, 255, 0.45)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.5" />
              <path d="M25,10 Q130,30 235,10 L175,205 Z" fill="rgba(255, 255, 255, 0.25)" />
              <path d="M40,22 L220,22 L165,200 Q130,212 95,200 Z" fill="#fce4ec" opacity="0.9" />
              <path d="M20,32 L240,32 L170,210 Q130,222 90,210 Z" fill="#edd6bd" />
              <path d="M20,32 Q75,65 130,42 Q185,65 240,32 L170,210 Q130,222 90,210 Z" fill="#f7e8d5" opacity="0.95" />
              <path d="M55,38 L85,208" stroke="#dcbfa5" strokeWidth="1.5" opacity="0.6" />
              <path d="M205,38 L175,208" stroke="#dcbfa5" strokeWidth="1.5" opacity="0.6" />
              <path d="M130,42 L130,215" stroke="#e0c7ae" strokeWidth="1.2" opacity="0.4" strokeDasharray="3 3" />
              <path d="M35,20 Q80,5 125,25 Q90,70 45,120 Z" fill="rgba(255, 255, 255, 0.35)" />
            </svg>
          </div>

          <div className="bouquet-counter">
            {selectedFlowers.length} / {MAX_FLOWERS} BÔNG HOA
          </div>
        </div>
      </div>

      <div className="pick-bottom-quote">
        {t.pickBottomQuote}
      </div>
    </motion.div>
  );
}