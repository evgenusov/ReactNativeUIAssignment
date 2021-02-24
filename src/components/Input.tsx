import React from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';
import {KeyboardType} from 'react-native';

const StyledInput = styled(TextInput)`
  background-color: transparent;
  padding-horizontal: 0;
`;

const InputContainer = styled.View`
  flex-direction: row;
`;
const TextInputStyled = styled.TextInput`
  flex: 1;
`;
const AdornmentContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 12px;
`;

type InputProps = {
  label?: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  onPress?: () => void;
  editable?: boolean;
  render?: (props: any) => React.ReactNode;
  keyboardType?: KeyboardType;
  onChangeText?: (value: string) => void;
};

export const Input = ({left, right, ...props}: InputProps) => {
  return (
    <StyledInput
      render={(inputProps) => (
        <InputContainer>
          {left && <AdornmentContainer>{left}</AdornmentContainer>}
          <TextInputStyled {...inputProps} />
          {right && <AdornmentContainer>{right}</AdornmentContainer>}
        </InputContainer>
      )}
      {...props}
    />
  );
};
