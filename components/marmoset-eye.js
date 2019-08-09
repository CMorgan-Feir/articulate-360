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
    animatedTranslation: new Animated.Value(0)
  }

  turnEyesRight = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 10,
        duration: 5000,
      }
    ).start(this.turnEyesLeft)
  }

  turnEyesLeft = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 3,
        duration: 4000,
      }
    ).start(this.turnEyesRight)
  }

  componentDidMount() {
    this.turnEyesLeft()
  }

  render() {
    return (
      <View>
        <Animated.Image source ={asset('eye-isolated.png')} style={{position: 'absolute', width: 500, height: 500, transform: [{translateX: this.state.animatedTranslation}, {translateY: -10}], opacity: 1}} />
        <Image source={asset('marmoset-hand.png')} style={styles.portrait} />
        <View style={styles.button}>
            <Text style={styles.buttonText}>Learn More About This Work</Text>
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