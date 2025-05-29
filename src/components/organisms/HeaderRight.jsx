import React from 'react';

export default function HeaderRight() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '12px 24px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#fff',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {/* Cyan Blue Avatar Box */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#06b6d4', // cyan-500
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
          }}
        >
          🧔🏻‍♂️
        </div>

        {/* Dark Box with + Button */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            backgroundColor: '#1a3e78', // gray-800
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}
