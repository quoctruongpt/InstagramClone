import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {Text} from '~/components/Text';
import {stylesheet} from './styles';

interface ButtonWithIconProps extends TouchableOpacityProps {
  label: string;
  Icon?: React.ReactSVG;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  label,
  Icon,
}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <TouchableOpacity style={styles.container}>
      {Icon ? <Icon width={24} height={24} /> : null}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
