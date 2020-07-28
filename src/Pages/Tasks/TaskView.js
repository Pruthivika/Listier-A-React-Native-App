import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard  } from 'react-native'
import {COLORS} from '../../Constants'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function TaskView({ route,navigation}) {
    const { title } = route.params;
    const des = "";
    const [timeButton,setButton]=useState(false)
    
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.container}>
           <View style={styles.card}>
               
               <Text style={styles.title}>{title}</Text>
             {timeButton?
                 <View style={styles.timedisp}>
                 <Text>Tracking |</Text>
                 <Text>00:05:50</Text>
               </View>
               :null
             }
            

               <TouchableOpacity onPress={()=>{setButton(!timeButton)}} style={styles.button}>
                   <Text>Start</Text>
               </TouchableOpacity>
           </View>
          <View style={styles.card2}>
              <Text style={styles.subtitle}>Description</Text>
              <TextInput
              multiline={true}
              placeholder={"Add your note"}
              blurOnSubmit={true}
              numberOfLines={6}
              maxLength={60}
              
            style={styles.desc}
      onChangeText={()=>null}
      
    />
              <Text>
                  
                  {des?des:null}
              </Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    card:{
        elevation:6,
        // height:70,
        padding:10,
        paddingLeft:30,
        backgroundColor:COLORS.white,
        flexDirection:'column',
        alignItems:'center'
        
    },
    title:{
        fontSize:35,
        fontFamily:'Choco',
        alignSelf:'center'
    },
    subtitle:{
        fontSize:18,
        fontFamily:'Choco',
        bottom:0
        
    },
    button:{
        
        borderColor:COLORS.primary,
        borderRadius:20,
        borderWidth:2,
        width:120,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20


    },
    card2:{
        elevation:3,
        height:100,
        padding:10,
        paddingLeft:30,
        backgroundColor:COLORS.white,
        flexDirection:'column',
        marginTop:10,
        flex:1
    },
    close:{
        alignSelf:'flex-start',
        marginTop:24
        
    
        
    },
    desc:{
         height: 100,
         borderBottomColor:COLORS.darkerGrey,
         borderBottomWidth:2,
         paddingTop:0,
         top:0
   
    },
    timedisp:{
       flexDirection:'row',
       marginTop:20,
       justifyContent:'space-between',
       alignContent:'space-around'
    }
})
