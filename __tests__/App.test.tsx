/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import MovieDetail from '../components/movieDetail';

import renderer from 'react-test-renderer';

import ShallowRenderer from 'react-test-renderer/shallow';

// to mock
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect, jest} from '@jest/globals';

jest.mock('@react-navigation/native-stack', () => {
  //Mock the default export and named export 'foo'
  return {
    createNativeStackNavigator: () => {
      return {
        navigator: () => {
          return <p>test</p>;
        },
        screen: () => {
          return <p>test</p>;
        },
      };
    },
  };
});

jest.mock('@react-navigation/native', () => {
  //Mock the default export and named export 'foo'
  return {
    NavigationContainer: (children: any) => {
      return <p>test</p>;
    },
  };
});

describe('Matcher style Jest tests', () => {
  // Matcher
  const getColor = (color: string) => {
    return color;
  };

  it('given getColor("red") is called, returns red', () => {
    expect(getColor('red')).toBe('red');
  });
});

describe('Snapshot style Jest tests', () => {
  // Snapshot
  it('renders MovieDetail component correctly', () => {
    const dummyMovie = {
      item: {
        title: 'My Movie',
        releaseYear: '1998',
      },
    };

    const tree = renderer
      .create(
        <MovieDetail
          navigation="test"
          route={{params: dummyMovie}}></MovieDetail>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders App correctly', () => {
    const tree = renderer.create(<App></App>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
