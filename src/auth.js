var Auth0Lock = require('react-native-lock');
import GLOBALS from "./globals";
import RNFetchBlob from 'react-native-fetch-blob';
let lock;

module.exports = {
// ======================================================================== AUTHENTICATE INSTAGRAM ========================================================================  
  instagramAuthenticate(callback){
    lock = new Auth0Lock({clientId: 'N0KL9HtoTKHrHskugbgqn92c1tMfuTFL', domain: 'comrade.auth0.com'});
    lock.authenticate("instagram",{}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      this.auth0manager(profile.userId, callback);
    });
  },
  // ======================================================================== AUTH0 BEARER TOKEN ========================================================================
  auth0manager(userid, callback){
    var bearer;
    console.log(userid);
    console.log(JSON.stringify({ 
           client_id: "NaPPcGoWATzRMkBdAom4er5JwudEPcIs",
           client_secret: "rlsOW3ZkNLav77YJ6xNu2NfdFlDxmb1fV2MSh7JD0t72lPqfn4ePtkkmSHOySbiy",
           audience: "https://comrade.auth0.com/api/v2/",
           grant_type: "client_credentials" 
        }));
    fetch("https://comrade.auth0.com/oauth/token", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
           client_id: "NaPPcGoWATzRMkBdAom4er5JwudEPcIs",
           client_secret: "rlsOW3ZkNLav77YJ6xNu2NfdFlDxmb1fV2MSh7JD0t72lPqfn4ePtkkmSHOySbiy",
           audience: "https://comrade.auth0.com/api/v2/",
           grant_type: "client_credentials" 
        })
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
// ======================================================================== OBTAIN INSTATOKEN ========================================================================
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
// ======================================================================== INSTAGRAM DATA OBTAIN ========================================================================
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
// ======================================================================== ORGANIZE INSTAGRAM ========================================================================
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