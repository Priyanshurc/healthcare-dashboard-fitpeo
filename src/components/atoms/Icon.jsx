import React from 'react';

export default function Icon({ name, size = 24, color = '#555' }) {
  return (
    <i
      className={`icon-${name}`}
      style={{ fontSize: size, color }}
      aria-hidden="true"
    />
  );
}
