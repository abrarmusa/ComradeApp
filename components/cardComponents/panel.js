import React, { Component, } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Dimensions,  PanResponder} from 'react-native'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';
var {height, width} = Dimensions.get('window');
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
                    color: '#c1912e'
                  }} 
                  source={{uri: this.props.images[1]}}  
            >

        </Image>
          
            <View style={{height: 100, backgroundColor: '#28292B'}}>
              {imgPath}   
              <Text style={styles.title}>{this.props.name.split(" ")[0]}</Text>
              <Text style={styles.titletext}>{this.props.weight} {this.props.style}</Text>
            </View>

            
            
            
            


            
        </View> 
      
        
    )
  }
}

const styles = StyleSheet.create({

  thumbnail: {
    flex: 1,
    width: width/1.1,
    height: height/1.4 -100,
    resizeMode: 'cover',
//     borderWidth: 1,
//     borderRadius: 5,
  
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
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#28292B',
    shadowColor: "white",
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
    height: 100,
    padding: 5,
    margin: 0,
    width: width/1.1,

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