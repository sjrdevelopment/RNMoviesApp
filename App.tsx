/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import MovieList from './components/movieList';
import MovieDetail from './components/movieDetail';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{title: 'test'}}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{title: 'test'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
