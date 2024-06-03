import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, WelcomeScreen} from '~/screens';

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
      <Stack.Screen component={SignIn} name="SignIn" />
    </Stack.Navigator>
  );
};
