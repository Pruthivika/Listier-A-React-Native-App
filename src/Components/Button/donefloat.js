import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,Image,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../Constants';


const window = Dimensions.get('window');
const screen=Dimensions.get('screen');

export default function DoneFloat() {
   const clickHandler = () => {
        //function to handle click on floating Action Button
        Alert.alert('Floating Button Clicked');
      };
    
    return (
      
          <TouchableOpacity
          
          activeOpacity={0.7}
         
          style={styles.TouchableOpacityStyle}>
          {/* <Image
             
             source={require('../../../assets/ui/chec.png')}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          /> */}
          <Icon  name='check' size={23} color={COLORS.primary}/>
        </TouchableOpacity>
     
    )
}

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        elevation:15,
        width:60,
        height:60,
        backgroundColor:'#fff',
        borderRadius:50,
        position:'absolute',
        // alignSelf:'flex-end',
         marginTop:window.height * 0.87,
         marginStart:window.width * 0.77
       
        
      
       
      },
    
      
      bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      },


})
