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
import TwoTulips from './components/two-tulips'
import PortraitEyes from './components/portrait-eyes'
import MarmosetEyes from './components/marmoset-eye'
import StillLife from './components/still-life'

// Register different React components with different names
AppRegistry.registerComponent('FlowerBug', () => FlowerBug);
AppRegistry.registerComponent('TwoTulips', () => TwoTulips);
// AppRegistry.registerComponent('PortraitEyes', () => PortraitEyes);
AppRegistry.registerComponent('MarmosetEyes', () => MarmosetEyes);
AppRegistry.registerComponent('StillLife', () => StillLife);