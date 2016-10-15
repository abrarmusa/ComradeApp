import React, { PropTypes, Component, } from 'react'
import {  StyleSheet, Image} from 'react-native'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { Button, SocialIcon } from 'react-native-elements'
import Router from './router'
class StartScreen extends Component {

  render() {
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
            let route = Router.getFormRoute();
            this.props.navigator.push(route);
          }}          
        />        
        </View>

    )
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    backgroundColor: 'white',
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
      backgroundColor: 'white'
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