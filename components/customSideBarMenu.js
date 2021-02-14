import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { DrawerItems} from 'react-navigation-drawer'

export default class customSideBarMenu extends React.Component{
    render(){
        return(
<View style = {{flex:1}}>
<View style = {styles.drawerItemsContainer}>
<DrawerItems {...this.props}/>
</View>
<View style = {styles.logOutContainer}>
    <TouchableOpacity style = {styles.logOutButton}
    onPress = {()=>{
        this.props.navigation.navigate('Loginscreen')
        firebase.auth().signOut()
    }}>
<Text style = {styles.logOutText}>Logout</Text>
    </TouchableOpacity>
</View>
</View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })