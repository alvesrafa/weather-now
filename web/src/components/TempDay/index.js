import React from 'react';
import './otherDay.css';
import { FtoC, dataPadrao } from '../../assets/functions';

export default function TempDay({dia}) {

  return (
    <div className="box">

      <div className="data">{dataPadrao(dia.Date)}</div>

      <div className="temperatura">
        <div className="maximo">
            Máxima de {FtoC(dia.Temperature.Maximum.Value)}
            <span className="celsius">ºC</span>

        </div>
        <div className="minimo">
            Mínima de {FtoC(dia.Temperature.Minimum.Value)}
            <span className="celsius">ºC</span>
        </div>
      </div>

      
    </div>
  )
  
}