import { Avatar } from 'antd';
import React from 'react';

export default ({ player, score }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Avatar style={{ backgroundColor: 'orange', fontSize: 24 }} size="large">
        {player && player.charAt(0)}
      </Avatar>
      <span style={{ display: 'block', fontSize: 24 }}>{score || 0}</span>
    </div>
  );
};
