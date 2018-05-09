import React from 'react';
import { View, Text, StyleSheet, YellowBox } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#87cefa',
    alignItems:'center', 
    justifyContent:'center'
  },
  home: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Home extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.home}>{ 'Home' }</Text>
    </View>
    )
  }
}

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted(...) is deprecated',
]);