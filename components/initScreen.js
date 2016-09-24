import React, { Component, } from 'react'
import { View, StatusBar} from 'react-native'
import StartScreen from './startScreen.js'
import FormScreen from './formScreen.js'
import { Button } from 'react-native-elements'
import Router from './router'
import ExNavigator from '@exponent/react-native-navigator';



class InitScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
//         <ExNavigator initialRoute={Router.getInitialRoute()} 
//           style={{ flex: 1, backgroundColor: '#161b21'}} 
//           navigationBarStyle={{backgroundColor: '#161b21', borderBottomWidth:0}} 
//           barButtonIconStyle={{tintColor: '#48BBEC'}} 
//           sceneStyle={{ backgroundColor: '#161b21', paddingTop: 40 }}
//       />
      
        <ExNavigator 
          initialRoute={Router.getHomeRoute()} 
          style={{ flex: 1, backgroundColor: '#161b21'}} 
          navigationBarStyle={{backgroundColor: '#161b21', borderBottomWidth:0}} 
          barButtonIconStyle={{tintColor: '#48BBEC'}}
          showNavigationBar={false}
          sceneStyle={{ backgroundColor: '#161b21', paddingTop: 0 }}
      />
      

    )
  }
}

export default InitScreen