import { useState, useCallback, useMemo } from 'react'
import { nanoid } from 'nanoid'
import { NoteType, CategoryType, SAMPLE_NOTES, SAMPLE_CATEGORIES } from '../types/notes'

type SortOption = 'updated' | 'created' | 'title'

export const useNotes = () => {
  const [notes, setNotes] = useState<NoteType[]>(SAMPLE_NOTES)
  const [categories] = useState<CategoryType[]>(SAMPLE_CATEGORIES)
  const [sortBy, setSortBy] = useState<SortOption>('updated')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sortedNotes = useMemo(() => {
    let sorted = [...notes]
    
    // First sort by pinned status
    sorted.sort((a, b) => (a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1))
    
    // Then apply the selected sort
    sorted.sort((a, b) => {
      if (sortBy === 'updated') {
        return b.updatedAt.getTime() - a.updatedAt.getTime()
      }
      if (sortBy === 'created') {
        return b.createdAt.getTime() - a.createdAt.getTime()
      }
      return a.title.localeCompare(b.title)
    })

    // Filter by category if selected
    if (selectedCategory) {
      sorted = sorted.filter(note => note.categoryId === selectedCategory)
    }

    return sorted
  }, [notes, sortBy, selectedCategory])

  const addNote = useCallback((
    title: string, 
    content: string, 
    categoryId: string,
    emoji?: string
  ) => {
    const newNote: NoteType = {
      id: nanoid(),
      title,
      content,
      categoryId,
      isPinned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      emoji
    }
    setNotes(prev => [newNote, ...prev])
  }, [])

  const togglePin = useCallback((id: string) => {
    setNotes(prev => prev.map(note => 
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    ))
  }, [])

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }, [])

  return {
    notes: sortedNotes,
    categories,
    isLoading,
    error,
    addNote,
    deleteNote,
    togglePin,
    setSortBy,
    setSelectedCategory,
    selectedCategory,
    sortBy
  }
}

export default useNotes 