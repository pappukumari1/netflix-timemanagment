import { useState } from "react";

const TimeManagment=()=>{
    
    
   let ob= new Date();
    let time=ob.toLocaleTimeString();
    let date=ob.toLocaleDateString();
    
     const [ctime,setCtime]=useState(time);
    
    
    const updatet=()=>{
       time= new Date().toLocaleTimeString();
        
        setCtime(time);
     
    }

    return(
        <div>
            <h1>{ctime}</h1>
            <h1>{date}</h1>
            <button onClick={updatet}> get time </button>
        </div>
    );
}
export default TimeManagment;