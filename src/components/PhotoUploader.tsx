import React, {useCallback} from 'react';

import ImagePicker from 'react-native-image-crop-picker';
import styled from 'styled-components/native';
import {COLORS} from '../constants';
import {ImagePickerResult} from '../types';

const UploaderWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
`;

const UploaderView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

const UploaderPhoto = styled.View`
  height: 64px;
  width: 64px;
  border-radius: 64px;
  border-width: 2px;
  border-color: ${COLORS.primary};
  margin-right: 16px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const UploaderInage = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 64px;
`;

const UploaderText = styled.Text`
  color: ${COLORS.primary};
`;

type PhotoUploaderProps = {
  imageUrl?: string;
  onSelect: (result?: ImagePickerResult) => void;
};

export const PhotoUploader = ({onSelect, imageUrl}: PhotoUploaderProps) => {
  const onPress = useCallback(async () => {
    try {
      const result = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });

      onSelect(result);
    } catch (e) {
      console.error(e);
    }
  }, [onSelect]);

  return (
    <UploaderWrapper onPress={onPress}>
      <UploaderView>
        <UploaderPhoto>
          {imageUrl && (
            <UploaderInage
              resizeMode="cover"
              source={{
                uri: imageUrl,
              }}
            />
          )}
        </UploaderPhoto>
        <UploaderText>Upload photo</UploaderText>
      </UploaderView>
    </UploaderWrapper>
  );
};
