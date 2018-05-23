/* Styles for all map and search related criteria */
import { StyleSheet } from 'react-native';

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

  export default styles;