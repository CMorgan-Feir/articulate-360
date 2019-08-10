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
import { Easing } from 'react-native';
// import console = require('console');
const {AudioModule} = NativeModules
const canvasWidth = 900*(3/4)
const canvasHeight = 1154*(3/4)

export default class StillLife extends React.Component {
    // Our component will keep track of this state
  state = {
    animatedAngle: new Animated.Value(0),
    animatedTranslation: new Animated.ValueXY({x: 0, y: 0}),
    newRotation: '180deg',
    butterflyXRotation: new Animated.Value(0),
    snailPosition: new Animated.Value(0),
    littleWormPosition: new Animated.Value(0.44 * canvasWidth),
    littleBugX: new Animated.Value(0.222 * canvasWidth),
    littleBugY: new Animated.Value(-0.410 * canvasHeight),
    littleBugCircle: new Animated.Value(0),
    beePosition: new Animated.Value(0.75 * canvasWidth)
  };

  circleBug = () => {

    Animated.timing(
      this.state.littleBugCircle,
      {
        toValue: 10,
        duration: 3000
      }
    ).start(this.circleBugBack)
  }

  circleBugBack = () => {

    Animated.timing(
      this.state.littleBugCircle,
      {
        toValue: 0,
        duration: 3000
      }
    ).start(this.circleBug)
  }

  snailRight = () => {
    Animated.timing(
      this.state.snailPosition, 
      {
        toValue: 0.001 * canvasWidth,
        duration: 5000
      }
    ).start(this.snailLeft)
  }

  snailLeft = () => {
    Animated.timing(
      this.state.snailPosition,
      {
        toValue: -0.05 * canvasWidth,
        duration: 5000
      }
    ).start(this.snailRight)
  }

  wormRight = () => {
    Animated.timing(
      this.state.littleWormPosition,
      {
        toValue: 0.55 * canvasWidth,
        duration: 4000
      }
    ).start(this.wormLeft)
  }

  wormLeft = () => {
    Animated.timing(
      this.state.littleWormPosition,
      {
        toValue: 0.44 * canvasWidth,
        duration: 4000
      }
    ).start(this.wormRight)
  }

  beeRight = () => {
    Animated.timing(
      this.state.beePosition,
      {
        toValue: 0.79 * canvasWidth,
        duration: 1000
      }
    ).start(this.beeLeft)
  }

  beeLeft = () => {
    Animated.timing(
      this.state.beePosition,
      {
        toValue: 0.78 * canvasWidth,
        duration: 2000
      }
    ).start(this.beeRight)
  }

