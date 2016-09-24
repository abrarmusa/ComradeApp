import React, { Component, } from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import FlipCard from 'react-native-flip-card'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import SwipeCards from 'react-native-swipe-cards';
import LinearGradient from 'react-native-linear-gradient';

var {height, width} = Dimensions.get('window');


class Panel extends Component {
  render() {
    return (
      
          <FlipCard style={styles.cardface}
                    flipHorizontal={true}
            flipVertical={false}
            friction={6}
            perspective={1000}
            >
          {/* Face Side */}
          <View style={styles.face}>

           <Image style={styles.thumbnail} 
                  indicator={Progress.CircleSnail}
                  indicatorProps={{
                    size: 80,
                    color: '#48BBEC'
                  }} 
                  source={{uri: this.props.image}}  
            />
            <View style={styles.triangle}/>
            <LinearGradient start={[0.0, 0.0]} end={[1, 1]} locations={[0,0.2,0.3,0.4,0.5]} colors={['rgba(70, 186, 236, 1)', 'rgba(70, 186, 236, 0.8)','rgba(70, 186, 236, 0.7)', 'rgba(70, 186, 236, 0.4)','rgba(0, 0, 0, 0.0)']} style={styles.triangle} />
            
            <Text style={styles.title}>{this.props.name}</Text>


          </View>
          {/* Back Side */}
          <View style={styles.face}>
           <Image style={styles.thumbnail} 
                  indicator={Progress.CircleSnail}
                  indicatorProps={{
                    size: 80,
                    color: '#48BBEC'
                  }} 
                  source={{uri: this.props.image}}  
            />
          <Text style={styles.text}>This is card {this.props.name}</Text>
          </View>
        </FlipCard> 
      
   
//       <View style={styles.card}>

//       </View>
    )
  }
}

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

const Cards = [
  {name: 'KIANOUSH\nROUSTAMI', image: 'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2016/08/12/2016-08-12-Weightlifting-Men-85kg-Women-75kg-inside-01.jpg'},
]

const Cards2 = [
  {name: 'TIAN\nTAO', image: 'http://flo-static-assets.s3.amazonaws.com/uploads/api/57bc63520b380.jpeg'},
  {name: 'BART\nKWAN', image: 'http://royalgram.co.uk/wp-content/uploads/2015/07/Meester-@bartkwan-says-buy-a-pair-of-Camo-Gangsta-wraps-before-he-goes-all-Bruce-Lee-all-over-face-H.jpg'},
  {name: 'NIKKI\nBLACKETTER', image: 'https://yt3.ggpht.com/-9zzvbyOfmko/AAAAAAAAAAI/AAAAAAAAAAA/QvN6Z4C9x9M/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}
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
        containerStyle={{backgroundColor:'transparent', padding: 10, zIndex: 5}}
        cards={this.state.cards}
        loop={false}
        nopeStyle={{bottom: -20}}
        renderCard={(cardData) => <Panel {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
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
  card: {
    alignItems: 'center',
    borderRadius: 0,
    overflow: 'hidden',
    borderColor: 'transparent',  
    backgroundColor: '#161b21',
    borderWidth: 0,
//     elevation: 1,
    shadowColor: "red",
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: {
      height: 10,
      width: 20
    }    
  },
  face: {
    backgroundColor: '#161b21'
  },
  thumbnail: {
    flex: 1,
    width: width/1.1,
    height: height/1.3,
  },
  overlay: {
    flex: 1,
    width: 300,
    height: 400,
    position: 'absolute',
    top: 0
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
    fontSize: 20,
    fontFamily: "AvenirNext-UltraLight",
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
    borderWidth: 0,
    backgroundColor: '#161b21',
    shadowColor: "rgba(70, 186, 236, 1)",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    }
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
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})

export default CardsPage