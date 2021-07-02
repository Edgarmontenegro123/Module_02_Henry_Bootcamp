import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import search from './Styles/search.module.css';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  const [cities, setCities] = useState([]);
  return ( 
    <div className="App">
      <div className = {search.filtro}>
        <header className = {search.header}><strong>ClimApp </strong><img className = {search.logo} src = 'https://appaplicacionpara.com/wp-content/uploads/2016/08/klara-app-para-conocer-el-tiempo.png'></img></header>
      </div>
    <div>
        <SearchBar
          onSearch={onSearch} onClose={onClose}
        />
      </div>
        <div>
          <Cards
            cities={data}
          />
        </div>
        <p className = {search.footer}>Creado por Edgar Montenegro</p>
      </div>
  );
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'4ae2636d8dfbdc3044bede63951a019b'}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }
}

export default App;
