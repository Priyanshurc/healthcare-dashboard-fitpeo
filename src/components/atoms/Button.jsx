import React from 'react';

export default function Button({ children, onClick, type = 'button', style = {}, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      style={{
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#3f51b5',
        color: '#fff',
        cursor: 'pointer',
        ...style
      }}
    >
      {children}
    </button>
  );
}
