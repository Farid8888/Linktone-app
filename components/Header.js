import React from "react";
import { BiSearch} from "react-icons/bi";
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'
import Image from 'next/image'
import linktone from '../images/logo.png'
import avatar from '../images/avatar.jpg'
import classes from '../styles/Header.module.css'
import { Context } from "../context/Context";
import {useContext} from 'react'
import { BsList } from "react-icons/bs";

export default function Header() {
  const showHandler =useContext(Context).showHandler
  const show = useContext(Context).show  
  const largeDetailsHandler = useContext(Context).largeDetailsHandler
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Image src={linktone} alt='linktone' width={100} height={35}/>
        <div className={classes.sideFlex}>
        <div className={classes.icon}>
          <input placeholder="Поиск ..."/>
          <button className={classes.btn} >
          <BiSearch/>
          </button>
        </div>
        <div className={classes.avatarStyle} type='button' onClick={showHandler}>
            <figure className={classes.figureAvatar}>
                <Image src={avatar} alt='avatar' className={classes.roundCircle}/>
            </figure>
            <div className={classes.profile}>
                <div style={{fontSize:'14px',fontWeight:'bold'}}>Mikhail Kosmosov</div>
                <div style={{fontSize:'13px',fontWeight:'lighter'}}>Superadmin</div>
            </div>
            <div>
            {show && <FiChevronDown/>}
            {!show && <FiChevronUp/>}
            </div>
        </div>
        </div>
      </div>
      <div className={classes.extraHeader}>
        <div className={classes.mainFlex}>
          <div className={classes.fixedLine}>
          </div>
        <div className={classes.bsFlex}>
        <Image src={linktone} alt='linktone' width={100} height={35}/>
        <div className={classes.bsList} onClick={largeDetailsHandler}>
          <BsList/>
        </div>
        </div>
        <div className={classes.avatarStyle} type='button' onClick={showHandler}>
            <div className={classes.profile}>
                <div style={{fontSize:'14px',fontWeight:'bold'}}>Mikhail Kosmosov</div>
                <div style={{fontSize:'13px',fontWeight:'lighter'}}>Superadmin</div>
            </div>
            <div>
            {show && <FiChevronDown/>}
            {!show && <FiChevronUp/>}
            </div>
        </div>
        </div>
        </div>
      </div>
  );
}
