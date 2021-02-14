import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AppDrawerNavigator from './AppDrawerNavigator';
import UserDetails from '../screen/UserDetailscreen';

export const AppStackNavigator = createStackNavigator({
    AppDrawerNavigator : {
        screen : AppDrawerNavigator,
        navigationOptions : {
            headerShown : false
        }
    },
    UserDetails : {
        screen : UserDetail,
        navigationOptions : {
            headerShown : false
        }
    }
},
{
    initialRouteName : 'AppDrawerNavigator'
}
);