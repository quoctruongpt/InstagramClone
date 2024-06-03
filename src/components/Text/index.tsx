import React from 'react';
import {TextProps, Text as TextRN} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {stylesheet} from './styles';

interface CustomTextProps extends TextProps {}

export const Text: React.FC<CustomTextProps> = ({style, ...props}) => {
  const {styles} = useStyles(stylesheet);

  return <TextRN style={[styles.defaultText, style]} {...props} />;
};
