import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';


export default class Settingscreen extends React.Component { 
constructor(){
    super();
    this.state = {
        Email : "",
        FirstName : "",
        LastName : "",
        Address : "",
        Contact : "",
        docId : ""
    }
}

getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('Users').where("email_id", "==", email).get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            var data = doc.data();
            this.setState({
                Email : data.Email,
                FirstName : data.First_Name,
                LastName : data.Last_Name,
                Address : data.Address,
                Contact : data.Contact
                
            })
        });
    })
}

updateUserDetails = () => {
    db.collection('Users').doc(this.state.doc.Id).update({
"First_Name" : this.state.FirstName,
"Last_Name" : this.state.LastName,
"Contact" : this.state.Contact,
"Address" : this.state.Address
    })
    alert("Profile updated successfully")
}

    render(){
        return(
<View style = {styles.container}>
<MyHeader title = "Settings"/>
<View style = {styles.formContainer}>
    <TextInput style = {styles.formTextInput}
    placeholder = "First Name"
    maxLength = {10}
    onChangeText = {(text)=>{
        this.setState ({
            FirstName : text
        })
    }}
    value = {this.state.FirstName}/>

     <TextInput style = {styles.formTextInput}
    placeholder = "Last Name"
    maxLength = {10}
    onChangeText = {(text)=>{
        this.setState ({
            LastName : text
        })
    }}
    value = {this.state.LastName}/>

     <TextInput style = {styles.formTextInput}
    placeholder = "Contact"
    maxLength = {15}
    keyboardType = "numeric"
    onChangeText = {(text)=>{
        this.setState ({
            Contact : text
        })
    }}
    value = {this.state.Contact}/>

     <TextInput style = {styles.formTextInput}
    placeholder = "Address"
    maxLength = {10}
    multiline
    onChangeText = {(text)=>{
        this.setState ({
            Address : text
        })
    }}
    value = {this.state.Address}/>    
   <TouchableOpacity style = {styles.button} onPress = {()=>{
       this.updateUserDetails()
   }}>
       <Text style = {styles.buttonText}>Save</Text>
   </TouchableOpacity>
</View>
</View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
    },
    buttonText:{
      fontSize:25,
      fontWeight:"bold",
      color:"#fff"
    }
  })
  