import React, { Component, } from 'react'
import {StyleSheet, View, Text, Dimensions, StatusBar, TouchableOpacity, Animated, Linking} from 'react-native'
import Image from 'react-native-image-progress';
import { ButtonGroup, Icon } from 'react-native-elements'
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';
import Router from '../router'
import GLOBALS from '../globals'
import Auth from '../auth'
import Panel from './cardComponents/panel'
import NoMoreCards from './cardComponents/noMoreCards'

var {height, width} = Dimensions.get('window');


class CardsPage extends Component {
// -------------------------------------------------------------    
  constructor(props) {
    super(props)
    this.state = {
      cards: GLOBALS.CARDS,
      outOfCards: false,
      selectedIndex: 2,
    }
  }
// -------------------------------------------------------------    
  clickHandle (card){
    console.log(card)
  }
// -------------------------------------------------------------    
  handleYup (card) {
    console.log("yup")
  }
// -------------------------------------------------------------    
  handleNope (card) {
    console.log("nope")
  }
// -------------------------------------------------------------    
  yesButton(){
    var that = this.refs.cardswipe;
    that._forceRightSwipe()
  }
// -------------------------------------------------------------    
  noButton(){
    var that = this.refs.cardswipe;
    that._forceLeftSwipe()
  }
// -------------------------------------------------------------    
  cardRemoved (index) {
    console.log(`The index is ${index}`);
    let CARD_REFRESH_LIMIT = 3
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
      if (!this.state.outOfCards) {
        console.log(`Adding ${GLOBALS.CARDS2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(GLOBALS.CARDS2),
          outOfCards: true
        })
      }
    }
  }
 // -------------------------------------------------------------   
  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs["form"].getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      console.log(Router.getHomeRoute());
      let route = Router.getHomeRoute();
      this.props.navigator.push(route);

    } else {
      let route = Router.getHomeRoute();
      this.props.navigator.push(route);
//       REPLACE THE FORM PAGE WITH
//       this.props.navigator.replaceAtIndex(replacerRoute, 1, function(){
//       
//     })
    }
  }
// -------------------------------------------------------------    
  buttonPress(){
    console.log('pressed button');
  }
// ======================================================================== RENDERER ========================================================================  
  render() {
    const buttons = ['Hello', 'World', 'Buttons'];
    return (
      <View>
      <View style={{paddingTop:40, zIndex:10, height: height}} >
        <StatusBar barStyle="light-content" />   
         <SwipeCards 
            cards={this.state.cards}
            stack={true}
            stackOffsetY={-15}
            stackOffsetX={0}
            loop={false}
            renderCard={(cardData) => <Panel {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            onClickHandler={this.clickHandle.bind(this)}
            showYup={false}
            showNope={false}
            handleYup={this.handleYup.bind(this)}
            handleNope={this.handleNope.bind(this)}
            cardRemoved={this.cardRemoved.bind(this)}
            ref='cardswipe'
        />
      </View>
        <View style={styles.buttonsect}>
          <TouchableOpacity style={styles.buttonleft} onPress={this.noButton.bind(this)} activeOpacity={0.2}>
            <Icon large  name='x' type='foundation' color='red' containerStyle={{borderColor: 'red', backgroundColor: GLOBALS.COLORS.MAIN, borderWidth: 3, height: 80, width: 80, borderRadius: 50}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonright} onPress={this.yesButton.bind(this)} activeOpacity={0.2}>
            <Icon  large name='check'  type='foundation' color='lightgreen' containerStyle={{borderColor: 'lightgreen', backgroundColor: GLOBALS.COLORS.MAIN,borderWidth: 3, height: 80, width: 80, borderRadius: 50}}/>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}
// ======================================================================== STYLESHEET ========================================================================
const styles = StyleSheet.create({
  buttonsect: {
    zIndex: 300,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonleft: {
    alignItems:'flex-end',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 60,
    width: 60,
    marginRight: 15,
    flex: 1,
  },
  buttonright: {
    alignItems:'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 60,
    width: 60,
    marginLeft: 15,
    flex: 1,
  },
})

export default CardsPage