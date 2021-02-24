import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {Button} from '../components/Button';
import {Container, SizedBoxH} from '../components/helpers';
import {SCREENS} from '../routes';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Super-puper-duper app',
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Container>
        <Button onPress={() => navigation.navigate(SCREENS.INPUTS)}>
          <Text>Inputs</Text>
        </Button>
        <SizedBoxH />
        <Button onPress={() => navigation.navigate(SCREENS.BUTTONS)}>
          <Text>Buttons</Text>
        </Button>

        <SizedBoxH />
        <Button onPress={() => navigation.navigate(SCREENS.EDIT_PROFILE)}>
          <Text>Edit Profile</Text>
        </Button>
      </Container>
    </ScrollView>
  );
};
