import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {ScrollView} from 'react-native';
import {Container} from '../components/helpers';
import {Input} from '../components/Input';
import {LinkButton} from '../components/LinkButton';
import {TextInputMask} from 'react-native-masked-text';

export const InputsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Inputs',
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Container>
        <Input label={'Label'} disabled={true} value="Disabled" />
        <Input label="Label" />
        <Input
          label="Mask"
          keyboardType={'phone-pad'}
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
        <Input label="Input" />
        <Input label="Label" value="Fill" editable={false} />
        <Input
          label="Label"
          value="Progress"
          right={<LinkButton onPress={() => {}}>Telegram</LinkButton>}
        />
      </Container>
    </ScrollView>
  );
};
