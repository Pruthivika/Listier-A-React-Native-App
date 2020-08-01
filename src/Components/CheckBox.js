import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import {  View,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import {COLORS} from '../Constants';

export default function MyCheckbox (){
    const [state, setCheckbox] = React.useState(false)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         checked:false
    //     }
    // }

    // const onmyclick=()=>{

    // }

    // console.log(id);
  

        return (
            <TouchableWithoutFeedback data={state} style={styles.cb} onPress={()=>setCheckbox(!state)}>
                
                
                    {state ?
                         <Icon name="check-circle" size={35} color={COLORS.primary} />:  <Icon name="circle-thin" size={35} color={COLORS.primary}/>
                    }
               
            </TouchableWithoutFeedback>
        )
    
}

const styles = StyleSheet.create({
    cb:{
        padding:0
    }
})
