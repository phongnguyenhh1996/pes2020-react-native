import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/Home';
import TeamsScreen from './screens/Teams/Teams';
import PlayersScreen from './screens/Players/Players';
import {NAVIGATION_NAME} from './utils/constants';

const Stack = createStackNavigator();
const styleHeader = {
  headerStyle: {
    backgroundColor: '#9c27b0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NAVIGATION_NAME.HOME}
          component={HomeScreen}
          options={{
            title: 'PES 2020 Stats',
            ...styleHeader,
          }}
        />
        <Stack.Screen
          name={NAVIGATION_NAME.TEAMS}
          component={TeamsScreen}
          options={({route}) => ({title: route.params.title, ...styleHeader})}
        />
        <Stack.Screen
          name={NAVIGATION_NAME.PLAYERS}
          component={PlayersScreen}
          options={({route}) => ({title: route.params.title, ...styleHeader})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
