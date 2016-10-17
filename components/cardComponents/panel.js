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

                    
        <View style={[styles.cardface, this.props.panelStyle, {left: ((width-(width/1.1))/2), top: ((height-(height/1.4))/2)-50}]}>

        <Image style={[styles.thumbnail,this.props.imageStyle]} 
                  indicator={Progress.CircleSnail}
                  indicatorProps={{
                    size: 80,
                    color: '#c1912e'
                  }} 
                  source={{uri: this.props.images[1]}}  
            >

        </Image>
            
            <LinearGradient start={[0.0, 1.0]} locations={[0.0,0.5,0.8, 0.9]} end={[0.0, 0.0]} colors={['rgba(5, 5, 5, 1.0)', 'rgba(5, 5, 5, 0.8)', 'rgba(5, 5, 5, 0.4)', 'rgba(5, 5, 5, 0.0)' ]}  style={[styles.rect,{height: 120}, styles.toprect]} >
              {imgPath}
            </LinearGradient>
            
            
            
            <Text style={styles.title}>{this.props.name.split(" ")[0]}</Text>
            <Text style={styles.titletext}>{this.props.weight} {this.props.style}</Text>

            
        </View> 
      
        
    )
  }
}

const styles = StyleSheet.create({

  thumbnail: {
    flex: 1,
    width: width/1.1,
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
    bottom: 50,
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
    bottom: 30,
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
    width: width/1.1 - 20,
    fontSize: 20,
    fontFamily: "AvenirNext-UltraLight",
    fontWeight: '100'
  },
  cardface: {
    borderRadius: 5,
    borderColor: '#c1912e',
    backgroundColor: 'black',
    shadowColor: "#c1912e",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    },
  },
  rect: {
    flex: 1,
    width: width/1.1,
    position: 'absolute',
    bottom: 0,
    padding: 5,
    margin: 1,
    width: width/1.1,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,    
    borderColor: '#c1912e',
    backgroundColor: 'transparent',
  },
  toprect: {
    margin: 0,
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