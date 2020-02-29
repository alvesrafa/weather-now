import React from 'react';
import { FtoC, dataPadrao } from '../../assets/functions';
import './today.css';


export default function TempToday({dia}) {

  return (
    <div className="card">
      <div className="data">{dataPadrao(dia.Date)}</div>
      <div className="temperatura">
        <div className="max">
            Max {FtoC(dia.Temperature.Maximum.Value)}
            <span className="celsius">ºC</span>
        </div>
        <div className="min">
            Min {FtoC(dia.Temperature.Minimum.Value)}
            <span className="celsius">ºC</span>
        </div>
      </div>
      <div className="Dia">
        <div>{dia.Day.HasPrecipitation ? 'precipita' : 'n precipta'}</div>
        <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
        <div>Frase: {dia.Day.IconPhrase}</div>
        <div>itensidade: {dia.Day.PrecipitationIntensity}</div>
        <div>tipo: {dia.Day.PrecipitationType}</div>
      </div>
      <div className="Noite">
        <div>{dia.Day.HasPrecipitation ? 'precipita' : 'n precipta'}</div>
        <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
        <div>Frase: {dia.Day.IconPhrase}</div>
        <div>itensidade: {dia.Day.PrecipitationIntensity}</div>
        <div>tipo: {dia.Day.PrecipitationType}</div>
      </div>
    </div>
  )
}