import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../Constants';


export default function Settings({navigation}) {
    return (
        <View style={styles.container}>
             <Header
      containerStyle={{backgroundColor:COLORS.primary}}
      placement="left"
      centerComponent={{ text: 'About Listier', style: { color: '#fff' , fontSize:20 ,fontFamily:'Choco'} }}
      leftComponent={<Icon name="long-arrow-left" size={20} color={COLORS.white}  onPress={()=>navigation.goBack()}></Icon>}
      rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
    />
          

        
            <View style={styles.bigcard}>
            <Image
        style={styles.tinyLogo}
        source={require('../../../assets/logo/logo.png')}
      />
                <Text style={styles.text}>
                {"\n"}
                Listier is a task tracking app, {"\n"}
                where you can calculate the amount of 
                time spent in each task using a stopwatch.{"\n"}{"\n"}
                This may help to track your day-to-day task and perform effectively.
                </Text>
                <Text style={styles.index}>
                    Index Number : 17001994{"\n"}
                    Registration Number : 2017/CS/199
                    </Text>
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bigcard:{
        elevation:6,
        // height:100,
        padding:20,
        margin:10,
        
        backgroundColor:COLORS.white,
        flexDirection:'column',
        alignItems:'center',
        flex:1
    },
    text:{
        fontFamily:"Choco",
        fontSize:19,
        textAlign:'center'
    },
    index:{
        fontFamily:"Choco",
        fontSize:16,
        textAlign:"left",
        marginTop:60,
        color:COLORS.darkerGrey
    },
    tinyLogo:{
        height:120,
        width:120
    }

})
