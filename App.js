/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {
//   // SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   // StatusBar,
// } from 'react-native';
import {Provider} from "react-redux";
import store from "./src/Store/Store";
import AppNavigation from "./src/Configuration/Navigation"
// import Login from './src/Screens/Login'


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <AppNavigation/>
      </Provider>
      // <Login/>

    )
  }
}

