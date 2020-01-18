import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import * as style from './home-page.module.css';
import logo from './../images/darts.svg';
export default () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(['game1', 'game2', 'game3']);
  }, [])
  return (
    <div className ={style.root}>
      <img  className={style.logo} src={logo} alt="logo"/>
      <h2 className={style.username}>Dart Score</h2>
      <Button type="primary" className={style.btn} href='/scores' size="large">New Game</Button>      
      {
        list.map((name) => <Button className={style.btn} size="large">{name}</Button>)
      }
    </div>
  )
}