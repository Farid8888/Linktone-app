import { createContext, useState } from "react";

export const Context = createContext({
  show: false,
  showHandler: () => {},
  sidebar: false,
  sidebarHandler: () => {},
  mouse: false,
  onMouseHandler: () => {},
  outMouseHandler:()=>{},
  calendar:false,
  calendarHandler:()=>{},
  largeDetails:false,
  largeDetailsHandler:()=>{}
});

const ContextProvider = (props) => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showHandler = () => {
    return setShow((prevst) => {
      return !prevst;
    });
  };
  const sidebarHandler = () => {
    return setSidebar((prevst) => {
      return !prevst;
    });
  };

  const [mouse, setMouse] = useState(false);
  const onMouseHandler = () => {
    setMouse(true)
  };
  const outMouseHandler =()=>{
      setMouse(false)
  }

  const [calendar,setCalendar] = useState(false)
  const calendarHandler =()=>{
      setCalendar(prevst=>{
          return !prevst
      })
  }
  const [largeDetails,setLargeDetails] = useState(false)
  const largeDetailsHandler=()=>{
      setLargeDetails(prevst=>{
          return !prevst
      })
  }
  return (
    <Context.Provider
      value={{
        show: show,
        showHandler: showHandler,
        sidebar: sidebar,
        sidebarHandler: sidebarHandler,
        mouse: mouse,
        onMouseHandler: onMouseHandler,
        outMouseHandler:outMouseHandler,
        calendar:calendar,
        calendarHandler:calendarHandler,
        largeDetails:largeDetails,
        largeDetailsHandler:largeDetailsHandler
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
