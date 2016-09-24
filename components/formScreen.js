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
        <Tabs style={styles.tabbar} selected={this.state.page} style={{backgroundColor:'#161b21'}}
              selectedStyle={{color:'white'}} onSelect={el=>this.setState({athlete:el.props.checkval, page: el.props.name})}>
            <Text name="athlete" style={{color:'gray'}} checkval={true} selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#48BBEC'}} >Athlete</Text>
            <Text name="trainer" style={{color:'gray'}} checkval={false} selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#48BBEC'}} >Trainer</Text>
        </Tabs>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#161b21',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  tabbar: {
    marginTop: 10,
    top: 0,
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