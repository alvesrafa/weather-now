import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableOpacity><Text>modelando aplicação</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD',
  },

});