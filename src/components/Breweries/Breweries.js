import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import {BreweryData} from '../../assets/data/BreweryData';

const styles = StyleSheet.create({
  flatListItem: {
      color: 'black',
     // padding: 5, //Spacing
      fontSize: 10,
      textAlign: 'center' 
  },
  breweryName: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 12
  },
  breweryDesc: {
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
    paddingTop: 10,

}
});

let backgroundColor = ['#B8860B', '#DEB887'];

class BreweryDetails extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <Image
            source={{ uri: this.props.item.imageUrl }}
            style={{ width: 100, height: 100, margin: 5 }}
          >
          </Image>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height: 115
          }}>
            <Text style={styles.breweryName}>{this.props.item.name}</Text>
            <Text style={styles.flatListItem}>{this.props.item.distance} Miles Away</Text>
            <Text style={styles.flatListItem}>{this.props.item.address}</Text>
            <Text style={styles.flatListItem}>Open: {this.props.item.hours}</Text>
            <Text style={styles.breweryDesc}>{this.props.item.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

BreweryDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    hours: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.node
  })
}

export default class Breweries extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 22 }}>
        <FlatList
          data={BreweryData}
          renderItem={({ item, index }) => {
            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
            return (
              <View style={{ backgroundColor: backgroundColor[index % backgroundColor.length] }}>
              <BreweryDetails item={item} index={index}>
              </BreweryDetails>
              </View>
            );
          }}
        >
        </FlatList>
      </View>
    );
  }
}

