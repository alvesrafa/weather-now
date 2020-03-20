import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import Weather from './src/components/Weather';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
 
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchBlock}>
          <TextInput
            style={styles.searchInput}
            editable
            maxLength={40}
          />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={32} color="#b2ebf2" />
          </TouchableOpacity>
        </View>
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
  searchBlock: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#80deea',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchInput: {
    width: '80%',
    backgroundColor: '#e0f7fa',
    height: 45,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 5,
  },
  searchItens: {
    width: '100%',
    position: 'absolute'
  },
  searchButton: {
    padding: 10,
    height: 45,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  

});
