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
   user: {
    "certifications" : "BCWA Certified Coach",
    "email" : "abrar.musa.89@gmail.com",
    "fb_id" : "10153582744882696",
    "gender" : "male",
     "goals" : "To achieve a 140kg snatch and a 160kg C&j",
     "achievements" : "100kg c&j 80kg snatch",
    "gym" : "UBC BirdCoop",
    "height" : "5ft 9in",
    "interested_in" : "Comrade",
    "name" : "Abrar Musa",
    "photos" : [ {
      "caption" : "\uD83D\uDE3D\uD83D\uDCA4",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13298206_290703447947208_890097255_n.jpg?ig_cache_key=MTI2Nzk2OTg0OTExNzI0NDQ0NQ%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13298206_290703447947208_890097255_n.jpg?ig_cache_key=MTI2Nzk2OTg0OTExNzI0NDQ0NQ%3D%3D.2"
    }, {
      "caption" : "#broseph",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13249866_223389094720079_1269373387_n.jpg?ig_cache_key=MTI1ODI5MzIzMjAzMTg5MTEyNQ%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13249866_223389094720079_1269373387_n.jpg?ig_cache_key=MTI1ODI5MzIzMjAzMTg5MTEyNQ%3D%3D.2"
    }, {
      "caption" : "Everyday is #legday",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/13116573_1779137475654180_1023362533_n.jpg?ig_cache_key=MTI1NjcwMjYxODkyMDE1NjgwNA%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/13116573_1779137475654180_1023362533_n.jpg?ig_cache_key=MTI1NjcwMjYxODkyMDE1NjgwNA%3D%3D.2.c"
    }, {
      "caption" : "As soon as you get excited for summer, Toronto slaps you across the face with some snow.",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13249839_234404620267136_1813069917_n.jpg?ig_cache_key=MTI1MDg0OTA0NzUzNjMzNjYwMQ%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13249839_234404620267136_1813069917_n.jpg?ig_cache_key=MTI1MDg0OTA0NzUzNjMzNjYwMQ%3D%3D.2"
    }, {
      "caption" : "",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13129837_1767698716797995_1114040350_n.jpg?ig_cache_key=MTI0ODc5MTIwMTUwODM2MDEyMw%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13129837_1767698716797995_1114040350_n.jpg?ig_cache_key=MTI0ODc5MTIwMTUwODM2MDEyMw%3D%3D.2"
    }, {
      "caption" : "Hair loss fml",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13167441_1616557272003506_523834044_n.jpg?ig_cache_key=MTI0NDI1NDExMjIyNTgyMDA0MQ%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13167441_1616557272003506_523834044_n.jpg?ig_cache_key=MTI0NDI1NDExMjIyNTgyMDA0MQ%3D%3D.2"
    }, {
      "caption" : "Hello allergies",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13188104_1624534474536234_1520796244_n.jpg?ig_cache_key=MTI0MzU5OTY1Nzk1MjIxNDQ3NQ%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13188104_1624534474536234_1520796244_n.jpg?ig_cache_key=MTI0MzU5OTY1Nzk1MjIxNDQ3NQ%3D%3D.2"
    }, {
      "caption" : "Gloomy Day",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12328293_1142275269125396_1677532402_n.jpg?ig_cache_key=MTIyMjE1MDE4NDM0NDYxNjYxMg%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12328293_1142275269125396_1677532402_n.jpg?ig_cache_key=MTIyMjE1MDE4NDM0NDYxNjYxMg%3D%3D.2"
    }, {
      "caption" : "First time running in a whole year",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12519240_465768483610275_1708405887_n.jpg?ig_cache_key=MTE3ODAzMDQ3NDk3NjE2NDk3Ng%3D%3D.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12519240_465768483610275_1708405887_n.jpg?ig_cache_key=MTE3ODAzMDQ3NDk3NjE2NDk3Ng%3D%3D.2"
    }, {
      "caption" : "Hey Ben @hodinkee . What's your opinion on this 3510.82 Speedmaster reduced?",
      "image" : "https://scontent.cdninstagram.com/t51.2885-15/e15/11049411_429699600514260_1422714859_n.jpg?ig_cache_key=OTM4MDQwNTgyNDExNTE3OTAx.2",
      "thumbnail" : "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e15/11049411_429699600514260_1422714859_n.jpg?ig_cache_key=OTM4MDQwNTgyNDExNTE3OTAx.2"
    } ],
    "profile_pic_url" : "https://firebasestorage.googleapis.com/v0/b/comrade-dbd4b.appspot.com/o/images%2F10153582744882696_profile_pic.jpg?alt=media&token=1563c0b3-ade5-4c58-8e8d-b3e7fbe913d3",
    "style" : "Weightlifter",
    "weight" : "81kg"
  }
};