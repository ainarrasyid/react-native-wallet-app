/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStack from './src/navigators/RootStack';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootStack />
    </GestureHandlerRootView>
  );
};

export default App;
