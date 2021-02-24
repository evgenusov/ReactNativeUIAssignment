import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {SCREENS} from './routes';
import {InputsScreen} from './screens/InputsScreen';
import {DefaultTheme} from './themes/DefaultTheme';
import {ButtonsScreen} from './screens/ButtonScreen';
import {EditProdileScreen} from './screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerLargeTitle: true,
          headerHideShadow: true,
        }}>
        <Stack.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{headerBackTitle: ''}}
        />
        <Stack.Screen
          name={SCREENS.INPUTS}
          component={InputsScreen}
          options={{headerBackTitle: ''}}
        />
        <Stack.Screen
          name={SCREENS.BUTTONS}
          component={ButtonsScreen}
          options={{headerBackTitle: ''}}
        />
        <Stack.Screen
          name={SCREENS.EDIT_PROFILE}
          component={EditProdileScreen}
          options={{headerBackTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
