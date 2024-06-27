import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./sereens/CategoriesScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealOverView from './sereens/MealOverView';
import MealDetail from './sereens/MealDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './sereens/Favorites';
import { Ionicons } from '@expo/vector-icons';
const Drawer =createDrawerNavigator();
function Drawervigator(){
  return (
  <Drawer.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#dfa97f',},
          sceneContainerStyle:{backgroundColor:'#24180f'},
          drawerContentStyle:{backgroundColor:'#24180f'},
          drawerActiveBackgroundColor:'#3d2817',
          drawerActiveTintColor:'#dfa97f',
          drawerInactiveTintColor:'white'

  }}>
    <Drawer.Screen name="All Categories" component={CategoriesScreen} options={{
      drawerIcon:({color})=><Ionicons name="list" size={24} color={color} />
    }}/>
    <Drawer.Screen name='Favorites' component={Favorites} options={{
      drawerIcon:({color})=><Ionicons name="star-sharp" size={24} color={color} />
    }}/>
  </Drawer.Navigator>)
}
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          title:'Meals',
          headerStyle:{backgroundColor:'#dfa97f',},
          contentStyle:{backgroundColor:'#24180f'},
          animation:'flip'
          
        }} initialRouteName="">
        <Stack.Screen component={Drawervigator} 
        name="MealCategories" 
        options={{
          title:'Meals',
          headerShown:false}} 
          />
        <Stack.Screen name="MealOverView" component={MealOverView} 
        // options={({route})=>{
        //   const catId= route.params.catagoryId;
        //   return{
        //     title: catId
        //   }}} 
        />
        <Stack.Screen name='details' component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
