import {RouteProp} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ScreenNames = {
  WelcomeScreen: 'WelcomeScreen',
  SignIn: 'SignIn',
};

export type AppStackParamList = {};
export type AuthStackParamList = {
  WelcomeScreen: undefined;
  SignIn: undefined;
};

export type TAppNavigation<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
export type TAppRoute<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;
export type TAuthNavigation<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
export type TAuthRoute<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;
