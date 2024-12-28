import React, { useState } from 'react';
import './StatefullComponent.css';

function TextInput() {
  const [text, setText] = useState(''); // Инициализируем состояние

  const handleChange = (event) => {
    setText(event.target.value); // Обновляем состояние при вводе текста
  };

  return (
    <div className="text-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите текст..."
      />
      <p>Вы ввели: {text}</p>
    </div>
  );
};

export default TextInput;