import React, { Component, } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, StatusBar} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');
class AthleteProfile extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  } 

  render() {
    return (

    <ParallaxScrollView
//       backgroundColor="rgba(0,0,0,0.3)"
      contentBackgroundColor="white"
      parallaxHeaderHeight={300}
     
//       stickyHeaderHeight={400}
      renderForeground={() => (
      <Swiper style={styles.wrapper} showsButtons={true}  nextButton={<Text style={styles.buttonText}>›</Text>}>
        <View style={styles.slide1}>
          <Image source={{uri: this.props.athlete.gif}} style={styles.image}/>
        </View>
        <View style={styles.slide2}>
          <Image source={{uri: this.props.athlete.image}} style={styles.image}/>
        </View>
      </Swiper>          
//       <View>
//         <Image source={{uri: this.props.athlete.gif}} style={styles.image}/>
//         <Text>{this.props.athlete.name}</Text>
          

//       </View>
      )}
      >
   <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />        
      <View style={{ height: 500 }}>
        <Image source={{uri: this.props.athlete.image}} style={styles.face}/>
        <Text>Scroll me</Text>
      </View>
    </ParallaxScrollView>      
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 300,
    top:0
  },
  face: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    left: width/2-50,
    position: 'absolute',
    top:-50,
    zIndex: 4,
    borderColor: 'white',
    shadowColor: "#48BBEC",
    shadowOpacity: 0.8,
    shadowRadius: 50,
    shadowOffset: {
      height: 2,
      width: 5
    },    
  },
  title: {
    color: 'white'
  },
  wrapper: {
  },
  slide1: {
  },
  slide2: {
  },
  slide3: {
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }  
});
export default AthleteProfile