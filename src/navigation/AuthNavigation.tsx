import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, WelcomeScreen} from '~/screens';
import {Svg} from '~/assets/icons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const AuthNavigation: React.FC = () => {
  const navigation = useNavigation();

  const renderButtonBack = ({canGoBack}: {canGoBack: boolean}) => {
    return canGoBack ? (
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          justifyContent: 'center',
        }}
        onPress={navigation.goBack}>
        <Svg.IconBack width={20} height={20} />
      </TouchableOpacity>
    ) : null;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerLeft: renderButtonBack,
        title: '',
        headerShadowVisible: false,
      }}>
      <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
      <Stack.Screen
        component={SignIn}
        name="SignIn"
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
