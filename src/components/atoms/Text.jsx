import React from 'react';

export default function Text({ children, size = '16px', weight = 'normal', color = '#333', style = {}, className = '' }) {
  return (
    <span
      className={className}
      style={{
        fontSize: size,
        fontWeight: weight,
        color,
        ...style
      }}
    >
      {children}
    </span>
  );
}
