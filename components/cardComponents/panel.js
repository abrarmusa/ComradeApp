import React, { Component, } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Dimensions,  PanResponder} from 'react-native'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';

var {height, width} = Dimensions.get('window');



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
      
        <View style={[styles.cardface, this.props.panelStyle, {left: ((width-(width/1.2))/2), top: ((height-(height/1.4))/2)-40 }]}>
        
        <Image style={[styles.thumbnail,this.props.imageStyle]} 
                  indicator={Progress.CircleSnail}
                  indicatorProps={{
                    size: 80,
                    color: '#48BBEC'
                  }} 
                  source={{uri: this.props.image}}  
            />
            
            <LinearGradient start={[0.0, 0.0]} locations={[0.0,0.5,0.8]} end={[0.0, 1.0]} colors={['rgba(22,27,33, 0.7)', 'rgba(22,27,33, 0.5)', 'rgba(22,27,33, 0)']}  style={[styles.rect,{ top: 0, height: 140}, styles.toprect]} >
              {imgPath}
            </LinearGradient>
            <LinearGradient start={[0.0, 0.0]} end={[1, 1]} locations={[0,0.2,0.3,0.4,0.5]} colors={['#c1912e', 'rgba(70, 186, 236, 0.8)','rgba(70, 186, 236, 0.7)', 'rgba(70, 186, 236, 0.4)','rgba(0, 0, 0, 0.0)']} style={[styles.triangle]} />
            
            
            <Text style={styles.title}>{this.props.name.split(" ")[0]}</Text>
            <Text style={styles.titletext}>{this.props.weight} {this.props.style}</Text>

            
        </View> 
      
        
    )
  }
}

const styles = StyleSheet.create({
  face: {
    backgroundColor: '#161b21',
    borderRadius: 5,
    borderColor: '#c1912e',
  },
  thumbnail: {
    flex: 1,
    width: width/1.2,
    height: height/1.4,
    resizeMode: 'cover',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c1912e',    
  },
  title: {
    fontSize: 20,
    paddingTop: 7,
    paddingLeft: 9,
    color: 'white',
    backgroundColor: 'transparent',
    margin: 10,
    top: 5,
    left: 5,
    position: 'absolute',
    fontSize: 32,
    fontFamily: "AvenirNext-UltraLight",
    fontWeight: '300'
  },
  titletext: {
    fontSize: 20,
    paddingLeft: 9,
    color: 'white',
    backgroundColor: 'transparent',
    margin: 10,
    top: 45,
    left: 5,
    position: 'absolute',
    fontSize: 22,
    fontFamily: "AvenirNext-UltraLight",
    fontWeight: '300'
  },  
  text: {
    fontSize: 20,
    paddingTop: 5,
    marginBottom: 5,
    color: 'white',
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    marginLeft: 10,
    width: width/1.2 - 20,
    fontSize: 20,
    fontFamily: "AvenirNext-UltraLight",
    fontWeight: '100'
  },
  cardface: {
    borderRadius: 5,
    borderColor: '#c1912e',
    backgroundColor: '#161b21',
    shadowColor: "#c1912e",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    },
  },
  triangle: {
    position: 'absolute',
    width: 0,
    top: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    marginTop: 10,
    marginLeft: 10,
    borderRightWidth: 150,
    borderBottomWidth: 150,
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(0,0,0,0)'
  },
  rect: {
    flex: 1,
    width: width/1.2,
    position: 'absolute',
    padding: 5,
    margin: 1,
    width: width/1.2 -2,
    borderRadius: 5,
    backgroundColor: 'transparent',
    
  },
  toprect: {
    margin: 1,
    width: width/1.2 -2,
  },

  bottomrect: {
   width: width/1.2 -2,
   bottom: 1
  },
  lifticon: {
    height: 60,
    position: 'absolute',
    left: 65,
    top: 25,
    resizeMode: 'contain'
  },
})

export default Panel