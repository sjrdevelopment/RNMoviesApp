/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useEffect, useState} from 'react';
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
  item: {title: string};
}>;

type SecProps = PropsWithChildren<{
  navigation: any;
}>;

const MovieItem = ({item, navigation}: SectionProps) => {
  const movieItemStyles = StyleSheet.create({
    container: {
      marginTop: 16,
    },
  });

  return (
    <View style={movieItemStyles.container}>
      <Button
        onPress={() => {
          navigation.navigate('MovieDetail', {item: item});
        }}
        title={item.title}
      />
    </View>
  );
};

const MovieList = ({navigation}: SecProps) => {
  const [movieData, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log(json.movies);
      setData(json.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ScrollView>
      {movieData &&
        movieData.length > 0 &&
        movieData.map((movie: {title: string}) => {
          return <MovieItem item={movie} navigation={navigation} />;
        })}
    </ScrollView>
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

export default MovieList;
