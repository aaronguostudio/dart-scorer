import React from 'react';
import Players from '../components/ScoreTracker';

export default () => {
  return (
    <div>
      <Players myPlayer="Me" opponentPlayer="You" />
    </div>
  );
};
