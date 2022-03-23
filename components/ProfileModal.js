import React,{useContext} from 'react'
import classes from '../styles/ProfileModal.module.css'
import {BiUserCircle,BiPowerOff} from 'react-icons/bi'
import { Context } from '../context/Context'


export default function ProfileModal() {
    const showHandler = useContext(Context).showHandler
  return (
    <div className={classes.modal}>
      <div className={classes.empty} type='button' onClick={showHandler}></div>
      <div className={classes.icons}>
          <div className={classes.icon}><BiUserCircle/> <span>Профиль</span></div>
          <div className={classes.icon}><BiPowerOff/> <span>Выход</span></div>
      </div>
    </div>
  )
}
