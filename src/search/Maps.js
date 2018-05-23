import React from 'react';
import { StyleSheet, View } from 'react-native';

import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

const Maps = props => {

    return (
      <View style={styles.mapContainer}>
        <MapView>
          style={styles.mapView}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={props.userLocation}
          
        </MapView>
      </View>
    );
  };

  Maps.propTypes = {  
    userLocation: PropTypes.node
  }

  const styles = StyleSheet.create({
    mapContainer: {
      width: '100%',
      height: 600
    },
    mapView: {
      width: '100%',
      height: '100%'
    }
  });

export default Maps;