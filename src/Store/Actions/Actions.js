import auth from '@react-native-firebase/auth';
// import React from 'react';
import database from '@react-native-firebase/database';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import Login from '../../Screens/Login'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import ActionTypes from '../Constant/Constant'

const facebook_login=async(props)=>{

  
    
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
  
      if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  
  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
  // Sign-in the user with the credential
  auth().signInWithCredential(facebookCredential)
  .then((user)=>{
    // console.log("user...",user)
    // console.log("user...DDDDDD",user.user)
    let data_user={
      name : user.user.displayName,
      profile : user.user.photoURL,
      uid : user.user.uid,
    }
    
    // return (dispatch)=>{
      database().ref('/').child(`user/${user.user.uid}`).set(data_user)
      .then(()=>{
        // try{
        //   // console.log('dispatch+++>>>>',dispatch)
        return (dispatch)=>{
        dispatch({type:"SETUSER",payload:data_user})
      // }catch(err){
      //   console.log("err...",err)
      // }
    }
      })

      
      // }
    })
    .catch((err)=>{
      console.log("err...",error)
    })
    
    props.navigation.navigate('Home')
}
  


const logout=(props)=>{
              auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  
    
  props.navigation.navigate('Login')

      }


const AvailableBlood=(props)=>{
  props.navigation.navigate('AvailableBlood')

}
const DonateBlood=(props)=>{
  props.navigation.navigate('DonateBlood')

}

const DonateNow=(state,props)=>{
  // props.navigation.navigate('Home')
  var key = database().ref('/').child(`post/`).push().key
  let stateKey = {
      ...state,
      key:key
  }
  database().ref('/').child(`donors/${key}`).set(stateKey)
  alert("Thanks For Donating Blood")
  setTimeout(()=>{
    props.navigation.navigate('Home')
  },2000)
}


const postGet =()=>{
  return(dispatch)=>{
      // let post_get_data_array = []
      database().ref('/').child(`donors/`).on("child_added",(data)=>{

          let post_get_data=
          {
                  contact: data.val().contact,
                  bloodgroup:data.val().bloodgroup,
                  key:data.val().key,
                  name:data.val().name,

          }

          dispatch({type:"POSTGET",payload:post_get_data})
      })
  }
}


export{
  facebook_login,
  logout,
  AvailableBlood,
  DonateBlood,
  DonateNow,
  postGet
} 