import React from 'react';
import { Button, Icon } from 'antd';
import * as style from './styles.module.css';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default () => {
  return (
    <div className ={style.root}>
      <IconFont type="icon-tuichu" />
      <Button className={style.btn} size="large">New Game</Button>      
      <Button className={style.btn} size="large">Join a Game</Button>  
    </div>
  )
}