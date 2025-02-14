import { Button } from 'tamagui'
import { Mic } from '@tamagui/lucide-icons'

export function QuickCaptureButton() {
  return (
    <Button
      position="absolute"
      bottom={20}
      right={20}
      size="$6"
      circular
      icon={Mic}
      backgroundColor="$blue10"
      onPress={() => {/* Start voice capture */}}
    />
  )
} 