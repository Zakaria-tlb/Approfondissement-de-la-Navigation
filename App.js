import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Page1 from '../prj/screens/page1.js';
import Page2 from '../prj/screens/page2.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} options={{ title: "Entrer un nombre" }} />
        <Stack.Screen name="Page2" component={Page2} options={{ title: "Résultat" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}