import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../services/googleApi';
import { GOOGLE_KEY } from '../../env.json';

export default function SearchInput(){
  const [address, setAddress] = useState('');

  async function handleSearch(){
    let config = {
      params: {
        key: GOOGLE_KEY,
        address,
      } 
    }
    await api.get('maps/api/geocode/json', config)
      .then( response => {
        let address1 = response.data.results[0].address_components[0].long_name.replace(/[.]/g,'')
        let address2 = response.data.results[0].address_components.pop().long_name.replace(/[.]/g,'')
        let address_google = address1 + ', ' + address2
        console.log(address_google)
    }).catch(e => console.log(e))
      
  }
  return (
    <View style={styles.searchBlock}>
      <TextInput
        style={styles.searchInput}
        editable
        maxLength={40}
        value={address}
        onChangeText={setAddress}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <FontAwesome name="search" size={32} color="#b2ebf2" />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
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
})