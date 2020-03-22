import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { diaSemana, dataPadrao, FtoC } from '../assets/functions'
import DailyForecast from './DailyForecast';

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
      <View style={styles.weatherBlock}>
        <View style={styles.localeName}>
          <Text style={fonts.locale}>{city.LocalizedName}, {city.AdministrativeArea.LocalizedName}</Text>
        </View>
        <View style={styles.localeTemperature}>
          <Text style={fonts.temp}>{parseInt(conditions.Temperature.Metric.Value)} ºC</Text>
          <Text style={fonts.tempMax}>Máxima de {FtoC(forecasts[0].Temperature.Maximum.Value)} ºC</Text>
          <Text style={fonts.tempMin}>Mínima de {FtoC(forecasts[0].Temperature.Minimum.Value)} ºC</Text>
        </View>
        <View style={styles.date}>
          <Text style={fonts.date}>{dataPadrao(forecasts[0].Date)}</Text>
          <Text style={fonts.dateName}>{diaSemana(forecasts[0].Date)}</Text>
        </View>

        <View style={styles.phrase}>
          <Text style={fonts.phrase}>{conditions.WeatherText}</Text>
        </View>

        <View style={styles.paragraph}>
          <Text style={fonts.paragraph}>Chance de preciptação?</Text>
          <Text style={fonts.paragraph}>Intensidade?</Text>
          <Text style={fonts.paragraph}>Tipo?</Text>
        </View>

        <View style={styles.forecasts}>
          {forecasts.filter((dia,id) => id !== 0).map((dia, id) => (
            <DailyForecast key={id} dia={dia}/>
          ))}
          
        </View>

      </View>
      :
      <Text>Nada ainda</Text>
    }
    </>
  )
}
const styles = StyleSheet.create({
  weatherBlock: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    backgroundColor: '#b2ebf2',
    paddingLeft: 15,
    paddingRight: 15,
  },
  localeName: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    width: '100%',
    marginBottom: 20,
    borderRadius: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  localeTemperature: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    width: '48%',
    height: '25%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  date: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    width: '48%',
    height: '25%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  paragraph: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    width: '100%',
    marginBottom: 20,
    borderRadius: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  phrase: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    width: '100%',
    marginBottom: 20,
    borderRadius: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  forecasts: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  
})
const fonts = StyleSheet.create({
  locale: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#006060',
  },
  temp: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 5,
  },
  tempMax: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eb4d4b',
    
  },
  tempMin: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#00b8d4',
  },
  date: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006060',
  },
 
  dateName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006060',
  },
  
  phrase: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#006060',
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#006060',
  }

})