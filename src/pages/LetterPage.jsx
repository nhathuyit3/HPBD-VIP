import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './LetterPage.css';

export default function LetterPage({ data, lang, onClose }) {
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  
  // Lấy dữ liệu đa ngôn ngữ từ translations, fallback về data.letter nếu có
  const t = (data.translations && data.translations[lang] && data.translations[lang].letter) 
    ? data.translations[lang].letter 
    : (data.letter || {});

  const photoSrc = data.letter?.photo || "/src/assets/Em/em_letter.jpg";

  return (
    <motion.div 
      className="letter-page-wrapper"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Khung Bức thư Glassmorphism */}
      <div className="letter-card">
        {/* Nút đóng X góc phải */}
        {onClose && (
          <button className="letter-close-btn" onClick={onClose} title="Đóng thư">
            <X size={18} />
          </button>
        )}

        {/* Tiêu đề */}
        <h1 className="letter-title">{t.title || "Gửi em,"}</h1>

        {/* Thân bức thư */}
        <div className="letter-body-container">
          <div className="letter-text-content">
            {t.paragraphs && t.paragraphs.map((p, idx) => (
              <p key={idx} className="letter-paragraph">
                {p}
              </p>
            ))}
          </div>

          {/* Khung ảnh Polaroid (Click để phóng to) */}
          {photoSrc && (
            <motion.div 
              className="letter-photo-wrapper"
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsPhotoZoomed(true)}
              title="Nhấn để phóng to ảnh"
            >
              <img 
                src={photoSrc} 
                alt="Kỷ niệm" 
                className="letter-polaroid-img" 
              />
              <p className="letter-photo-caption">{t.photoCaption}</p>
            </motion.div>
          )}
        </div>

        {/* Chữ ký tay dưới cùng */}
        <div className="letter-signature-container">
          <span className="letter-signature">{t.signature}</span>
        </div>
      </div>

      {/* MODAL PHÓNG TO ẢNH LIGHTBOX */}
      <AnimatePresence>
        {isPhotoZoomed && (
          <motion.div 
            className="photo-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoZoomed(false)}
          >
            <motion.div 
              className="photo-modal-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Tránh bấm vào khung ảnh bị tắt modal
            >
              <button 
                className="letter-close-btn" 
                style={{ top: 12, right: 12 }} 
                onClick={() => setIsPhotoZoomed(false)}
              >
                <X size={18} />
              </button>
              <img 
                src={photoSrc} 
                alt="Kỷ niệm phóng to" 
                className="photo-modal-img" 
                onClick={() => setIsPhotoZoomed(false)} 
                style={{ cursor: 'pointer' }}
              />
              <p className="photo-modal-caption">{t.photoCaption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}