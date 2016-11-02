import React, { Component, } from 'react'
import { StatusBar, View, StyleSheet, TouchableHighlight, TouchableOpacity, Text, PixelRatio, Image, Platform} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from 'react-native-elements';
import Router from '../router';
import GLOBALS from '../globals';
import Auth from '../auth';
import Firebase from '../firebase';
import FormOptions from '../formOptions';
import Helpers from '../helpers';
import ImagePicker from 'react-native-image-picker';
var t = require('tcomb-form-native');


// override globally the default stylesheet
var Form = t.form.Form;
FormOptions.formStyler(Form);
var liftStyles = t.enums(FormOptions.liftStyles);
var interests = t.enums(FormOptions.interests);
var athlete_options = FormOptions.athleteOptions;
var Athlete = t.struct({
  name: t.String,              // a required string
  email: t.String,  // an optional string
  height: t.String,
  weight: t.String,
  gender: t.String,
  gym: t.String,
  style: liftStyles,
  certifications: t.maybe(t.String),
  achievements: t.maybe(t.String),
  gender: t.String,
  fb_id: t.String,
  interested_in: interests
});


class SettingsPage extends Component {
// -------------------------------------------------------------
  constructor(props) {
    super(props)
    console.log(this.props.user);
    this.state = {
      avatarSource: {uri: this.props.user.profile_pic_url},
      formDefaults: {
        name: this.props.user.name,
        email: this.props.user.email,
        gender: this.props.user.gender,
        fb_id: this.props.user.fb_id,
        height: this.props.user.height,
        weight: this.props.user.weight,
        achievements: this.props.user.achievements,
        style: this.props.user.style,
        gym: this.props.user.gym,
        certifications: this.props.user.certifications,
        interested_in: this.props.user.interested_in
      }
    }
    console.log(this.state.avatarSource)
  }
// -------------------------------------------------------------
  changeTab (selectedTab) {
    this.setState({selectedTab})
  }
// -------------------------------------------------------------
  onPress() {
    // call getValue() to get the values of the form

    var that = this;
    var value = this.refs["form"].getValue();
    var photo = {
        uri: this.state.avatarSource,
        type: 'image/jpeg',
        name: (this.props.user.id +  new Date().getTime() + '_profile_pic.jpg'),
    };
    if (value){
      Auth.instagramAuthenticate(function(result){
        Firebase.initializeFirebase(function(){
          console.log("Initialized");
          if (that.props.user.profile_pic_url != that.state.avatarSource.uri){
            Firebase.firebaseUpload(photo, function(checker){
              if (checker) {
                console.log("checked");
                fb_id = that.props.user.id;
                Helpers.dataSanitizer(value, function(res){            
                  console.log(result);
                  console.log(checker);
                  res["photos"] = result;
                  res["profile_pic_url"] = checker;
                  Firebase.firebaseUpdate("users", res, function(){
                    console.log("Pushed into firebase");
                    this.setState({
                      avatarSource: res["profile_pic_url"],
                      formDefaults: res
                    })      
                  })                
                })
              } else {
                alert("Error encountered");
              }
            });                
          } else {
            console.log("checked");
            fb_id = that.props.user.id;
            Helpers.dataSanitizer(value, function(res){            
              console.log(result);
              res["photos"] = result;
              res["profile_pic_url"] = that.props.user.profile_pic_url;
              Firebase.firebaseUpdate("users", res, function(){
                console.log("Pushed into firebase");
                res["profile_pic_url"] = {uri: res["profile_pic_url"]};
                that.setState({
                  avatarSource: res["profile_pic_url"],
                  formDefaults: res
                })      
              })                
            })     
          }
        });        
      })
    } else {
      alert("Please fill in the form");
    }
  }  
// -------------------------------------------------------------
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        var source;
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }
        this.setState({
          avatarSource: source
        });
      }
    });
  }
// ======================================================================== RENDERER ========================================================================
  render() {

    return (
      <KeyboardAwareScrollView>
      <StatusBar barStyle="light-content"/>
      <View style={styles.container}>
      <View style={styles.profile}>
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
      <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
      { this.state.avatarSource === null ? <Icon name='plus' type='octicon' color={GLOBALS.COLORS.ALT1} size={40} />
      :
      <Image style={styles.avatar} source={this.state.avatarSource} />
    }
    </View>
    </TouchableOpacity>
    </View>

    <Form
    ref="form"
    type={Athlete}
    value={this.state.formDefaults}
    options={athlete_options}
    />
    <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor={GLOBALS.COLORS.ALT1}>
    <Text style={styles.buttonText}>Save</Text>
    </TouchableHighlight>
    </View>    
    </KeyboardAwareScrollView>

    );
  }
};

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  profile: {
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   flex: 1,
   justifyContent: 'center'
 },
 button: {
  height: 50,
  backgroundColor: GLOBALS.COLORS.ALT1,
  borderColor: GLOBALS.COLORS.ALT1,
  borderWidth: 1,
  borderRadius: 0,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
avatarContainer: {
  borderColor: GLOBALS.COLORS.ALT1,
  borderWidth: 2,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center'
},
avatar: {
  borderRadius: 50,
  borderColor: GLOBALS.COLORS.ALT1,
  borderWidth: 1,
  width: 100,
  flex: 1,
  height: 100,
  alignItems: 'center',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center'
}  
});
export default SettingsPage