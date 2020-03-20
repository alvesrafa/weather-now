import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function dailyforecast(){
  return(
    <View style={styles.daily}>
      <Text style={fonts.dateDaily}>19/03/2020</Text>
      <Text style={fonts.dailyMax}>25ºC</Text>
      <Text style={fonts.dailyMin}>19ºC</Text>
    </View>
  )
}
const styles = StyleSheet.create({
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
  dateDaily: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
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
})