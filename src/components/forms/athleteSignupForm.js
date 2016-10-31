import React, { Component, } from 'react'
import { View, StyleSheet, TouchableHighlight, TouchableOpacity, Text, PixelRatio, Image, Platform} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from 'react-native-elements'
import Router from '../../router'
import GLOBALS from '../../globals'
import ImagePicker from 'react-native-image-picker';
var t = require('tcomb-form-native');


// override globally the default stylesheet
var Form = t.form.Form;
// Form.stylesheet = stylesheet;
// here we are: define your domain model
var liftStyles = t.enums({
  Weightlifting: 'Weightlifting',
  Powerlifting: 'Powerlifting',
  Bodybuilding: 'Bodybuilding'
});

var interests = t.enums({
  Comrade: 'Comrade',
  Trainer: 'Trainer'
});
var Athlete = t.struct({
  name: t.String,              // a required string
  email: t.String,  // an optional string
  password: t.String,
  height: t.String,
  weight: t.String,
  gym: t.String,
  style: liftStyles,
  certifications: t.String,
  achievements: t.String,
  interested_in: interests
});

Form.stylesheet.textbox.normal.color = 'white';
Form.stylesheet.textbox.normal.fontSize = 15;
Form.stylesheet.textbox.normal.borderWidth = 0;
Form.stylesheet.textbox.error.color = 'white';
Form.stylesheet.textbox.error.fontSize = 15;
Form.stylesheet.textbox.error.borderWidth = 1;
Form.stylesheet.controlLabel.normal.color = 'black';
Form.stylesheet.controlLabel.normal.top = 10;
Form.stylesheet.controlLabel.error.marginTop = 10;
Form.stylesheet.controlLabel.normal.borderBottomWidth = 1;
Form.stylesheet.controlLabel.normal.borderBottomColor = GLOBALS.COLORS.ALT1;
Form.stylesheet.formGroup.normal.borderBottomWidth = 1;
Form.stylesheet.formGroup.normal.borderBottomColor = GLOBALS.COLORS.ALT1;
Form.stylesheet.formGroup.error.borderBottomWidth = 1;
Form.stylesheet.formGroup.error.borderBottomColor = GLOBALS.COLORS.ALT1;
Form.stylesheet.controlLabel.normal.fontSize = 15;
Form.stylesheet.controlLabel.error.fontSize = 15;
Form.stylesheet.pickerValue.normal.color = GLOBALS.COLORS.ALT1;
Form.stylesheet.pickerValue.normal.fontSize = 15;
Form.stylesheet.pickerValue.error.color = GLOBALS.COLORS.ALT1;
Form.stylesheet.pickerValue.error.fontSize = 15;
Form.stylesheet.itemStyle.color = GLOBALS.COLORS.ALT1;
Form.stylesheet.itemStyle.fontSize = 15;
// Form.stylesheet.pickerTouchable.normal.color = 'white';
Form.itemStyle = {color:'#c1912e'};


var athlete_options = {
  auto: 'none',
  fields: {
    name:{
      placeholder: 'Your name',
      placeholderTextColor:GLOBALS.COLORS.ALT1
    },
    email:{
      placeholder: 'Your email',
      placeholderTextColor:GLOBALS.COLORS.ALT1      
    },
    password: {
      password: true,
      //       secureTextEntry: true,
      placeholder: 'Enter a password',
      placeholderTextColor:GLOBALS.COLORS.ALT1      
    },
    height:{
      placeholder: 'Your height eg. 5 ft 9 in',
      placeholderTextColor:GLOBALS.COLORS.ALT1      
    },
    weight:{
      placeholder: 'Your weight eg. 284 lbs',
      placeholderTextColor:GLOBALS.COLORS.ALT1      
    },
    gym:{
      placeholder: 'Your gym location eg. YMCA Sheppard & Bayview, Toronto',
      placeholderTextColor:GLOBALS.COLORS.ALT1      
    },
    style: {
      placeholder: 'Your Training Style',
      placeholderTextColor:GLOBALS.COLORS.ALT1,
      nullOption: {value: '', text: 'Pick your type of training'}
    },
    certifications: {
      placeholder: 'Your certifications eg. BCWA certification',
      placeholderTextColor:GLOBALS.COLORS.ALT1
    },
    achievements: {
      placeholder: 'Your achievements eg. 485lb deadlift, 325lb bench',
      placeholderTextColor:GLOBALS.COLORS.ALT1
    },
    interested_in: {
      nullOption: {value: '', text: 'Are you looking for a comrade or a trainer'}
    }
  }
};

class AthleteSignupForm extends Component {

  static propTypes = {}
  
  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

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
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;

        // You can display the image using either:
        //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        //Or:
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
  
  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs["form"].getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      let route = Router.getHomeRoute();
      this.props.navigator.replacePrevious(route);

    } else {
//       this.props.navigator.props.navigationBarStyle = {backgroundColor: 'red', borderBottomWidth:0};
//       console.log(this.props.navigator.props.navigationBarStyle);
      let route = Router.getHomeRoute();      
      this.props.navigator.replacePrevious(route);
      this.props.navigator.pop();
      
//       REPLACE THE FORM PAGE WITH
//       this.props.navigator.replaceAtIndex(replacerRoute, 1, function(){
//       
//     })
    }
  }

  render() {
    return (


      <KeyboardAwareScrollView>

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

export default AthleteSignupForm