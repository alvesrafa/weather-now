import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, AsyncStorage} from 'react-native';
import api from '../services/api';
import { KEY } from '../../env.json';

import Weather from '../components/Weather';
import SearchInput from '../components/SearchInput';


export default function Main() {
  const [city, setCity] = useState('')

  useEffect(()=>{
    if(city === '') getSearch();
      
  },[])
  useEffect(()=>{
    if(city !== '') storeSearch();
  },[city])
  async function storeSearch(){
    try {
      await AsyncStorage.setItem('CITY',  JSON.stringify(city));
    } catch (e) {
      console.log('Erro ao salvar no localStorage')
    }
  }
  async function getSearch() {
    try {
      const value = await AsyncStorage.getItem('CITY');
      if (value !== null) {
        setCity(JSON.parse(value))
        console.log('pegou do local')
      } 
      console.log('vazio')
    } catch (env) {
      console.log('Erro ao captar dados do localStorage')
    }
  };

  async function searchData(address){
    if(address === '') return console.log('address vazio');
    let config = {
      params: {
        apikey: KEY,
        q: address,
        language: 'pt-BR',
      } 
    };
    await api.get('/locations/v1/cities/search', config).then(response =>{
      setCity(response.data[0])
    })
  }
  return (
    <View style={styles.container}>
      <SearchInput search={searchData}/>
      {
        city ?
        <Weather city={city}/>
        :
        <Text>asfasf</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  
  

});
