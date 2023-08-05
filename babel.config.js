module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@services': './src/services',
          '@contexts': './src/contexts',
          '@navigation': './src/navigation',
          '@types': './src/types/index.ts',
        },
      },
    ],
  ],
}
