import React from 'react';
import {Button as RNPButton} from 'react-native-paper';

interface ButtonProps {
  children?: string | number | {} | React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const LinkButton = (props: ButtonProps) => {
  return (
    <RNPButton mode="text" {...props} uppercase={false}>
      {props.children}
    </RNPButton>
  );
};
