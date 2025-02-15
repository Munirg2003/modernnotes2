import { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  name: 'ModernNotes',
  slug: 'modern-notes',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: [
    'assets/**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.modernnotes.app'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.modernnotes.app'
  },
  web: {
    bundler: 'metro',
    favicon: './assets/images/favicon.png'
  },
  plugins: [
    [
      'expo-router',
      {
        origin: false
      }
    ]
  ],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true
  },
  extra: {
    router: {
      origin: false
    },
  },
  newArchEnabled: true
}

export default config 