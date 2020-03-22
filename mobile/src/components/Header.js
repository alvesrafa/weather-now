import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';

export default function Header(){
  const [checked, setChecked] = useState('');

  function handleChange(){
    console.log(checked)
    checked ? setChecked(false) : setChecked(true);
    
  }

  return(
    <>
      <View style={styles.statusBar} />
      <View style={styles.header}>
        <Text style={styles.title}>Weather now</Text>
        <Switch 
          onValueChange={handleChange}
          value={checked}
          thumbColor={'#A0CECB'}
          trackColor={{true: '#FFF', false: '#000'}}
        />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#3C3B3D",
    height: Constants.statusBarHeight,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  header: {
    padding: 10,
    backgroundColor: '#3C3B3D',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
})