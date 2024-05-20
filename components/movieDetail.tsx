/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  /*StyleSheet,*/ Text /*useColorScheme*/,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  navigation: any;
  route: any;
}>;

const MovieDetail = ({/*navigation,*/ route}: SectionProps) => {
  const movieItem = route.params.item;
  return (
    <SafeAreaView>
      <Text>Movie Detail</Text>
      <Text>{movieItem.title}</Text>
      <Text>{movieItem.releaseYear}</Text>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default MovieDetail;
