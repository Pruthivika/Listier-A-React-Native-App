import React, {useEffect,useState} from 'react';
// import {View, Text, FlatList} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Header,Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
 //import {SafeAreaView } from 'react-native-safe-area-context';
 import { StyleSheet, Text, View, Image,SafeAreaView, ScrollView ,TouchableOpacity,FlatList} from 'react-native';
 import { Header } from 'react-native-elements';
import LiCard from '../../Components/Card';
import ViewCard from '../../Components/ViewCard';
import {COLORS} from '../../Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Floatingbutton from '../../Components/Button/floatingbutton';
import styles from './styles';

//firebase
import firestore from '@react-native-firebase/firestore';
import { min } from 'moment';




export default function Shopping({ navigation }) {
  const [topics,setTopics]=useState([
    {col:COLORS.darkerGrey,icon:"sun-o",text:'All',key:'1'},
    {col:COLORS.yellow,icon:"star",text:'Accessories',key:'2'},
    {col:COLORS.green,icon:"calendar-o",text:'Groceries',key:'3'},
    {col:COLORS.red,icon:"asterisk",text:'Clothing',key:'4'},
    {col:COLORS.primaryGreen,icon:"check",text:'Others',key:'5'},
    // {col:COLORS.blue,icon:"thumb-tack",text:'Tasks',key:'6'}
   

  ]);
return (
    <View style={{flex:1}}>
    <Header
  containerStyle={styles.header}
  placement="left"
  centerComponent={{ text: 'Shopping', style: { color: '#fff' , fontSize:20,fontFamily:'Choco' } }}
  leftComponent={<Icon name="home" size={26} color="white" onPress={() =>navigation.navigate('Home')}></Icon>}
  rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
/>
{/* <Tasks/> */}
{/* <Accordian title='Today' data='difjijidjvij'/> */}
<FlatList
    data={topics}
    
    style={styles.topicFlatlist}
    // ListFooterComponent={        
    //   <AddCard submitHandler={submitHandler}/>}
    renderItem={({item})=>(
  //  <LiCard item={item} pressHandler={pressHandler}/>
  <TouchableOpacity onPress={()=>navigation.navigate('List')} style={styles.Topic} >
      <View style={{flexDirection:'row'}}>
      <Icon name={item.icon}  color={item.col}  size={18} style={styles.ListIcon}></Icon>
<Text style={styles.topicText}>{item.text}</Text>
      </View>


<Icon name="angle-right" color={COLORS.black} size={18}></Icon>
</TouchableOpacity>
    )}
    
   />
<Floatingbutton />



    </View>
)
}




