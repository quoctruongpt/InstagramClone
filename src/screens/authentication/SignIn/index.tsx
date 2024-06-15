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
  Input,
  HorizontalLine,
  ButtonWithIcon,
  BoxHideKeyboard,
} from '~/components';
import {ImageResizeMode, TAuthNavigation, ScreenNames} from '~/constants';
import {stylesheet} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Svg} from '~/assets/icons';

export const SignIn: React.FC = () => {
  const {t} = useTranslation();
  const {styles} = useStyles(stylesheet);
  const navigation = useNavigation<TAuthNavigation<'WelcomeScreen'>>();

  const onLoginPress = () => {
    // navigation.navigate(ScreenNames.SignIn);
  };

  return (
    <SafeAreaScreen>
      <BoxHideKeyboard>
        <Box flex={1} style={styles.bodyWrap}>
          <Image
            source={PathIcons.Logo}
            style={{width: '100%', height: 49}}
            resizeMode={ImageResizeMode.Contain}
          />
          <Box style={styles.inputs}>
            <Input placeholder={t('signIn.username')} />
            <Input secureTextEntry placeholder={t('signIn.password')} />
          </Box>
          <Box style={styles.actions}>
            <InlineTextButton
              containerStyle={styles.forgotPswBtn}
              textPressStyle={styles.forgotPswText}
              label={t('signIn.forgotPassword')}
            />
            <ButtonPrimary label={t('signIn.button')} onPress={onLoginPress} />
            <ButtonWithIcon
              Icon={Svg.IconFacebook}
              label={t('signIn.loginWithFacebook')}
              onPress={onLoginPress}
            />
            <ButtonWithIcon
              Icon={Svg.IconGoogle}
              label={t('signIn.loginWithGoogle')}
              onPress={onLoginPress}
            />
          </Box>
          <HorizontalLine label={t('signIn.or')} />
          <InlineTextButton
            textLeft={t('signIn.askAccount')}
            label={t('signIn.signUp')}
            textPressStyle={styles.signUpText}
            containerStyle={styles.buttonSignUp}
          />
        </Box>
      </BoxHideKeyboard>
    </SafeAreaScreen>
  );
};
