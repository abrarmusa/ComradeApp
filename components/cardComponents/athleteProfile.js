import React, { Component, } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements'
var {height, width} = Dimensions.get('window');


class AthleteProfile extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  } 

  render() {
    let imgPath;
    if (this.props.athlete.style == 'weightlifter'){
      imgPath = <Image style={{height:40, width: 40, alignSelf: 'center', zIndex: 10}}  source={require('../../images/weightlifter_dark.png')}/>;
    } else if (this.props.athlete.style == 'bodybuilder') {
      imgPath = <Image style={{height:40, width: 40, alignSelf: 'center', zIndex: 10}}  source={require('../../images/bodybuilder_dark.png')}/>;
    } else if (this.props.athlete.style == 'powerlifter') {
      imgPath = <Image style={{height:40, width: 40, alignSelf: 'center', zIndex: 10}} source={require('../../images/powerlifter_dark.png')}/>;
    };    
    return (

    <ParallaxScrollView
//       backgroundColor="rgba(0,0,0,0.3)"
      contentBackgroundColor="#c1912e"
      parallaxHeaderHeight={500}
     
//       stickyHeaderHeight={400}
      renderForeground={() => (
        <View>
          <Swiper 
            style={styles.wrapper} 
            showsButtons={true}  
            buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: -100, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'}}
            nextButton={
            <Icon
              size={50}
              name='chevron-right'
              type='evilicon'
              color='#c1912e'/>}
            prevButton={
            <Icon
              size={50}
              name='chevron-left'
              type='evilicon'
              color='#c1912e'/>}           
              >
            {this.props.athlete.images.map(function(item, index){
              console.log(item);
              return(
                <View style={styles.slide2} key={index}>
                  <Image source={{uri: item}} style={styles.image}
                    indicator={Progress.CircleSnail}
                    indicatorProps={{
                      size: 80,
                      color: '#c1912e'
                    }} />                  
                </View>         
              )

            }.bind(this))
                                           }


            </Swiper> 
          </View>


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
      <LinearGradient start={[0.0, 1.0]} locations={[0.0,0.3,0.5,0.8, 0.9]} end={[0.0, 0.0]} colors={['rgba(193, 145, 46, 1.0)', 'rgba(193, 145, 46, 0.8)', 'rgba(193, 145, 46, 0.6)', 'rgba(193, 145, 46, 0.2)', 'rgba(193, 145, 46, 0.0)' ]}  style={[styles.rect,{height: 200}]} />
       <View style={styles.bignamecont}>
         <Text style={styles.bigname}>{this.props.athlete.name.split(" ")[0]}</Text>
         <Text style={styles.bigname}>{this.props.athlete.name.split(" ")[1]}</Text>
        </View>
        <View style={{ height: 500, backgroundColor: 'transparent' }}>
        <View style={styles.captions}>
          <View style={styles.captextblock}>
            <Text style={styles.bodytextbig}>{this.props.athlete.height}</Text>
            <Image
            style={{height:40, width: 40, alignSelf: 'center'}}
            source={require('../../images/height.png')}/>
          </View>          
          <View style={styles.captextblock}>
            <Text style={styles.bodytextbig}>{this.props.athlete.weight}</Text>
            <Image
            style={{height:40, width: 40, alignSelf: 'center'}}
            source={require('../../images/weight.png')}/>
          </View>
          <View style={styles.captextblock}>
            <Text style={styles.bodytextbig}>{this.props.athlete.style}</Text>
            {imgPath}
          </View>

        </View>
        <View style={styles.bodysectionheader}>
          <Icon
            size={20}
            name='map-o'
            type='font-awesome'
            color='#28292B'/>    
          <Text style={styles.bodytexttitlebig}>Works out at</Text>
        </View>
        <View style={styles.bodysection}>
          <Text style={styles.bodysectiontext}>{this.props.athlete.gym}</Text>
        </View>            
        <View style={styles.bodysectionheader}>
          <Icon
            size={20}
            name='trophy'
            type='font-awesome'
            color='#28292B'/>    
          <Text style={styles.bodytexttitlebig}>Achievements</Text>
        </View>
        <View style={styles.bodysection}>
          <Text style={styles.bodysectiontext}>{this.props.athlete.achievements}</Text>
        </View>   
        <View style={styles.bodysectionheader}>
          <Icon
            size={20}
            name='flag-checkered'
            type='font-awesome'
            color='#28292B'/>    
          <Text style={styles.bodytexttitlebig}>Goals</Text>
        </View>
        <View style={styles.bodysection}>
          <Text style={styles.bodysectiontext}>{this.props.athlete.goals}</Text>
        </View>
        <View style={styles.bodysectionheader}>
          <Icon
            size={20}
            name='instagram'
            type='font-awesome'
            color='#28292B'/>    
          <Text style={styles.bodytexttitlebig}>Instagram</Text>
        </View>
        <View style={styles.bodysection}>
          <Text style={styles.bodysectiontext}>{this.props.athlete.goals}</Text>
        </View>          
           
      </View>
    </ParallaxScrollView>      
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 500,
    resizeMode: 'cover'
  },
  face: {
    height: 70,
    width: 70,
    borderRadius: 35,
//     borderWidth: 2,
    left: 20,
    position: 'absolute',
    top:-35,
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
  },
  buttonText:{
    fontSize: 32,
    color: '#c1912e',
    bottom: 500
  },
  wrapper: {
    position: 'relative',
    top: 0
  },
  captions: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    position: 'absolute',
    top: -80,
    zIndex: 18
  },
  bodysectionheader: {
    flexDirection: 'row',
    marginTop: 20,
    borderColor: '#28292B',
    borderBottomWidth: 2,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    marginLeft:30,
    marginRight:30
  }, 
  bodysection: {
    alignItems: 'flex-start',
    marginLeft:30,
    marginRight:30
  },   
  bodysectiontext: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Avenir',
    fontWeight: '900',
    textAlign: 'left',
    color: '#28292B',
    fontSize: 18
  },    
  captext: {
    fontFamily: 'Porter-BoldDEMO',
    textAlign: 'center',
    color: '#28292B'
  },
  bodytextbig: {
    fontFamily: 'Avenir',
    fontWeight: '900',
    textAlign: 'center',
    color: '#28292B',
    fontSize: 18
  },  
  bodytexttitlebig: {
    fontFamily: 'Avenir',
    fontWeight: '900',
    textAlign: 'center',
    marginLeft: 5,
    color: '#28292B',
    fontSize: 20
  },    
  captextblock: {
    flex: 1,
    alignSelf: 'stretch',
  },  
  bignamecont:{
    top: -100,
    backgroundColor: 'transparent',
    zIndex: 6,
  },
  bigname:{
    fontSize: 44,
    color: '#28292B',
    fontFamily: "Porter-BoldDEMO",
    textAlign: 'center'
  },
  rect: {
    flex: 1,
    width: 400,
    position: 'absolute',
    top: -200,
    width: width,
    zIndex: 2,
  },  
});
export default AthleteProfile