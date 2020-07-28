import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,StatusBar,TouchableOpacity,Dimensions} from 'react-native';


const screen = Dimensions.get('window');
const formatNumber = number =>`0${number}`.slice(-2);
const getRemaining = (time)=>{
    const mins=Math.floor(time/60);
    const secs=time-mins*60;
    return {mins:formatNumber(mins),secs:formatNumber(secs)};
}
export default function Timer({variant}){
    const [remainingSecs,setRemainingSecs]=useState(0);
    const [isActive,setIsActive] = useState(variant ? true : false); 
    const {mins,secs} = getRemaining(remainingSecs);

  

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
    <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={()=>{ setIsActive(!isActive)}} style={styles.button}>
                <Text style={styles.buttonText}>{isActive ? 'Pause':'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setRemainingSecs(0); setIsActive(false);}} style={[styles.button,styles.buttonReset]}>
                <Text style={[styles.buttonText,styles.buttonTextReset]}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#07121b',
        alignItems:'center',
        justifyContent:'center'
        
    },
    button:{
        width:screen.width/2,
        height:screen.width/2,
        borderRadius:screen.width/2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#b9aaff',
        borderWidth:10
    },
    buttonText:{
        fontSize:45,
        color:'#b9aaff'
    },
    timerText:{
        color:'#fff',
        fontSize:90,
        marginBottom:20
    },
    buttonReset:{
        marginTop:20,
        borderColor:"#ff851b"
    },
    buttonTextReset:{
        color:"#ff851b"
    }
});