import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/Login';
import DashBoard from '../Screens/DashBoard';
import ListDetails from '../Screens/ListDetails';
const Stack = createStackNavigator();


export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}
        headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}