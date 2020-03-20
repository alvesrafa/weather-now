import React from 'react';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import LocationItem from './/LocationItem';

export default function Googleinput(){
  return (
    <GoogleAutoComplete  apiKey="AIzaSyA8zwxL4EqffvPfcdt1VfrT-qJnz51i1BQ" debounce={500} minLength={3}>
      {({ handleTextChange, locationResults, fetchDetails }) => (
        <React.Fragment >
          <View style={{backgroundColor: '#DDD'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput style={{backgroundColor: '#FFF', width: '80%'}}
                placeholder="buscar cidades" 
                onChangeText={handleTextChange}
              />
              <TouchableOpacity style={{backgroundColor: '#FFF', width: '15%'}}>
                <Text>Botao</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={{backgroundColor: '#FFF', position: 'absolute'}}>
              {locationResults.map(el => (
                <LocationItem
                key={el.id}  
                {...el}
                fetchDetails={fetchDetails}
                />
              ))}
            </ScrollView>
          </View>
          
        </React.Fragment>
      )}
    </GoogleAutoComplete>
  )
}