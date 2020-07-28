import React, {useState} from 'react';
import { StyleSheet,View, Text, TextInput,Button} from 'react-native';
import {COLORS} from '../../Constants';


export default function AddCard({submitHandler}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
     setText(val);
    }
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder="new task..."
            onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title="add todo"  color={COLORS.black}/>

        </View>
    )
}


const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
