import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({fonts, colors}) => ({
  buttonSignUp: {
    fontFamily: fonts.bold,
  },
  signUpText: {
    color: colors.textGray,
  },
}));
