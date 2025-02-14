import { Stack, Text, Button, Input, Card, XStack, YStack, ScrollView } from 'tamagui'
import { Search, Plus, Save, FileText } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { NoteList } from '../components/notes/NoteList'
import { useNotes } from '../hooks/useNotes'
import { Dialog } from '../components/ui/Dialog'

export default function NotesScreen() {
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
    <Stack f={1}>
      {/* App Bar */}
      <XStack 
        backgroundColor="$blue10" 
        paddingHorizontal="$4"
        paddingVertical="$4"
        justifyContent="space-between" 
        alignItems="center"
        elevation={4}
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
          pressStyle={{ scale: 0.97 }}
          animation="quick"
        >
          New Note
        </Button>
      </XStack>

      <YStack f={1} backgroundColor="$background" padding="$4">
        {/* Search Bar */}
        <Card 
          elevation={2} 
          marginVertical="$4" 
          padding="$2"
          backgroundColor="white"
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

        {/* Notes Content */}
        <ScrollView 
          f={1} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
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
                {searchQuery ? 'No notes found' : 'Create your first note by tapping the + button'}
              </Text>
            </Card>
          ) : (
            <NoteList notes={filteredNotes} onDelete={deleteNote} />
          )}
        </ScrollView>
      </YStack>

      {/* Add Note Dialog */}
      <Dialog 
        open={isAddNoteOpen} 
        onOpenChange={setIsAddNoteOpen}
        title="Create New Note"
      >
        <YStack space="$4" padding="$2">
          <Input
            size="$4"
            placeholder="Note Title"
            value={newNoteTitle}
            onChangeText={setNewNoteTitle}
          />
          <Input
            size="$4"
            placeholder="Write your note here..."
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
              theme="gray"
            >
              Cancel
            </Button>
            <Button 
              icon={Save}
              theme="blue" 
              onPress={handleAddNote}
              disabled={!newNoteTitle.trim() || !newNoteContent.trim()}
            >
              Save Note
            </Button>
          </XStack>
        </YStack>
      </Dialog>
    </Stack>
  )
}
