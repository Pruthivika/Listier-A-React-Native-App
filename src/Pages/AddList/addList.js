//the screen after clicking the categories

import React ,{ useState, useEffect } from 'react'
import { StyleSheet, Text, View ,FlatList,TouchableOpacity, Button,Alert, TouchableWithoutFeedback,ActivityIndicator} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import MyCheckbox from '../../Components/CheckBox';
import {COLORS} from '../../Constants';
//import Store from '../../store/index';
//import {Provider} from 'react-redux';


import firestore from '@react-native-firebase/firestore';


export default function AddList({navigation,mykey}) {
   
    const FormatDate = (dateobj)=>{
        var month = dateobj.getUTCMonth() + 1; //months from 1-12
        var day = dateobj.getUTCDate();
        var year = dateobj.getUTCFullYear();
        var mydate =year + "/" + month + "/" + day;
        return mydate;
    }
    const Todaydate = new Date;
    // const { catKey } = route.params;
    // console.log(catKey);
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [tasks, setTasks] = useState([]); // Initial empty array of users
    // const [mytasks, mysetTasks] = useState([]);
    const mytasks = [];
    // const [state, setCheckbox] = useState(false);
    // const [mykey, setKey] = useState(false)
    //const [state, setCheckbox] = useState(false);

   



    useEffect(() => {
        const subscriber = firestore()
          .collection('Tasks')
          .onSnapshot(querySnapshot => {
            const tasks = [];
      
            querySnapshot.forEach(documentSnapshot => {
              tasks.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
          
            setTasks(tasks);
            setLoading(false);
          });
    
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

      
    if (loading) {
        return <ActivityIndicator />;
      }


 
    switch(mykey) {

      case '1':
        {
      
        tasks.map(x=>{
            if(x.DueDate){
                var xdate = x.DueDate.toDate();
                var minedate = FormatDate(xdate).toString();
                var date  = FormatDate(Todaydate).toString();

                if(minedate==date){
                    mytasks.push(x);
                }
                
            }
        
        });

        }
        break;
      
      case '2':
        tasks.map(x=>{ if(x.DueDate){mytasks.push(x); }});
        break;

      case '3':
        tasks.map(x=>{if(x.Completed==false){mytasks.push(x)}})
        break;

      case '4':
        tasks.map(x=>{if(x.Completed){mytasks.push(x)}})
        break;

      case '5':
        tasks.map(x=>{if(!x.DueDate){mytasks.push(x)}})
        break;  

      default:
        console.log("no match");
    
      }

   

    //   const [state, setCheckbox] = useState(true)
    return (
      <View style={styles.container}>
        
        <FlatList
          data={mytasks}
          // ListFooterComponent={
          //   <AddCard submitHandler={submitHandler}/>}
          renderItem={({item}) => (
            //  <LiCard item={item} pressHandler={pressHandler}/>
            
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('View', {title: item.Title,mykey:item.key});
              }}
              style={styles.tasks}>
              <View  style={{flexDirection: 'row'}}>
              
              
                <Icon color={COLORS.primary} name="circle" size={10} style={{alignSelf:'center'}} />
                <Text style={styles.text}>{item.Title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
}

