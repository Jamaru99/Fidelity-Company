import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@screens'

const Stack = createStackNavigator();

export const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="LoginScreen"
      component={LoginScreen}
      options={{ title: "Login" }}
    />   
  </Stack.Navigator>
)