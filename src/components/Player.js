import { Avatar } from 'antd';
import React from 'react';

export default ({ player }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Avatar style={{ backgroundColor: 'orange', fontSize: 24 }} size="large">
        {player.name.charAt(0)}
      </Avatar>
      <span style={{ display: 'block', fontSize: 24 }}>{player.score}</span>
    </div>
  );
};
