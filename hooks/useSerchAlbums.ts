import axios from 'axios'
import { useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { accessTokenState } from '../store/accessTokenState'
import { Album } from '../types/Album'
import { SearchAlbumResponse } from '../types/api/SearchAlbumResponse'

export const useSearchAlbums = () => {
  const accessToken = useRecoilValue(accessTokenState)
  const [albumDatas, setAlbumDatas] = useState<Array<Album>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const searchAlbums = useCallback(async (searchName: string) => {
    setLoading(true)
    setError(false)

    await axios
      .get<SearchAlbumResponse>(
        `https://api.spotify.com/v1/search?q=${searchName}&type=album&market=JP&limit=30`,
        {
          headers: { Authorization: 'Bearer ' + accessToken },
          data: {},
        },
      )
      .then((res) => {
        const resultDatas = res.data.albums.items.map((album) => ({
          id: album.id,
          name: album.name,
          images: album?.images,
          release_date: album.release_date,
          album_group: album.album_group,
          album_type: album.album_type,
          href: album.href,
          total_tracks: album.total_tracks,
        }))
        setAlbumDatas(resultDatas)
      })
      .catch((err) => {
        setError(true)
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return { searchAlbums, albumDatas, loading, error }
}
