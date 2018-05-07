import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'blue',
    alignItems:'center', 
    justifyContent:'center'
  },
  brew: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Breweries extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.brew}>{ 'Breweries' }</Text>
      </View>
    )
  }
}
