import {createStyleSheet} from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({colors}) => ({
  container: {flex: 1, backgroundColor: colors.background},
}));
