import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({fonts, colors, sizes}) => ({
  buttonSignUp: {
    justifyContent: 'center',
  },
  signUpText: {
    color: colors.textButtonLabel,
    fontFamily: fonts.bold,
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
    justifyContent: 'center',
    gap: sizes.xxl,
  },
  forgotPswBtn: {
    justifyContent: 'flex-end',
  },
  forgotPswText: {
    color: colors.textButtonLabel,
  },
  inputs: {
    gap: sizes.l,
  },
  actions: {
    gap: sizes.l,
  },
}));
