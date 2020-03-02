import React, { useState } from 'react';
import { FtoC, dataPadrao } from '../../assets/functions';
import './today.css';
import {DiaNoite} from '../../assets/styles'
import Lottie from 'react-lottie';

import dayNight from '../../assets/moon.json';
import daySun from '../../assets/sun.json';

export default function TempToday({dia, head, city, condition}) {
  
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
              Max {FtoC(dia.Temperature.Maximum.Value)}
              <span className="celsius">ºC</span>
          </div>
          <div className="min">
              Min {FtoC(dia.Temperature.Minimum.Value)}
              <span className="celsius">ºC</span>
          </div>
        </div>
        <p className="descricao">{head.Text}</p>
      </DiaNoite>
      <div className="detalhes">
        <div className="dia">
          <div>Durante o dia: {dia.Day.IconPhrase}</div>
          <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
         

          <div>Chance de precipitação? {dia.Day.HasPrecipitation ? 'Sim' : 'Não'}</div>
          <div>Intensidade: 
            {
              (dia.Day.PrecipitationIntensity === 'Light') ? ' Leve' : 
              (dia.Day.PrecipitationIntensity ==='Moderate') ? ' Moderada' :
              (dia.Day.PrecipitationIntensity ==='Heavy') ? ' Pesada' : ' --'
            }
          </div>
          <div>tipo: 
            {
              (dia.Day.PrecipitationType === 'Rain') ? ' Chuva' :
              (dia.Day.PrecipitationType === 'Snow') ? ' Neve' :
              (dia.Day.PrecipitationType === 'Ice') ? ' Granizo' :
              (dia.Day.PrecipitationType === 'Mixed') ? ' Neve e Granizo' : ' --'
            }
          </div>

        </div>
        <div className="noite">
          <div>Durante a noite: {dia.Day.IconPhrase}</div>
          <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
          
          <div>Chance de precipitação? {dia.Day.HasPrecipitation ? 'Sim' : 'Não'}</div>
          <div>Intensidade: 
            {
              (dia.Day.PrecipitationIntensity === 'Light') ? ' Leve' : 
              (dia.Day.PrecipitationIntensity ==='Moderate') ? ' Moderada' :
              (dia.Day.PrecipitationIntensity ==='Heavy') ? ' Pesada' : ' --'
            }
          </div>
          <div>tipo: 
            {
              (dia.Day.PrecipitationType === 'Rain') ? ' Chuva' :
              (dia.Day.PrecipitationType === 'Snow') ? ' Neve' :
              (dia.Day.PrecipitationType === 'Ice') ? ' Granizo' :
              (dia.Day.PrecipitationType === 'Mixed') ? ' Neve e Granizo' : ' --'
            }
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

