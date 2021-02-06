import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  // StatusBar,
} from 'react-native';

import { connect } from "react-redux"
import { facebook_login } from '../Store/Actions/Actions'

class Login extends React.Component {

  render() {

    // login=()=>{
    // console.log("running....")
    // }
    return (

      <View style={styles.main}>
        <View style={styles.view1}>
          <Image source={require('../Assets/logo.png')} style={styles.img} />
          <Text style={styles.heading} >BLOOD BANK</Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.Butn} onPress={() => facebook_login(this.props)} >
            <Image source={require('../Assets/fblogo.png')} style={styles.fbimg} />
            <Text style={styles.BtnText}>Login With Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  view1: {
    backgroundColor: "red",
    height: 150,
    flexDirection: 'row',
    // alignSelf:'baseline',
    // alignContent:'center',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderColor: "red",
    borderWidth: 1,
    // marginLeft:-50,
    // marginRight:-50
    // opacity:0.6,
  },
  heading: {
    //   marginLeft:0
    // marginRight:30,
    color: 'white',
    borderColor: "red",
    borderWidth: 1,
    fontSize: 41,
    fontWeight: 'bold'
  },
  view2: {
    marginTop: 150,
    alignItems: 'center',
  },
  Butn: {
    width: 320,
    flexDirection: 'row',
    padding: 18,
    alignItems: 'center',
    // alignContent:'center',
    // fontWeight: 'bold',
    // fontSize: 10,
    // justifyContent:'space-evenly',
    backgroundColor: 'white',
    // color: 'skyblue',
    borderRadius: 14,
    // alignSelf:'flex-end',
    // position: 'absolute',
    // bottom:35,
    // left:50,
  },
  BtnText: {
    color: '#3b5998',
    fontSize: 24,
    fontWeight: "bold",
    // marginLeft:50
  },
  fbimg: {
    marginRight: 15,
    width: 40,
    height: 60,
    resizeMode: 'contain',
  },
})



const mapDispatchToProps = (dispatch) => ({
  facebook_login: (props) => dispatch(facebook_login(props)),
})


export default connect(null, mapDispatchToProps)(Login);