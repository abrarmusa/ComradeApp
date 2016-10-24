import React, { PropTypes, Component, } from 'react'
import {  StyleSheet, Image, StatusBar} from 'react-native'
import AthleteSignupForm from './forms/athleteSignupForm.js'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import Router from './router.js'
import { Button, Icon } from 'react-native-elements'
import Tabs from 'react-native-tabs';
import GLOBALS from './globals';
class FormScreen extends Component {

  static propTypes = {}

  static defaultProps = {}
  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  constructor(props) {
    super(props)
    this.state = {
      athlete: true,
      page: 'athlete'
    };
  }
  
  changePage(){
    
  }

  render() {
    return (
      <View style={styles.mainbox}>
        <StatusBar barStyle="light-content"/>
        {this.state.athlete === true ? <AthleteSignupForm navigator={this.props.navigator}/> : null}
        <Tabs style={styles.tabbar} selected={this.state.page} style={{backgroundColor:'#7e7e81', marginTop: 0, borderBottomWidth:1, borderBottomColor:"#7e7e81"}}
              selectedStyle={{color:'white'}} onSelect={el=>this.setState({athlete:el.props.checkval, page: el.props.name})}>
            <Text name="athlete" style={{color:'white', fontSize: 16}} checkval={true} selectedIconStyle={{backgroundColor:GLOBALS.COLORS.ALT1}} >Athlete</Text>
            <Text name="trainer" style={{color:'white', fontSize: 16}} checkval={false} selectedIconStyle={{backgroundColor:GLOBALS.COLORS.ALT1}} >Trainer</Text>
        </Tabs>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    paddingTop: 67,
    backgroundColor: 'transparent',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  tabbar: {
//     marginTop: 10,
    top: 0,
    fontSize: 15
//     position: 'relative',
  },
   innerbox: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  }, 
  mainlogo: {
    margin: 10,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  textlogo: {
    margin: 10,    
    width: 350,
    resizeMode: 'contain'
  }  
});


export default FormScreen