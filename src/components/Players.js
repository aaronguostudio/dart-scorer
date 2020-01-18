import { Avatar } from 'antd';
import React from 'react';

export default ({ myPlayer, opponentPlayer }) => {
  return (
    <div style={{ textAlign: 'center', padding: 16 }}>
      <Avatar style={{ backgroundColor: 'orange', fontSize: 24 }} size="large">
        {myPlayer.charAt(0)}
      </Avatar>
      <span style={{ margin: 16 }}>vs</span>
      <Avatar style={{ backgroundColor: 'green', fontSize: 24 }} size="large">
        {opponentPlayer.charAt(0)}
      </Avatar>
    </div>
  );
};
