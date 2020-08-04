import * as React from 'react';
import {  DrawerLayoutAndroid, Text, StyleSheet, View, Image,Button ,TouchableOpacity,TouchableHighlight,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Header,} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Home from './Pages/Home/homescreen';
// import Shopping from './Pages/Shopping/Shopping';
import Testfile from './Components/Testo/testfile';
import Tasks from './Pages/Tasks/tasks';
import Settings from './Pages/Settings/settings';
import Completed from './Pages/Completed/completed';
import Alltasks from './Pages/AllTasks/Alltasks';

import TaskStack from './routes/TaskStack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {COLORS} from './Constants';
import SplashScreen from 'react-native-splash-screen';

// import React, { useState, useEffect } from 'react';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore';
import Profile from './Pages/Profile/Profile';

GoogleSignin.configure({
  webClientId: '837066318450-ml752voh6t0is0jq4mrgoisi5sq7hkev.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export default function Login() {
  const dbRef = firestore().collection('Users');
  SplashScreen.hide();
  // const onGooglebuttonpress =async() =>{
  //   // Get the users ID token
  // const { idToken } = await GoogleSignin.signIn();

  // // Create a Google credential with the token
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // // Sign-in the user with the credential
  // return auth().signInWithCredential(googleCredential);
  // }

  const Anonymous_signIn = ()=>{
    auth()
    .signInAnonymously()
    .then(() => {
      console.log('User signed in anonymously');
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
  
      console.error(error);
    });
  }

  // const createUser =()=>{
  //   dbRef.doc(user.uid);
  // }

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{flex:1,padding:30}}>
        <Image
        style={styles.tinyLogo}
        source={require('../assets/logo/fullogotrans.png')}
      />
        {/* <Text style={styles.logintxt}>Login</Text> */}
        <View style={{elevation:5}}>
        <TouchableOpacity style={styles.button}
        
        onPress={() => onGoogleButtonPress().then(() =>{
        console.log('Signed in with Google!');
        const userId = auth().currentUser.uid;
        const name = auth().currentUser.displayName;
        const email = auth().currentUser.email;
        console.log(userId);
        firestore().collection('Users').doc(userId).set({UserName:name,Email:email})
      }
        

         )}>
        <Image
        style={styles.Logo}
        source={require('../assets/logo/google.png')}
      />   
      <Text style={styles.btntext}>Sign in with Google</Text>
      
    </TouchableOpacity>

    </View>
    <Text style={styles.index}>
                    Index Number : 17001994{"\n"}
                    Registration Number : 2017/CS/199
                    </Text>
      </View>
    );
  }

  return (
    // <View>
    //   <Text>Welcome {user.email}</Text>
    // </View>
    <App/>
  );
}



const Drawer = createDrawerNavigator();


// class Mainapp extends React.Component{
//   componentDidMount() {
//     auth()
//     .signInAnonymously()
//     .then(() => {
//       console.log('User signed in anonymously');
//     })
//     .catch(error => {
//       if (error.code === 'auth/operation-not-allowed') {
//         console.log('Enable anonymous in your firebase console.');
//       }
  
//       console.error(error);
//     });
//   }
//   render() {
//     return(
//       <Login/>
//     )
//   }
// }



 class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
      return (
        <SafeAreaProvider>
        {/* <StatusBar backgroundColor={COLORS.black}/> */}
        <NavigationContainer  >
        
      <Drawer.Navigator drawerContentOptions={{activeTintColor:COLORS.transparentPrimary,labelStyle:{color:COLORS.transparentBlack,fontFamily:'Choco'}}} initialRouteName="Home">
     

        {/* <Drawer.Screen name="Shopping List" component={ShoppingStack} /> */}
       
        <Drawer.Screen name="Home" component={TaskStack} />
        <Drawer.Screen name="My Profile" component={Profile} />
        <Drawer.Screen name="All Tasks" component={Alltasks}  options={{headerShown:false}}/>
        <Drawer.Screen name="Completed" component={Completed} />
        {/* <Drawer.Screen name="Notifications" component={Notification} /> */}
        <Drawer.Screen name="About" component={Settings} />

        {/* <Drawer.Screen name="Test" component={TestScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    
      );
  }
};



const styles = StyleSheet.create({
  logintxt:{
     fontFamily:"Choco",
     fontSize:30,
     alignSelf:'center',
     marginBottom:30
  },
  tinyLogo:{
    height:200,
    width:200,
    alignSelf:'center',
    marginBottom:70,
    marginTop:20
},
btntext:{
  color:COLORS.primary,
  fontSize:15,
  // fontFamily:'Choco'
},
button:{
   
  backgroundColor:COLORS.white,
  // borderColor:COLORS.primary,
  borderRadius:2,
  // borderWidth:2,
  width:200,
  height:40,
  alignItems:'center',
  justifyContent:'center',
  elevation:2,
  alignSelf:'center',
  marginBottom:20,
  flexDirection:'row',
  marginTop:80
 


},
Logo:{
  height:30,
  width:30,
  marginRight:8,
  
},
index:{
  fontFamily:"Choco",
  fontSize:16,
  textAlign:"left",
  marginTop:60,
  color:COLORS.darkerGrey
},
})



