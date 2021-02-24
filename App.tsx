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
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {enableScreens} from 'react-native-screens';
import {AppNavigator} from './src/AppNavigator';
import {DefaultTheme} from './src/themes/DefaultTheme';

enableScreens();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} />
      <PaperProvider theme={DefaultTheme}>
        <AppNavigator />
      </PaperProvider>
    </>
  );
};

export default App;
