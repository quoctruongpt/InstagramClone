import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({colors, fonts, sizes}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 0.5,
    backgroundColor: colors.hr,
    flex: 1,
  },
  label: {
    fontFamily: fonts.bold,
    color: colors.hr,
    paddingHorizontal: sizes.l,
  },
}));
