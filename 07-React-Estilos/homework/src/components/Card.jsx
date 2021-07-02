import React from 'react';
import card from '../Styles/card.module.css';

export default function Card({min, max, name, img, onClose}) {
  // acá va tu código
  return  <div className = {card.back}>
              <button className = {card.btn} onClick={onClose}>Close</button>
              <h3>{name}</h3>
              <div>
               <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
              </div>
              <div>
                <p>Mínima</p>
                <p>{min}</p>
              </div>
              <div>
                <p>Máxima</p>
                <p>{max}</p>
              </div>    
          </div>
};