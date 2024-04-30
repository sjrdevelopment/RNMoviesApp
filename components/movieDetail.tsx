/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Button,
  GestureResponderEvent,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  navigation: any;
  route: any;
}>;

const MovieDetail = ({navigation, route}: SectionProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const movieItem = route.params.item;
  return (
    <SafeAreaView>
      <Text>Movie Detail</Text>
      <Text>{movieItem.title}</Text>
      <Text>{movieItem.releaseYear}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MovieDetail;
