import React from 'react';
import {useTranslation} from 'react-i18next';
import {useStyles} from 'react-native-unistyles';

import {PathIcons} from '~/assets/icons';
import {
  SafeAreaScreen,
  Image,
  ButtonPrimary,
  InlineTextButton,
  Box,
} from '~/components';
import {ImageResizeMode, TAuthNavigation, ScreenNames} from '~/constants';
import {stylesheet} from './styles';
import {useNavigation} from '@react-navigation/native';

export const WelcomeScreen: React.FC = () => {
  const {t} = useTranslation();
  const {styles} = useStyles(stylesheet);
  const navigation = useNavigation<TAuthNavigation<'WelcomeScreen'>>();

  const onLoginPress = () => {
    navigation.navigate(ScreenNames.SignIn);
  };

  return (
    <SafeAreaScreen>
      <Box flex={1} style={styles.bodyWrap}>
        <Image
          source={PathIcons.Logo}
          style={{width: '100%', height: 49}}
          resizeMode={ImageResizeMode.Contain}
        />
        <ButtonPrimary label={t('signIn.button')} onPress={onLoginPress} />
      </Box>
      <Box style={styles.footerWrap}>
        <InlineTextButton
          textLeft={t('signIn.askAccount')}
          label={t('signIn.signUp')}
          textPressStyle={styles.buttonSignUp}
        />
      </Box>
    </SafeAreaScreen>
  );
};
