import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({fonts, sizes}) => ({
  defaultText: {
    fontFamily: fonts.regular,
    fontSize: sizes.m,
  },
}));
