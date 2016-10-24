import React, { PropTypes, Component, } from 'react'
import {  StyleSheet, Image, Dimensions, StatusBar} from 'react-native'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { Button, SocialIcon } from 'react-native-elements'
var Auth0Lock = require('react-native-lock');
import Router from './router';
var {height, width} = Dimensions.get('window');

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
  
  handleSignIn(){
    lock.authenticate('facebook',{}, (err, profile, token) => {
      if (err) {
        console.log(err)
      } else {
        console.log(profile);
        console.log('Logged in!');
        let route = Router.getFormRoute();
        this.props.navigator.push(route);
      }
//             let route = Router.getFormRoute();
//             this.props.navigator.push(route);      
    });
  }
  render() {  
    return (
        <View animation="fadeIn" delay={1000} style={styles.innerbox}>
        <StatusBar barStyle="light-content"/>
          <Image
            style={styles.mainlogo}
            source={require('../images/comrade_logo.png')}
          />
          <Image
            style={styles.textlogo}
            source={require('../images/comrade_text_logo.png')}
          />

        <SocialIcon
          title='Sign In With Facebook'
          style={{borderRadius: 0, margin:10,padding: 10,width: width-20}}
          button
          type='facebook'
          onPress={this.handleSignIn.bind(this)}          
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