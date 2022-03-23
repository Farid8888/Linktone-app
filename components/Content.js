import React, { useContext, useReducer, useState} from "react";
import classes from "../styles/Content.module.css";
import { BiHome } from "react-icons/bi";
import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import ProfileModal from "./ProfileModal";
import { Context } from "../context/Context";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from 'next/image'
import artist1 from '../images/artist1.jpg'
import artist2 from '../images/artist2.jpg'
import artist3 from '../images/artist3.jpg'
import artist4 from '../images/artist4.jpg'
import artist5 from '../images/artist5.jpg'
import artist6 from '../images/artist6.jpg'

export default function Content() {
  const show = useContext(Context).show;
  const sidebar = useContext(Context).sidebar
  const calendar = useContext(Context).calendar
  const calendarHandler = useContext(Context).calendarHandler
  const outMouseHandler = useContext(Context).outMouseHandler
  const [chevron,setChevron] =useState(false)
  const cssClasses =[
    classes.details,
    chevron ? classes.active : null
]
const cssClass =[
    classes.artistsBlock,
    chevron ? classes.active : null
]
  const chevronHandler=()=>{
      setChevron(prevst=>{
          return !prevst
      })
  }
  const imagesArr=[
      {id:Math.random(),img:artist1,title:'СЛОТ'},
      {id:Math.random(),img:artist2,title:'Модем'},
      {id:Math.random(),img:artist3,title:'Таймсквер'},
      {id:Math.random(),img:artist4,title:'Нуки'},
      {id:Math.random(),img:artist5,title:'Jane Air'},
      {id:Math.random(),img:artist6,title:'Tequilajazz'}
  ]
  const initialState = {
    secondLink: false,
    thirdLink: false,
    fifthLink: false,
  };
  const reducer = (state = initialState, action) => {
    if (action.type === "SECOND") {
      return { secondLink: true, thirdLink: false, fifthLink: false };
    }
    if (action.type === "THIRD") {
      return { secondLink: false, thirdLink: true, fifthLink: false };
    }
    if (action.type === "FIFTH") {
      return { secondLink: false, thirdLink: false, fifthLink: true };
    }
    return state
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section className={!sidebar ? classes.main : `${classes.main} ${classes.shrink}`} onMouseOut={outMouseHandler}>
      <header className={!sidebar ? classes.header : `${classes.header} ${classes.shrink}`}>
        <h2>Артисты</h2>
        <div className={classes.nav}>
          <div className={classes.home}>
            <Link href="/">
              <a>
                <BiHome
                  style={{
                    fontSize: "25px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />{" "}
              </a>
            </Link>{" "}
            <span>/ Главная</span>
          </div>
          {!calendar && <IoChevronBack className={classes.chevron} onClick={calendarHandler}/>}
          {calendar && <IoChevronForward className={classes.chevron} onClick={calendarHandler}/>}
        </div>
      </header>

      {show && <ProfileModal />}
      <main className={classes.mainContent}>
        <div>
          <div className={classes.search}>
            <button className={classes.btnStyle} type="button">
              + Добавить артиста
            </button>
            <div className={classes.icon}>
              <input placeholder="Искать артистов" />
              <button className={classes.btn}>
                <BiSearch />
              </button>
            </div>
          </div>
          <div className={classes.artistsList}>
            <div className={!sidebar ? cssClass.join(' ') : `${cssClass.join(' ')} ${classes.shrink}`}>
              <div className={classes.artistsCount}>
                <div className={classes.artistsType}>
                  <h3>Типы артистов</h3>
                  <div className={classes.fi} onClick={chevronHandler}>
                  {chevron &&<FiChevronUp style={{ fontSize: "1.2rem" }} />}
                  {!chevron && <FiChevronDown style={{ fontSize: "1.2rem" }}/>}
                  </div>
                </div>
                <div className={cssClasses.join(' ')}>
                  Группы <span style={{ marginLeft: "40px" }}>6</span>
                </div>
              </div>
            </div>
            <div className={classes.gridFlex}>
              <div className={!sidebar ? classes.gridContainer : `${classes.gridContainer} ${classes.shrink}`}>
                  {imagesArr.map(im=>{
                      return <div className={!sidebar ? classes.gridItem : `${classes.gridItem} ${classes.shrink}`} key={im.id}>
                          <Image src={im.img} alt='Группа'  className={classes.imgGroup}/>
                          <div className={classes.groups}>
                              <div>Группа</div>
                              <div>{im.title}</div>
                          </div>
                          </div>
                  })}
              </div>
              <div className={classes.paginationFlex}>
                <div style={{ color: "#777777", fontSize: "13px" }}>
                  Показано 1-6 из 6 артистов
                </div>
                <div className={classes.paginationGrid}>
                  <div className={classes.pag}>
                    <IoChevronBack />
                  </div>
                  <div
                    className={`${classes.pag} ${classes.item} ${classes.selected}`}
                  >
                    1
                  </div>
                  <Link href="/">
                    <a className={state.secondLink ? classes.active : `${classes.pag} ${classes.item}`} onClick={()=>dispatch({type:'SECOND'})}>
                      <div>2</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className={state.thirdLink ? classes.active : `${classes.pag} ${classes.item}`} onClick={()=>dispatch({type:'THIRD'})}>
                      <div>3</div>
                    </a>
                  </Link>
                  <div className={`${classes.pag} ${classes.empty}`}>...</div>
                  <Link href="/">
                    <a className={state.fifthLink ? classes.active : `${classes.pag} ${classes.item}`} onClick={()=>dispatch({type:'FIFTH'})}>
                      <div>5</div>
                    </a>
                  </Link>
                  <div className={classes.pag}>
                    <IoChevronForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
