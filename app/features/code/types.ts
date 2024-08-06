export interface CodeSnippet {
  id: number
  title: string
  description: string
  language: string
  body: string
  published_at: string | null
  created_at: string
  updated_at: string | null
}

export interface CodeSnippetFormValues {
  id?: number
  title: string
  description: string
  language: string
  published_on: string
  body: string
}
