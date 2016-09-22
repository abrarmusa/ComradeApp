/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import SplashScreen from "rn-splash-screen";
import StartScreen from './components/startScreen.js'
import MainScreen from './components/mainScreen.js'
SplashScreen.hide();
class ComradeApp extends Component {
  render() {
    return (
      <MainScreen />
    );
  }
}


AppRegistry.registerComponent('ComradeApp', () => ComradeApp);
