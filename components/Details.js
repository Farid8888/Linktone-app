import React from "react";
import classes from "../styles/Details.module.css";
import { Transition } from "react-transition-group";

export default function Details(props) {
    const cssClasses =[
        classes.details,
        props.show ? classes.active : null
    ]
  return (
                <div className={cssClasses.join(' ')}>
                <div>Профиль</div>
                <div>Релизы</div>
                <div>Видео</div>
                <div>Концерты</div>
                <div>Настройки</div>
              </div>
 
  );
}
