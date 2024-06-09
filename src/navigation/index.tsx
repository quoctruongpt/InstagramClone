import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from './AppNavigation';
import {AuthNavigation} from './AuthNavigation';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};
