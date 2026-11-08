import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import './PasscodePage.css';

export default function PasscodePage({ data, lang, onSuccess }) {
  const [pin, setPin] = useState('');
  const [isError, setIsError] = useState(false);

  // Lấy tiêu đề passcode theo ngôn ngữ (mặc định là 'vi' nếu không tìm thấy)
  const passcodeTitle = (data.passcodeTitle && typeof data.passcodeTitle === 'object')
    ? (data.passcodeTitle[lang] || data.passcodeTitle['vi'])
    : data.passcodeTitle;

  const handleKeyPress = (val) => {
    if (isError) setIsError(false);

    if (val === 'C') {
      setPin('');
    } else if (val === '✓') {
      if (pin === data.password) {
        onSuccess();
      } else {
        setIsError(true);
        setTimeout(() => setPin(''), 500);
      }
    } else {
      if (pin.length < 4) {
        const newPin = pin + val;
        setPin(newPin);
        if (newPin.length === 4 && newPin === data.password) {
          setTimeout(() => onSuccess(), 250);
        }
      }
    }
  };

  const bgItems = [
    { symbol: '⭐', left: '5%', duration: '5.2s', delay: '0.2s', size: '1.8rem' },
    { symbol: '🌸', left: '15%', duration: '6.1s', delay: '1.5s', size: '1.6rem' },
    { symbol: '✨', left: '25%', duration: '4.5s', delay: '1.2s', size: '1.9rem' },
    { symbol: '💖', left: '38%', duration: '5.0s', delay: '1.8s', size: '1.7rem' },
    { symbol: '🌟', left: '52%', duration: '6.5s', delay: '0.9s', size: '2.0rem' },
    { symbol: '🌷', left: '65%', duration: '5.5s', delay: '0.4s', size: '1.7rem' },
    { symbol: '✨', left: '78%', duration: '4.6s', delay: '2.5s', size: '1.9rem' },
    { symbol: '🌸', left: '88%', duration: '5.9s', delay: '1.6s', size: '1.8rem' }
  ];

  return (
    <motion.div 
      className="passcode-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
      transition={{ duration: 0.5 }}
    >
      <div className="floating-bg-elements">
        {bgItems.map((item, index) => (
          <span
            key={index}
            className="floating-item"
            style={{
              left: item.left,
              animationDuration: item.duration,
              animationDelay: item.delay,
              fontSize: item.size,
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>

      <motion.div 
        className="passcode-card"
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="profile-hero">
          <div className="avatar-wrapper-pro">
            <img src={data.avatar} alt="Avatar" className="avatar-img-pro" />
          </div>
          {/* Render tiêu đề đã chọn đúng ngôn ngữ */}
          <h2 className="passcode-title-pro">{passcodeTitle}</h2>
        </div>

        <motion.div 
          className="dots-container"
          animate={isError ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={`dot ${pin.length > index ? 'filled' : ''} ${isError ? 'error' : ''}`}
            />
          ))}
        </motion.div>

        <div className="keypad-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '✓'].map((key, idx) => (
            <motion.button
              key={idx}
              className="key-button"
              whileTap={{ scale: 0.92 }}
              onClick={() => handleKeyPress(key)}
            >
              {key === 'C' ? <X size={24} color="#e63946" /> : key === '✓' ? <Check size={24} color="#2a9d8f" /> : key}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}