import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Weather(){
  return (
    <View style={styles.weatherBlock}>
      <View style={styles.localeName}>
        <Text style={fonts.locale}>Ilhabela, SP</Text>
      </View>
      <View style={styles.localeTemperature}>
        <Text style={fonts.tempMax}>31ºC</Text>
        <Text style={fonts.tempMin}>13ºC</Text>
      </View>
      <View style={styles.date}>
        <Text style={fonts.date}>19/03/2020</Text>
        <Text style={fonts.dateName}>Quinta-feira</Text>
      </View>

      <View style={styles.phrase}>
        <Text style={fonts.phrase}>Parcialmente nublado nublado nublado nublado nublado nubladonublado nublado nublado nubladov</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={fonts.paragraph}>Chance de preciptação?</Text>
        <Text style={fonts.paragraph}>Intensidade?</Text>
        <Text style={fonts.paragraph}>Tipo?</Text>
      </View>

      <View style={styles.forecasts}>
        <View style={styles.daily}>
          <Text style={fonts.dateDaily}>19/03/2020</Text>
          <Text style={fonts.dailyMax}>25ºC</Text>
          <Text style={fonts.dailyMin}>19ºC</Text>
        </View>
        <View style={styles.daily}>
          <Text style={fonts.dateDaily}>19/03/2020</Text>
          <Text style={fonts.dailyMax}>25ºC</Text>
          <Text style={fonts.dailyMin}>19ºC</Text>
        </View>
        <View style={styles.daily}>
          <Text style={fonts.dateDaily}>19/03/2020</Text>
          <Text style={fonts.dailyMax}>25ºC</Text>
          <Text style={fonts.dailyMin}>19ºC</Text>
        </View>
        <View style={styles.daily}>
          <Text style={fonts.dateDaily}>19/03/2020</Text>
          <Text style={fonts.dailyMax}>25ºC</Text>
          <Text style={fonts.dailyMin}>19ºC</Text>
        </View>
      </View>

    </View>
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
  daily: {
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    width: '23%',
    padding: 7,
    borderRadius: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
const fonts = StyleSheet.create({
  locale: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#006060',
  },
  tempMax: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#eb4d4b',
    margin: 5
  },
  tempMin: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#00b8d4',
    margin: 5
  },
  date: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006060',
  },
  dateDaily: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#006060',
  },
  dateName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006060',
  },
  dailyMax: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#eb4d4b',
  },
  dailyMin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00b8d4',
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