import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {stylesheet} from './styles';

interface InputProps extends TextInputProps {}

export const Input: React.FC<InputProps> = ({...props}) => {
  const {styles} = useStyles(stylesheet);

  return <TextInput {...props} style={styles.container} />;
};
