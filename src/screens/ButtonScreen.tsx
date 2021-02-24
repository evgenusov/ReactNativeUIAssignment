import {useNavigation} from '@react-navigation/core';
import React, {useLayoutEffect} from 'react';
import {ScrollView} from 'react-native';
import {Button} from '../components/Button';
import {Container, SizedBoxH} from '../components/helpers';

export const ButtonsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Buttons',
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Container>
        <Button disabled={true}>Disabled</Button>
        <SizedBoxH />
        <Button>Default</Button>
        <SizedBoxH />
        <Button onPress={() => {}}>Pressable</Button>
        <SizedBoxH />
        <Button loading={true}>Progress</Button>
        <SizedBoxH />
        <Button loading={true} />
      </Container>
    </ScrollView>
  );
};
