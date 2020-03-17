import React, { useState } from 'react';
import { FtoC, dataPadrao } from '../../assets/functions';
import ToogleTime from '../../components/ToogleTime';
import Noite from '../Noite';
import Dia from '../Dia';



import './today.css';
import {DiaNoite} from '../../assets/styles'

export default function TempToday({dia, head, city, condition}) {
  const [toogleState, setToogleState] = useState(false)

  return (
    <div className="card">
      <DiaNoite time={condition.IsDayTime ? '#5AD5FC' : '#0B1B25'} className="principal">
        
        <div className="local">{city.LocalizedName}, {city.AdministrativeArea.LocalizedName}</div>
        <div className="data">{dataPadrao(dia.Date)}</div>
        <div className="temperatura">
          <div className="temp">
          {parseInt(condition.Temperature.Metric.Value)} <span className="celsius">ºC</span>
          </div>
          <div className="max">
              Máx {FtoC(dia.Temperature.Maximum.Value)}
              <span className="celsius">ºC</span>
          </div>
          <div className="min">
              Mín {FtoC(dia.Temperature.Minimum.Value)}
              <span className="celsius">ºC</span>
          </div>
        </div>
        <p className="descricao">{condition.WeatherText}</p>
      </DiaNoite>
      <div className="detalhes">
        <ToogleTime  toogleState={toogleState} setToogleState={setToogleState} />
        {
        toogleState ? 
        <Noite noite={dia.Night}/>
        : 
        <Dia dia={dia.Day}/>
        
        }

        
      
      </div>
    </div>
  )
}

