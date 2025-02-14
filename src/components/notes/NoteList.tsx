import { FlatList } from 'react-native'
import { Card, Text, XStack, YStack, Button } from 'tamagui'
import { Trash, Clock } from '@tamagui/lucide-icons'
import { Note } from '../../hooks/useNotes'

interface NoteListProps {
  notes: Note[]
  onDelete: (id: string) => void
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card 
          marginVertical="$2" 
          padding="$4"
          elevation={2}
          pressStyle={{ scale: 0.98 }}
          animation="quick"
        >
          <XStack justifyContent="space-between" alignItems="flex-start">
            <YStack space="$2" flex={1}>
              <Text fontSize="$6" fontWeight="bold" color="$blue10">
                {item.title}
              </Text>
              <Text 
                numberOfLines={3} 
                color="$gray11"
                fontSize="$4"
              >
                {item.content}
              </Text>
              <XStack space="$2" alignItems="center">
                <Clock size={14} color="$gray10" />
                <Text fontSize="$3" color="$gray10">
                  {new Date(item.updatedAt).toLocaleDateString()}
                </Text>
              </XStack>
            </YStack>
            <Button
              icon={Trash}
              size="$3"
              variant="outlined"
              theme="red"
              onPress={() => onDelete(item.id)}
              pressStyle={{ scale: 0.9 }}
              animation="quick"
            />
          </XStack>
        </Card>
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  )
} 