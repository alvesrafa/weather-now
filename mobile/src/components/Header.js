import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native'
export default function Header({checked, setChecked, colors}){
  function handleChange(){
    checked ? setChecked(false) : setChecked(true)
    
  }

  return(
    <>
      <View style={styles.statusBar} />
      <HeaderView>
        <Title>Weather now</Title>
        <Switch 
          onValueChange={handleChange}
          value={checked}
          thumbColor={'#A0CECB'}
          trackColor={{true: '#FFF', false: '#000'}}
        />
      </HeaderView>
    </>
  )
}
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#AAB2BD',
    height: Constants.statusBarHeight,
  },
})
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.font};
`
export const HeaderView = styled.View`
  padding: 10px;
  background-color: ${props => props.theme.background};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
    