  animateBug = () => {
    const path = this.getNewPath()
    let currentX = this.state.animatedTranslation.x._value
    let currentY = this.state.animatedTranslation.y._value
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: {x: path.x, y: path.y},
        duration: path.duration,
        delay: 3000
      }
    ).start(this.animateBug)
    var newAngle = Math.atan2(path.y - currentY, path.x - currentX) - 6
    this.setState({newRotation: `${newAngle}rad`})
  }

  getNewPath = () => {
    const newX = Math.random() * (canvasWidth - 110)
    const newY = Math.random() * -(canvasHeight - 100)
    const newDuration = 1000 + Math.random() * 4000
    return {x: newX, y: newY, duration: newDuration}
  }

  animateButterfliesXOut = () => {
    Animated.timing(
      this.state.butterflyXRotation,
      {
        toValue: 60,
        duration: 1000
      }
    ).start(this.animateButterfliesXIn)
  }

  animateButterfliesXIn = () => {
    Animated.timing(
      this.state.butterflyXRotation,
      {
        toValue: 35,
        duration: 1000
      }
    ).start(this.animateButterfliesXOut)
  }

  rotateFlowersUp = () => {
    Animated.timing(
      this.state.animatedAngle,
      {
        toValue: 15,
        duration: 6000,
      }
    ).start(this.rotateFlowersDown)
  }

  rotateFlowersDown = () => {
    Animated.timing(
      this.state.animatedAngle,
      {
        toValue: -15,
        duration: 6000,
      }
    ).start(this.rotateFlowersUp)
  }

  componentDidMount() {
    this.rotateFlowersUp()
    this.animateBug()
    this.animateButterfliesXOut()
    this.snailRight()
    this.wormRight()
    this.circleBug()
    this.beeRight()
  }

  render() {
    console.log('Bug Angle:', this.state.littleBugCircle)
    return (
        <View style={{justifyContent: 'space-between'}}>
          <Image source={asset('/still-life/still-life-background.png')} style={styles.flower} />
          <Animated.Image source ={asset('/still-life/flower-1.png')} style={{position: 'absolute', width:(1/3) * canvasWidth, height: (1/3) * canvasWidth, transform: [{translateY: -0.47 * canvasHeight}, {translateX: 0.05 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/wheat.png')} style={{position: 'absolute', width:(1/3) * canvasWidth, height: (1/3) * canvasWidth, transform: [{translateY: -0.57 * canvasHeight}, {translateX: 0.0258 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/flower-2.png')} style={{position: 'absolute', width:(1/3) * canvasWidth, height: (1/3) * canvasWidth, transform: [{translateY: -0.234 * canvasHeight}, {translateX: 0.1222 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/dragonfly.png')} style={{position: 'absolute', width: 200, height: 200, transform: [{translateY: this.state.animatedTranslation.y}, {translateX: this.state.animatedTranslation.x}, {translateZ: 0}, { rotateZ: this.state.newRotation }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/butterfly-1.png')} style={{position: 'absolute', width: 200, height: 200, transform: [{translateY: -0.208 * canvasHeight}, {translateX: 0.6682 * canvasWidth}, {rotateX: this.state.butterflyXRotation}], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/butterfly-2.png')} style={{position: 'absolute', width: 200, height: 200, transform: [{translateY: -0.72 * canvasHeight}, {translateX: 0.1222 * canvasWidth}, {rotateY: this.state.butterflyXRotation}], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/snail.png')} style={{position: 'absolute', width: 200, height: 200, transform: [{translateY: -0.75 * canvasHeight}, {translateX: this.state.snailPosition}], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/little-worm.png')} style={{position: 'absolute', width: 150, height: 150, transform: [{translateY: -0.76 * canvasHeight}, {translateX: this.state.littleWormPosition}], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/small-beetle.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateY: Animated.add(this.state.littleBugCircle, this.state.littleBugY)}, {translateX: Animated.add(this.state.littleBugCircle, this.state.littleBugX)}], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/baby-breath.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateY: 0.005 * canvasHeight}, {translateX: 0.329 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/bee.png')} style={{position: 'absolute', width: 75, height: 75, transform: [{translateY: -0.8 * canvasHeight}, {translateX: this.state.beePosition}], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/little-chili-1.png')} style={{position: 'absolute', width: 40, height: 40, transform: [{translateY: -0.310 * canvasHeight}, {translateX: 0.390 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/little-chili-2.png')} style={{position: 'absolute', width: 40, height: 40, transform: [{translateY: -0.27 * canvasHeight}, {translateX: 0.387 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/little-chili-3.png')} style={{position: 'absolute', width: 40, height: 40, transform: [{translateY: -0.245 * canvasHeight}, {translateX: 0.455 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <Animated.Image source ={asset('/still-life/tulip-2.png')} style={{position: 'absolute', width: 210, height: 210, transform: [{translateY: -0.3195 * canvasHeight}, {translateX: 0.5682 * canvasWidth}, { rotateZ: this.state.animatedAngle }], opacity: 1}} />
          <VrButton
          onClick={() => {
            AudioModule.playOneShot({
              source: asset('/sounds/mignon.m4a'),
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
    width: canvasWidth, 
    height: canvasHeight,
    opacity: 1,
    transform: [{translateZ: 800}]
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