import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../Constants';

import firestore from '@react-native-firebase/firestore';

export default function Alltasks({navigation}) {
    const dbRef = firestore().collection('Tasks');
    const [tasks, setTasks] = useState([]); 
    const page = 'All Tasks';

    useEffect(() => {
        const subscriber = dbRef
          .where('Completed','==',false)
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
    return (
        <View style={{flex:1}}>
                  <Header
      containerStyle={{backgroundColor:COLORS.primary}}
      placement="left"
      centerComponent={{ text: 'Tasks', style: { color: COLORS.white , fontFamily:'Choco',fontSize:20} }}
      leftComponent={<Icon name="long-arrow-left" size={20} color={COLORS.white}  onPress={()=>navigation.goBack()}></Icon>}
      rightComponent={<Icon name="bars" size={20} color={COLORS.white} onPress={() =>navigation.openDrawer()}></Icon>}
    />

<FlatList
          data={tasks}
          // ListFooterComponent={
          //   <AddCard submitHandler={submitHandler}/>}
          renderItem={({item}) => (
            //  <LiCard item={item} pressHandler={pressHandler}/>
            
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('View', {title: item.Title,mykey:item.key,page:page});
              }}
              style={{justifyContent:'space-between'}}>
              <View  style={styles.card}>
              
               
                {/* <Icon color={COLORS.primary} name="circle" size={10} style={{alignSelf:'center',padding:20}} /> */}
                <Text style={styles.title}>{item.Title}</Text>
                <Text style={styles.desc}>{item.Description}</Text>
             
          
              </View>
            </TouchableOpacity>
          )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        paddingTop:20,
        paddingBottom:30,
        flexDirection:'row',
        backgroundColor:COLORS.white,  
        borderRadius:10,
        marginTop:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        flexDirection:'column',
        elevation:5,
    },
    title:{
        fontFamily:"Choco",
        fontSize:20,
        color:COLORS.primary
        
    },
    desc:{
        fontFamily:"Choco",
        fontSize:16,
      
    }
    // container:{
    //     flex:1
    // }

})
