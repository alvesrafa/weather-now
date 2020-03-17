import React from 'react';

export default (noite) => (
  <div className="noite">
    <div className="frase" >{noite.IconPhrase}</div>
    <img src={`https://developer.accuweather.com/sites/default/files/${("0"+noite.Icon).slice(-2)}-s.png`} alt=""/>

    <div className="precipitacao">Chance de precipitação? <span>{noite.HasPrecipitation ? 'Sim' : 'Não'}</span> </div>
    <div className="intensidade">Intensidade: <span>{
        (noite.PrecipitationIntensity === 'Light') ? ' Leve' : 
        (noite.PrecipitationIntensity ==='Moderate') ? ' Moderada' :
        (noite.PrecipitationIntensity ==='Heavy') ? ' Pesada' : ' --'
      }</span></div>
    <div classNmae="tipo">Tipo: <span>{
        (noite.PrecipitationType === 'Rain') ? ' Chuva' :
        (noite.PrecipitationType === 'Snow') ? ' Neve' :
        (noite.PrecipitationType === 'Ice') ? ' Granizo' :
        (noite.PrecipitationType === 'Mixed') ? ' Neve e Granizo' : ' --'
      }</span></div>
  </div>
)