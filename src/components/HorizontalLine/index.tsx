import React from 'react';
import {View, ViewProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {stylesheet} from './styles';
import {Text} from '../Text';

interface HorizontalLineProps extends ViewProps {
  label?: string;
}

export const HorizontalLine: React.FC<HorizontalLineProps> = ({label}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.line} />
    </View>
  );
};
