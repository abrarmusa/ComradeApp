import React, { Component, } from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import FlipCard from 'react-native-flip-card'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';
import Panel from './cardComponents/panel'
import NoMoreCards from './cardComponents/noMoreCards'
var {height, width} = Dimensions.get('window');


const Cards = [
  {key:1, name: 'KIANOUSH\nROUSTAMI', image: 'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2016/08/12/2016-08-12-Weightlifting-Men-85kg-Women-75kg-inside-01.jpg'},
  {key:2, name: 'TIAN\nTAO', image: 'http://flo-static-assets.s3.amazonaws.com/uploads/api/57bc63520b380.jpeg'},
  {key:3, name: 'BART\nKWAN', image: 'http://royalgram.co.uk/wp-content/uploads/2015/07/Meester-@bartkwan-says-buy-a-pair-of-Camo-Gangsta-wraps-before-he-goes-all-Bruce-Lee-all-over-face-H.jpg'},
  {key:4, name: 'NIKKI\nBLACKETTER', image: 'https://yt3.ggpht.com/-9zzvbyOfmko/AAAAAAAAAAI/AAAAAAAAAAA/QvN6Z4C9x9M/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}
]

const Cards2 = [
  
]


class CardsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: Cards,
      outOfCards: false
    }
  }
  handleYup (card) {
    console.log("yup")
  }
  handleNope (card) {
    console.log("nope")
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
  render() {


    return (

        <SwipeCards 
            cards={this.state.cards}
            stack={true}
            stackOffsetY={-15}
            stackOffsetX={0}
            loop={false}
            renderCard={(cardData) => <Panel {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            onClickHandler={() => {alert('byebye')}}
            showYup={true}
            showNope={true}
            handleYup={this.handleYup.bind(this)}
            handleNope={this.handleNope.bind(this)}
            cardRemoved={this.cardRemoved.bind(this)}
        />  

     

    )
  }
}

const styles = StyleSheet.create({

})

export default CardsPage