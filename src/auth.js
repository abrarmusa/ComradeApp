var Auth0Lock = require('react-native-lock');
import * as firebase from 'firebase';
import GLOBALS from "./globals";
import { Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const firebaseConfig = {
  apiKey: "AIzaSyDvQD0f03_B1XcfbqQmOQDIA94L57DYt4c",
  authDomain: "comrade-dbd4b",
  databaseURL: "https://comrade-dbd4b.firebaseio.com/",
  storageBucket: "gs://comrade-dbd4b.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const storageRef = firebaseApp.storage();
const lock = new Auth0Lock({clientId: 'N0KL9HtoTKHrHskugbgqn92c1tMfuTFL', domain: 'comrade.auth0.com'});


module.exports = {
  // Show Auth0 Lock
  firebaseAuthenticate(id, callback){
    itemsRef = firebaseApp.database().ref("users/").orderByChild('fb_id');
    itemsRef.once('value', function(snap){
      if(snap.exists()){
        callback(true);
      } else {
        callback(false);
      }
    })
  },
  firebasePush(ref, user, callback){
    var refstring =  (ref + "/");
    var uid = user.fb_id;
    itemsRef = firebaseApp.database().ref(refstring+uid);
    itemsRef.set(user);
    callback();
  },
  firebaseUpload(file, callback){
    console.log(file.uri);
    console.log(file);
    let uri = file.uri.uri;
    let mime = 'application/octet-stream';
    return new Promise((resolve, reject) => {
      const uploadUri = uri;
        const filename = file.name;
        let uploadBlob = null
        const imageRef = storageRef.ref('images').child(`${filename}`)

        fs.readFile(uploadUri, 'base64')
        .then((data) => {
          console.log("read file");
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          console.log("read file blob");
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return callback(imageRef.getDownloadURL())
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
    }) 
  },
  firebaseGet(ref, callback){
    
  },
  instagramAuthenticate(callback){
    lock.authenticate("instagram",{}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Logged into Instagram with Auth0!');
      this.auth0manager(profile.userId, callback);
    });
  },
  //   Obtain Auth0 bearer token
  auth0manager(userid, callback){
    var bearer;
    fetch("https://comrade.auth0.com/oauth/token",{
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: 
         JSON.stringify({ client_id: 'NaPPcGoWATzRMkBdAom4er5JwudEPcIs',
           client_secret: 'rlsOW3ZkNLav77YJ6xNu2NfdFlDxmb1fV2MSh7JD0t72lPqfn4ePtkkmSHOySbiy',
           audience: 'https://comrade.auth0.com/api/v2/',
           grant_type: 'client_credentials' })

      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('access: '+responseData);
        bearer = responseData.access_token;
        this.auth0Middleman(userid, bearer, callback);
      })
      .catch((error) => {
        console.error(error);
      }); 
  },
  // User bearer token to obtain instagram token for user
  auth0Middleman(userid, bearer, callback){
    fetch("https://comrade.auth0.com/api/v2/users/"+userid,{
      method: 'GET', 
      headers: {
        'Authorization': 'Bearer '+bearer
      }
    })
    .then((response) => response.json())
    .then((responseData) => {this.instagramHandler(responseData.identities[0].access_token, callback)})
    .catch((error) => {
      console.error(error);
    });  
  },
  // Obtain users instagram
  instagramHandler(access_token, callback){
    fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token="+access_token+"&count=10")
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      this.instagramOrganizer(responseData.data, callback);
    })
    .catch((error) => {
      console.error(error);
    }); 
  },
  // set up images for showing
  instagramOrganizer(response, callback){
    var photoarr = [];
    console.log(response)
    for (i = 0; i < response.length; i++){
        var img = {thumbnail: "", image: "", caption: ""};
        if (response[i].caption != null){
            img.caption = response[i].caption.text; 
        } else {
            img.caption = "";
        }
        
        img.thumbnail = response[i].images.thumbnail.url;
        img.image = response[i].images.standard_resolution.url;
        photoarr.push(img);
    }
    callback(photoarr);
  }
}