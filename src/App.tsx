import { TamaguiProvider, Theme } from 'tamagui'
import { config } from './tamagui.config'
import { HomeScreen } from './pages/Home'

export function App() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <HomeScreen />
      </Theme>
    </TamaguiProvider>
  )
} 