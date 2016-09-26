import React, { Component, } from 'react'
import { View, StatusBar} from 'react-native'
import StartScreen from './startScreen.js'
import FormScreen from './formScreen.js'
import { Button } from 'react-native-elements'
import Router from './router'
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
//         <ExNavigator initialRoute={Router.getInitialRoute()} 
//           style={{ flex: 1, backgroundColor: '#161b21'}} 
//           navigationBarStyle={{backgroundColor: 'rgba(22, 27, 33,0.5)', borderBottomWidth:0, zIndex: 1}} 
//           barButtonIconStyle={{tintColor: '#48BBEC'}} 
//           sceneStyle={{ backgroundColor: '#161b21', paddingTop: 40 }}
//       />
      
        <ExNavigator 
          initialRoute={Router.getHomeRoute()} 
          style={{ flex: 1, backgroundColor: '#161b21'}} 
          navigationBarStyle={{backgroundColor: 'rgba(22, 27, 33,0.5)', borderBottomWidth:0, zIndex: 1}} 
          barButtonIconStyle={{tintColor: '#48BBEC'}}
          sceneStyle={{ backgroundColor: '#161b21', paddingTop: 40 }}
      />
      

    )
  }
}


export default InitScreen