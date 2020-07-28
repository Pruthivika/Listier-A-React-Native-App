import * as React from 'react';
import {  DrawerLayoutAndroid, Text, StyleSheet, View, Image,TouchableHighlight,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Header,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Home from './Pages/Home/homescreen';
// import Shopping from './Pages/Shopping/Shopping';
import Testfile from './Components/Testo/testfile';
import Tasks from './Pages/Tasks/tasks';
import Settings from './Pages/Settings/settings';


import ShoppingStack from './routes/ShoppingStack';
import TaskStack from './routes/TaskStack';

import Timer from './Components/Timer/Timer';
import styles from './styles';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {COLORS} from './Constants';
import SplashScreen from 'react-native-splash-screen';



function TaskScreen({ navigation }) {
  // const [ todo, setTodo ] = React.useState('');
  return (
    <View style={{flex:1}}>
    <Header
  containerStyle={styles.header}
  placement="left"
  centerComponent={{ text: 'Tasks', style: { color: '#fff' , fontSize:20 } }}
  leftComponent={<Icon name="home" size={26} color="white" onPress={() =>navigation.navigate('Home')}></Icon>}
  rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
/>


 <Tasks/>


    </View>
  );
}
//  function ShoppingScreen({ navigation }) {
//   return (
//     <View>
//     <Header
//   containerStyle={styles.header}
//   placement="left"
//   centerComponent={{ text: 'Shopping List', style: { color: '#fff' , fontSize:20 } }}
//   leftComponent={<Icon name="home" size={26} color="white" onPress={() =>navigation.navigate('Home')}></Icon>}
//   rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
// />

// <View  >
//   <Shopping/>
// </View>


//     </View>
//   );
// }

function MainScreen({ navigation }) {
  const onPressTask = () => navigation.navigate('Tasks');
  const onPressShop = () => navigation.navigate('Shopping List');

  return (
    <View>
       <Header 
       containerStyle={styles.header}
  placement="left"
  leftComponent={{ text: 'Listier', style: { color: '#fff' , fontFamily:'Oleo',fontSize:25 } }}
  rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
/>

<Image 

source={require('../assets/ui/frontpic.png')}
style={styles.image}
></Image>
<Text style={styles.info}>Add your Grocery list or tasks below...</Text>

<View style={styles.wrapper}>
 
<TouchableHighlight underlayColor={COLORS.transparentPrimary}  style={styles.button} onPress={onPressShop} >
        <View style={styles.wrapbut}>
          <Icon name="shopping-bag" size={25}  color={COLORS.primary}></Icon>
          <Text style={styles.text}>Shopping List</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor={COLORS.transparentPrimary} style={styles.button} onPress={onPressTask} >
        <View style={styles.wrapbut}>
        <Icon name="tasks" size={25}  color={COLORS.primary}></Icon>
        <Text style={styles.text}>Tasks</Text>
          
        </View>
      </TouchableHighlight>

</View>

    </View>
  
  );
}


function TestScreen({ navigation }) {


  return (
    <View style={{flex:1}}>
         {/* <Header 
       containerStyle={styles.header}
  placement="left"
  leftComponent={{ text: 'Listier', style: { color: '#fff' , fontFamily:'Oleo',fontSize:25 } }}
  rightComponent={<Icon name="bars" size={20} color="white" onPress={() =>navigation.openDrawer()}></Icon>}
/> */}
<Testfile/>
  

    </View>
  
  );
}


const Drawer = createDrawerNavigator();






export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
      return (
        <SafeAreaProvider>
        <StatusBar backgroundColor={COLORS.black}/>
        <NavigationContainer>
        
      <Drawer.Navigator drawerContentOptions={{activeTintColor:COLORS.transparentPrimary,labelStyle:{color:COLORS.transparentBlack,fontFamily:'Choco'}}} initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Shopping List" component={ShoppingStack} />
        <Drawer.Screen name="Tasks" component={TaskStack} />
        <Drawer.Screen name="Settings" component={Settings} />
        {/* <Drawer.Screen name="Test" component={TestScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    
      );
  }
};






