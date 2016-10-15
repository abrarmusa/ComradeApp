import React from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'
import StartScreen from './startScreen.js'
import FormScreen from './formScreen.js'
import CardsPage from './cardsPage.js'
import AthleteProfile from './cardComponents/athleteProfile'
import { Button,Icon } from 'react-native-elements'
import ExNavigator from '@exponent/react-native-navigator';
import ExSceneConfigs from '@exponent/react-native-navigator';
// Switch to ExNavigation
// import {
//   createRouter
// } from '@exponent/ex-navigation';

// const Router = createRouter(() => ({
//   start: () => StartScreen,
//   form: () => FormScreen,
//   home: () => HomeScreen
// }))



let Router = {
//   MAIN PAGE ROUTE
  getInitialRoute() {
    console.log('Getting Initial route');
    return {
      showNavigationBar: false,
      renderScene(navigator) {
        return <StartScreen navigator={navigator}/>;
      }
    };
  },

// FORM PAGE ROUTE
  getFormRoute() {
    console.log('Getting form route');
    return {
      showNavigationBar: true,
      renderScene(navigator) {
        return <FormScreen navigator={navigator} />;
      },
      renderTitle() {
        return <Text style={{marginTop: 11, color: '#404041', fontSize: 16}}>Create an account</Text>
      }  
    };
  },
  
//   HOME PAGE ROUTE
  getHomeRoute(navigator){
    console.log('Getting Home route');
    return {
      renderScene(navigator) {
        return <CardsPage navigator={navigator} />;
      },
      
      renderTitle() {
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'#404041', fontFamily: 'Porter-BoldDEMO', fontSize: 18}}>Comrade</Text>
          </View>
        );
      },

      getTitle() {
        return 'back';
      },

      renderLeftButton(){
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
             <Icon
                name='person'
                type='octicon'
                 underlayColor='red'
               onPress={() => console.log('hello')}
                iconStyle={{color:'#c1912e', margin: 9}}
              />
          </View>          
             
        )
      },
      renderRightButton() {
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
             <Icon
                name='comment-o'
                type='font-awesome'
                onPress={() => console.log('hello')}
                iconStyle={{color:'#c1912e', margin: 9}}
              />
          </View>       
        );
      },
      configureScene(){
          return Navigator.SceneConfigs.FloatFromRight;
      },      
    }

  },
  
  getAthleteProfile(athlete){
      return {
        renderScene(navigator) {
          return <AthleteProfile navigator={navigator} athlete={athlete}/>;
        },

        renderLeftButton(){
          return null;
        },
      renderTitle() {
        return (
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleName}>{athlete.name}</Text>
          </View>
        );
      },     
        renderRightButton(navigator) {
          return (
            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
               <Icon
                  name='close'
                  type='font-awesome'
                  onPress={() => {navigator.pop();}}
                  iconStyle={{color:'#c1912e', margin: 9}}
                />
            </View>       
          );
        },
        configureScene(){
            return Navigator.SceneConfigs.FloatFromBottom;
        },      
    }
  }
//   ATHLETE PROFILE ROUTE
  
//
};
const styles = StyleSheet.create({
  navbarstyle: {
    backgroundColor: 'red'
  },
  titleName: {
    color: 'white',
    fontSize: 24,
    top: 11,
    fontFamily: "AvenirNext-UltraLight",
    color: '#A2D3E8',
    fontWeight: '400'    
  }
})
export default Router;