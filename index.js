import React from 'react';
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  asset,
  View,
  VrButton,
} from 'react-360';

import FlowerBug from './components/flower-bug'
import TwoTulips from './components/two-tulips';

// Register different React components with different names
AppRegistry.registerComponent('FlowerBug', () => FlowerBug);
AppRegistry.registerComponent('TwoTulips', () => TwoTulips);