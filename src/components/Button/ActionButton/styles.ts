import {createStyleSheet} from 'react-native-unistyles';
import {ButtonActionType} from '~/constants';

export const stylesheet = createStyleSheet(({colors, sizes, fonts}) => ({
  container: (actionType: ButtonActionType) => ({
    width: 90,
    height: 28,
    backgroundColor:
      actionType === ButtonActionType.Follow
        ? colors.followBtn
        : colors.messageBtn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }),
  label: (actionType: ButtonActionType) => ({
    color:
      actionType === ButtonActionType.Follow
        ? colors.primaryBtnText
        : colors.typography,
    fontSize: sizes.m,
    fontFamily: fonts.bold,
  }),
}));
