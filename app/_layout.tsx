import { Stack } from 'expo-router';
import { TamaguiProvider, Theme, YStack } from 'tamagui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import config from './tamagui.config';

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TamaguiProvider config={config}>
        <Theme name="light">
          <YStack f={1} backgroundColor="$background">
            <Stack screenOptions={{ headerShown: false }} />
          </YStack>
        </Theme>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
