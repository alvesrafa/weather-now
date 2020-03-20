import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import api from './src/services/api';
import { KEY } from './env.json';
import Weather from './src/components/Weather';
import SearchInput from './src/components/SearchInput';


export default function App() {
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
        <Text>Nada</Text>
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
