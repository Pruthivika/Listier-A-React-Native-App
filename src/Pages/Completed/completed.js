import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../Constants';

import firestore from '@react-native-firebase/firestore';

export default function Completed({navigation}) {
  const dbRef = firestore().collection('Tasks');
    const [tasks, setTasks] = useState([]); 
    const FormatDate = (dateobj)=>{
        var month = dateobj.getUTCMonth() + 1; //months from 1-12
        var day = dateobj.getUTCDate();
        var year = dateobj.getUTCFullYear();
        var mydate =year + "/" + month + "/" + day;
        return mydate;
    }

    // const DeleteTask=(mykey)=>{
       
    //   dbRef.doc(mykey).delete()
      
    // }

    useEffect(() => {
        const subscriber = dbRef
          .where('Completed', '==',true)
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
      containerStyle={styles.header}
      placement="left"
      centerComponent={{ text: 'Completed', style: { color: COLORS.primary , fontFamily:'Choco',fontSize:20} }}
      leftComponent={<Icon name="long-arrow-left" size={20} color={COLORS.primary}  onPress={()=>navigation.goBack()}></Icon>}
      rightComponent={<Icon name="bars" size={20} color={COLORS.primary} onPress={() =>navigation.openDrawer()}></Icon>}
    />
          
        
        <FlatList
        
          data={tasks}
          // ListFooterComponent={
          //   <AddCard submitHandler={submitHandler}/>}
          renderItem={({item}) => (
            //  <LiCard item={item} pressHandler={pressHandler}/>
            
           <View style={styles.card}>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',flex:1}}>
               <View style={{flexDirection:'column'}}>
             <Text style={styles.title}>{item.Title}</Text>
             <Text style={styles.desc}>Duration ~ {item.Duration?item.Duration:null}</Text>
          <Text style={styles.desc2}>Created At: {FormatDate(item.CreatedDate.toDate())}</Text>
             <Text style={styles.desc2}>Completed At : {item.CompletedAt?FormatDate(item.CompletedAt.toDate()):null}</Text>
             <Text style={styles.desc}>{item.Description}</Text>
             </View>

             <Icon style={{alignSelf:'flex-end'}} name="trash"  color={COLORS.white} size={20} onPress={()=>{dbRef.doc(item.key).delete()}} ></Icon>
             </View>
            </View>
          )}
        />
      </View>
        
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:COLORS.white},
      card:{
        paddingTop:20,
        paddingBottom:30,
        flexDirection:'row',
        backgroundColor:COLORS.primarycard,
       
        
        borderRadius:25,
        marginTop:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        
      },
      title:{
          fontFamily:"Choco",
          fontSize:20,
          color:COLORS.white
      },
      desc:{
        fontFamily:"Choco",
        fontSize:15,
        // color:COLORS.darkerGrey
        color:COLORS.white
      },
      desc2:{
        fontFamily:"Choco",
        fontSize:15,
        // color:COLORS.transparentBlack
        color:COLORS.white
      }
})
