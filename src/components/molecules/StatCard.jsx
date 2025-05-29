import React from 'react';

export default function StatCard({ title, date, status, image }) {
  const isHealthy = status === 'Healthy';
  const progressColor = isHealthy ? '#10b981' : '#ef4444'; // Green or Red
  const progressValue = isHealthy ? 100 : 40; // Example values

  return (
    <div
      style={{
        backgroundColor: '#f5f8ff',
        borderRadius: '12px',
        padding: '12px 16px',
        width: '200px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top row: Image and Title side-by-side */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '36px', height: '36px', objectFit: 'contain', marginRight: '10px' }}
        />
        <h4 style={{ margin: 0, fontSize: '16px', color: '#1e293b' }}>{title}</h4>
      </div>

      {/* Date */}
      <p style={{ margin: '4px 0 8px 0', fontSize: '12px', color: '#9ca3af' }}>Date: {date}</p>

      {/* Progress Bar */}
      <div
        style={{
          height: '8px',
          borderRadius: '6px',
          backgroundColor: '#e5e7eb',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressValue}%`,
            backgroundColor: progressColor,
            transition: 'width 0.3s ease',
          }}
        ></div>
      </div>
    </div>
  );
}
