import { useState } from 'react'
import { Stack, Text, Button, Input, Card, XStack, YStack, Dialog, ScrollView } from 'tamagui'
import { Search, Plus, Save, FileText } from '@tamagui/lucide-icons'
import { NoteList } from '../components/notes/NoteList'
import { useNotes } from '../hooks/useNotes'

export function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false)
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const [newNoteContent, setNewNoteContent] = useState('')
  
  const { notes, isLoading, error, addNote, deleteNote } = useNotes()

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      addNote(newNoteTitle.trim(), newNoteContent.trim())
      setNewNoteTitle('')
      setNewNoteContent('')
      setIsAddNoteOpen(false)
    }
  }

  return (
    <YStack f={1} backgroundColor="$background">
      {/* App Bar */}
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
        <Button
          icon={Plus}
          size="$4"
          backgroundColor="$blue8"
          color="white"
          onPress={() => setIsAddNoteOpen(true)}
        >
          New Note
        </Button>
      </XStack>

      <ScrollView f={1} padding="$4">
        {/* Search Bar */}
        <Card 
          elevation={2} 
          marginVertical="$4" 
          padding="$2"
          backgroundColor="$background"
        >
          <Input
            size="$4"
            placeholder="Search notes..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            icon={Search}
            backgroundColor="transparent"
          />
        </Card>

        {/* Notes List */}
        {isLoading ? (
          <Card padding="$4" marginVertical="$2">
            <Text>Loading your notes...</Text>
          </Card>
        ) : error ? (
          <Card padding="$4" theme="red" marginVertical="$2">
            <Text color="$red10">Error loading notes</Text>
          </Card>
        ) : filteredNotes.length === 0 ? (
          <Card padding="$8" marginVertical="$2" alignItems="center">
            <Text color="$gray11" textAlign="center">
              {searchQuery ? 'No notes found' : 'Create your first note!'}
            </Text>
          </Card>
        ) : (
          <NoteList notes={filteredNotes} onDelete={deleteNote} />
        )}
      </ScrollView>

      {/* Add Note Dialog */}
      <Dialog modal open={isAddNoteOpen} onOpenChange={setIsAddNoteOpen}>
        <Dialog.Portal>
          <Dialog.Overlay 
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <Dialog.Content
            bordered
            elevate
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            space
          >
            <Dialog.Title>Create New Note</Dialog.Title>
            <YStack space="$4" padding="$2">
              <Input
                size="$4"
                placeholder="Note Title"
                value={newNoteTitle}
                onChangeText={setNewNoteTitle}
              />
              <Input
                size="$4"
                placeholder="Note Content"
                value={newNoteContent}
                onChangeText={setNewNoteContent}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
              />
              <XStack space="$2" justifyContent="flex-end">
                <Button 
                  variant="outlined" 
                  onPress={() => setIsAddNoteOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  icon={Save}
                  theme="active" 
                  onPress={handleAddNote}
                  disabled={!newNoteTitle.trim() || !newNoteContent.trim()}
                >
                  Save Note
                </Button>
              </XStack>
            </YStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </YStack>
  )
} 