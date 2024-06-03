import {SafeAreaView, ViewProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {stylesheet} from './styles';
import React from 'react';

interface SafeAreaScreenProps extends ViewProps {}

export const SafeAreaScreen: React.FC<SafeAreaScreenProps> = ({
  children,
  style,
  ...props
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};
