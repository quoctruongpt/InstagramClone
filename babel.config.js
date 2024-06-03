module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/navigation': './src/navigation',
          '~/store': './src/store',
          '~/screens': './src/screens',
          '~/api': './src/services/api',
          '~/firebase': './src/services/firebase',
          '~/localization': './src/services/localization',
          '~/storage': './src/services/storage',
          '~/constants': './src/utils/constants',
          '~/helpers': './src/utils/helpers',
          '~/hooks': './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
