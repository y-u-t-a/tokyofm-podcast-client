export interface Episode {
  title: string
  description: string
  length: string
  /** unixtime millis */
  publishedAt: number
  audio: string
}
