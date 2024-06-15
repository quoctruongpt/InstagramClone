import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({sizes, fonts, colors}) => ({
  container: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: sizes.xs,
    fontFamily: fonts.regular,
    color: colors.typography,
    paddingHorizontal: sizes.l,
    paddingVertical: sizes.xs,
  },
}));
