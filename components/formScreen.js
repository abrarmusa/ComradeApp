import React, { PropTypes, Component, } from 'react'
import {  StyleSheet, Image, StatusBar} from 'react-native'
import AthleteSignupForm from './forms/athleteSignupForm.js'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import Router from './router.js'
import { Button, Icon } from 'react-native-elements'
import Tabs from 'react-native-tabs';
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
        
        {this.state.athlete === true ? <AthleteSignupForm navigator={this.props.navigator}/> : null}
        <Tabs style={styles.tabbar} selected={this.state.page} style={{backgroundColor:'white', marginTop: 5, borderBottomWidth: 1, borderBottomColor: '#c1912e'}}
              selectedStyle={{color:'#c1912e'}} onSelect={el=>this.setState({athlete:el.props.checkval, page: el.props.name})}>
            <Text name="athlete" style={{color:'gray', fontSize: 16}} checkval={true} selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#c1912e'}} >Athlete</Text>
            <Text name="trainer" style={{color:'gray', fontSize: 16}} checkval={false} selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#c1912e'}} >Trainer</Text>
        </Tabs>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:'center',
    paddingTop: 40,
    justifyContent:'center'
  },
  tabbar: {
    marginTop: 10,
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