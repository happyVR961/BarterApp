import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { TabNavigator } from './AppTabNavigator';
import customSideBarMenu  from './customSideBarMenu';
import Settingscreen from '../screen/Settingscreen';
import MyBarters from '../screen/MyBartersScreen';


export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
    screen : TabNavigator
},
Setting : {
    screen : Settingscreen
},
    MyBarter : {
        screen : MyBarters
    }
},
{
    contentComponent : customSideBarMenu
},
{
    initialRouteName : 'Home'
})