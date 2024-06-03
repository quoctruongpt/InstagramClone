import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({fonts, colors, sizes}) => ({
  buttonSignUp: {
    fontFamily: fonts.bold,
  },
  signUpText: {
    color: colors.textGray,
  },
  footerWrap: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.hr,
  },
  bodyWrap: {
    paddingHorizontal: sizes.xxl,
    justifyContent: 'space-evenly',
  },
}));
