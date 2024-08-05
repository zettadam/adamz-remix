export interface Note {
  id: number
  title: string
  body: string
  published_at: string
  significance: number
  created_at: string
  updated_at: string | null
}

export interface NoteFormValues {
  id?: number
  title: string
  body: string
  significance: number
  published_at: string
}
