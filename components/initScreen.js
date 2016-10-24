import React, { Component, } from 'react'
import { View, StatusBar} from 'react-native'
import StartScreen from './startScreen.js'
import FormScreen from './formScreen.js'
import { Button } from 'react-native-elements'
import Router from './router'
import ExNavigator from '@exponent/react-native-navigator';
import GLOBALS from './globals';


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
//           barButtonIconStyle={{tintColor: GLOBALS.COLORS.ALT1,zIndex: 0}} 
//           sceneStyle={{ backgroundColor: GLOBALS.COLORS.MAIN, paddingTop: 0, zIndex:1}}
//           />

      <ExNavigator 
          initialRoute={Router.getHomeRoute(navigator)} 
          style={{ flex: 1, backgroundColor: 'black'}} 
          navigationBarStyle={{backgroundColor: 'rgba(26, 28, 28, 0.0)', borderBottomWidth:0}} 
          barButtonIconStyle={{tintColor: GLOBALS.COLORS.ALT1 ,zIndex: 0}} 
          sceneStyle={{ backgroundColor: GLOBALS.COLORS.MAIN, paddingTop: 0, zIndex:1}}
      /> 
      

    )
  }
}


export default InitScreen