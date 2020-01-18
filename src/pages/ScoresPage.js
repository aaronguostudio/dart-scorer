import React, { useState } from 'react';
import Player from '../components/Player';
import ScoreTracker from '../components/ScoreTracker';

export default () => {
  const [myPlayer, setMyPlayer] = useState({
    name: 'Me',
    score: 0
  });
  const [opponentPlayer, setOpponentPlayer] = useState({
    name: 'You',
    score: 0
  });

  const addScoreHandler = scoreToAdd => {
    setMyPlayer({ ...myPlayer, score: myPlayer.score + scoreToAdd });
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24
        }}
      >
        <Player player={myPlayer} />
        <span style={{ fontSize: 24, margin: 16 }}>vs</span>
        <Player player={opponentPlayer} />
      </div>
      <div style={{ padding: 16 }}>
        <ScoreTracker onAddScore={addScoreHandler} />
      </div>
    </div>
  );
};
