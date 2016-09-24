import React from 'react'
import { View, Text } from 'react-native'
import StartScreen from './startScreen.js'
import FormScreen from './formScreen.js'
import HomeScreen from './homeScreen.js'
import { Button } from 'react-native-elements'
let Router = {
//   MAIN PAGE ROUTE
  getInitialRoute() {
    console.log('Getting Initia; route');
    return {
      getSceneClass() {
        return StartScreen;
      }
    };
  },

// FORM PAGE ROUTE
  getFormRoute() {
    console.log('Getting form route');
    return {
      renderScene(navigator) {
        return <FormScreen navigator={navigator} />;
      },
      renderTitle() {
        return <Text style={{marginTop: 11, color: '#48BBEC'}}>Create an account</Text>
      }  
    };
  },
  
  getHomeRoute(){
    console.log('Getting Home route');
    return {
      showNavigationBar: false,
      renderScene(navigator) {
        return <HomeScreen navigator={navigator}/>;
      },
    }

  }
  
//
};

export default Router;