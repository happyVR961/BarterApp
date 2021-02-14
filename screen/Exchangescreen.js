import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class Exchange extends React.Component { 
    constructor(){
        super();
        this.state = {
            ItemName : "",
            ItemDescription : "",
            ExchangeId : ""
        }
    }

addItem = (ItemName, ItemDescription) => {
    var UniqueId = createUniqueId();
db.collection("AddedItems").add({
    "item_name" : ItemName,
    "item_description" : ItemDescription,
    "exchange_id" : UniqueId
})
this.setState({
    ItemName : "",
    ItemDescription : ""
})
return alert("Item is ready to exchange")
}

createUniqueId = (id) =>{
    return Math.random().toString(36).substring(7)
    
}
    render(){
        return(
            <View>
               <MyHeader title = "Exchange Items" navigation = {this.props.navigation}/>
                   <TextInput
                    style = {styles.formTextInput}
                    placeholder = "Item Name"
                    onChangeText = {(text)=>{
                       this.setState({
                           ItemName : text
                       })
                    }}>
                   </TextInput>
                   <TextInput
                   style = {styles.formTextInput}
                   placeholder = "Item Description"
                   onChangeText = {(text)=>{
                      this.setState({
                          ItemDescription : text
                      })
                   }}>
                   </TextInput>
                   <TouchableOpacity
                   style = {styles.button}
                   onPress = {()=>{
                       this.addItem(this.state.ItemName, this.state.ItemDescription)
                   }}>
                 <Text>Add Item</Text>
                   </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
    button:{
        backgroundColor:"lightpink",
        width:120,
        height:40,
        marginTop:20,
        marginBottom:30,
        textAlign : "center",
        justifyContent : "center",
        borderWidth:3,
        borderRadius:50,
        marginLeft:15
    },
    text1 :{
        fontSize:20,
        fontWeight:"bold"
    },
    input1 : {
        height:40,
        width:150,
        borderWidth:3,
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
       
    }
})