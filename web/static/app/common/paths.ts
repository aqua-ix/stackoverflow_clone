export const paths = {
  root: '/',
  login: '/login',
  user: (userId = ':userId') => `/user/${userId}`,
  question: (id = ':id') => `/question/${id}`,
  questionCreate: '/question/create',
  bookList: '/book',
  book: (id = ':id') => `/book/${id}`,
  bookCreate: '/book/create',
} as const

export type ScreenName = keyof typeof paths