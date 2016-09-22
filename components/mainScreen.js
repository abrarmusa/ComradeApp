import React, { PropTypes, Component, } from 'react'
import {  StyleSheet, Image} from 'react-native'
import AthleteSignupForm from './forms/athleteSignupForm.js'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { Button, Tabs, Tab, Icon } from 'react-native-elements'
class MainScreen extends Component {

  static propTypes = {}

  static defaultProps = {}
  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.mainbox}>

      <AthleteSignupForm />


      </View>
//         <View animation="fadeIn" delay={1000} style={styles.innerbox}>
//           <Image
//             style={styles.mainlogo}
//             source={require('../images/comrade_logo.png')}
//           />
//           <Image
//             style={styles.textlogo}
//             source={require('../images/comrade_text_logo.png')}
//           />
//         <Button raised icon={{name: 'cached'}} title='RAISED WITH ICON' />          
//         </View>

    )
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    backgroundColor: '#161b21',
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


export default MainScreen