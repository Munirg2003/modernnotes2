import { CATEGORY_EMOJIS, NOTE_EMOJIS } from '@/constants/emojis'

export type CategoryType = {
  id: string
  name: string
  emoji: typeof CATEGORY_EMOJIS[keyof typeof CATEGORY_EMOJIS]
  color: string
}

export type NoteType = {
  id: string
  title: string
  content: string
  categoryId: string
  isPinned: boolean
  createdAt: Date
  updatedAt: Date
  color?: string
  emoji?: typeof NOTE_EMOJIS[keyof typeof NOTE_EMOJIS]
}

export const SAMPLE_CATEGORIES: CategoryType[] = [
  { id: '1', name: 'Personal', emoji: '👤', color: '#FF6B6B' },
  { id: '2', name: 'Work', emoji: '💼', color: '#4ECDC4' },
  { id: '3', name: 'Ideas', emoji: '💡', color: '#FFD93D' },
  { id: '4', name: 'Tasks', emoji: '✅', color: '#6C5CE7' },
  { id: '5', name: 'Learning', emoji: '📚', color: '#A8E6CF' }
]

export const SAMPLE_NOTES: NoteType[] = [
  {
    id: '1',
    title: 'Project Deadlines',
    content: 'Complete UI design by Friday\nSubmit proposal by Monday',
    categoryId: '2',
    isPinned: true,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-12'),
    emoji: '📅'
  },
  {
    id: '2',
    title: 'Shopping List',
    content: 'Milk\nEggs\nBread\nFruits',
    categoryId: '1',
    isPinned: true,
    createdAt: new Date('2024-02-11'),
    updatedAt: new Date('2024-02-11'),
    emoji: '🛒'
  },
  {
    id: '3',
    title: 'App Ideas',
    content: 'AI-powered task manager\nFitness tracking with friends',
    categoryId: '3',
    isPinned: false,
    createdAt: new Date('2024-02-09'),
    updatedAt: new Date('2024-02-13'),
    emoji: '💫'
  },
  {
    id: '4',
    title: 'TypeScript Notes',
    content: 'Learn about generics\nPractice utility types',
    categoryId: '5',
    isPinned: false,
    createdAt: new Date('2024-02-08'),
    updatedAt: new Date('2024-02-08'),
    emoji: '📘'
  },
  {
    id: '5',
    title: 'Weekly Goals',
    content: 'Exercise 3 times\nRead 2 chapters\nMeditate daily',
    categoryId: '4',
    isPinned: false,
    createdAt: new Date('2024-02-12'),
    updatedAt: new Date('2024-02-12'),
    emoji: '🎯'
  }
]

const notes = {
  SAMPLE_CATEGORIES,
  SAMPLE_NOTES
}

export default notes 