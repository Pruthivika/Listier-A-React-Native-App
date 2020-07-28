import * as React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,FlatList } from 'react-native'
//import { Card, ListItem, Button, Icon,CheckBox,FIcon } from 'react-native-elements'
import {COLORS} from '../../Constants';

export default function LiCard({item,pressHandler}) {

 

 
   // const [ todo, setTodo ] = React.useState(false);
 
    return (
     

<TouchableOpacity onPress={()=>pressHandler(item.key)}>
  <Text style={styles.item}>{item.text}</Text>
</TouchableOpacity>
          /* list item */
            /* <ListItem style={styles.list}
       
        leftElement={
       
        <CheckBox center
          
          containerStyle={styles.cb}
        //  uncheckedIcon={<Image style={{height:25,width:25}} source={require('../../../assets/ui/round_48px.png')} />}
        //   onIconPress={() => console.log("You have pressed the check box")}
        //  onIconPress={()=>console.log("hi")}
          // checked={todo}
         // checkedIcon={<Image style={{height:25,width:25}} source={require('../../../assets/ui/checked_48px.png')} />}
          
          />
        
        }
        title={<Text style={styles.text}>{Title}</Text>}
        // subtitle={l.Description}
        bottomDivider
      /> */
      
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '100%',
        height:'100%',
        borderRadius:5,
      
      },
      list: {
    
        marginVertical:9,
        fontWeight: 'bold',
        height:50,
    
      },
      cb:{
        width:'1%',
        backgroundColor:'#fff',
        borderColor:'#fff',
        marginStart:20,
        paddingEnd:1
        
    
      },
      text:{
        color: COLORS.black,
        fontSize:17,
      },
      item:{
        padding:10,
        marginTop:10,
        borderColor:COLORS.black,
        borderStyle:'dashed',
        borderRadius:10,
        borderWidth:1
      }

})


