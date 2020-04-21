import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, AsyncStorage, Alert} from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import api from '../services/api';
import { KEY } from '../../env.json';

import Weather from '../components/Weather';
import SearchInput from '../components/SearchInput';
import styled from 'styled-components/native';

export default function Main() {
  const [city, setCity] = useState('')

  async function loadLocation() {
    const { granted } = await requestPermissionsAsync()

    if(granted) {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      })
      const { latitude, longitude } = coords;
      console.log(latitude, longitude)
    }
  }
  useEffect(()=>{
    if(city === '') getSearch();

    loadLocation()
      
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
      } 
    } catch (env) {
      console.log('Erro ao captar dados do localStorage')
    }
  };

  async function searchData(address){
    if(address === '') return Alert.alert('Endereço vazio!', 'Campo de endereço preenchido incorretamente.');
    setCity('');
    let config = {
      params: {
        apikey: KEY,
        q: address,
        language: 'en-US',
      } 
    };
    try {
      const response = await api.get('/locations/v1/cities/search', config);
      if(response.data.length != 0) setCity(response.data[0])
      else throw 400;
    }catch (e) {
      Alert.alert('Poxa, não encontrei esse lugar. "/', 'Erro no servidor, tente novamente mais tarde.');
    }
    
  }
  return (
    <Container>
      <SearchInput search={searchData}/>
      {
        city ?
        <Weather city={city}/>
        :
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>Aplicação teste - Realize sua busca no campo acima.</Text>
        </View>
      }
    </Container>
  )
}

const Container = styled.View`
  background-color: ${props => props.theme.background};
  flex:1;
`
