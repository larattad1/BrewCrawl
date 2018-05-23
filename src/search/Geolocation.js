import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, Alert } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { Actions} from 'react-native-router-flux';
import { GOOGLE_KEY } from 'react-native-dotenv';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from "./SearchStyles.js";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LATITUDE_DELTA = 0.01 * screenWidth;
const LONGITUDE_DELTA = 0.01 * screenHeight;

const initialRegion = {
  latitude: 37.7749,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

class Geolocation extends Component {
    state = {
      region: {
        latitude: -37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      ready: true,
      filteredMarkers: []
    };
  
    setRegion(region) {
      // if(this.state.ready) {
      //   setTimeout(() => this.map.animateToRegion(region), 10);
      // }
      this.setState({ region });
    }

    componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
            const region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            };
            this.setRegion(region);
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

  updateLocationCoordinates(response){
    var info = response.data.results[0].geometry.location 
    this.setState({
      locationCoordinates: {
        latitude: info.lat,
        longitude: info.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    })
  }

  callout() {
    Actions.witnessed({
      latitude: this.state.locationCoordinates.latitude,
      longitude: this.state.locationCoordinates.longitude
      })
  }

   handleReport() {
    console.log('reported!')
    Alert.alert(
      'Location',
      'User lat: ' + this.state.currentLat + ' User long: ' + this.state.currentlong,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  onRegionChange = (region) => {
    console.log('onRegionChange', region);
  };

  onRegionChangeComplete = (region) => {
    console.log('onRegionChangeComplete', region);
  };

  render(){
    const { region } = this.state;
    return(
      
      <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={initialRegion}
        onRegionChange={this.onRegionChange}
        onRegionChangeComplete={this.onRegionChangeComplete}
        region={region}
        showsUserLocation = {true}
        followUserLocation = {true}
        showsMyLocationButton = {true}
        showsPointsOfInterest = {false}
        zoomEnabled={true} 
        scrollEnabled={true} 
      >
     <Marker 
       coordinate={{
         latitude: region.latitude,
         longitude: region.longitude,
       }}
       title='Current Spot'
       description='User lat: + region.latitude +  User long:  + {region.longitude}'
     />
     </MapView>
     <View style={styles.allNonMapThings}>
     <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(data);
          console.log(details);
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: GOOGLE_KEY,
          language: 'en', // language of the results
          types: '(cities)', // default: 'geocode'
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}

        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'bar',
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

        predefinedPlacesAlwaysVisible={true}
      />

       <View style={styles.button} >
         <TouchableOpacity 
           onPress={this.handleReport.bind(this)}
         > 
           <Text style = {styles.buttonText} >
             Search
           </Text>
         </TouchableOpacity>
       </View>
     </View>
   </View>
    )
  }
}

export default Geolocation;