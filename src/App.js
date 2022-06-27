import '../src/App.css'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi'
import api from './services/api'
import React, { useState } from 'react';

function App() {

const [weather, setweather] = useState('');
const [data, setdata] = useState({});
const [temp, settemp] = useState({});
const [icon, seticon] = useState({});

async function handleweather(){
  if(weather === ''){
    alert("Por favor preencha este campo")
    return;
  }

  try {
    const res = await api.get(`${weather}/&aqi=no`)
    setdata(res.data.location);
    settemp(res.data.current);
    seticon(res.data.current.condition);
    console.log(res.data);
    setweather("")
  } catch {
    alert("Erro ao consultar");
    setweather("");
  }
}

  return (
    <div className="App">
      <h1 className='title'>Clima do Tempo</h1>
      <div className="containerInput">
      <input 
        type="text"
        placeholder="Digite o estado..." 
        value={weather}
        onChange={((e) => setweather(e.target.value))}
        />

        <button className="buttonSearch" onClick={handleweather}>
          <FiSearch size={25} color="#ccc" />
        </button>
      </div>
      <div className="card">
        <h2>{data.name}</h2>
        <span>{data.region}, {data.country}</span>
        <h1>{temp.temp_c}°c</h1>
        <img src={icon.icon} alt="" />
        <span>{icon.text}</span>
      </div>
    </div>
  );
}

export default App;
