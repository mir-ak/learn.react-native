import React from 'react';
import SignUp from './component/SingUp'
import LogIn from './component/LogIn';
import Database from './component/Database';
import HomeScreen from './component/Home';
import {LogBox} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App =() => {

  LogBox.ignoreLogs(['Remote debugger','AsyncStorage','Require cycle']);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={
            {
              title:"bienvenue sur notre application",
              headerTitleAlign:'center',
              headerStyle:{
                backgroundColor:"rgb(214, 122, 127)"
              }
            }
          } 
        />
        <Stack.Screen name="LogIn" component={LogIn} 
          options={
            {
              title:"LogIn",
              headerTitleAlign:'center',
              headerStyle:{
              backgroundColor:"#2AE5F8"
              }
            }
          } 
        />
        <Stack.Screen name="SingUp" component={SignUp} 
          options={
            {
              title:"SingUp",
              headerTitleAlign:'center',
              headerStyle:{
              backgroundColor:"#2AF8B6"
              }
            }
          }
        />
        <Stack.Screen name="Database" component={Database}
          options={
            {
              headerShown:false,
            }
          } 
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );  
}

export default App;