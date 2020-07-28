
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detai')}
      />
    </View>
  );
}



function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const Stack = createStackNavigator();
export default function Testfile() {

    return (
    
      <Stack.Navigator initialRouteName="Ho">
        <Stack.Screen name="Ho" component={HomeScreen} />
        <Stack.Screen name="Detai" component={DetailsScreen} />
      </Stack.Navigator>
 
    )
}

// const styles = StyleSheet.create({
//   card:{
//     padding:40
//   },
//   container:{
  
//     padding:20,
    


//   }
// })
