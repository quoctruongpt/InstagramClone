import React from 'react';
import {View, ViewProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {stylesheet} from './styles';

interface HorizontalLineProps extends ViewProps {}

export const HorizontalLine: React.FC<HorizontalLineProps> = () => {
  const {styles} = useStyles(stylesheet);

  return <View style={styles.container} />;
};
