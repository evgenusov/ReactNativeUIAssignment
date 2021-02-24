import React, {useCallback, useState} from 'react';
import {Input} from './Input';
import {LinkButton} from './LinkButton';

export const TelegramConnect = () => {
  const [loading, SetLoading] = useState(false);

  const onPress = useCallback(() => {
    SetLoading(!loading);
  }, [loading]);

  return (
    <Input
      label={'Telegram'}
      editable={false}
      right={
        loading ? (
          <LinkButton onPress={onPress} loading={true} />
        ) : (
          <LinkButton onPress={onPress}>Telegram</LinkButton>
        )
      }
    />
  );
};
