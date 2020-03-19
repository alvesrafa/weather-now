import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.searchBlock}>
        <TextInput
          style={styles.searchInput}
          editable
          maxLength={40}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text>Botao</Text>
        </TouchableOpacity>
      </View>
      
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

        <View style={styles.localeName}>
          <Text style={fonts.phrase}>Parcialmente nublado nublado nublado nublado nublado nubladonublado nublado nublado nubladov</Text>
        </View>

        <View style={styles.localeName}>
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

    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#130f40',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingRight: 15,
    paddingLeft: 15,
  },
  searchBlock: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  searchInput: {
    width: '80%',
    backgroundColor: '#FFF',
    height: 45,
    borderRadius: 10,
  },
  searchButton: {
    padding: 10,
    width: '15%',
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  weatherBlock: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  localeName: {
    backgroundColor: '#2980b9',
    padding: 15,
    width: '100%',
    marginBottom: 20
  },
  localeTemperature: {
    backgroundColor: '#2980b9',
    padding: 15,
    width: '48%',
    height: '25%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    backgroundColor: '#2980b9',
    padding: 15,
    width: '48%',
    height: '25%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forecasts: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  daily: {
    backgroundColor: '#7ed6df',
    justifyContent: 'center',
    alignItems: 'center',
    width: '23%',
    padding: 7,
  },

});
const fonts = StyleSheet.create({
  locale: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ecf0f1',
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
    color: '#c7ecee',
    margin: 5
  },
  date: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dateDaily: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dailyMax: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#eb4d4b',
  },
  dailyMin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c7ecee',
  },
  phrase: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 15
  }

})