import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({sizes, colors, fonts}) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizes.xs,
    height: 44,
  },
  label: {
    fontFamily: fonts.bold,
    color: colors.textButtonLabel,
  },
}));
