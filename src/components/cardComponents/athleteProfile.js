import React, { Component, } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar, ListView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import Image from 'react-native-image-progress';
var Progress = require('react-native-progress');
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Swiper from 'react-native-swiper';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import ImageCarousel from 'react-native-image-carousel';
import GLOBALS from '../../globals'
var {height, width} = Dimensions.get('window');


 const media = [];


class AthleteProfile extends Component {

  
  static propTypes = {}
  
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _renderHeader(){
    return (
            <View style={{flex:1, flexDirection:'column', alignItems:'flex-end', justifyContent:'center'}}>
               <Icon
                  name='close'
                  type='font-awesome'
                  onPress={() => {this.refs.carousel.close();}}
                  iconStyle={{color:GLOBALS.COLORS.ALT1, margin: 9,alignSelf:'flex-end', textAlign: 'right'}}
                />
            </View>  
    );
  }

  _renderFooter() {
    return (
      <Text style={styles.footerText}>Footer!</Text>
    );
  }

  _renderContent(idx: number) {
    console.log(GLOBALS.PHOTOS[1].media[idx].photo)
    return (
      <View>
      <Image
        style={{ width: width, height: height-400, marginTop: 200}}
        source={{ uri: GLOBALS.PHOTOS[1].media[idx].photo }}
        resizeMode={'contain'}
      />
      <Text style={{color: 'white', textAlign: 'center', fontSize: 20, margin: 10, fontFamily: 'Avenir'}}>{GLOBALS.PHOTOS[1].media[idx].caption}</Text>
      </View>
    );
  }
                 
  render() {
    let imgPath;
    if (this.props.athlete.style == 'weightlifter'){
      imgPath = <Image style={{height:40, width: 40, alignSelf: 'center', zIndex: 10}}  indicator={Progress.CircleSnail} indicatorProps={{ size: 40, color: GLOBALS.COLORS.ALT1 }} source={require('../../images/weightlifter.png')}/>;
    } else if (this.props.athlete.style == 'bodybuilder') {
      imgPath = <Image style={{height:40, width: 40, alignSelf: 'center', zIndex: 10}}  indicator={Progress.CircleSnail} indicatorProps={{ size: 40, color: GLOBALS.COLORS.ALT1 }} source={require('../../images/bodybuilder.png')}/>;
    } else if (this.props.athlete.style == 'powerlifter') {
      imgPath = <Image style={{height:40, width: 40, alignSelf: 'center', zIndex: 10}} indicator={Progress.CircleSnail} indicatorProps={{ size: 40, color: GLOBALS.COLORS.ALT1 }} source={require('../../images/powerlifter.png')}/>;
    };    
    return (

    <ParallaxScrollView
      contentBackgroundColor={'transparent'}
      backgroundColor={'transparent'}
      parallaxHeaderHeight={500}
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
              color={GLOBALS.COLORS.ALT1}/>}
            prevButton={
            <Icon
              size={50}
              name='chevron-left'
              type='evilicon'
              color={GLOBALS.COLORS.ALT1}/>}           
              >
            {this.props.athlete.images.map(function(item, index){
              console.log(item);
              return(
                <View style={styles.slide2} key={index}>
                  <Image source={{uri: item}} style={styles.image}
                    indicator={Progress.CircleSnail}
                    indicatorProps={{
                      size: 80,
                      color: GLOBALS.COLORS.ALT1
                    }} />                  
                </View>         
              )
            }.bind(this))
          }
            </Swiper> 
          </View>

      )}
      >
   <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />        
      <LinearGradient start={[0.0, 1.0]} locations={[0.0,0.3,0.5,0.8, 0.9]} end={[0.0, 0.0]} colors={['rgba(26,28,28, 1.0)', 'rgba(26,28,28, 0.8)', 'rgba(26,28,28, 0.6)', 'rgba(26,28,28, 0.2)', 'rgba(26,28,28, 0.0)' ]}  style={[styles.rect,{height: 200}]} />
       <View style={styles.bignamecont}>
         <Text style={styles.bigname}>{this.props.athlete.name.split(" ")[0]}</Text>
         <Text style={styles.bigname}>{this.props.athlete.name.split(" ")[1]}</Text>
      </View>
      <View style={{  backgroundColor: 'transparent' }}>
        <View style={styles.captions}>
          <View style={styles.captextblock}>
            <Text style={styles.bodytextbig}>{this.props.athlete.height}</Text>
            <Image
            style={{height:40, width: 40, alignSelf: 'center'}}
            indicator={Progress.CircleSnail}
            indicatorProps={{
              size: 40,
              color: GLOBALS.COLORS.ALT1
            }}             
            source={require('../../images/height.png')}/>
          </View>          
          <View style={styles.captextblock}>
            <Text style={styles.bodytextbig}>{this.props.athlete.weight}</Text>
            <Image
            style={{height:40, width: 40, alignSelf: 'center'}}
            indicator={Progress.CircleSnail}
            indicatorProps={{
              size: 40,
              color: GLOBALS.COLORS.ALT1
            }}                     
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
            color={GLOBALS.COLORS.ALT1}/>    
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
            color={GLOBALS.COLORS.ALT1}/>    
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
            color={GLOBALS.COLORS.ALT1}/>    
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
            color={GLOBALS.COLORS.ALT1}/>    
          <Text style={styles.bodytexttitlebig}>Instagram</Text>
        </View>
          <ImageCarousel
            ref="carousel"
            renderContent={this._renderContent}
            renderHeader={this._renderHeader.bind(this)}
            renderFooter={this._renderFooter}
            style={{marginLeft:30, marginRight: 30, marginTop: 10}}
          >
            {GLOBALS.PHOTOS[1].media.map(function(item,index){
              return(<Image
                key={item.photo}
                style={{height: 120 , width:(width-60)/3}}
                source={{ uri: item.photo, height: 120}}
                resizeMode={'cover'}
              />)
            })
            }
          </ImageCarousel>
       
           
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
    color: GLOBALS.COLORS.ALT1,
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
    borderColor: GLOBALS.COLORS.ALT1,
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
  gallerysection: {
    marginLeft:30,
    flexDirection: 'row',
    marginRight:30,
    height: 400
  },     
  bodysectiontext: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Avenir',
    fontWeight: '900',
    textAlign: 'left',
    color: GLOBALS.COLORS.ALT2,
    fontSize: 18
  },    
  captext: {
    fontFamily: 'Porter-BoldDEMO',
    textAlign: 'center',
    color: GLOBALS.COLORS.ALT1
  },
  bodytextbig: {
    fontFamily: 'Avenir',
    fontWeight: '900',
    textAlign: 'center',
    color: GLOBALS.COLORS.ALT2,
    fontSize: 18
  },  
  bodytexttitlebig: {
    fontFamily: 'Avenir',
    fontWeight: '900',
    textAlign: 'center',
    marginLeft: 5,
    color: GLOBALS.COLORS.ALT1,
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
    color: GLOBALS.COLORS.TEXT1,
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