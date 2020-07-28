import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Shopping from '../Pages/Shopping/Shopping';
import AddForm from '../Pages/AddForm/addForm';
import AddList from '../Pages/AddList/addList';

const Stack = createStackNavigator();

export default function ShoppingStack()
 {
   
    return (
       
        <Stack.Navigator initialRouteName="Shopping" headerMode='none' >
        <Stack.Screen name="TaskMain" component={Shopping}   />
         <Stack.Screen name="List" component={AddList} />
         <Stack.Screen name="Form" component={AddForm} />
        
       </Stack.Navigator>
      );
 
}
