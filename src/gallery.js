import React, { Component, } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar, ListView, TouchableOpacity} from 'react-native'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements';
import GLOBALS from './globals'
var {height, width} = Dimensions.get('window');

class Gallery extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {};
    console.log(this.props);
  }
  
  render() {
    let counter = 0;
    return (
    
  )
  }
}

export default Gallery