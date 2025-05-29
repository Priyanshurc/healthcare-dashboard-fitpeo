import React from 'react';
import StatCard from '../molecules/StatCard';
import tooth from '../../assets/tooth.png';
import bone from '../../assets/bone.png';
import lungs from '../../assets/lungs.png';

export default function HealthStatusCards() {
  const stats = [
    { title: 'Lungs', date: '21 Oct 2021', status: 'Healthy', image: lungs },
    { title: 'Teeth', date: '18 Oct 2021', status: 'Issue', image: tooth },
    { title: 'Bone', date: '15 Oct 2021', status: 'Healthy', image: bone },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '280px', // reduced width
        margin: '0 auto',
      }}
    >
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}

      {/* Single Details button at the bottom */}
      <div style={{ textAlign: 'right', marginTop: '8px' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#3b82f6',
            fontSize: '13px',
            cursor: 'pointer',
          }}
          onClick={() => alert('Details clicked')} // Replace with real action
        >
          Details →
        </button>
      </div>
    </div>
  );
}
