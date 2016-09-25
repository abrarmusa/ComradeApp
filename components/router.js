import React from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'
import StartScreen from './startScreen.js'
import FormScreen from './formScreen.js'
import CardsPage from './cardsPage.js'
import { Button,Icon } from 'react-native-elements'
import ExNavigator from '@exponent/react-native-navigator';
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
    console.log('Getting Initia; route');
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
        return <Text style={{marginTop: 11, color: '#48BBEC'}}>Create an account</Text>
      }  
    };
  },
  
  getHomeRoute(){
    console.log('Getting Home route');
    
    return {
      renderScene(navigator) {
        return <CardsPage navigator={navigator} />;
      },
      
      renderTitle() {
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontFamily: 'Porter-BoldDEMO', fontSize: 18}}>Comrade</Text>
          </View>
        );
      },

      getTitle() {
        return 'back';
      },

      // Render the view to display on the right side of the navigation bar. It
      // is typically a button but doesn't have to be.
      renderLeftButton(){
        return (
          <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
             <Icon
                name='person'
                type='octicon'
                 underlayColor='red'
               onPress={() => console.log('hello')}
                iconStyle={{color:'#48BBEC', margin: 9}}
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
                iconStyle={{color:'#48BBEC', margin: 9}}
              />
          </View>       
        );
      },
      configureScene(){
          return Navigator.SceneConfigs.VerticalUpSwipeJump;
      },      
    }

  }
  
//
};
const styles = StyleSheet.create({})
export default Router;