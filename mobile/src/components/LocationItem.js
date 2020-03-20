import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function LocationItem({place_id, description, fetchDetails}) {
  async function handlePress(){
    const res = await fetchDetails(place_id)
    console.log('result', res)
    alert.alert(JSON.stringify(res))
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text>{description}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
  }
})