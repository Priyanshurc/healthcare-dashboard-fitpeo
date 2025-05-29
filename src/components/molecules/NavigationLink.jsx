import React from 'react';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

export default function NavigationLink({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', cursor: 'pointer' }}>
      <Icon name={icon} />
      <Text style={{ marginLeft: '12px' }}>{label}</Text>
    </div>
  );
}
