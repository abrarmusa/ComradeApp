import GLOBALS from "./globals";

module.exports = {
  formStyler(Form){
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
    Form.itemStyle = {color:'#c1912e'};
  },
  athleteOptions: {
    auto: 'none',
    fields: {
      name:{
        placeholder: 'Your name',
        placeholderTextColor:GLOBALS.COLORS.ALT1,
      },
      email:{
        placeholder: 'Your email',
        placeholderTextColor:GLOBALS.COLORS.ALT1,
      },
      gender:{
        hidden: true
      },
      fb_id: {
        hidden: true
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
        nullOption: {value: '', text: 'Your sport'}
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
  },
  liftStyles:{
    Weightlifter: 'Weightlifter',
    Powerlifter: 'Powerlifter',
    Bodybuilder: 'Bodybuilder',
  },
  interests: {
    Comrade: 'Comrade',
    Trainer: 'Trainer'
  }
}