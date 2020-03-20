import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import api from './src/services/api';
import { KEY } from './env.json';
import Weather from './src/components/Weather';
import SearchInput from './src/components/SearchInput';


export default function App() {
  
  return (
    <>
      <View style={styles.container}>
        <SearchInput />
        <Weather/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#30336b',
  },
  
  

});
