import React from 'react';
import {
  Animated,
  StyleSheet,
  Image,
  asset,
  View,
  Text
} from 'react-360';

export default class StillLife extends React.Component {
    // Our component will keep track of this state
  state = {
    animatedTranslation: new Animated.ValueXY({x: 0, y: 0}),
    newRotation: '180deg'
  };

  // Animation methods

  // Once the component mounts, animate bug
//   componentDidMount() {
//   }

  render() {
    return (
        <View style={{justifyContent: 'space-between'}}>
          <Image source={asset('/still-life/still-life-background.png')} style={styles.flower} />
          {/* <Animated.Image source ={asset('bug.png')} style={{position: 'absolute', width: 100, height: 100, transform: [{translateY: this.state.animatedTranslation.y}, {translateX: this.state.animatedTranslation.x}, { rotateZ: this.state.newRotation }], opacity: 1}} /> */}
        </View>
    );
  }
};

const styles = StyleSheet.create({
  flower: {
    width: 600, 
    height: 700,
    opacity: 1,
    transform: [{translateZ: 500}]
  }
});