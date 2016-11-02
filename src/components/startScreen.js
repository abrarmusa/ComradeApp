import React, { PropTypes, Component, } from 'react'
import {  StyleSheet, Image, Dimensions, StatusBar, NetInfo, Modal} from 'react-native'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { Button, SocialIcon } from 'react-native-elements'
var {FBLoginManager} = require('react-native-facebook-login');
const FBSDK = require('react-native-fbsdk');
const { GraphRequest, GraphRequestManager } = FBSDK;
import Router from '../router';
import Auth from '../auth';
import Firebase from '../firebase'
var {height, width} = Dimensions.get('window');
FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Native)

  
class StartScreen extends Component {
// -------------------------------------------------------------  
    constructor(props) {
      super(props)
      this.state = {
        connection: false
      }
    }
// ------------------------------------------------------------- 
  _responseInfoCallback(error: ?Object, result: ?Object) {
    var that = this;
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      Firebase.initializeFirebase(function(){
        Firebase.firebaseAuthenticate(result.id, function(user){
          if (user){
            console.log(user);
            let route = Router.getHomeRoute(user);      
            that.props.navigator.push(route);
          } else {
            var route = Router.getFormRoute(result);
            that.props.navigator.push(route);
          }
        })        
      });

    }
  }
// -------------------------------------------------------------  
  handleConnectivity(isConnected) {
    console.log(isConnected)
    NetInfo.isConnected.removeEventListener(
      'change',
      this.handleConnectivity
    );
    this.setState({
      connection: isConnected
    })
    this.logInUser()
  }
// -------------------------------------------------------------  
  signIn(){ 
    NetInfo.isConnected.addEventListener(
      'change',
      this.handleConnectivity.bind(this)
    );
  }
// -------------------------------------------------------------  
  logInUser(){
    if (this.state.connection){
      var profileRequestParams = { fields: { string: 'id, name, email, first_name, last_name, gender'}};
      var profileRequestConfig = { httpMethod: 'GET', version: 'v2.8', parameters: profileRequestParams, accessToken: "" };     
      var infoRequest = new GraphRequest( '/me', profileRequestConfig, this._responseInfoCallback.bind(this));        
      FBLoginManager.loginWithPermissions(["public_profile"], function(error, data){
        if (!error) {
          profileRequestConfig.accessToken = data.credentials.token.toString()
          new GraphRequestManager().addRequest(infoRequest).start();     
        } else {
          console.log("Error: ", error);
        }
      })         
    } else {
      alert("Please connect to the internet")
    }
  }
// ======================================================================== RENDERER ========================================================================  
  render() {  
    var _this = this;
    return (
        <View animation="fadeIn" delay={1000} style={styles.innerbox}>
        
        <StatusBar barStyle="light-content"/>
          <Image
            style={styles.mainlogo}
            source={require('../images/comrade_logo.png')}
          />
          <Image
            style={styles.textlogo}
            source={require('../images/comrade_text_logo.png')}
          />
          
          <SocialIcon
            title='Sign In With Facebook'
            style={styles.socialicon}
            button
            type='facebook'
            onPress={this.signIn.bind(this)}          
          />           
          
        </View>


    )
  }
}
// ======================================================================== STYLESHEET ========================================================================
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  tabbar: {
    marginTop: 20,
    top: 0,
  },
   innerbox: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
      backgroundColor: 'transparent'
  }, 
  mainlogo: {
    margin: 10,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  textlogo: {
    margin: 10,    
    width: 330,
    resizeMode: 'contain'
  } ,
  socialicon: {
    borderRadius: 0,
    margin:10,
    padding: 10,
    width: width-20
  }
});


export default StartScreen
