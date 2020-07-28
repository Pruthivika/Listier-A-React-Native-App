import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../Constants';

export default function MyHeader({title}) {
    return (
        <Header
        containerStyle={styles.header}
        placement="left"
        centerComponent={{ text:{title}, style: { color: '#fff' , fontSize:20 ,fontFamily:'Choco'} }}
        leftComponent={<Icon name="home" size={26} color="white" onPress={() =>navigation.navigate('Home')}></Icon>}
        rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
      />
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:COLORS.primary
      }
      
})
