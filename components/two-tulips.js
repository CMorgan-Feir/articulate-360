import React from 'react';
import {
  StyleSheet,
  View,
  asset,
  Image,
  Animated,
  Text,
  VrButton,
  NativeModules
} from 'react-360';
const {AudioModule} = NativeModules

export default class TwoTulips extends React.Component {
  state = {
    animatedAngle: new Animated.Value(0),
  }

  rotateTulipsUp = () => {
    Animated.timing(
      this.state.animatedAngle,
      {
        toValue: 30,
        duration: 10000,
      }
    ).start(this.rotateTulipsDown)
  }

  rotateTulipsDown = () => {
    Animated.timing(
      this.state.animatedAngle,
      {
        toValue: -30,
        duration: 10000,
      }
    ).start(this.rotateTulipsUp)
  }

  componentDidMount() {
    this.rotateTulipsUp()
  }

  render() {
    return (
      <View>
        <Animated.Image source ={asset('flower-one.png')} style={{position: 'absolute', width: 210, height: 210, transform: [{translateX: 205}, {translateY: -63}, {rotateZ: this.state.animatedAngle }], opacity: 1}} />
        <Animated.Image source ={asset('flower-two.png')} style={{position: 'absolute', width: 210, height: 210, transform: [{translateX: 95}, {translateY: -268}, {rotateZ: this.state.animatedAngle }]}} />
        <Image source={asset('two-stems.png')} style={styles.stems} />
        <VrButton
        onClick={() => {
            AudioModule.playOneShot({
              source: asset('/sounds/van-der-vinne.m4a'),
            })
          }}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>Learn More About This Work</Text>
          </View>
        </VrButton>
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
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    justifyContent: 'space-between',
    marginTop: 10,
    height: 50,
    backgroundColor: '#85929E',
    overflow: 'hidden',
  }
});
