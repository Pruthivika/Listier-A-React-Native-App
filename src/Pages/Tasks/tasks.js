import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Dimensions, Alert, ScrollView } from 'react-native';
import MyHeader from '../../Components/Header';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import Floatingbutton from '../../Components/Button/floatingbutton';
import Accordian from '../../Components/ExpandableList';
import {COLORS} from '../../Constants';

import AddList from '../AddList/addList';


import firestore from '@react-native-firebase/firestore';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';



const window = Dimensions.get('window');

export default function Tasks({navigation}) {
  
  const [tasks, setTasks] = useState([]); 
  // useEffect(() => {
  //   var g = ""
  //   switch(true){
  //     case hours > 0 && hours<12 :g = "hi"; break;
  //     case hours >= 12 && hours < 17:;g = "h";break;
  //     case hours >=17 && hours < 20 :g = "lhi";break;
  //     default : console.log("hapspa");break;
  //  }
  //  setGreet(g);
  

  // },[]);
  //const today = new Date();
  // const timestamp = new 
  const today = new Date();
  const mytasks = [];
  const[greet,setGreet]=useState("");
  var hours = today.getHours();
  const FormatDate = (dateobj)=>{
    var month = dateobj.getUTCMonth() + 1; //months from 1-12
    var day = dateobj.getUTCDate();
    var year = dateobj.getUTCFullYear();
    var mydate =year + "/" + month + "/" + day;
    return mydate;
}


  useEffect(() => {
    const subscriber = firestore()
      .collection('Tasks')
      .where('Completed', '==',false)
      .onSnapshot(querySnapshot => {
        const tasks = [];
  
        querySnapshot.forEach(documentSnapshot => {
          tasks.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
      
        setTasks(tasks);
       
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  {
    tasks.map(x=>{
      if(x.DueDate){
          var xdate = x.DueDate.toDate();
          var minedate = FormatDate(xdate).toString();
          var date  = FormatDate(today).toString();

          if(minedate==date){
              mytasks.push(x);
          }
          
      }
    })
  }
  
 // console.log(greet)
  
  
 
 
  



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
      // <ScrollView>
        <View style={{flex:1}}>
        <Header
      containerStyle={styles.header}
      placement="left"
      centerComponent={{ text: 'Listier', style: { color: '#fff' , fontFamily:'Oleo',fontSize:25} }}
      
      rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
    />
    
    {/* <View style={styles.cardtop}>
       <Text style={{fontFamily:"Choco",fontSize:40}}>HI </Text>
    </View> */}
    <View style={{flexDirection:'row'}}>
    <Icon style={{paddingTop:20,paddingLeft:20}} name="sun-o" size={30} color={COLORS.yellow}/>
   <Text style={styles.subtitle}>My Day</Text>
    </View>
     
    <FlatList
          data={mytasks}
          // ListFooterComponent={
          //   <AddCard submitHandler={submitHandler}/>}
          renderItem={({item}) => (
            //  <LiCard item={item} pressHandler={pressHandler}/>
            
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('View', {title: item.Title,mykey:item.key,page:'TaskMain'});
              }}
              style={{justifyContent:'space-between'}}>
              <View  style={{flexDirection: 'row'}}>
              
            
                <Icon color={COLORS.primary} name="circle" size={10} style={{alignSelf:'center',padding:20}} />
                <Text style={styles.minetext}>{item.Title}</Text>
             
            <Text style={{alignSelf:'center',marginTop:10}}>{item.Duration?item.Duration:null}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
  {/* <FlatList
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
        
       /> */}
    <Floatingbutton  onpressfun={addTask}/>
   
 

        </View>
     
    )
}


