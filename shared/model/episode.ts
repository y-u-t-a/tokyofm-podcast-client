export interface Episode {
  id: number
  title: string
  description: string
  length: string
  /** unixtime millis */
  publishedAt: number
  audio: string
}
