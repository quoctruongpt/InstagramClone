import {ImageResizeMode} from '~/constants';
import React from 'react';
import {View} from 'react-native';
import {PathIcons} from '~/assets/icons';
import {
  SafeAreaScreen,
  Image,
  ButtonPrimary,
  HorizontalLine,
  Text,
  InlineTextButton,
} from '~/components';
import {useTranslation} from 'react-i18next';
import {useStyles} from 'react-native-unistyles';
import {stylesheet} from './styles';

export const WelcomeScreen: React.FC = () => {
  const {t} = useTranslation();
  const {styles} = useStyles(stylesheet);

  return (
    <SafeAreaScreen>
      <Image
        source={PathIcons.Logo}
        style={{width: '100%', height: 49}}
        resizeMode={ImageResizeMode.Contain}
      />
      <ButtonPrimary label={t('signIn.button')} />
      <HorizontalLine />
      <InlineTextButton
        textLeft={'Bạn chưa có tài khoản'}
        label="DDawng ky"
        textPressStyle={styles.buttonSignUp}
      />
    </SafeAreaScreen>
  );
};
