import * as React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import TaskView from '../Pages/Tasks/TaskView';
import Alltasks from '../Pages/AllTasks/Alltasks';

import AddForm from '../Pages/AddForm/addForm';
import AddList from '../Pages/AddList/addList';
import TaskMain from '../Pages/Tasks/taskMain';
import Tasks from '../Pages/Tasks/tasks';
import { COLORS } from '../Constants';

const Stack = createStackNavigator();

export default function TaskStack()
 {
   
    return (
       
        <Stack.Navigator initialRouteName="Taskmain"    >
        <Stack.Screen name="TaskMain" component={Tasks} options={{headerShown:false}} />
         <Stack.Screen name="List" component={AddList} 
       options={({ route }) => ({ title: route.params.name ,headerStyle:{backgroundColor:COLORS.primary},headerTintColor: '#fff',headerTitleStyle:{ fontFamily:'Choco'}})}
      
       />
         <Stack.Screen name="Form" component={AddForm} options={{title:"Add Task",headerTitleStyle:{fontFamily:'Choco'}} }/>
         <Stack.Screen name="All Tasks" component={Alltasks} />
         <Stack.Screen name="View" component={TaskView} options={{headerShown:false}}  />
        
       </Stack.Navigator>
      );
 
}


