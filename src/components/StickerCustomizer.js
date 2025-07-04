import React, { useState } from 'react';
import { stickerTemplates } from '../data/dessertData';
import '../styles/StickerCustomizer.css';

const StickerCustomizer = ({ selectedDesserts, boxSize, dessertTotal, onBack }) => {
  const [selectedSticker, setSelectedSticker] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [customText, setCustomText] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [showFinalPreview, setShowFinalPreview] = useState(false);

  const calculateFinalTotal = () => {
    const stickerPrice = selectedSticker ? selectedSticker.price : 0;
    return dessertTotal + stickerPrice;
  };

  const handleComplete = () => {
    if (selectedSticker && customText.trim()) {
      setShowFinalPreview(true);
    }
  };

  const colorMap = {
    black: '#000000',
    white: '#ffffff',
    gold: '#ffd700',
    pink: '#ff69b4',
    red: '#ff0000',
    purple: '#800080',
    multicolor: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
    rainbow: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
    neon: '#00ff00',
    gray: '#808080'
  };

  if (showFinalPreview) {
    return (
      <div className="final-preview">
        <div className="preview-header">
          <h1>🎉 주문 완료 미리보기</h1>
          <p>고객님의 맞춤 디저트 박스가 완성되었습니다!</p>
        </div>

        <div className="final-box-preview">
          <div className="box-mockup">
            <div className="box-lid">
              <div 
                className="custom-sticker"
                style={{
                  background: selectedColor.includes('gradient') ? selectedColor : colorMap[selectedColor],
                  color: ['white', 'gold'].includes(selectedColor) ? '#000' : '#fff'
                }}
              >
                <span style={{ fontSize: `${fontSize}px` }}>{customText}</span>
              </div>
            </div>
            <div className="box-contents">
              {selectedDesserts.filter(dessert => dessert).map((dessert, index) => (
                <div key={index} className="mini-dessert">
                  <img src={dessert.image} alt={dessert.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="final-order-details">
          <div className="order-summary-card">
            <h3>주문 상세</h3>
            <div className="summary-section">
              <h4>📦 박스 정보</h4>
              <p>{boxSize.name} - {boxSize.price.toLocaleString()}원</p>
            </div>
            
            <div className="summary-section">
              <h4>🍰 선택된 디저트</h4>
              {selectedDesserts.filter(dessert => dessert).map((dessert, index) => (
                <div key={index} className="dessert-summary">
                  <span>{dessert.name}</span>
                  <span>{dessert.price.toLocaleString()}원</span>
                </div>
              ))}
            </div>

            <div className="summary-section">
              <h4>🏷️ 스티커 정보</h4>
              <p>{selectedSticker.name} ({selectedColor}) - {selectedSticker.price.toLocaleString()}원</p>
              <p>메시지: "{customText}"</p>
            </div>

            <div className="final-total">
              <h3>최종 금액: {calculateFinalTotal().toLocaleString()}원</h3>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="back-btn" onClick={() => setShowFinalPreview(false)}>
            ← 수정하기
          </button>
          <button className="order-btn">
            주문하기 🛒
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sticker-customizer">
      <div className="customizer-header">
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <h1>🏷️ 스티커 & 글씨 커스터마이징</h1>
        <p>박스에 들어갈 스티커 디자인과 메시지를 선택해주세요</p>
      </div>

      <div className="customizer-layout">
        {/* 스티커 선택 */}
        <div className="sticker-selection">
          <h3>스티커 템플릿 선택</h3>
          <div className="sticker-grid">
            {stickerTemplates.map(sticker => (
              <div 
                key={sticker.id}
                className={`sticker-option ${selectedSticker?.id === sticker.id ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedSticker(sticker);
                  setSelectedColor(sticker.colors[0]);
                }}
              >
                <img src={sticker.image} alt={sticker.name} />
                <div className="sticker-info">
                  <h4>{sticker.name}</h4>
                  <span className="sticker-price">+{sticker.price.toLocaleString()}원</span>
                </div>
              </div>
            ))}
          </div>

          {/* 색상 선택 */}
          {selectedSticker && (
            <div className="color-selection">
              <h4>색상 선택</h4>
              <div className="color-options">
                {selectedSticker.colors.map(color => (
                  <div
                    key={color}
                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    style={{ 
                      background: colorMap[color],
                      border: color === 'white' ? '2px solid #ddd' : 'none'
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 텍스트 입력 */}
        <div className="text-customization">
          <h3>메시지 입력</h3>
          <div className="text-input-section">
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="박스에 들어갈 메시지를 입력해주세요..."
              maxLength={50}
              rows={3}
            />
            <div className="text-controls">
              <label>
                글씨 크기: {fontSize}px
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* 미리보기 */}
          {selectedSticker && customText && (
            <div className="text-preview">
              <h4>스티커 미리보기</h4>
              <div 
                className="preview-sticker"
                style={{
                  background: selectedColor.includes('gradient') ? selectedColor : colorMap[selectedColor],
                  color: ['white', 'gold'].includes(selectedColor) ? '#000' : '#fff'
                }}
              >
                <span style={{ fontSize: `${fontSize}px` }}>{customText}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 가격 요약 */}
      <div className="price-summary">
        <div className="price-breakdown">
          <div className="price-item">
            <span>디저트 박스</span>
            <span>{dessertTotal.toLocaleString()}원</span>
          </div>
          {selectedSticker && (
            <div className="price-item">
              <span>스티커: {selectedSticker.name}</span>
              <span>+{selectedSticker.price.toLocaleString()}원</span>
            </div>
          )}
          <div className="price-total">
            <span>총 금액</span>
            <span>{calculateFinalTotal().toLocaleString()}원</span>
          </div>
        </div>

        <button 
          className="complete-btn"
          onClick={handleComplete}
          disabled={!selectedSticker || !customText.trim()}
        >
          완성! 미리보기 →
        </button>
      </div>
    </div>
  );
};

export default StickerCustomizer;