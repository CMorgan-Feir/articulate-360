import React from 'react';
import {
  StyleSheet,
  View,
  asset,
  Image,
  Animated
} from 'react-360';

export default class PortraitEyes extends React.Component {
  state = {
    animatedTranslation: new Animated.ValueXY({x: 80, y: -88})
  }

  turnEyesRight = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: {x: 90, y: -88},
        duration: 5000,
      }
    ).start(this.turnEyesLeft)
  }

  turnEyesLeft = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: {x: 70, y: -88},
        duration: 5000,
      }
    ).start(this.turnEyesRight)
  }

  componentDidMount() {
    this.turnEyesLeft()
  }

  render() {
    return (
      <View>
        <Animated.Image source ={asset('eyes-transparent-extended.png')} style={{position: 'absolute', width: 550, height: 550, transform: [{translateX: this.state.animatedTranslation.x}, {translateY: -90}], opacity: 1}} />
        <Image source={asset('face-transparent.png')} style={styles.portrait} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  portrait: {
    width: 700,
    height: 700,
    opacity: 1,
  }
});