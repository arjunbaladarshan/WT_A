import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Home(){

  const [data, setData] = useState([]);
  // const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=22.43&longitude=70.77&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/laptops";

  useEffect(()=>{
    fetch(apiUrl).then(res=>res.json()).then(res=>setData(res));
  },[]);

  const formatedData = data.map((d)=>{
    return(
      <tr>
        <td>{d.name}</td>
        <td><img src={d.avatar} /></td>
        <td>{d.price}</td>
      </tr>
    );
  }) 

  return(
    <table>
      {formatedData}
    </table>
  );
}

function Forms(){
  
  const [name, setName] = useState("");

  return(
    <>
      <div style={{width:"45%",float:"left",border:"2px solid red",padding:"20px"}} >
        <input type='text' onChange={(e)=>{
          setName(e.target.value.toUpperCase());
        }}/>
      </div>
      <div style={{width:"45%",float:"left",border:"2px dotted blue",padding:"20px"}} >

        <h1>{name}</h1>
      </div>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Forms/>);