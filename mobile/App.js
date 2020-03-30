import React, { useState, useEffect } from 'react';
import {AsyncStorage} from 'react-native'
import Main from './src/pages/Main';
import Header from './src/components/Header';
import { ThemeProvider } from 'styled-components';
import light from './src/theme/light';
import dark from './src/theme/dark';

export default function App() {
  const [checked, setChecked] = useState('');

  useEffect(()=>{
    if(checked === '') getTheme();
      
  },[])
  useEffect(()=>{
    if(checked !== '') storeTheme();
  },[checked])

  async function storeTheme(){
    try {
      await AsyncStorage.setItem('THEME',  JSON.stringify(checked));
    } catch (e) {
      console.log('Erro ao salvar tema no localStorage')
    }
  }
  async function getTheme() {
    try {
      const value = await AsyncStorage.getItem('THEME');
      if (value !== null) {
        setChecked(JSON.parse(value))
      } 
    } catch (env) {
      console.log('Erro ao captar tema do localStorage')
    }
  };

  return (
    <ThemeProvider theme={checked ? light : dark}>
      <Header checked={checked} setChecked={setChecked}/>
      <Main/>
    </ThemeProvider>
  );
}