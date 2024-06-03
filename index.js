/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {persist, store} from '~/store';
import {PersistGate} from 'redux-persist/integration/react';
import './src/services/localization';
import './src/utils/styles/unistyles';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
