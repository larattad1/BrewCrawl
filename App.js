import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import MenuBar from './src/components/HomePage/navBar/NavBar';
import Menu from './src/components/HomePage/Menu/Menu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/assets/taps.jpg')} style={styles.bannerImage} />
        <Menu style={styles.menuStyle} />
        <Image source={require('./src/assets/Barrel.jpg')} style={styles.bottomImage}  />
        <MenuBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  bannerImage: {
    flex: 2,
    width: "100%",
    // height: "25%"
  },
  bottomImage: {
    flex: 2,
    width: "100%",
    // height: "20%"
  },
  menuStyle: {
    flex: 3,
    width: "100%",
    // height: 300,
    backgroundColor: "blue"
  },
  menuBarStye: {
    flex: 1
  }
});
