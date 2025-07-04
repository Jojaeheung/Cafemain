import React, { useState } from 'react';
import { dessertItems, boxSizes } from '../data/dessertData';
import StickerCustomizer from './StickerCustomizer';
import '../styles/DessertCustomizer.css';

const DessertCustomizer = () => {
  const [selectedBoxSize, setSelectedBoxSize] = useState(boxSizes[1]); // 기본값: 중형
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [showStickerPage, setShowStickerPage] = useState(false);

  const handleDragStart = (e, dessert) => {
    setDraggedItem(dessert);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e, slotIndex) => {
    e.preventDefault();
    if (draggedItem && !selectedDesserts[slotIndex]) {
      const newSelectedDesserts = [...selectedDesserts];
      newSelectedDesserts[slotIndex] = draggedItem;
      setSelectedDesserts(newSelectedDesserts);
    }
    setDraggedItem(null);
  };

  const removeDessert = (slotIndex) => {
    const newSelectedDesserts = [...selectedDesserts];
    newSelectedDesserts[slotIndex] = null;
    setSelectedDesserts(newSelectedDesserts);
  };

  const calculateTotal = () => {
    const dessertTotal = selectedDesserts
      .filter(dessert => dessert)
      .reduce((sum, dessert) => sum + dessert.price, 0);
    return dessertTotal + selectedBoxSize.price;
  };

  const proceedToStickers = () => {
    if (selectedDesserts.filter(dessert => dessert).length > 0) {
      setShowStickerPage(true);
    }
  };

  if (showStickerPage) {
    return (
      <StickerCustomizer 
        selectedDesserts={selectedDesserts}
        boxSize={selectedBoxSize}
        dessertTotal={calculateTotal()}
        onBack={() => setShowStickerPage(false)}
      />
    );
  }

  const filledSlots = selectedDesserts.filter(dessert => dessert).length;

  return (
    <div className="dessert-customizer">
      <div className="customizer-header">
        <h1>🍰 디저트 박스 커스터마이징</h1>
        <p>원하는 디저트를 드래그해서 박스에 넣어보세요!</p>
      </div>

      {/* 박스 크기 선택 */}
      <div className="box-size-selector">
        <h3>박스 크기 선택</h3>
        <div className="box-options">
          {boxSizes.map(box => (
            <div 
              key={box.id}
              className={`box-option ${selectedBoxSize.id === box.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedBoxSize(box);
                setSelectedDesserts(new Array(box.capacity).fill(null));
              }}
            >
              <h4>{box.name}</h4>
              <p>{box.description}</p>
              <span className="box-price">+{box.price.toLocaleString()}원</span>
            </div>
          ))}
        </div>
      </div>

      <div className="customizer-content">
        {/* 디저트 선택 영역 */}
        <div className="dessert-selection">
          <h3>디저트 메뉴</h3>
          <div className="dessert-grid">
            {dessertItems.map(dessert => (
              <div
                key={dessert.id}
                className="dessert-item"
                draggable
                onDragStart={(e) => handleDragStart(e, dessert)}
              >
                <img src={dessert.image} alt={dessert.name} />
                <div className="dessert-info">
                  <h4>{dessert.name}</h4>
                  <p>{dessert.description}</p>
                  <span className="price">{dessert.price.toLocaleString()}원</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 박스 영역 */}
        <div className="dessert-box">
          <h3>나만의 디저트 박스 ({filledSlots}/{selectedBoxSize.capacity})</h3>
          <div className={`box-container ${selectedBoxSize.id}`}>
            {Array.from({ length: selectedBoxSize.capacity }).map((_, index) => (
              <div
                key={index}
                className={`box-slot ${selectedDesserts[index] ? 'filled' : 'empty'}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                onClick={() => selectedDesserts[index] && removeDessert(index)}
              >
                {selectedDesserts[index] ? (
                  <div className="selected-dessert">
                    <img src={selectedDesserts[index].image} alt={selectedDesserts[index].name} />
                    <span className="dessert-name">{selectedDesserts[index].name}</span>
                    <button className="remove-btn" onClick={(e) => {
                      e.stopPropagation();
                      removeDessert(index);
                    }}>×</button>
                  </div>
                ) : (
                  <div className="empty-slot">
                    <span>+</span>
                    <p>디저트를 드래그해주세요</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 가격 요약 및 다음 버튼 */}
      <div className="order-summary">
        <div className="price-breakdown">
          <div className="price-item">
            <span>박스: {selectedBoxSize.name}</span>
            <span>{selectedBoxSize.price.toLocaleString()}원</span>
          </div>
          <div className="price-item">
            <span>디저트 ({filledSlots}개)</span>
            <span>{selectedDesserts
              .filter(dessert => dessert)
              .reduce((sum, dessert) => sum + dessert.price, 0)
              .toLocaleString()}원</span>
          </div>
          <div className="price-total">
            <span>총 금액</span>
            <span>{calculateTotal().toLocaleString()}원</span>
          </div>
        </div>
        <button 
          className="proceed-btn"
          onClick={proceedToStickers}
          disabled={filledSlots === 0}
        >
          다음: 스티커 & 글씨 선택 →
        </button>
      </div>
    </div>
  );
};

export default DessertCustomizer;