import React,{useReducer,useContext} from "react";
import { Context } from "../context/Context";
import { BsList } from "react-icons/bs";
import {MdDashboard} from 'react-icons/md'
import classes from "../styles/Sidebar.module.css";
import {ImMusic} from 'react-icons/im'
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'
import Details from "./Details";
import Content from "./Content";

export default function Sidebar() {
    const sidebarHandler = useContext(Context).sidebarHandler
    const initialState={
        slotIcon:false,
        modemIcon:false,
        timesquareIcon:false,
        nooksIcon:false
    }

    const reducer =(state=initialState,action)=>{
        if(action.type === 'SLOT'){
            return {...state,slotIcon:!state.slotIcon}
        }
        if(action.type === 'MODEM'){
            return {...state,modemIcon:!state.modemIcon}
        }
        if(action.type === 'TIMESQUARE'){
            return {...state,timesquareIcon:!state.timesquareIcon}
        }
        if(action.type === 'NOOKS'){
            return {...state,nooksIcon:!state.nooksIcon}
        }
        return state
    }

    const [state,dispatch]=useReducer(reducer,initialState)
  return (
      <div>
          <Content/>
          <div className={classes.overline}>
              <div className={classes.line}></div>
          </div>
    <aside className={classes.aside}>
      <div className={classes.sidebar}>
        <div className={classes.nav}>Навигация</div>
        <div className={classes.icon} onClick={sidebarHandler}>
          <BsList />
        </div>
      </div>
      <div className={classes.main}>
          <div className={classes.dashboard}>
           <MdDashboard style={{fontSize:'1.2rem'}}/>
           <div style={{fontSize:'0.8rem',marginLeft:'10px'}}>Артисты</div>
          </div>
          <div className={classes.dashboards} type='button' onClick={()=>dispatch({type:'SLOT'})}>
              <div className={classes.dashRow}>
              <ImMusic/>
              <div style={{fontSize:'0.8rem',marginLeft:'12px'}}>СЛОТ</div>
              </div>
           {!state.slotIcon && <FiChevronDown/>}
           {state.slotIcon && <FiChevronUp/>}
          </div>
          <Details show={state.slotIcon}/>
          <div className={classes.dashboards} type='button' onClick={()=>dispatch({type:'MODEM'})}>
          <div className={classes.dashRow}>
              <ImMusic/>
              <div style={{fontSize:'0.8rem',marginLeft:'12px'}}>Модем</div>
              </div>
              {!state.modemIcon && <FiChevronDown/>}
           {state.modemIcon && <FiChevronUp/>}
          </div>
          <Details show={state.modemIcon}/>
          <div className={classes.dashboards} type='button' onClick={()=>dispatch({type:'TIMESQUARE'})}>
          <div className={classes.dashRow}>
              <ImMusic/>
              <div style={{fontSize:'0.8rem',marginLeft:'12px'}}>Таймсквер</div>
              </div>
           {!state.timesquareIcon && <FiChevronDown/>}
           {state.timesquareIcon && <FiChevronUp/>}
          </div>
          <Details show={state.timesquareIcon}/>
          <div className={classes.dashboards} type='button' onClick={()=>dispatch({type:'NOOKS'})}>
          <div className={classes.dashRow}>
              <ImMusic/>
              <div style={{fontSize:'0.8rem',marginLeft:'12px'}}>Нуки</div>
              </div>
              {!state.nooksIcon && <FiChevronDown/>}
           {state.nooksIcon && <FiChevronUp/>}
          </div>
          <Details show={state.nooksIcon}/>
      </div>
    </aside>
    </div>
  );
}
