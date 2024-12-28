// src/components/UserInfo.jsx
import React from 'react';
import './StatelessComponent.css';

function UserInfo({ name, age, city }) {
  return (
    <div className="user-info">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </div>
  );
}

export default UserInfo;