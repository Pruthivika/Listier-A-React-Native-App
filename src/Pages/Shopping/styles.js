import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants';

const styles = StyleSheet.create({
   
   
    header:{
      backgroundColor:COLORS.primary
    },
    
    mylist:{
        flexDirection:'column',
        justifyContent:'space-around',
        alignContent:'center'
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