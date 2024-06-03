import React from 'react';
import {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import {Text} from '~/components';
import {stylesheet} from './styles';

interface InlineTextButtonProps extends TextProps {
  label: string;
  onPress?: () => void;
  textLeft?: string;
  textPressStyle?: StyleProp<TextStyle>;
  textLeftStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const InlineTextButton: React.FC<InlineTextButtonProps> = ({
  label,
  onPress,
  textLeft,
  textPressStyle,
  textLeftStyle,
  containerStyle,
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={[styles.container, containerStyle]}>
      {textLeft ? <Text style={textLeftStyle}>{`${textLeft} `}</Text> : null}
      <TouchableOpacity onPress={onPress}>
        <Text style={textPressStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
