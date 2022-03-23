// import React from 'react'

// export default function Calendar() {
//   return (
//     <div>
//       <table>
//           <thead>
//               <tr>
//                   <th>«</th>
//                   <th>March 2022</th>
//                   <th>»</th>
//               </tr>
//               <tr>
//                   <th>Su</th>
//                   <th>Mo</th>
//                   <th>Tu</th>
//                   <th>We</th>
//                   <th>Th</th>
//                   <th>Fr</th>
//                   <th>Sa</th>
//               </tr>
//           </thead>
//           <tbody></tbody>
//       </table>
//     </div>
//   )
// }

import React,{useState,useContext} from 'react'
import Calendar from 'react-calendar';
import classes from '../styles/Calendar.module.css'
import { Context } from '../context/Context';
import { IoChevronForward } from "react-icons/io5";


export default function Cdr() {
    const calendar = useContext(Context).calendar
    const [value, onChange] = useState(new Date());
    const calendarHandler = useContext(Context).calendarHandler
  return (
    <div className={classes.calendar}>
        {calendar && <div className={classes.chevron} onClick={calendarHandler}>
         <div className={classes.collapse}>Collapse</div> 
         <IoChevronForward style={{fontSize:'1.5rem'}}/>
        </div>}
        <div className={classes.title}>КАЛЕНДАРЬ СОБЫТИЙ</div>
         <Calendar onChange={onChange} value={value} />
    </div>
 
  )
}
