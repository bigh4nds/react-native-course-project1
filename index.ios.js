// Import libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
  <Header headerText={'Project'} />
);

AppRegistry.registerComponent('project', () => App);
