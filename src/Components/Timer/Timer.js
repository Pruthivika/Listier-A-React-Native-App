import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,StatusBar,TouchableOpacity,Dimensions} from 'react-native';
import {COLORS} from '../../Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';

const screen = Dimensions.get('window');
const formatNumber = number =>`0${number}`.slice(-2);
const getRemaining = (time)=>{
    const mins=Math.floor(time/60);
    const secs=time-mins*60;
    return {mins:formatNumber(mins),secs:formatNumber(secs)};
}
export default function Timer({variant,mykey,done}){

    const Userid = auth().currentUser.uid;
    const dbRef = firestore().collection('Users').doc(Userid).collection('Tasks');
    const [remainingSecs,setRemainingSecs]=useState(0);
    const [isActive,setIsActive] = useState(variant ? true : false); 
    const [timeButton,setButton]=useState(false);
    const {mins,secs} = getRemaining(remainingSecs);
    // const [interval,setInterval]=useState("");
    const mine=`${mins}:${secs}`;

     if(done){dbRef.doc(mykey).update({Duration:mine});}
        
      
     
    useEffect(()=>{
        let interval = null;
        if(isActive){
            interval=setInterval(()=>{
                setRemainingSecs(remainingSecs=>remainingSecs+1);
            },1000)
        }else if (!isActive && remainingSecs !==0){
            clearInterval(interval);
        }
        return ()=> clearInterval(interval);
    },[isActive,remainingSecs]);

    
    
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            {timeButton?  <View style={{flexDirection:'row', marginTop:20}}>
            <Text style={styles.tracking}>Tracking |</Text>
        
    <Text style={styles.timerText}>{mine}</Text>
    <View style={{flexDirection:'row',alignSelf:'center',paddingBottom:20}}>
        <Icon onPress={()=>{setRemainingSecs(0); setIsActive(false);}} color={COLORS.primary} size={25} name="repeat"></Icon>
    </View>
    </View>:null}
          
            <TouchableOpacity onPress={()=>{setButton(true); setIsActive(!isActive)}} style={styles.button}>
                <Text style={styles.buttonText}>{isActive ? 'Pause':'Start'}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>{setRemainingSecs(0); setIsActive(false);}} style={[styles.button,styles.buttonReset]}>
                <Text style={[styles.buttonText,styles.buttonTextReset]}>Reset</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
   alignItems:'center'
    },
    button:{
        
        backgroundColor:COLORS.primary,
        // borderColor:COLORS.primary,
        borderRadius:70,
        // borderWidth:2,
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
       
        alignSelf:'center',
        marginBottom:20,
        marginTop:20
        
    },
    buttonText:{
        fontFamily:'Choco',
        fontSize:20,
        color:COLORS.white
    },
    timerText:{
        color:COLORS.primary,
        fontSize:20,
        marginBottom:20,
        marginRight:40,
        alignSelf:'center',
        fontFamily:'Choco'
    },
    buttonReset:{
        marginTop:20,
        borderColor:"#ff851b"
    },
    buttonTextReset:{
        fontFamily:'Choco',
        fontSize:20,
        color:COLORS.white
    },
    tracking:{
        color:COLORS.transparentPrimary,
        fontSize:15,
        marginBottom:20,
        alignSelf:'center',
        fontFamily:'Choco',
    },
    

});