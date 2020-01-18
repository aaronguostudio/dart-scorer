import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player';
import ScoreTracker from '../components/ScoreTracker';
import faker from 'faker'

export default ({ firebase }) => {

  const [game, setGame] = useState();

  const params = useParams();
  const { host } = params
  useEffect(() => {
    if (host === '' || !host) {
      const newName = faker.name.findName()
      const newGuest = ''
      firebase.firestore.collection('openGames').add({
        host: newName,
        guest: ''
      }).then(res => {
        const game = {
          guest: newGuest,
          host: newName
        }
        setGame(game)
      })
      .catch(err => {
        console.log('>err', err)
      })
    } else {
      const guestName = faker.name.findName()
      firebase.firestore
        .collection('openGames')
        .where('host', '==', host)
        .get()
        .then(res => {
          const game = res.docs[0].data()
          game.guest = guestName
          game.score = 0
          setGame(game)
        })
    }
  }, [host])

  // const [opponentPlayer, setOpponentPlayer] = useState({
  //   name: '?',
  //   score: 0
  // });

  // const addScoreHandler = scoreToAdd => {
  //   setMyPlayer({ ...myPlayer, score: myPlayer.score + scoreToAdd });
  // };

  return (
    <>
      <div style={{
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '24px'
      }}>{host}</div>
        <h2 style={{textAlign: 'center'}}>{game && game.host}</h2>
        <h2 style={{textAlign: 'center'}}>{game && game.guest}</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24
        }}
      >
          <Player
            player={game && game.host}
            score={game && game.score}
          />
          <span style={{ fontSize: 24, margin: 16 }}>vs</span>
          <Player
            player={game && game.guest}
            score={game && game.score}
          />
        </div>
        <div style={{ padding: 16 }}>
          <ScoreTracker onAddScore={() => {}} />
        </div>
    </>
  );
};
