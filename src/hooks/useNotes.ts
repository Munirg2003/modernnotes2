import { useState, useCallback } from 'react'
import { nanoid } from 'nanoid'

export interface Note {
  id: string
  title: string
  content: string
  updatedAt: Date
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addNote = useCallback((title: string, content: string) => {
    const newNote: Note = {
      id: nanoid(),
      title,
      content,
      updatedAt: new Date()
    }
    setNotes(prev => [newNote, ...prev])
  }, [])

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }, [])

  return {
    notes,
    isLoading,
    error,
    addNote,
    deleteNote
  }
} 