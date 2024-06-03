import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {Text} from '~/components';
import {stylesheet} from './styles';
import {ButtonActionType} from '~/constants';

interface FollowBtnProps extends TouchableOpacityProps {
  label: string;
  actionType?: ButtonActionType;
}

export const ActionButton: React.FC<FollowBtnProps> = ({
  label,
  actionType = ButtonActionType.Follow,
}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <TouchableOpacity style={styles.container(actionType)}>
      <Text numberOfLines={1} style={styles.label(actionType)}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
