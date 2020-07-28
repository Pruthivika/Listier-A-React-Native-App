import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ViewCard from '../../Components/ViewCard';


export default function Track(){
  return(
        
    <SafeAreaView
    style={{ flex: 1, justifyContent: 'space-between' }}
  >
  
     <ViewCard/>
  
  </SafeAreaView>
 
     
);
}