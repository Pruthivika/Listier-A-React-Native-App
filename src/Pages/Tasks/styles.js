import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants';

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
      marginTop:15
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
      marginBottom:40
      
    },
    topicFlatlist:{
   
    marginStart:10,
    marginTop:20
    
    },
    topicText:{
      color:COLORS.black,
      fontSize:18,
      fontFamily:'Choco'
      
      
      

    },
    ListIcon:{
     
      marginRight:10,
      padding:3,
      alignSelf:'center'

    },
    Topic:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10,
      marginEnd:12,
      alignItems:'center'

     
      
    
    },
    arrow:{
     
      alignSelf:'flex-end'
    }
    
   
  });

  export default styles;