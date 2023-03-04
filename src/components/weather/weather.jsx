import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { width } from '@mui/system';

 const Weather=()=>{

    return(<div >
        <div>
       <h2> weather app</h2>
       <div style={{display:"flex", flexDirection:"column",alignContent:"center" ,marginLeft:"30%",marginRight:"30%",gap:"20px" }}>
       <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
       <Button variant="contained">search</Button>

       </div>
       </div>
      
       <div>
        <img src='https://cdn.iconscout.com/icon/free/png-64/weather-2844887-2365236.png' />
        <h3>Dehli</h3>
        <h1>16<sup >o</sup>c</h1>
       </div>
    </div>);
 }
 export default Weather;