var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: 'N0KL9HtoTKHrHskugbgqn92c1tMfuTFL', domain: 'comrade.auth0.com'});


module.exports = {
  BARSTYLE: 'light-content',
  COLORS: {
    MAIN: '#1A1C1C',
    ALT1: '#C1912E',
    ALT2: '#EFEFEF',
    ALT3: 'black',
    ALT1RGBA: {
      R: 232,
      G: 98,
      B: 98,
    },
    TEXT1: '#C1912E',
    TEXT2: '#8EDCE6'
    
  },
    CARDS: [
      {key:1, name: 'KIANOUSH ROUSTAMI',age: 26, from: "../../images/flags/Iran.png",height:"5ft 9in", weight:"85", goals:"I want to achieve a 230kg Clean & Jerk and a 215kg Snatch within the next year", gym:"Iran Olympic Weightlifting Centre" ,certifications: [], style:"weightlifter", achievements: "217kg Clean & Jerk, 187kg Snatch, 2016 Olympic Gold Medalist" , images: ["https://67.media.tumblr.com/17c959cd2e576919b97a4867456e27ff/tumblr_o4vn82v8di1qbrivdo1_500.gif", "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2016/08/12/2016-08-12-Weightlifting-Men-85kg-Women-75kg-inside-01.jpg", "http://c8.alamy.com/comp/F760M7/houston-texas-usa-25th-november-2015-kianoush-rostami-lifts-173-kilograms-F760M7.jpg" ]},
      {key:2, name: "LU XIAOJUN",age: 26, from: "../../images/flags/China.png",height:"5ft 8in", weight:"77", goals:"I want to achieve a 230kg Clean & Jerk and a 215kg Snatch within the next year and win Olympic Gold in the mens 77kg class in weightlifting at Tokyo 2020",gym:"Chinese Olympic Weightlifting Centre", certifications: [], style:"weightlifter", achievements: "207kg Clean & Jerk, 185kg Snatch, 2016 Olympic Silver Medalist" ,  images: [ "https://i.imgur.com/JxvIWks.gif","http://flo-static-assets.s3.amazonaws.com/uploads/api/57bc63520b380.jpeg", "http://img.news.sina.com/sports/p/2011/1111/U47P5029T2D413358F31DT20111111180940.jpg" ]},
      {key:3, name: "BART KWAN",age: 26, from: "../../images/flags/USA.png",height:"5ft 9in", weight:"95 kg", goals:"I want to come in first place at the LA FitExpo powerlifting meet next year", gym:"Barbell Brigade LA", certifications: [], style:"powerlifter", achievements: "355lb bench, 600lb deadlift, 525lb squat" , images: [ "https://j.gifs.com/98p8LJ.gif" , "https://67.media.tumblr.com/12f36e0a9922b4bf914d473861ec88f5/tumblr_nof5k2ib301rs2stqo1_500.jpg", "http://royalgram.co.uk/wp-content/uploads/2015/07/Meester-@bartkwan-says-buy-a-pair-of-Camo-Gangsta-wraps-before-he-goes-all-Bruce-Lee-all-over-face-H.jpg"]},
      {key:4, name: "NIKKI BLACKETTER",age: 26, from: "../../images/flags/England.png",height:"5ft 6in", weight:"55 kg", goals: "Have a more toned body by lowering body fat percentage through regular intense workouts", gym:"Barbell Brigade LA", certifications: [], style:"bodybuilder", achievements: "Gymshark Athlete" , images: ["https://45.media.tumblr.com/1a639b1822518334eb45784f1cd4844f/tumblr_o2p95nBwfR1sqw7fko1_400.gif", "https://yt3.ggpht.com/-9zzvbyOfmko/AAAAAAAAAAI/AAAAAAAAAAA/QvN6Z4C9x9M/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", "http://www.girlswithmuscle.com/images/full/869471746.jpg" ]}
    ],
  CARDS2: [],
  PHOTOS: [
  {
    title: 'Single photo',
    description: 'with caption, no grid button',
    enableGrid: false,
    media: [{
      photo: 'http://farm3.static.flickr.com/2667/4072710001_f36316ddc7_b.jpg',
      caption: 'Grotto of the Madonna',
    }],
  }, {
    title: 'Multiple photos',
    description: 'with captions and nav arrows',
    displayNavArrows: true,
    displayActionButton: true,
    media: [{
      photo: 'http://farm3.static.flickr.com/2667/4072710001_f36316ddc7_b.jpg',
      selected: true,
      caption: 'Grotto of the Madonna',
    }, {
      photo: 'http://farm3.static.flickr.com/2449/4052876281_6e068ac860_b.jpg',
      caption: 'Broadchurch Scene',
    }, {
      photo: 'http://farm3.static.flickr.com/2449/4052876281_6e068ac860_b.jpg',
      thumb: 'http://farm3.static.flickr.com/2449/4052876281_6e068ac860_q.jpg',
      selected: false,
      caption: 'Beautiful Eyes',
    }, {
      photo: 'http://farm3.static.flickr.com/2449/4052876281_6e068ac860_b.jpg',
      thumb: 'http://farm3.static.flickr.com/2449/4052876281_6e068ac860_q.jpg',
      selected: false,
      caption: 'Beautiful Eyes',
    }],
  }
  ],  
};