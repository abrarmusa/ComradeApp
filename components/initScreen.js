import React, { Component, } from 'react'
import { View, StatusBar} from 'react-native'
import StartScreen from './startScreen.js'
import FormScreen from './formScreen.js'
import { Button } from 'react-native-elements'
import Router from './router'
// import CustomNavbar from './customNavbar'
import ExNavigator from '@exponent/react-native-navigator';
// import {
//   NavigationProvider,
//   StackNavigation,
// } from '@exponent/ex-navigation';


class InitScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
//               <ExNavigator initialRoute={Router.getInitialRoute()} 
//           style={{ flex: 1, backgroundColor: 'black'}} 
//           navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth:0}} 
//           barButtonIconStyle={{tintColor: '#404041',zIndex: 0}} 
//           sceneStyle={{ backgroundColor: '#28292B', paddingTop: 0, zIndex:1}}
//       >     
              <ExNavigator 
          initialRoute={Router.getHomeRoute(navigator)} 
          style={{ flex: 1, backgroundColor: '#efebe6'}} 
          navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth:0}} 
          barButtonIconStyle={{tintColor: '#404041',zIndex: 0}} 
          sceneStyle={{ backgroundColor: '#28292B', paddingTop: 0, zIndex:1}}
      >
 


      
      

      <StatusBar barStyle="default" />
      </ExNavigator>

    )
  }
}


export default InitScreen