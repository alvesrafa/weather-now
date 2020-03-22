import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { diaSemana, dataPadrao, FtoC } from '../assets/functions'
import DailyForecast from './DailyForecast';
import styled from 'styled-components';

import api from '../services/api';
import { KEY } from '../../env.json';

export default function Weather({city}){
  const [conditions, setConditions] = useState('');
  const [forecasts, setForecasts] = useState('');
  const [headline, setHeadline] = useState('');

  useEffect(()=> {
    let config = {
      params: {
        apikey: KEY,
        language: 'pt-BR',
      } 
    }
    api.get(`/forecasts/v1/daily/5day/${city.Key}`, config).then( response => {
      setForecasts(response.data.DailyForecasts)
      setHeadline(response.data.Headline)
    })
    api.get(`/currentconditions/v1/${city.Key}`, config).then( response => {
      setConditions(response.data[0])
    })
    
  }, [])

  return (
    <>
    {
      (conditions && forecasts && headline) ?
      <WeatherBlock>
        <LocaleName>
          <TextLocale>{city.LocalizedName}, {city.AdministrativeArea.LocalizedName}</TextLocale>
        </LocaleName>
        <LocaleTemperature>
          <TextTemp >{parseInt(conditions.Temperature.Metric.Value)} ºC</TextTemp>
          <TextTempMax>Máxima de {FtoC(forecasts[0].Temperature.Maximum.Value)} ºC</TextTempMax>
          <TextTempMin>Mínima de {FtoC(forecasts[0].Temperature.Minimum.Value)} ºC</TextTempMin>
        </LocaleTemperature>
        <Dates>
          <TextDate>{dataPadrao(forecasts[0].Date)}</TextDate>
          <TextDateName>{diaSemana(forecasts[0].Date)}</TextDateName>
        </Dates>

        <Phrase>
          <TextPhrase>{conditions.WeatherText}</TextPhrase>
        </Phrase>

        <Paragraph>
          <TextParagraph>Chance de preciptação?</TextParagraph>
          <TextParagraph>Intensidade?</TextParagraph>
          <TextParagraph>Tipo?</TextParagraph>
        </Paragraph>

        <Forecasts>
          {forecasts.filter((dia,id) => id !== 0).map((dia, id) => (
            <DailyForecast key={id} dia={dia}/>
          ))}
          
        </Forecasts>

      </WeatherBlock>
      :
      <Text>Nada ainda</Text>
    }
    </>
  )
}
export const WeatherBlock = styled.View`
  flex: 1;
  padding-top: 20px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  background-color: ${props => props.theme.background};
  padding-left: 15px;
  padding-right: 15px;
`

export const LocaleName = styled.View`
  background-color: ${props => props.theme.primary};
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
`
export const LocaleTemperature = styled.View`
  background-color: ${props => props.theme.primary};
  padding: 15px;
  width: 48%;
  height: 25%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`
export const Dates = styled.View`
  background-color: ${props => props.theme.primary};
  padding: 15px;
  width: 48%;
  height: 25%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`
export const Paragraph = styled.View`
  background-color: ${props => props.theme.primary};
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
`
export const Phrase = styled.View`
  background-color: ${props => props.theme.primary};
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
`
export const Forecasts = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`
export const TextLocale = styled.Text`
font-size: 25px;
font-weight: bold;
color: ${props => props.theme.font};
`
export const TextTemp = styled.Text`
font-size: 35px;
font-weight: bold;
margin: 5px;
color: ${props => props.theme.font};
`
export const TextTempMax = styled.Text`
font-size: 20px;
font-weight: bold;
color: #eb4d4b;

`
export const TextTempMin = styled.Text`
font-size: 19px;
font-weight: bold;
color: #00b8d4;
`
export const TextDate = styled.Text`
font-size: 22px;
font-weight: bold;
color: ${props => props.theme.font};
`

export const TextDateName = styled.Text`
font-size: 22px;
font-weight: bold;
color: ${props => props.theme.font};
`

export const TextPhrase = styled.Text`
font-size: 19px;
font-weight: bold;
color: ${props => props.theme.font};
`
export const TextParagraph = styled.Text`
font-weight: bold;
font-size: 15px;
color: ${props => props.theme.font};
`
