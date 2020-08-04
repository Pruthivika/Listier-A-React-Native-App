import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../Constants';

export default function Notification({navigation}) {
    return (
        <View style={styles.container}>
             <Header
      containerStyle={{backgroundColor:COLORS.primary}}
      placement="left"
      centerComponent={{ text: 'Notifications', style: { color: '#fff' , fontSize:20 ,fontFamily:'Choco'} }}
      leftComponent={<Icon name="long-arrow-left" size={20} color={COLORS.white}  onPress={()=>navigation.goBack()}></Icon>}
      rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
    />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
flex:1
    }
})
