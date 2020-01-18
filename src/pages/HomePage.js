import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import * as style from './home-page.module.css';
import logo from './../images/darts.svg';
import { Link } from 'react-router-dom';
export default ({ firebase }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    firebase.firestore
      .collection('openGames')
      .where('guest', '==', '')
      .get()
      .then(res => {
        const games = res.docs.map(doc => {
          if (doc && doc.data().host) {
            return doc.data()
          }
        })

        setList(games);
      })
  }, [firebase])

  return (
    <div className ={style.root}>
      <img  className={style.logo} src={logo} alt="logo"/>
      <h2 className={style.username}>Dart Score</h2>
      <div style={{padding: '20px'}}>
        <Button
        type="primary"
        className={`new-btn ${style.btn}`}
        href='/scores'
        size="large">New Game</Button>
        {
          list.map(
            game =>
              game &&
                <Link style={{width: '100%'}} key={game.host} to={`/scores/${game.host}`}>
                  <Button
                    className={style.btn}
                    size="large"
                  >{game.host}</Button>
                </Link>
          )
        }
      </div>
    </div>
  )
}
