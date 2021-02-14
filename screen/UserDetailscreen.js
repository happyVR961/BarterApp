import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';

export default class UserDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userId : firebase.auth().currentUser.email,
           userName : "",
           ItemDescription : this.props.navigation.getParam('details')["item_description"],
           recieverId : this.props.navigation.getParam('details')["user_id"],
           itemName        : this.props.navigation.getParam('details')["item_name"],
           exchangeId       : this.props.navigation.getParam('details')["exchange_id"],
           recieverName : "",
           recieverContact : "",
           recieverAddress : "",
           recieverRequestDocId : ""

        }
    }
    getUserDetails = () => {
        db.collection('Users').where("email_id", "==", this.state.recieverId).get()
        .then(snapshot =>{
            snapshot.forEach(doc=>{
                this.setState({
                    recieverName : doc.data().first_name,
                    recieverContact : doc.data().contact,
                    recieverAddress : doc.data().address 
                })
                
            });
        })
                db.collection('AddedItems').where('exchange_id', '==', this.state.exchangeId).get()
                .then(snapshot =>{
                    snapshot.forEach(doc =>{
                        this.setState({recieverRequestDocId : doc.id})
                    })
                })
                   
    }

    addBarter = ()=>{
        db.collection('my_barters').add({
            "exchange_id" : this.state.exchangeId,
            "contact" : this.state.contact,
            "address" : this.state.address,
            "barter_status" : "Person Interested",
            "item_name" : this.state.itemName
          })
    }

    addNotification = () =>{
        var message = this.state.userName + "has shown interesting in exchanging the item"
        db.collection('all_notifications').add({
            "user_id" : this.state.userId,
            "contact" : this.state.contact,
            "address" : this.state.address,
            "barter_status" : "unread",
            "item_name" : this.state.itemName,
            "message" : message,
            "date" : firebase.firestore.FieldValue.serverTimestamp()
        })
    }
        render(){
        return(
            <View>
<TouchableOpacity style = {styles.button} onPress = {
    ()=>{
        this.addBarter();
        this.addNotification();
        this.props.navigation.navigate('MyBarters')
    }
}>
    <Text>I want to exchange</Text>
    </TouchableOpacity>          
      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    buttonContainer : {
      flex:0.3,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:200,
      height:50,
      justifyContent:'center',
      alignItems : 'center',
      borderRadius: 10,
      backgroundColor: 'orange',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    }
  })