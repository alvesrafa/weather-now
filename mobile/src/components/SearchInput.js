import React, { useState } from 'react';
import { Keyboard, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../services/googleApi';
import { GOOGLE_KEY } from '../../env.json';
import styled from 'styled-components/native';


export default function SearchInput({search}){
  const [address, setAddress] = useState('');

  async function handleSearch(){
    if(!address) return;
    Keyboard.dismiss();
    
    let config = {
      params: {
        key: GOOGLE_KEY,
        address,
      } 
    }
    await api.get('maps/api/geocode/json', config)
      .then( response => {
        let array = [];
        response.data.results[0].address_components.map((component, i) => {
          if(i <= 3)
            array.push(i === 0 ? component.long_name : component.short_name)
        })
        let novoArr = array.filter((este, i) =>{ //retirar valores duplicados
          return array.indexOf(este) === i;
        });
        let string = novoArr.toString()
        search(string)



        // let address1 = response.data.results[0].address_components[0].long_name.replace(/[.]/g,'')
        // let address2 = response.data.results[0].address_components.pop().long_name.replace(/[.]/g,'')
        // let address_google = address1 + ' ' + address2
          
        //search(response.data.results[0].formatted_address)
    }).catch(e => Alert.alert('Owh! "/', 'Desculpe, mas não achei nenhum lugar com esse nome.'))
      
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
        <FontAwesome name="search" size={26} color="#AAA" />
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
    padding: 14px 5px;
    background-color: ${props => props.theme.background};

  `
  export const SearchInputItem = styled.TextInput`
    width: 80%;
    background-color: ${props => props.theme.primary};
    height: 50px;
    border-radius: 7px;
    padding: 5px;
    color: ${props => props.theme.font};
    font-size: 22px;
  `
  export const SearchItens = styled.View`
    width: 100%;
    position: absolute;
  `
  export const SearchButton = styled.TouchableOpacity`
    padding: 10px;
    height: 55px;
    width: 55px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primary};
    border-radius: 100px;
  `
    

