import React from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'
import StartScreen from './components/startScreen.js'
import FormScreen from './components/formScreen.js'
import CardsPage from './components/cardsPage.js'
import SettingsPage from './components/settingsPage.js'
import AthleteProfile from './components/cardComponents/athleteProfile'
import { Button,Icon } from 'react-native-elements'
import ExNavigator from '@exponent/react-native-navigator';
import ExSceneConfigs from '@exponent/react-native-navigator';
import GLOBALS from './globals';

let Router = {
// ======================================================================== LANDING ========================================================================
  getInitialRoute(navigator) {
    console.log('Getting Initial route');
    return {
      showNavigationBar: false,
      renderScene(navigator) {
        return <StartScreen navigator={navigator}/>;
      }
    };
  },
// ======================================================================== SIGNUP FORM ========================================================================
  getFormRoute(user) {
    console.log('Getting form route');
    
    return {
      showNavigationBar: true,
      renderScene(navigator) {
        return <FormScreen navigator={navigator} user={user}/>;
      },
      renderTitle() {
        return <Text style={{marginTop: 11, color:  GLOBALS.COLORS.ALT1, fontSize: 16}}>Create an account</Text>
      }  
    };
  },
// ======================================================================== HOME ========================================================================
  getHomeRoute(user){
    console.log('Getting Home route');
    return {
      renderScene(navigator) {
        return <CardsPage navigator={navigator} user={user} />;
      },
      
      renderTitle() {
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', zIndex: 0}}>
            <Text style={{color:GLOBALS.COLORS.ALT2, fontFamily: 'Porter-BoldDEMO', fontSize: 20}}>Comrade</Text>
          </View>
        );
      },

      renderLeftButton(navigator){
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', zIndex: 0}}>
             <Icon
                name='person'
                type='octicon'
                 underlayColor='red'
                 onPress={() => navigator.push(Router.getSettingsRoute(user))}
                iconStyle={{color:GLOBALS.COLORS.ALT1, margin: 9}}
              />
          </View>          
             
        )
      },
      renderRightButton(navigator) {
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
             <Icon
                name='comment-o'
                type='font-awesome'
                onPress={() => console.log('hello')}
                iconStyle={{color: GLOBALS.COLORS.ALT1, margin: 9}}
              />
          </View>       
        );
      },
      configureScene(){
          return Navigator.SceneConfigs.FloatFromRight;
      },      
    }

  },
// ======================================================================== ATHLETE PROFILE ========================================================================
  getAthleteProfile(athlete){
      return {
        renderScene(navigator) {
          return <AthleteProfile navigator={navigator} athlete={athlete}/>;
        },

        renderLeftButton(){
          return null;
        },
   
        renderRightButton(navigator) {
          return (
            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
               <Icon
                  name='close'
                  type='font-awesome'
                  onPress={() => {navigator.pop();}}
                  iconStyle={{color:GLOBALS.COLORS.ALT1, margin: 9}}
                />
            </View>       
          );
        },
        configureScene(){
            return Navigator.SceneConfigs.FloatFromBottom;
        },      
    }
  },
// ======================================================================== SETTINGS ========================================================================
   getSettingsRoute(user){
      return {
        renderScene(navigator) {
          return <SettingsPage navigator={navigator} user={user} />;
        },
        
        renderTitle() {
          return (
            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', zIndex: 0}}>
              <Icon
                name='person'
                type='octicon'
                 underlayColor='red'
               onPress={() => console.log('hello')}
                iconStyle={{color:GLOBALS.COLORS.ALT1, margin: 9}}
              />
            </View>
          );
        },
        renderLeftButton(){
          return null;
        },
   
        renderRightButton(navigator) {
          return (
            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
               <Icon
                  name='close'
                  type='font-awesome'
                  onPress={() => {navigator.pop();}}
                  iconStyle={{color:GLOBALS.COLORS.ALT1, margin: 9}}
                />
            </View>       
          );
        },
        configureScene(){
            return Navigator.SceneConfigs.FloatFromLeft;
        },      
    }
  } 
};

// ======================================================================== STYLESHEET ========================================================================
const styles = StyleSheet.create({
  navbarstyle: {
    backgroundColor: 'red'
  },
  titleName: {
    color: GLOBALS.COLORS.MAIN,
    fontSize: 24,
    top: 11,
    fontFamily: "AvenirNext-UltraLight",
    fontWeight: '400'    
  }
})
export default Router;