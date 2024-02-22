import React from 'react';

function StartButton({ onClick }) {
  return (
    <div className="start-container">
      <h2>Teste Başla!</h2>
      <p>
        Bu test, 10 sorudan oluşmaktadır. Her soru için 30 saniye süreniz
        olacak. Başarılar!
      </p>
      <button id="start" onClick={onClick} >
        Teste Başla
      </button>
    </div>
  );
}

export default StartButton;
