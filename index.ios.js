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
import InitScreen from './components/initScreen.js'
SplashScreen.hide();
class ComradeApp extends Component {
  render() {
    return (
      <InitScreen />
    );
  }
}


AppRegistry.registerComponent('ComradeApp', () => ComradeApp);
