// /**
//  * @format
//  */
// import React from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import {Provider} from "react-redux";
// import store from "./src/Store/Store";

// const Redux = ()=>{
//     return(
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     )
// }

// AppRegistry.registerComponent(appName, () => Redux);


/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);