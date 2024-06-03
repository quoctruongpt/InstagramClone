import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {Text} from '~/components';
import {stylesheet} from './styles';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  label: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({label}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <TouchableOpacity style={styles.container}>
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
