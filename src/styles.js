import {StyleSheet} from 'react-native';
import {COLORS} from './Constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 50,
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    navigationContainer: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#fff",
      padding: 8
    },
    header:{
      backgroundColor:COLORS.primary
    },
    image:{
      alignSelf:'center',
      marginTop:70,
      marginBottom:30,
      height:100,
      width:100
      
    },
    wrapper:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      
      
    },
    button:{
      marginLeft:10,
      marginRight:10,
      height:130,
      width:120,
      justifyContent:'space-evenly',
      alignItems:"center",
      borderColor:COLORS.primary,
      borderWidth:2,
      borderRadius:5,
    
    },
    text:{
      color: COLORS.primary,
      fontSize:15,
      marginTop:15,
      fontFamily:'Choco'
    },
    wrapbut:{
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'center',
    },
    info:{
      color:COLORS.transparentBlack,
      fontSize:15,
      alignSelf:'center',
      marginBottom:40,
      fontFamily:'Choco'
      
    },
    
   
  });

  export default styles;