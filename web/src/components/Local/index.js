import React, {useEffect, useState} from 'react';
import './local.css';


export default function Local() {
  const [city, setCity] = useState('');
  

  return (
    <div className="card">
      <div className="graus">
        <h1 className="local">Ilhabela, SP</h1>
        <h3 className="data">Sexta-feira, 28/02/2020</h3>
        <div className="temperatura">23 <span className="celsius">ºC</span> </div>
        <div>Desenhinhos</div>
      </div>
      <div className="detalhes">

      </div>
    </div>
  )
}