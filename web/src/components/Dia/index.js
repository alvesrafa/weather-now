import React from 'react';

export default function Dia({dia}){
  return(
    <div className="dia">
      <div className="frase" >{dia.IconPhrase}</div>
      <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Icon).slice(-2)}-s.png`} alt=""/>
      

      <div className="precipitacao">Chance de precipitação? <span>{dia.HasPrecipitation ? 'Sim' : 'Não'}</span></div>
      <div className="intensidade">Intensidade: <span>{
          (dia.PrecipitationIntensity === 'Light') ? ' Leve' : 
          (dia.PrecipitationIntensity ==='Moderate') ? ' Moderada' :
          (dia.PrecipitationIntensity ==='Heavy') ? ' Pesada' : ' --'
        }</span></div>
      <div className="tipo">Tipo: <span>{
          (dia.PrecipitationType === 'Rain') ? ' Chuva' :
          (dia.PrecipitationType === 'Snow') ? ' Neve' :
          (dia.PrecipitationType === 'Ice') ? ' Granizo' :
          (dia.PrecipitationType === 'Mixed') ? ' Neve e Granizo' : ' --'
        }</span></div>

    </div>
  )
}