import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({colors, sizes, fonts}) => ({
  container: {
    height: 44,
    backgroundColor: colors.primaryBtn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    color: colors.primaryBtnText,
    fontSize: sizes.m,
    fontFamily: fonts.bold,
  },
}));
