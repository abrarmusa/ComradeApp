import RNFetchBlob from 'react-native-fetch-blob';
import * as firebase from 'firebase';
import { Platform } from 'react-native';


const firebaseConfig = {
  apiKey: "AIzaSyDvQD0f03_B1XcfbqQmOQDIA94L57DYt4c",
  authDomain: "comrade-dbd4b",
  databaseURL: "https://comrade-dbd4b.firebaseio.com/",
  storageBucket: "gs://comrade-dbd4b.appspot.com",
};
let firebaseApp;
let storageRef;
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs

module.exports = {
// ======================================================================== INITIALIZE FIREBASE ========================================================================
  initializeFirebase(callback){
    firebaseApp = firebase.initializeApp(firebaseConfig);
    storageRef = firebaseApp.storage();
    callback();
  },
// ======================================================================== AUTHENTICATE FIREBASE ========================================================================  
  firebaseAuthenticate(id, callback){
    itemsRef = firebaseApp.database().ref("users/").child(id);
    itemsRef.once('value', function(snap){
      if(snap.exists()){
        callback(snap.val());
      } else {
        callback(false);
      }
    })
  },
// ======================================================================== PUSH DATA INTO FIREBASE ========================================================================  
  firebasePush(ref, user, callback){
    var refstring =  (ref + "/");
    var uid = user.fb_id;
    itemsRef = firebaseApp.database().ref(refstring+uid);
    itemsRef.set(user);
    callback();
  },
 // ======================================================================== UPDATE DATA IN FIREBASE ========================================================================  
  firebaseUpdate(ref, user, callback){
    var refstring =  (ref + "/");
    var uid = user.fb_id;
    console.log("Updating");
    itemsRef = firebaseApp.database().ref(refstring+uid);
    itemsRef.update(user);
    callback();
  }, 
// ======================================================================== UPLOAD FILE TO FIREBASE ======================================================================== 
  firebaseUpload(file, callback){ 
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;   
    console.log("uploading");
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
          return imageRef.getDownloadURL();
        })
        .then((url) => {
          console.log(url);
          console.log("Got url")
          callback(url);
        })
        .catch((error) => {
          reject(error)
        })
    }) 
  },
// ======================================================================== GET FROM FIREBASE ========================================================================  
  firebaseGet(ref, callback){
    
  },  
}