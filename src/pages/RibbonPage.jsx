import { motion } from 'framer-motion';
import './RibbonPage.css';

const FlowerWithStem = ({ imageSrc }) => {
  return (
    <div style={{ position: 'relative', width: 80, height: 160, display: 'flex', justifyContent: 'center' }}>
      <svg style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }} viewBox="0 0 100 190" fill="none">
        <defs>
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f9a72" />
            <stop offset="50%" stopColor="#73c298" />
            <stop offset="100%" stopColor="#3d7d5c" />
          </linearGradient>
        </defs>
        <path d="M50,65 Q48,120 50,180" stroke="url(#stemGrad)" strokeWidth="8" strokeLinecap="round" />
        <path d="M50,135 Q20,110 15,90 Q25,85 45,120 Z" fill="#68b087" />
        <path d="M50,145 Q80,120 85,100 Q75,95 55,130 Z" fill="#7acb9e" />
      </svg>
      <img 
        src={imageSrc} 
        alt="Flower" 
        style={{ 
          position: 'absolute', 
          top: 4, 
          width: 58, 
          height: 58, 
          objectFit: 'contain', 
          filter: 'drop-shadow(0 6px 10px rgba(0, 0, 0, 0.18))' 
        }} 
      />
    </div>
  );
};

const BirthdayCake3D = ({ onClick }) => {
  return (
    <motion.div 
      className="birthday-cake-3d-wrapper"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      title="Chạm vào bánh sinh nhật để mở thư"
    >
      <svg className="cake-svg-3d" viewBox="0 0 280 280" fill="none">
        <defs>
          <path id="textArcPath" d="M 35,95 A 110,50 0 0,1 245,95" />
          <linearGradient id="candleFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffb300" />
            <stop offset="50%" stopColor="#ff7043" />
            <stop offset="100%" stopColor="#ffca28" />
          </linearGradient>
          <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe259" />
            <stop offset="50%" stopColor="#ffa751" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
          <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff7aa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff9800" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g>
          <text fill="rgba(0,0,0,0.4)" fontSize="19" fontFamily="Playfair Display, serif" fontWeight="700" letterSpacing="4">
            <textPath href="#textArcPath" startOffset="50%" textAnchor="middle">
              ★ HAPPY BIRTHDAY ★
            </textPath>
          </text>
          <text fill="url(#goldTextGrad)" stroke="#fff59d" strokeWidth="0.6" fontSize="19" fontFamily="Playfair Display, serif" fontWeight="700" letterSpacing="4">
            <textPath href="#textArcPath" startOffset="50%" textAnchor="middle">
              ★ HAPPY BIRTHDAY ★
            </textPath>
          </text>
        </g>

        <motion.g
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 45,65 L 48,72 L 55,75 L 48,78 L 45,85 L 42,78 L 35,75 L 42,72 Z" fill="#ffd700" />
          <path d="M 235,65 L 238,72 L 245,75 L 238,78 L 235,85 L 232,78 L 225,75 L 232,72 Z" fill="#ffd700" />
          <path d="M 140,30 L 142,35 L 147,37 L 142,39 L 140,44 L 138,39 L 133,37 L 138,35 Z" fill="#ffffff" />
        </motion.g>

        <path d="M55,160 L55,230 Q140,258 225,230 L225,160 Z" fill="#fce4b8" />
        <ellipse cx="140" cy="160" rx="85" ry="24" fill="#f7d497" />
        <path d="M55,185 L55,215 Q140,243 225,215 L225,185 Q140,213 55,185 Z" fill="#d81b60" opacity="0.88" />

        <path d="M55,125 L55,160 Q140,188 225,160 L225,125 Z" fill="#ec407a" />
        <ellipse cx="140" cy="125" rx="85" ry="24" fill="#f06292" />
        <path d="M55,125 Q70,165 82,145 Q94,172 106,148 Q118,175 130,148 Q142,178 154,150 Q166,170 178,148 Q190,168 202,145 Q214,162 225,125 Q140,150 55,125 Z" fill="#ec407a" />

        <rect x="94" y="75" width="14" height="52" rx="4" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
        <line x1="101" y1="75" x2="101" y2="67" stroke="#616161" strokeWidth="2" strokeLinecap="round" />

        <rect x="133" y="68" width="14" height="58" rx="4" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
        <line x1="140" y1="68" x2="140" y2="60" stroke="#616161" strokeWidth="2" strokeLinecap="round" />

        <rect x="172" y="75" width="14" height="52" rx="4" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
        <line x1="179" y1="75" x2="179" y2="67" stroke="#616161" strokeWidth="2" strokeLinecap="round" />

        <motion.g
          animate={{ scale: [1, 1.12, 0.95, 1.08, 1], rotate: [-2, 2, -1, 2, -2] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "101px 67px" }}
        >
          <circle cx="101" cy="48" r="15" fill="url(#glowEffect)" />
          <path d="M101,36 Q110,50 101,67 Q92,50 101,36 Z" fill="url(#candleFlameGrad)" />
          <path d="M101,45 Q106,54 101,62 Q96,54 101,45 Z" fill="#ffeb3b" />
        </motion.g>

        <motion.g
          animate={{ scale: [1.05, 0.94, 1.1, 0.98, 1.05], rotate: [1, -2, 2, -1, 1] }}
          transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "140px 60px" }}
        >
          <circle cx="140" cy="40" r="18" fill="url(#glowEffect)" />
          <path d="M140,27 Q150,42 140,60 Q130,42 140,27 Z" fill="url(#candleFlameGrad)" />
          <path d="M140,36 Q146,48 140,55 Q134,48 140,36 Z" fill="#ffeb3b" />
        </motion.g>

        <motion.g
          animate={{ scale: [0.96, 1.08, 1, 1.12, 0.96], rotate: [-1, 2, -2, 1, -1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "179px 67px" }}
        >
          <circle cx="179" cy="48" r="15" fill="url(#glowEffect)" />
          <path d="M179,36 Q188,50 179,67 Q170,50 179,36 Z" fill="url(#candleFlameGrad)" />
          <path d="M179,45 Q184,54 179,62 Q174,54 179,45 Z" fill="#ffeb3b" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default function RibbonPage({ data, lang, userBouquet, onNext }) {
  const handleOpenLetter = () => {
    onNext();
  };

  const t = data.translations[lang] || data.translations['vi'];

  const floatingElements = [
    { symbol: '✨', left: '5%', duration: '4.8s', delay: '0.2s', size: '1.4rem' },
    { symbol: '🌸', left: '15%', duration: '5.5s', delay: '1.0s', size: '1.6rem' },
    { symbol: '💖', left: '28%', duration: '4.2s', delay: '1.8s', size: '1.3rem' },
    { symbol: '⭐', left: '72%', duration: '5.0s', delay: '0.5s', size: '1.5rem' },
    { symbol: '🌸', left: '85%', duration: '6.0s', delay: '1.2s', size: '1.7rem' },
    { symbol: '✨', left: '94%', duration: '4.6s', delay: '0.8s', size: '1.4rem' }
  ];

  return (
    <motion.div 
      className="ribbon-page-wrapper"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      <div className="ribbon-floating-bg">
        {floatingElements.map((item, index) => (
          <span
            key={index}
            className="ribbon-floating-element"
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

      <div className="ribbon-header">
        <h1 className="ribbon-main-title">
          {lang === 'ko' ? '꽃다발 하나,' : 'Một bó hoa,'}<br/>
          {lang === 'ko' ? '가장 특별한 사람에게.' : 'cho người '} <span className="highlight-script">{lang === 'ko' ? '가장 소중한 당신에게.' : 'đặc biệt nhất hôm nay.'}</span>
        </h1>
      </div>

      <div className="ribbon-center-workspace">
        <div className="ribbon-bouquet-container">
          <div className="full-bouquet-wrapper">
            <div className="full-flowers-inside">
              {userBouquet.map((f, idx) => (
                <motion.div 
                  key={f.instanceId || idx}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${f.offsetX || (idx - 3.5) * 20}px - 40px)`,
                    bottom: `${25 + (idx % 2) * 12}px`,
                    transformOrigin: 'bottom center',
                    transform: `rotate(${f.rotation || (idx - 3.5) * 8}deg) scale(0.98)`,
                    zIndex: idx + 1
                  }}
                >
                  <FlowerWithStem imageSrc={f.image} />
                </motion.div>
              ))}
            </div>

            <svg className="ribbon-paper-svg" viewBox="0 0 260 230" fill="none">
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

            <div className="bow-wrapper">
              <svg viewBox="0 0 120 80" fill="none">
                <path d="M45,45 Q30,70 20,85" stroke="#ff4d6d" strokeWidth="7" strokeLinecap="round" />
                <path d="M75,45 Q90,70 100,85" stroke="#ff4d6d" strokeWidth="7" strokeLinecap="round" />
                <path d="M60,40 Q20,15 25,45 Q35,55 60,40 Z" fill="#ff4d6d" />
                <path d="M60,40 Q100,15 95,45 Q85,55 60,40 Z" fill="#ff4d6d" />
                <ellipse cx="60" cy="40" rx="9" ry="8" fill="#ff758f" />
              </svg>
            </div>

            <motion.div 
              className="bouquet-card-tag"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenLetter}
            >
              <span className="card-tag-text">{lang === 'ko' ? '비크에게 ♡' : 'Gửi em Bích Khuê ♡'}</span>
              <button className="card-tag-btn">{lang === 'ko' ? '편지 열기' : 'MỞ THIỆP'}</button>
            </motion.div>
          </div>
        </div>

        <BirthdayCake3D onClick={handleOpenLetter} />
      </div>

      <div className="ribbon-bottom-section" onClick={handleOpenLetter}>
        <h2 className="ribbon-quote">
          {lang === 'ko' ? '“오늘 가장 특별한 사람”' : '“LÀ NGƯỜI CON GÁI ĐẶC BIỆT NHẤT HÔM NAY”'}
        </h2>
      </div>
    </motion.div>
  );
}