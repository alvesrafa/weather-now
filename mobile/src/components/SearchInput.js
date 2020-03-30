import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import api from '../services/googleApi';
import { GOOGLE_KEY } from '../../env.json';
import styled from 'styled-components/native';


export default function SearchInput({search}){
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
        search(address_google)
    }).catch(e => console.log(e))
      
  }
  return (
    <SearchBlock>
      <SearchInputItem
        editable
        maxLength={40}
        value={address}
        onChangeText={setAddress}
        onSubmitEditing={handleSearch}
      />
      <SearchButton onPress={handleSearch}>
        <FontAwesome name="search" size={32} color="#AAA" />
      </SearchButton>
    </SearchBlock>
  )
}
  export const SearchBlock = styled.View`
    width: 100%;
    height: 60px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    background-color: ${props => props.theme.tertiary};
  `
  export const SearchInputItem = styled.TextInput`
    width: 80%;
    background-color: ${props => props.theme.background};
    height: 45px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px;
    color: ${props => props.theme.font};
  `
  export const SearchItens = styled.View`
    width: 100%;
    position: absolute;
  `
  export const SearchButton = styled.TouchableOpacity`
    padding: 10px;
    height: 45px;
    width: 20%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `
    

