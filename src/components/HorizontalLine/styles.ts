import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({colors}) => ({
  container: {
    height: 1,
    backgroundColor: colors.hr,
  },
}));
