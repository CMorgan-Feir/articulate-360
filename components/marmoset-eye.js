import React from 'react';
import {
  StyleSheet,
  View,
  asset,
  Image,
  Animated,
  Text
} from 'react-360';

export default class MarmosetEyes extends React.Component {
  state = {
    animatedTranslation: new Animated.ValueXY({x: 5, y: 0})
  }

  turnEyesRight = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: {x: 8, y: 0},
        duration: 6000,
      }
    ).start(this.turnEyesLeft)
  }

  turnEyesLeft = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: {x: -5, y: 0},
        duration: 6000,
      }
    ).start(this.turnEyesRight)
  }

  componentDidMount() {
    this.turnEyesLeft()
  }

  render() {
    return (
      <View>
        <Animated.Image source ={asset('eye-isolated.png')} style={{position: 'absolute', width: 700, height: 700, transform: [{translateX: this.state.animatedTranslation.x}, {translateY: 0}], opacity: 1}} />
        <Image source={asset('marmoset-hand.png')} style={styles.portrait} />
        <View style={styles.button}>
            <Text style={styles.buttonText}>View More About This Work</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  portrait: {
    width: 512,
    height: 512,
    opacity: 1,
  },
  button: {
    justifyContent: 'space-between',
    marginTop: 10,
    height: 50,
    backgroundColor: '#85929E',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center'
  }
});