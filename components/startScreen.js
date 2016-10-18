import React, { PropTypes, Component, } from 'react'
import {  StyleSheet, Image} from 'react-native'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { Button, SocialIcon } from 'react-native-elements'
var Auth0Lock = require('react-native-lock');
import Router from './router';

var lock = new Auth0Lock({
  clientId: 'N0KL9HtoTKHrHskugbgqn92c1tMfuTFL',
  domain: 'comrade.auth0.com',
  integrations: {
    facebook: {
      permissions: "public_profile"
    }
  }
});

class StartScreen extends Component {

  render() {
    lock.authenticationAPI();
//     lock.show({}, (err, profile, token) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     // Authentication worked!
//     console.log(profile);
//     console.log('Logged in with Auth0!');
//     });    
    return (
        <View animation="fadeIn" delay={1000} style={styles.innerbox}>
          <Image
            style={styles.mainlogo}
            source={require('../images/comrade_logo_alt.png')}
          />
          <Image
            style={styles.textlogo}
            source={require('../images/comrade_text_logo_alt.png')}
          />

        <SocialIcon
          title='Sign In With Facebook'
          style={{borderRadius: 0, padding: 10}}
          button
          type='facebook'
          onPress={() => {
//             let route = Router.getFormRoute();
//             this.props.navigator.push(route);
            lock.authenticate('facebook',{}, (err, profile, token) => {
              console.log(profile);
              console.log('Logged in!');
            });
//             lock.authentica
          }}          
        />        
        </View>

    )
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  tabbar: {
    marginTop: 20,
    top: 0,
//     position: 'relative',
  },
   innerbox: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
      backgroundColor: 'transparent'
  }, 
  mainlogo: {
    margin: 10,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  textlogo: {
    margin: 10,    
    width: 330,
    resizeMode: 'contain'
  }  
});


export default StartScreen