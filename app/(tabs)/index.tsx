import { Stack, Text, Button, Input, Card, XStack, YStack, ScrollView } from 'tamagui'
import { Search, Plus, FileText } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useNotes } from '@/hooks/useNotes'

export default function NotesScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const { notes, addNote, deleteNote } = useNotes()

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Stack f={1} backgroundColor="$background">
      {/* Header */}
      <XStack 
        backgroundColor="$blue10" 
        padding="$4" 
        justifyContent="space-between" 
        alignItems="center"
      >
        <XStack space="$2" alignItems="center">
          <FileText color="white" size={24} />
          <Text color="white" fontSize="$6" fontWeight="bold">
            ModernNotes
          </Text>
        </XStack>
      </XStack>

      {/* Search Bar */}
      <XStack 
        space="$3" 
        padding="$4" 
        backgroundColor="$background" 
        borderBottomColor="$borderColor" 
        borderBottomWidth={1}
      >
        <Input
          flex={1}
          size="$4"
          placeholder="Search notes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          backgroundColor="$backgroundHover"
          borderWidth={0}
          icon={Search}
        />
        <Button
          size="$4"
          icon={Plus}
          theme="blue"
          onPress={() => {/* Add note */}}
        />
      </XStack>

      {/* Notes Grid */}
      <ScrollView flex={1} padding="$4">
        <YStack space="$4">
          {filteredNotes.length === 0 ? (
            <Card padding="$8" alignItems="center">
              <Text color="$gray11">
                {searchQuery ? 'No notes found' : 'Create your first note!'}
              </Text>
            </Card>
          ) : (
            filteredNotes.map(note => (
              <Card
                key={note.id}
                elevation={2}
                scale={0.9}
                hoverStyle={{ scale: 0.925 }}
                pressStyle={{ scale: 0.875 }}
                animation="quick"
                backgroundColor="$background"
                borderRadius="$4"
                padding="$4"
              >
                <YStack space="$2">
                  <XStack space="$2" alignItems="center">
                    <Text fontSize={24}>{note.emoji}</Text>
                    <Text fontSize="$6" fontWeight="bold" color="$color">
                      {note.title}
                    </Text>
                  </XStack>
                  <Text 
                    numberOfLines={3} 
                    color="$color" 
                    opacity={0.8}
                  >
                    {note.content}
                  </Text>
                  <XStack justifyContent="space-between" alignItems="center">
                    <Text fontSize="$3" color="$gray10">
                      {new Date(note.updatedAt).toLocaleDateString()}
                    </Text>
                    <Button
                      size="$2"
                      theme="red"
                      variant="outlined"
                      onPress={() => deleteNote(note.id)}
                    >
                      Delete
                    </Button>
                  </XStack>
                </YStack>
              </Card>
            ))
          )}
        </YStack>
      </ScrollView>
    </Stack>
  )
}
