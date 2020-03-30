import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { diaSemanaMenor, dataPadrao, FtoC } from '../assets/functions'
import styled from 'styled-components/native';
export default function dailyforecast({dia}){
  return(
    <Daily>
      <DateDaily>{dataPadrao(dia.Date)}</DateDaily>
      <DateDaily>{diaSemanaMenor(dia.Date)}</DateDaily>
      <DailyMax>{FtoC(dia.Temperature.Maximum.Value)} F</DailyMax>
      <DailyMin>{FtoC(dia.Temperature.Minimum.Value)} F</DailyMin>
    </Daily>
  )
}

export const Daily = styled.View`
  background-color: ${props => props.theme.background};
  justify-content: center;
  align-items: center;
  width: 23%;
  padding: 7px;
  border-radius: 8px;
  border-color: ${props => props.theme.shadow};
  border-bottom-width: 1.5px;
  border-right-width: 1.5px;
  border-top-width: 0.5px;
  border-left-width: 0.5px;
`

export const DateDaily = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${props => props.theme.font};
`
export const DailyMax = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #eb4d4b;
`
export const DailyMin = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #00b8d4;
`