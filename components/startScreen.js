
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export class StartScreen extends Component {
  render() {
    return (
      <View style={styles.mainbox}>
        <View style={styles.innerbox}>
          <Image
            style={styles.mainlogo}
            source={require('../images/comrade_logo.png')}
          />
          <Image
            style={styles.textlogo}
            source={require('../images/comrade_text_logo.png')}
          />    
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
   innerbox: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  }, 
  mainlogo: {
    margin: 10,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  textlogo: {
    margin: 10,    
    width: 350,
    resizeMode: 'contain'
  }
});

export default StartScreen;