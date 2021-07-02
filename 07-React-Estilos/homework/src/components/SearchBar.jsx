import React from 'react';
import search from '../Styles/search.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
          <div >
              <input 
              className = {search.city} 
              type="text" 
              placeholder = "Ciudad..."/>
              <button 
              className = {search.click} 
              onClick = {props.onSearch}>Buscar</button>
          </div>
  )
};