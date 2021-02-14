import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Exchange from '../screen/Exchangescreen';


export const AppTabNavigator = createBottomTabNavigator({
  Exchange : {
    screen: Exchangescreen
  },
  Home: {
    screen: Homescreen,
  }
});