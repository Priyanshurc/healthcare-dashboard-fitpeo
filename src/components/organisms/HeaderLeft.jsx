import React from 'react';
import Searchbar from '../atoms/Searchbar';
export default function HeaderLeft() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', borderBottom: '1px solid #ddd' }}>
      <Searchbar />
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      </div>
    </div>
  );
}
