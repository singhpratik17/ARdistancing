import React, {useState} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroAmbientLight,
} from 'react-viro';

const TestScene = () => {
  const [text, setText] = useState('initializing');

  const _onInitialized = (state, reason) => {
    console.log("STATe", state, reason)
    if (state == ViroConstants.TRACKING_NORMAL) {
      setText('Hello World');
    } else if (state == ViroConstants.TRACKING_NONE) {
      console.log('LOST', reason);
      // Handle loss of tracking
    }
  };
  return (
    <ViroARScene
      onTrackingUpdated={(state, reason) => _onInitialized(state, reason)}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroAmbientLight color={'#aaaaaa'} />
    </ViroARScene>
  );
};

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default TestScene;
