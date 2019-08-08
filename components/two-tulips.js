import React from 'react';
import {
  StyleSheet,
  View,
  asset,
  Image,
  Animated
} from 'react-360';
// import Flower from './components/flower'

export default class TwoTulips extends React.Component {
  state = {
    animatedAngle: new Animated.Value(0),
  }

  rotateTulipsUp = () => {
    Animated.timing(
      this.state.animatedAngle,
      {
        toValue: 45,
        duration: 5000,
      }
    ).start(this.rotateTulipsDown)
  }

  rotateTulipsDown = () => {
    Animated.timing(
      this.state.animatedAngle,
      {
        toValue: -45,
        duration: 5000,
      }
    ).start(this.rotateTulipsUp)
  }

  componentDidMount() {
    this.rotateTulipsUp()
  }

  render() {
    return (
      <View>
        <Animated.Image source ={asset('flower-one.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateX: 195}, {translateY: -60}, {rotateZ: this.state.animatedAngle }], opacity: 1}} />
        <Animated.Image source ={asset('flower-two.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateX: 210}, {translateY: -259}, {rotateZ: this.state.animatedAngle }]}} />
        <Image source={asset('two-stems.png')} style={styles.stems} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  stems: {
    width: 512,
    height: 512,
    opacity: 1,
    transform: [{translateZ: 950}]
  }
});
