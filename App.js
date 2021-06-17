import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/Home';
import SpaceCraft from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Space Craft" component={SpaceCraft} />
        <Stack.Screen name="Star Map" component={StarMap} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
