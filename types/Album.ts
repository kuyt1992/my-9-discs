export type Album = {
  id: string
  name: string
  images?: [
    {
      height: number
      url?: string
      width: number
    },
  ]
  artists: [
    {
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    },
  ]
  release_date: string
  album_group: string
  album_type: string
  href: string
  total_tracks: number
  release_year: string //追加
}
