import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, ListItem } from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class Homescreen extends React.Component { 
    constructor(){
        super();
        this.state = {
            AddItem : [],
        }
        AddRef = null
    }

getRequestedItems = () => {
    this.AddRef = db.collection('AddedItems')
    .onSnapshot((snapshot)=>{
     var AddItem = snapshot.docs.map(document => document.data());
     this.setState({
         AddItem : AddItem
     })
    })
}
componentDidMount(){
    this.getRequestedItems();
}
keyExtractor = (item,index).index.toString()
renderItem = ({item, i})=>{
return(
<ListItem
key = {i}
title = {item.item_name}
subtitle = {item.item_description}
titleStyle={{ color: 'black', fontWeight: 'bold' }}
rightElement={
    <TouchableOpacity style={styles.button}>
      <Text style={{color:'#ffff'}}>View Item</Text>
    </TouchableOpacity>
  }
bottomDivider/>

)
}

render(){
    return(
        <View style = {{flex:1}}>
            <MyHeader title = "Donate Items" navigation = {this.props.navigation}/>
<View style = {{flex:1}}>
{
    this.state.AddItem.length === 0
    ?(<View style={styles.subContainer}>
        <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
      </View>)
      :(
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.AddItem}
          renderItem={this.renderItem}
        />
      )
}
</View>
            
        </View>
    )
}
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })
  