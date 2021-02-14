import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import{Card,Header,Icon, ListItem} from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';

export default class MyBarters extends React.Component{
    constructor(){
        super();
        this.state = {
            donorId : firebase.auth().currentUser.email,
            donorName : "",
            allBarters : []
        },
        this.requestRef = null
    }

    getAllBarters=()=>{
        this.requestRef = db.collection('my_barters').where("donor_id", "==", this.state.donorId)
        .onSnapshot((snapshot)=>{
            var allBarters = []
            snapshot.docs.map((doc)=>{
                var barter = doc.data()
                barter["doc_id"]=doc.id
                allBarters.push(donation)
            });
            this.setState({
                allBarters : allBarters
            });
        })
    }
    keyExtractor = (item, index) => index.toString()
    renderItem = ({item, i}) =>{
        <ListItem
        key = {i}
        title = {item.item_name}
        subtitle = {item.barter_status}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement = {
            <TouchableOpacity
            style = {styles.button}>
                <Text>Exchange</Text>
            </TouchableOpacity>
        }
        >

        </ListItem>
    }

    render(){
        return(
<View>

</View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    },
    subtitle :{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    }
  })