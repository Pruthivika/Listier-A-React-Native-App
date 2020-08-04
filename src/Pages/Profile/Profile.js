import { Avatar, Accessory, Header } from 'react-native-elements';
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert,TextInput,ToastAndroid  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../Constants';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Profile({navigation}) {
 const photoURL = auth().currentUser.photoURL;
 const id = auth().currentUser.uid;
 const[name,setName]=useState("")
 const docRef= firestore().collection('Users').doc(id);
 const[showInput,setShowInput] = useState(false);

  const confirmName =()=>{
    setShowInput(false);
    
    docRef.update({UserName:name});
    ToastAndroid.show("Updated Name Successfully", ToastAndroid.SHORT);
  
  }


 const signOut=()=>{
    auth() 
  .signOut()
  .then(() => console.log('User signed out!'));

  }

 useEffect(() => {
    async function subscriber() { 
        await docRef
        .get()
        .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);
    
    if (documentSnapshot.exists) {
     
      const myname= documentSnapshot.data().UserName
      setName(myname);
      
    }
  });  }
    
    subscriber();
    // Unsubscribe from events when no longer in use
    return () => subscriber();

  
  }, []);

    return (
      <View style={{flex: 1}}>
        <Header
          containerStyle={{backgroundColor: COLORS.white}}
          placement="left"
          centerComponent={{
            text: 'Profile',
            style: {color: COLORS.primary, fontSize: 20, fontFamily: 'Choco'},
          }}
          leftComponent={
            <Icon
              name="long-arrow-left"
              size={20}
              color={COLORS.primary}
              onPress={() => navigation.navigate('TaskMain')}></Icon>
          }
          rightComponent={
            <Icon
              name="bars"
              size={20}
              color={COLORS.primary}
              onPress={() => navigation.openDrawer()}></Icon>
          }
        />
        <View style={styles.container}>
           <View style={styles.row}>
           <Avatar
            rounded
            containerStyle={{borderColor:COLORS.primary,borderWidth:4}}
            size={90}
            source={{
              uri:photoURL
            }}>
           
          </Avatar>
          <View >
              {showInput?
          <View  style={{flexDirection:'row'}}><TextInput
      style={styles.input}
      maxLength={15}
       onChangeText={text => setName(text)}
      value={name}
    /> 
    <Avatar rounded icon={{name: 'check-circle', type: 'font-awesome',color:COLORS.primary,size:25}}
      onPress={confirmName}  
     activeOpacity={0.7}
   
    containerStyle={{marginTop:37,marginLeft:10}}
    
  />
    </View>
    
    
    : <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>{name}</Text>   
        <Avatar rounded icon={{name: 'pencil', type: 'font-awesome',color:COLORS.primary,size:25}}
      onPress={()=>{setShowInput(true)}}  
     activeOpacity={0.7}
    containerStyle={{marginTop:26,marginLeft:10}}
    
  /></View>
    }
    
          </View>
        
     
        
               </View> 

             
               <TouchableOpacity style={styles.button} onPress={signOut}>
      <Text style={styles.btntext}>LogOut</Text>
      
    </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
container:{
    padding:30
},
row:{
    flexDirection:'row'
},
text:{
    fontFamily:"Choco",
    fontSize:20,
    marginLeft:30,
    marginTop:30
},
btntext:{
    color:COLORS.white,
    fontSize:18,
    fontFamily:'Choco'
  },
  button:{
     
    backgroundColor:COLORS.primary,
    // borderColor:COLORS.primary,
    borderRadius:20,
    // borderWidth:2,
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:160,
    alignSelf:'center',
    marginBottom:20


},
input:{
    borderBottomColor:COLORS.darkerGrey,
    borderBottomWidth:1,
    paddingBottom:0,
    fontFamily:'Choco',
    fontSize:20,
    marginLeft:30,
    marginTop:30
   
  
  },

})
