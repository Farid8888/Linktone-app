import React,{useContext,useState} from "react";
import { BsList } from "react-icons/bs";
import {MdDashboard} from 'react-icons/md'
import classes from "../styles/SidebarShort.module.css";
import {ImMusic} from 'react-icons/im'
import Content from "./Content";
import { Context } from "../context/Context";
import ShowDetails from "./ShowDetails";

export default function SidebarShort() {
    const sidebarHandler = useContext(Context).sidebarHandler
    const onMouseHandler = useContext(Context).onMouseHandler
    const mouse = useContext(Context).mouse
  return (
      <div>
          <Content/>
          <div className={classes.overline}>
              <div className={classes.line}></div>
          </div>
    <aside className={classes.aside}>
      <div className={classes.sidebar}>
        <div className={classes.icon} onClick={sidebarHandler}>
          <BsList />
        </div>
      </div>
     {!mouse ? <div className={classes.main} onMouseOver={onMouseHandler}>
          <div className={classes.dashboard}>
           <MdDashboard style={{fontSize:'1.2rem'}}/>
          </div>
          <div className={classes.dashboards}>
              <div className={classes.dashRow}>
              <ImMusic/>
              </div>
          </div>
          <div className={classes.dashboards}>
          <div className={classes.dashRow}>
              <ImMusic/>
              </div>
          </div>
          <div className={classes.dashboards}>
          <div className={classes.dashRow}>
              <ImMusic/>
              </div>
          </div>
          <div className={classes.dashboards}>
          <div className={classes.dashRow}>
              <ImMusic/>
              </div>
          </div>
      </div> : <ShowDetails />
     } 
    </aside>
    </div>
  );
}