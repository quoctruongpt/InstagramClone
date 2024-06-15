import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

interface BoxHideKeyboardProps extends TouchableWithoutFeedbackProps {}

export const BoxHideKeyboard: React.FC<BoxHideKeyboardProps> = props => {
  return <TouchableWithoutFeedback onPress={Keyboard.dismiss} {...props} />;
};
