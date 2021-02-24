import {DefaultTheme as NavigationTheme} from '@react-navigation/native';
import {DefaultTheme as PaperTheme} from 'react-native-paper';
import {COLORS} from '../constants';

export const DefaultTheme = {
  ...NavigationTheme,
  ...PaperTheme,
  colors: {
    ...NavigationTheme.colors,
    ...PaperTheme.colors,
    background: '#fff',
    primary: COLORS.primary,
    accent: COLORS.accent,
  },
};
