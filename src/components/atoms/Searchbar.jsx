import React from 'react';
import { Bell, Search } from 'lucide-react'; // Icons from lucide-react

export default function Searchbar({ placeholder = 'Search...' }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f8ff',
        borderRadius: '12px',
        padding: '8px 16px',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Search size={18} color="#1e3a8a" style={{ marginRight: '12px' }} />
      <input
        type="text"
        placeholder={placeholder}
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          flex: 1,
          fontSize: '14px',
          color: '#333',
        }}
      />
      <Bell size={20} color="#1e3a8a" style={{ marginLeft: '12px', cursor: 'pointer' }} />
    </div>
  );
}
