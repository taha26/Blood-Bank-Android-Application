import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import {Image,Text} from "react-native";
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import AvailableBlood from '../Screens/AvailableBlood';
import DonateBlood from '../Screens/DonateBlood';
// import {DrawerContent} from '../Configuration/DrawerContent'
// import {Navigation} from "react-native-navigation";


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();


// function AppDrawer() {
//   return (
//       <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
//         <Drawer.Screen name="Home" component={Home} />
//       </Drawer.Navigator>
//   );
// }

function AppNavigation() {
    // render(){
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' >
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen  options={{title:'',headerStyle:{backgroundColor:"white"},headerTitle:props => <Image source={require('../Assets/logo.png')} style={{width:60,height:100,resizeMode:'contain'}}/>}} name="Home" component={Home} /> */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AvailableBlood" component={AvailableBlood} />
                <Stack.Screen name="DonateBlood" component={DonateBlood} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    // }
}

export default AppNavigation;