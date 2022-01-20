import Hour from "./Hour"
import Seconds from "./Seconds"
import Minutes from './Minutes';
import './Table.css'

 const Table = (props) => {
     return (
         <div className="table ">
            <p>{(props.time.h)? props.time.h: "0" + props.time.h}</p>
            <p>{(props.time.m)? props.time.m: "0" + props.time.m}</p>
            <p>{(props.time.s)? props.time.s: "0" + props.time.s}</p>
            <p>{(props.time.ms)? props.time.ms: "0" + props.time.ms}</p>
         </div>
     )
 }

 export default Table;