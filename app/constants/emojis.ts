export const CATEGORY_EMOJIS = {
  personal: '👤',
  work: '💼',
  ideas: '💡',
  tasks: '✅',
  learning: '📚',
  health: '🏥',
  finance: '💰',
  travel: '✈️',
  shopping: '🛒',
  entertainment: '🎮'
} as const

export const NOTE_EMOJIS = {
  default: '📝',
  important: '⭐',
  urgent: '🚨',
  reminder: '⏰',
  meeting: '👥',
  idea: '💭',
  todo: '📋',
  done: '✅',
  cancelled: '❌',
  pinned: '📌'
} as const

export type CategoryEmoji = keyof typeof CATEGORY_EMOJIS
export type NoteEmoji = keyof typeof NOTE_EMOJIS 