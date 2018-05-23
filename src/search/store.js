import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, Alert } from 'react-native';

import MapView from 'react-native-maps';
import { Actions} from 'react-native-router-flux';
import axios from 'axios';
import { GOOGLE_PLACES_API } from 'react-native-dotenv';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  input: {
    elevation: 1,
    width: '99%',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  allNonMapThings: {
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputContainer: {
    elevation: 1,
    backgroundColor: 'white',
    width: '90%',
    height: '6%',
    top: 40,
    borderRadius: 3,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0}
  },
  button: {
    elevation: 1,
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#ff6600',
    borderRadius: 10,
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0}
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',

  }
});

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
  latitude: 37.7749,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationInput: '',
      currentLat: null,
      currentLong: null,
      error: null,
      locationCoordinates: {
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01 * (screenWidth / screenHeight)
        }
    };

    // this.handleLocationInput = this.handleLocationInput.bind(this);
    // this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  // handleLocationInput(textInput) {
  //   this.setState({
  //     locationInput: textInput
  //   });
  // }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           currentLat: position.coords.latitude,
           currentlong: position.coords.longitude,
           error: null,
         });
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

  // handleSubmit(textInput) {
  //   axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.locationInput.split(' ').join('') + "&key=" + GOOGLE_PLACES_API)
  //   .then(response => this.updateLocationCoordinates(response))
  //   .catch(error => console.log("Fail: ", error))
  // }

  // handleLocationChange(response){
  //   this.setState({
  //     locationCoordiante: response
  //   })
  // }

  // callout() {
  //   Actions.witnessed({
  //     latitude: this.state.locationCoordinates.latitude,
  //     longitude: this.state.locationCoordinates.longitude
  //     })
  // }

  render(){
    return(
      <View style={styles.container}>
      <MapView style={styles.map} 
        // region={this.state.locationCoordinates}
        // onRegionChange={this.handleLocationChange}
        // showsUserLocation = {true}
        // followUserLocation = {true}
        // showsMyLocationButton = {true}
        // zoomEnabled={true} 
        // scrollEnabled={true} 
      >
     <MapView.Marker 
       coordinate={{
         latitude: 37.7749,
         longitude: -122.4194,
       }}
     />
     </MapView>
     <View style={styles.allNonMapThings}>
       <View style={styles.inputContainer}>
         <TextInput
           placeholder="Looking for Brew?"
           style={ styles.input }
          //  onChangeText={this.handleLocationInput}
          //  value={this.state.locationInput}
          //  onSubmitEditing={this.handleSubmit.bind(this)}
         />
       </View>

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
  
      // {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
      //    coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
      //    title={"Your Location"}
      //  />}

      // </MapView>
      // </View>
    )
  }
}

export default Geolocation;