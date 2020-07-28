import React, {useState} from 'react';
// import {View, Text, FlatList} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Header,Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
//  import {SafeAreaView } from 'react-native-safe-area-context';
 import { StyleSheet, Text, View, Image ,FlatList, Button, requireNativeComponent,SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import LiCard from '../../Components/Card';
import ViewCard from '../../Components/ViewCard';
import AddCard from '../../Components/AddCard/addCard';
import Floatingbutton from '../../Components/Button/floatingbutton';
import {COLORS} from '../../Constants';
import AddList from '../AddList/addList'


//firebase
import firestore from '@react-native-firebase/firestore';
import { min } from 'moment';



 
export default function Tasks({navigation}){
  const [todos,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the switch',key:'3'},
    {text:'play on the switch',key:'4'},
    {text:'play on the switch',key:'5'},
    {text:'play on the switch',key:'6'},
    {text:'play on the switch',key:'7'},
    {text:'play on the switch',key:'8'},
    {text:'pln the switch',key:'9'}

  ]);


  // firestore()
  // .collection('Tasks')
  // .get()
  // .then(querySnapshot => {
  //   console.log('Total lists: ', querySnapshot.size);
    
  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('ID: ', documentSnapshot.id, documentSnapshot.data());
  //     setTodos((prevTodos)=>{return [documentSnapshot.data(),...prevTodos
  //     ]});

  //     console.log(todos);
  
  //   });
  // });
   



  


  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key !=key);
    });
  }


 const submitHandler = (text)=>{
   if(text.length>3){
    setTodos((prevTodos)=>{
      return[
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ];
       
    });
   }

 }
//     var Title=[]; 
//   const mine=  firestore()
// .collection('TestCol')
// .get()
// .then(querySnapshot => {
//   console.log('Total lists: ', querySnapshot.size);
  
//   querySnapshot.forEach(documentSnapshot => {
//     console.log('ID: ', documentSnapshot.id, documentSnapshot.data());
//     Title.push(documentSnapshot.data().title);
//     console.log(Title);

//   });
// });
 
  return(
        



   <FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        
        // ListFooterComponent={        
        //   <AddCard submitHandler={submitHandler}/>}
        renderItem={({item})=>(
      //  <LiCard item={item} pressHandler={pressHandler}/>
      <TouchableOpacity onPress={()=>pressHandler(item.key)}>
  <Text style={styles.item}>{item.text}</Text>
</TouchableOpacity>
        )}
        
       />

// {/* <Button title="click me" onPress={}/> */}





       

 
//   // </SafeAreaView>
 
     
);
}

const styles = StyleSheet.create({
   mylist:{
       flexDirection:'column',
       justifyContent:'space-around',
       alignContent:'center'
   },
   container:{
  
    padding:20,
    flexDirection:'column',
    flexWrap:'wrap',
   
   
    


  },
  safeAreaView:{
    backgroundColor:"#ffffff",
    flex: 1
},
  item:{
    padding:30,
    marginTop:10,
    borderColor:COLORS.black,
    borderStyle:'dashed',
    borderRadius:10,
    borderWidth:1
  }
  
})

// const State = {
//  List:{}
// }
