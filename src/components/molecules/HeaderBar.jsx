import React from 'react';
import Searchbar from '../atoms/Searchbar';
import Avatar from '../atoms/Avatar';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

export default function HeaderBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: '1px solid #ddd' }}>
      <Text size="20px" weight="bold">Healthcare.</Text>
      <Searchbar />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Icon name="bell" />
        <Avatar src="/avatar.png" />
        <Text>John Doe</Text>
        <Button>+</Button>
      </div>
    </div>
  );
}
