import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import TestScene from './containers/TestScene';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TestScene />
      </SafeAreaView>
    </>
  );
};

export default App;
