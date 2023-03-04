import React, { useState } from "react";
const Demo=()=>{
    const [color ,setColor]=useState("BLUE")
    return(
       <div>
        <h2 color="red">My favret color is {color}</h2>
       </div>
    );
}
export default Demo;