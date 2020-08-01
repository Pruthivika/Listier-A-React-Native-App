import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Dimensions, Alert } from 'react-native';
import MyHeader from '../../Components/Header';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Tasks from './tasks';
import Floatingbutton from '../../Components/Button/floatingbutton';
import Accordian from '../../Components/ExpandableList';
import {COLORS} from '../../Constants';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';



const window = Dimensions.get('window');

export default function TaskMain({navigation}) {
    const addTask=()=>{
     navigation.navigate('Form')
    }
    const [topics,setTopics]=useState([
        {col:COLORS.yellow  ,icon:"sun-o",text:'My Day',key:'1'},
        // {col:COLORS.yellow,icon:"star",text:'Important',key:'2'},
        {col:COLORS.green,icon:"calendar-o",text:'Planned',key:'2'},
        {col:COLORS.red,icon:"asterisk",text:'All',key:'3'},
        // {col:COLORS.primaryGreen,icon:"check",text:'Completed',key:'4'},
        {col:COLORS.blue,icon:"thumb-tack",text:'Tasks',key:'5'}
       
    
      ]);
    return (
        <View style={{flex:1}}>
        <Header
      containerStyle={styles.header}
      placement="left"
      centerComponent={{ text: 'Listier', style: { color: '#fff' , fontFamily:'Oleo',fontSize:25} }}
      
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
      <TouchableOpacity onPress={()=>{navigation.navigate('List',{ name:item.text,catKey:item.key})}} style={styles.Topic} >
          <View style={{flexDirection:'row'}}>
          <Icon name={item.icon}  color={item.col}  size={18} style={styles.ListIcon}></Icon>
  <Text style={styles.topicText}>{item.text}</Text>
          </View>
   
  
  <Icon name="angle-right" color={COLORS.black} size={18}></Icon>
</TouchableOpacity>
        )}
        
       />
    <Floatingbutton  onpressfun={addTask}/>
   
 

        </View>
    )
}


