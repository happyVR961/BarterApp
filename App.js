import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/Loginscreen';
import db from './Config';
import firebase from 'firebase';
import Exchange from './screen/Exchangescreen';
import Homescreen from './screen/Homescreen';
import  {createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import {createDrawerNavigator} from 'react-navigation-drawer';
import Settingscreen from './screen/Settingscreen';
import AppDrawerNavigator from './components/AppDrawerNavigator';
import AppTabNavigator from './components/AppTabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
     <AppContainer/>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  Loginscreen : {screen:Login},
  Drawer : {screen:AppDrawerNavigator},
  BottomTab : {screen:AppTabNavigator}
})
const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
