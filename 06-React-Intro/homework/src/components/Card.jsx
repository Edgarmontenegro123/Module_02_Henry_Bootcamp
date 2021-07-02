import React from 'react';



export default function Card({min, max, name, img, onClose}) {
// export default function Card(props) {
  // acá va tu código
  // return <div>
  //             <button onClick = {props.onClose}> X </button>
  //             <h3>{props.name}</h3>
  //             <div>
  //               <p>MIN</p>
  //               <p>{props.min}</p>
  //             </div>
  //             <div>
  //               <p>MAX</p>
  //               <p>{props.max}</p>
  //             </div>
  //             <div>
  //               <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt=""/>
  //             </div>
  //         </div>

  return  <>
              <button onClick={onClose}>X</button>
              <h3>{name}</h3>
              <div>
                <p>MIN</p>
                <p>{min}</p>
              </div>
              <div>
                <p>MAX</p>
                <p>{max}</p>
              </div>
              <div>
               <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
              </div>
          </>
};