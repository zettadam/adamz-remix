export interface Post {
  id: number
  title: string
  slug: string
  abstract: string
  body: string
  published_at: string
  significance: number
  created_at: string
  updated_at: string | null
}

export interface PostFormValues {
  id?: number
  title: string
  slug: string
  abstract: string
  body: string
  published_at: string
  significance: number
}
