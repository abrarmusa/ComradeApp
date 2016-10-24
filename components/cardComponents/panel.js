import React, { Component, } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Dimensions,  PanResponder} from 'react-native'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';
var {height, width} = Dimensions.get('window');
import GLOBALS from '../globals'
// const { Surface } = require("gl-react-native"); // in React Native context
// import {Hudson} from "gl-react-instagramfilters";


class Panel extends Component {

  render() {
    let imgPath;
    if (this.props.style == 'weightlifter'){
      imgPath = <Image style={styles.lifticon} source={require('../../images/weightlifter.png')} />;
    } else if (this.props.style == 'bodybuilder') {
      imgPath = <Image style={styles.lifticon} source={require('../../images/bodybuilder.png')} />;
    } else if (this.props.style == 'powerlifter') {
      imgPath = <Image style={styles.lifticon} source={require('../../images/powerlifter.png')} />;
    };
    return (        
        <View style={[styles.cardface, this.props.panelStyle, {left: ((width-(width/1.1))/2), top: ((height-(height/1.4))/2)-50}]}>
          <Image style={[styles.thumbnail,this.props.imageStyle]} 
                  indicator={Progress.CircleSnail}
                  indicatorProps={{
                    size: 80,
                    color: GLOBALS.COLORS.ALT1
                  }} 
                  source={{uri: this.props.images[1]}}  
            />
        <LinearGradient start={[0.0, 1.0]} locations={[0.0,0.3,0.5,0.8, 0.9]} end={[0.0, 0.0]} colors={['rgba(0,0,0, 1.0)', 'rgba(0,0,0, 0.8)', 'rgba(0,0,0, 0.6)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.0)' ]}  style={[styles.rect,{height: 200}]} >
          
            <Text style={styles.title}>{this.props.name.split(" ")[0]}</Text>
            <Text style={styles.titletext}>{this.props.age} years - {this.props.weight} kg - {this.props.style}</Text>
        </LinearGradient>
        </View> 
      
        
    )
  }
}

const styles = StyleSheet.create({

  thumbnail: {
    flex: 1,
    borderRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: width/1.1,
    height: height/1.4,
    resizeMode: 'cover',
//     borderWidth: 1,
//     borderRadius: 5,
  
  },
  title: {
    fontSize: 20,
    paddingTop: 7,
    paddingLeft: 9,
    color: GLOBALS.COLORS.ALT2,
    backgroundColor: 'transparent',
    margin: 10,
    bottom: 60,
    textAlign: 'center',
    position: 'absolute',
    fontSize: 38,
    fontFamily: "Porter-BoldDEMO",
  },
  titletext: {
    fontSize: 18,
    paddingLeft: 9,
    color: GLOBALS.COLORS.TEXT1,
    backgroundColor: 'transparent',
    margin: 10,
    bottom: 30,
    left: 5,
    position: 'absolute',
    fontSize: 22,
    fontFamily: "AvenirNext-UltraLight",
    fontWeight: '500'
  },  
  cardface: {
    borderRadius: 5,
    backgroundColor: GLOBALS.COLORS.ALT3,
  },
  rect: {
    position: 'absolute',
    width: width/1.1,
    bottom: 0,
    borderRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,    
//     zIndex: 500
  },
  lifticon: {
    height: 60,
    position: 'absolute',
    left: 65,
    bottom: 25,
    resizeMode: 'contain'
  },
})

export default Panel