import React from 'react';
import Players from '../components/Players';
import ScoreTracker from '../components/ScoreTracker';

export default () => {
  return (
    <div>
      <Players myPlayer="Me" opponentPlayer="You" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ScoreTracker label="Me" value={0} />
        <ScoreTracker label="Opponent" value={0} isDisabled />
      </div>
    </div>
  );
};
