import React from 'react';
import {
  Image,
  asset,
  View
} from 'react-360';

export default function AdamCreation () {
    return (
        <View>
            <Image source={asset('creation-of-adam.png')} style={{position: 'absolute', width: 1000, height: 1000, opacity: 0.8}} />
        </View>
    );
}
