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
import Flower from './components/flower'

export default class Hello360 extends React.Component {
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
    // console.log('new y', path.y, 'type: ', typeof path.y, 'old y', currentY, 'type: ', typeof currentY)
    console.log(newAngle)
    this.setState({newRotation: `${newAngle}rad`})
  }

  getNewPath = () => {
    const newX = Math.random() * 412
    const newY = Math.random() * -412
    const newDuration = 1000 + Math.random() * 4000
    return {x: newX, y: newY, duration: newDuration}
  }

  // Once the component mounts, run the increment method every second
  componentDidMount() {
    this.animateBug();
  }

  render() {
    return (
      <View>
      <View style={styles.panel}>
        <View>
          <Animated.Image source ={asset('bug.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateY: this.state.animatedTranslation.y}, {translateX: this.state.animatedTranslation.x}, { rotateZ: this.state.newRotation }], opacity: 1}} />
          <Image source={asset('flower-bg-small.png')} style={styles.flower} />
        </View>
      </View>
      <View style={styles.panel}>
      <View>
        {/* {/* <Animated.Image source ={asset('bug.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateY: this.state.animatedTranslation.y}, {translateX: this.state.animatedTranslation.x}, { rotateZ: this.state.newRotation }], opacity: 1}} /> */}
        <Image source={asset('two-stems.png')} style={styles.flower} />
      </View>
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    // backgroundColor: 'rgba(255, 255,  255, 0.4)',
    // transform: [{translateZ: 1}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#FF0000',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  flower: {
    width: 512, 
    height: 512,
    opacity: 1.0,
    transform: [{translateZ: 700}]
  },
  bug: {
    position: 'absolute',
    width: 100,
    height: 100,
    transform: [{translateX: 600}, {translateY: 50}],
    opacity: 1,
  }
});

// style={{top: currentY, left: currentX, transform: `rotate(${125+180*angle/3.14}deg)`}}

AppRegistry.registerComponent('Hello360', () => Hello360);
