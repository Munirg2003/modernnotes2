import { FlatList } from 'react-native'
import { Card, Text, XStack, YStack, Button, Stack } from 'tamagui'
import { Trash, Pin, Clock } from '@tamagui/lucide-icons'
import { NoteType } from '@/types/notes'
import { useWindowDimensions } from 'react-native'
import { formatDistanceToNow } from 'date-fns'

interface NoteListProps {
  notes: NoteType[]
  onDelete: (id: string) => void
  onTogglePin: (id: string) => void
}

export default function NoteList({ notes, onDelete, onTogglePin }: NoteListProps) {
  const { width } = useWindowDimensions()
  const numColumns = width > 768 ? 3 : width > 480 ? 2 : 1

  const getCategoryColor = (categoryId: string) => {
    const colors = {
      '1': '#FF6B6B', // Personal - Red
      '2': '#4ECDC4', // Work - Teal
      '3': '#FFD93D', // Ideas - Yellow
      '4': '#6C5CE7', // Tasks - Purple
      '5': '#A8E6CF', // Learning - Mint
    }
    return colors[categoryId as keyof typeof colors] || '#95A5A6'
  }

  return (
    <FlatList
      data={notes}
      numColumns={numColumns}
      columnWrapperStyle={numColumns > 1 ? { gap: 16 } : undefined}
      contentContainerStyle={{ gap: 16, padding: 16 }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Card
          elevation={2}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
          animation="quick"
          backgroundColor="$background"
          borderRadius="$4"
          flex={1}
          minHeight={200}
          borderWidth={1}
          borderColor="$borderColor"
          overflow="hidden"
        >
          {/* Category Color Bar */}
          <Stack
            position="absolute"
            top={0}
            left={0}
            right={0}
            height="$1"
            backgroundColor={getCategoryColor(item.categoryId)}
          />

          <YStack flex={1} p="$4" space="$2">
            {/* Header */}
            <XStack justifyContent="space-between" alignItems="center">
              <XStack space="$2" alignItems="center" flex={1}>
                <Text fontSize={24}>{item.emoji}</Text>
                <Text
                  fontSize="$6"
                  fontWeight="bold"
                  color="$color"
                  numberOfLines={1}
                  flex={1}
                >
                  {item.title}
                </Text>
              </XStack>
              <Button
                size="$2"
                onPress={() => onTogglePin(item.id)}
                backgroundColor={item.isPinned ? '$blue8' : 'transparent'}
                icon={Pin}
                borderRadius="$10"
                chromeless={!item.isPinned}
              />
            </XStack>

            {/* Content */}
            <Text
              numberOfLines={4}
              color="$color"
              opacity={0.8}
              flex={1}
            >
              {item.content}
            </Text>

            {/* Footer */}
            <XStack justifyContent="space-between" alignItems="center" pt="$2">
              <XStack space="$1" alignItems="center" opacity={0.5}>
                <Clock size={12} />
                <Text fontSize="$2">
                  {formatDistanceToNow(item.updatedAt, { addSuffix: true })}
                </Text>
              </XStack>
              <Button
                size="$2"
                onPress={() => onDelete(item.id)}
                icon={Trash}
                theme="red"
                variant="outlined"
                borderRadius="$10"
              />
            </XStack>
          </YStack>
        </Card>
      )}
    />
  )
} 