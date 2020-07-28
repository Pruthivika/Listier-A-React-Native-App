import React, {useEffect} from 'react';
import {View, Text, FlatList,TouchableHighlight,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ViewCard from '../../Components/ViewCard';
import {COLORS} from '../../Constants';
import styles from './styles';
//import {connect} from 'react-redux';
//import {ArticleCard} from '../../components';

//import styles from './styles';
//import {getArticles} from '../../state/news/news.actions';


export default function Home({ navigation }) {
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

source={require('../../../assets/ui/frontpic.png')}
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
