import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Button as RNPButton} from 'react-native-paper';
import {COLORS, SIZES} from '../constants';

interface ButtonProps {
  children?: string | number | {} | React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  return (
    <RNPButton
      mode="text"
      {...props}
      uppercase={false}
      color={COLORS.white}
      contentStyle={{
        height: SIZES.buttonHeight,
        backgroundColor: !props.disabled ? theme.colors.primary : COLORS.grey,
      }}
      labelStyle={{
        color: COLORS.white,
        fontSize: SIZES.buttonFontSize,
      }}
      style={{
        height: SIZES.buttonHeight,
        backgroundColor: COLORS.black,
      }}>
      {props.children}
    </RNPButton>
  );
};
