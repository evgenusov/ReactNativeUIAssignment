import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {debounce} from 'lodash';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Button} from '../components/Button';
import {Container, SizedBoxH} from '../components/helpers';
import {Input} from '../components/Input';
import {PhotoUploader} from '../components/PhotoUploader';
import {TelegramConnect} from '../components/TelegramConnect';
import {EditProfileForm, ImagePickerResult} from '../types';
import {TextInputMask} from 'react-native-masked-text';
import styled from 'styled-components/native';

const KeyboardView = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  align-self: center;
  width: 100%;
`;

export const EditProdileScreen = () => {
  const navigation = useNavigation();

  const [loading, SetLoading] = useState(false);

  const [form, SetForm] = useState<EditProfileForm>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [userAvatar, SetUserAvatar] = useState<string | undefined>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Edit profile',
    });
  }, [navigation]);

  const onChangeForm = useCallback(
    (key: keyof EditProfileForm, value: string) => {
      const newForm = {
        ...form,
        [key]: value,
      };

      SetForm(newForm);
    },
    [form],
  );

  const onSelectImage = useCallback((result?: ImagePickerResult) => {
    SetUserAvatar(result?.path);
  }, []);

  const fakeSuccessSubmit = debounce(
    () => {
      SetLoading(false);
      navigation.goBack();
    },
    3000,
    {
      leading: false,
      trailing: true,
    },
  );

  const onSubmit = useCallback(() => {
    SetLoading(true);
    fakeSuccessSubmit();
  }, [fakeSuccessSubmit]);

  return (
    <KeyboardView
      enabled
      keyboardVerticalOffset={120}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <Container>
          <PhotoUploader onSelect={onSelectImage} imageUrl={userAvatar} />
          <SizedBoxH />
          <Input
            label="First Name"
            onChangeText={(text) => onChangeForm('firstName', text)}
          />
          <Input
            label="Last Name"
            onChangeText={(text) => onChangeForm('lastName', text)}
          />
          <Input
            keyboardType={'phone-pad'}
            label="Phone"
            onChangeText={(text) => onChangeForm('phone', text)}
            render={(props) => (
              <TextInputMask
                {...props}
                type="custom"
                options={{
                  withDDD: true,
                  mask: '+9 (999) 999 99 99',
                }}
              />
            )}
          />
          <Input
            onChangeText={(text) => onChangeForm('email', text)}
            label="Email"
            keyboardType="email-address"
          />
          <TelegramConnect />
          <SizedBoxH />
          <SizedBoxH />
          <Button onPress={onSubmit} loading={loading}>
            Save
          </Button>
        </Container>
      </ScrollView>
    </KeyboardView>
  );
};
