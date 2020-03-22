import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import api from '../services/api';
import { KEY } from '../../env.json';
import Weather from '../components/Weather';
import SearchInput from '../components/SearchInput';
import Lottie from 'lottie-react-native';
import loading from '../assets/loading.json';

export default function Main() {
  const [city, setCity] = useState('')

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
      console.log(response.data)
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
    backgroundColor: '#30336b',
  },
  
  

});
