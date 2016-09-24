import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar} from 'react-native'
import {Icon} from 'react-native-elements'
import Tabs from 'react-native-tabs';
import CardsPage from './cardsPage.js'
import SettingsPage from './settingsPage.js'
class HomeScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      currPage: 2,
      page: 'users'
    }
  }

  render() {
    var renderedPage;
    if (this.state.currPage == 1){
      renderedPage = <SettingsPage />
    } else if (this.state.currPage == 2) {
      renderedPage = <CardsPage />
    } else {
      renderedPage = <CardsPage />
    };
    return (
      <View style={styles.mainbox}>
         <StatusBar
           backgroundColor="#161b21"
           barStyle="light-content"
         />        
        {renderedPage}
        <Tabs style={styles.tabbar} selected={this.state.page} style={{backgroundColor:'#161b21'}}
              selectedStyle={{color:'white'}} onSelect={el=>{this.setState({currPage:el.props.pagenum, page: el.props.name})}}>
          <Icon
            name='person'
            type='octicon'
            color='#48BBEC'
            style={{color:'gray'}} pagenum={1} checkval={true} selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#48BBEC'}}
          />
          <Icon
            name='users'
            type='font-awesome'
            color='#48BBEC'
            style={{color:'gray'}} pagenum={2} selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#48BBEC'}}
          />  
          <Icon
            name='comment-o'
            type='font-awesome'
            color='#48BBEC'
            style={{color:'gray'}} pagenum={3} selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#48BBEC'}}
          />            
        </Tabs>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#161b21',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  tabbar: {
    marginTop: 10,
    top: 0,
    position: 'relative',
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

export default HomeScreen