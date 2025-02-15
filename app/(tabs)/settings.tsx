import { Stack, Text, YStack } from 'tamagui'

export default function SettingsScreen() {
  return (
    <Stack f={1} backgroundColor="$background">
      <YStack padding="$4">
        <Text fontSize="$6" fontWeight="bold">Settings</Text>
      </YStack>
    </Stack>
  )
} 