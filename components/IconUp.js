import React,{useState} from 'react'
import classes from '../styles/IconUp.module.css'
import {FiChevronUp} from 'react-icons/fi'

export default function IconUp(props) {
const [mouse,setMouse] = useState(false)
const onMouseHandler=()=>{
setMouse(prevst=>{
  return !prevst
})
}

  return (
    <div className={props.show !== 0 || mouse ? classes.visible : classes.invisible} 
    onMouseOver={onMouseHandler} onMouseOut={onMouseHandler}
    onClick={()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }}>
       <FiChevronUp/>
    </div>
  )
}
