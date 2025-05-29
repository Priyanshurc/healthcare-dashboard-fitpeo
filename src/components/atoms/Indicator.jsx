import React from 'react';

export default function Indicator({ status = 'healthy' }) {
  const getColor = () => {
    switch (status) {
      case 'healthy':
        return 'green';
      case 'warning':
        return 'orange';
      case 'critical':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <span
      style={{
        display: 'inline-block',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: getColor(),
        marginRight: '8px'
      }}
    />
  );
}
