import React, { Component, } from 'react'
import {StyleSheet, View, Text, Dimensions, StatusBar, TouchableOpacity, Animated} from 'react-native'
import Image from 'react-native-image-progress';
import { ButtonGroup, Icon } from 'react-native-elements'
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';
import Router from './router'
import Panel from './cardComponents/panel'
import NoMoreCards from './cardComponents/noMoreCards'
var {height, width} = Dimensions.get('window');


const Cards = [
  {key:1, name: 'KIANOUSH ROUSTAMI',from: "../../images/flags/Iran.png",height:"5ft 9in", weight:"85", goals:"I want to achieve a 230kg Clean & Jerk and a 215kg Snatch within the next year", gym:"Iran Olympic Weightlifting Centre" ,certifications: [], style:"weightlifter", achievements: "217kg Clean & Jerk, 187kg Snatch, 2016 Olympic Gold Medalist" , images: ["https://67.media.tumblr.com/17c959cd2e576919b97a4867456e27ff/tumblr_o4vn82v8di1qbrivdo1_500.gif", "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2016/08/12/2016-08-12-Weightlifting-Men-85kg-Women-75kg-inside-01.jpg", "http://c8.alamy.com/comp/F760M7/houston-texas-usa-25th-november-2015-kianoush-rostami-lifts-173-kilograms-F760M7.jpg" ]},
  {key:2, name: "LU XIAOJUN",from: "../../images/flags/China.png",height:"5ft 8in", weight:"77", goals:"I want to achieve a 230kg Clean & Jerk and a 215kg Snatch within the next year and win Olympic Gold in the mens 77kg class in weightlifting at Tokyo 2020",gym:"Chinese Olympic Weightlifting Centre", certifications: [], style:"weightlifter", achievements: "207kg Clean & Jerk, 185kg Snatch, 2016 Olympic Silver Medalist" ,  images: [ "https://i.imgur.com/JxvIWks.gif","http://flo-static-assets.s3.amazonaws.com/uploads/api/57bc63520b380.jpeg", "http://img.news.sina.com/sports/p/2011/1111/U47P5029T2D413358F31DT20111111180940.jpg" ]},
  {key:3, name: "BART KWAN",from: "../../images/flags/USA.png",height:"5ft 9in", weight:"95 kg", goals:"I want to come in first place at the LA FitExpo powerlifting meet next year", gym:"Barbell Brigade LA", certifications: [], style:"powerlifter", achievements: "355lb bench, 600lb deadlift, 525lb squat" , images: [ "https://j.gifs.com/98p8LJ.gif" , "https://67.media.tumblr.com/12f36e0a9922b4bf914d473861ec88f5/tumblr_nof5k2ib301rs2stqo1_500.jpg", "http://royalgram.co.uk/wp-content/uploads/2015/07/Meester-@bartkwan-says-buy-a-pair-of-Camo-Gangsta-wraps-before-he-goes-all-Bruce-Lee-all-over-face-H.jpg"]},
  {key:4, name: "NIKKI BLACKETTER",from: "../../images/flags/England.png",height:"5ft 6in", weight:"55 kg", goals: "Have a more toned body by lowering body fat percentage through regular intense workouts", gym:"Barbell Brigade LA", certifications: [], style:"bodybuilder", achievements: "Gymshark Athlete" , images: ["https://45.media.tumblr.com/1a639b1822518334eb45784f1cd4844f/tumblr_o2p95nBwfR1sqw7fko1_400.gif", "https://yt3.ggpht.com/-9zzvbyOfmko/AAAAAAAAAAI/AAAAAAAAAAA/QvN6Z4C9x9M/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", "http://www.girlswithmuscle.com/images/full/869471746.jpg" ]}
]

const Cards2 = [
  
]


class CardsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: Cards,
      outOfCards: false,
      selectedIndex: 2,
    }
  }

  
  clickHandle (card){
    console.log(card)
    let route = Router.getAthleteProfile(card);
    this.props.navigator.push(route);
  }
  handleYup (card) {
    console.log("yup")
  }
  handleNope (card) {
    console.log("nope")
  }
  
  yesButton(){
    var that = this.refs.cardswipe;
    that._forceRightSwipe()
  }
  
  noButton(){
    var that = this.refs.cardswipe;
    that._forceLeftSwipe()
  }
  cardRemoved (index) {
    console.log(`The index is ${index}`);
    let CARD_REFRESH_LIMIT = 3
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }
    }
  }
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
  buttonPress(){
    console.log('pressed button');
  }
  
  render() {

    const buttons = ['Hello', 'World', 'Buttons'];
    return (
      <View>
      <View style={{paddingTop:40, zIndex:10, height: height}} >
        <StatusBar barStyle="default" />   
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
            <Icon large  name='x' type='foundation' color='red' containerStyle={{borderColor: 'red', backgroundColor: '#28292B', borderWidth: 3, height: 80, width: 80, borderRadius: 50}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonright} onPress={this.yesButton.bind(this)} activeOpacity={0.2}>
            <Icon  large name='check'  type='foundation' color='lightgreen' containerStyle={{borderColor: 'lightgreen', backgroundColor: '#28292B',borderWidth: 3, height: 80, width: 80, borderRadius: 50}}/>
          </TouchableOpacity>

        </View>
      </View>


     

    )
  }
}

const styles = StyleSheet.create({
  buttonsect: {
//     flex: 1,
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
  buttontext: {
    fontSize: 18
  },
  iconcirc: {
    borderColor: 'red',
    borderWidth: 2,
  }
})

export default CardsPage