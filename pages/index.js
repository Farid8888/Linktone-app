import React,{useEffect,useState,useContext} from 'react'
import { Context } from '../context/Context';
import Header from '../components/Header'
import IconUp from '../components/IconUp';
import Sidebar from '../components/Sidebar'
import SidebarShort from '../components/SidebarShort';
import classes from '../styles/MainPage.module.css'
import Cdr from '../components/Calendar';
import LargeDetails from '../components/LargeDetails';


export default function Index() {
  const sidebar = useContext(Context).sidebar
  const calendar = useContext(Context).calendar
  const cssClasses = [
    classes.calendarShow,
    calendar ? classes.active : null
  ]
  const largeDetails = useContext(Context).largeDetails
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = e => {
    setScrollTop(e.target.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={classes.wrapper}>
      <LargeDetails/>
      <div className={calendar ? classes.mainContent : null}>
      <Header/>
      {!sidebar &&<Sidebar/>}
      {sidebar && <SidebarShort/>}
      <IconUp show={scrollTop}/>
      </div>
      <div className={cssClasses.join(' ')}>
        <Cdr/>
      </div>
    </div>
  )
}
