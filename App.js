import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ViroARSceneNavigator} from 'react-viro';

import TestScene from './containers/TestScene';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ViroARSceneNavigator
          initialScene={{
            scene: TestScene,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
