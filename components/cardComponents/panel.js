import React, { Component, } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Dimensions,  PanResponder} from 'react-native'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';

var {height, width} = Dimensions.get('window');



class Panel extends Component {

  render() {
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
          

            <LinearGradient start={[0.0, 0.0]} end={[1, 1]} locations={[0,0.2,0.3,0.4,0.5]} colors={['rgba(70, 186, 236, 1)', 'rgba(70, 186, 236, 0.8)','rgba(70, 186, 236, 0.7)', 'rgba(70, 186, 236, 0.4)','rgba(0, 0, 0, 0.0)']} style={styles.triangle} />
        
            <Text style={styles.title}>{this.props.name.split(" ")[0]}</Text>
            <LinearGradient start={[0.0, 0.0]} locations={[0.0,0.1,0.3]} end={[0.0, 1.0]} colors={['rgba(70, 186, 236, 0)', 'rgba(70, 186, 236, 0.5)', 'rgba(70, 186, 236, 1)']}  style={styles.rect} >
        
              <Text style={styles.text}>{this.props.weight} {this.props.style}</Text>
              <Text style={styles.text}>{this.props.achievements}</Text>
            </LinearGradient>
        </View> 
      
        
    )
  }
}

const styles = StyleSheet.create({
  face: {
    backgroundColor: '#161b21',
    borderRadius: 5,
    borderColor: 'rgba(70, 186, 236, 1)',
  },
  thumbnail: {
    flex: 1,
    width: width/1.2,
    height: height/1.4,
    resizeMode: 'cover',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',    
  },
  maincard: {
    backgroundColor: 'rgba(255,255,255, 1)',
    padding: 1
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
    fontFamily: "Porter-BoldDEMO",
    fontWeight: '500'
  },  
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    backgroundColor: 'transparent',
    margin: 10,
    fontSize: 20,
    fontFamily: "AvenirNext-UltraLight",
    fontWeight: '300'
  },
  cardface: {
    borderRadius: 5,
    borderColor: 'rgba(70, 186, 236, 1)',
    backgroundColor: '#161b21',
    shadowColor: "rgba(70, 186, 236, 1)",
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
    bottom: 0,
    borderRadius: 6,
    
  }
})

export default Panel