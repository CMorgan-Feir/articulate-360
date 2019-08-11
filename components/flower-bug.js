import React from 'react';
import {
  Animated,
  StyleSheet,
  Image,
  asset,
  View,
  Text,
  VrButton,
  NativeModules
} from 'react-360';
const {AudioModule} = NativeModules

export default class FlowerBug extends React.Component {
    // Our component will keep track of this state
  state = {
    animatedTranslation: new Animated.ValueXY({x: 0, y: 0}),
    newRotation: '180deg'
  };

  // This method calls our helper function and begins animation

  animateBug = () => {
    const path = this.getNewPath()
    let currentX = this.state.animatedTranslation.x._value
    let currentY = this.state.animatedTranslation.y._value
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: {x: path.x, y: path.y},
        duration: path.duration,
      }
    ).start(this.animateBug)
    var newAngle = Math.atan2(path.y - currentY, path.x - currentX) - 2
    this.setState({newRotation: `${newAngle}rad`})
  }

  getNewPath = () => {
    const newX = Math.random() * 412
    const newY = Math.random() * -412
    const newDuration = 1000 + Math.random() * 4000
    return {x: newX, y: newY, duration: newDuration}
  }

  // Once the component mounts, animate bug
  componentDidMount() {
    this.animateBug();
  }

  render() {
    return (
        <View style={{justifyContent: 'space-between'}}>
          <Image source={asset('flower-bg-small.png')} style={styles.flower} />
          <Animated.Image source ={asset('bug.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateY: this.state.animatedTranslation.y}, {translateX: this.state.animatedTranslation.x}, { rotateZ: this.state.newRotation }], opacity: 1}} />
          <VrButton
          disabled={false}
          onClick={() => {
            this.setState()
            AudioModule.playOneShot({
              source: asset('/sounds/withoos.m4a'),
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
  flower: {
    width: 512, 
    height: 512,
    opacity: 1,
    transform: [{translateZ: 500}]
  },
  bug: {
    position: 'absolute',
    width: 100,
    height: 100,
    transform: [{translateX: 600}, {translateY: 50}],
    opacity: 1,
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