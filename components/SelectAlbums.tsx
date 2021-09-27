import { memo, useEffect, useRef, useState, VFC } from 'react'
import { useRecoilState } from 'recoil'

import { TextField } from './atoms/TextField'
import { ErrorMessage } from './atoms/ErrorMessage'
import { AlbumCard } from './templates/Albums/AlbumCard'
import { SelectedAlbumsCard } from './templates/Albums/SelectedAlbumsCard'

import { useSearchAlbums } from '../hooks/useSerchAlbums'
import { Album } from '../types/Album'
import { selectedAlbumsState } from '../store/selectedAlbumsState'

export const SelectAlbums: VFC = memo(() => {
  const { searchAlbums, albumDatas, loading, error } = useSearchAlbums()
  const [searchName, setSearchName] = useState('')
  const [selectedAlbums, setselectedAlbums] =
    useRecoilState<Array<Album | null>>(selectedAlbumsState)
  const isFirstRender = useRef(false)

  useEffect(() => {
    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true
  }, [])

  // アルバム検索実行
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      if (searchName !== '') {
        searchAlbums(searchName)
      }
    }
  }, [searchName])

  const onSelectAlbum = (album: Album) => {
    if (selectedAlbums.length < 9) {
      setselectedAlbums([...selectedAlbums, album])
    }
  }

  const removeAlbum = (index: number) => {
    const newSelectedAlbums = [...selectedAlbums]
    newSelectedAlbums.splice(index, 1)
    setselectedAlbums(newSelectedAlbums)
  }

  return (
    <>
      <div className="absolute top-28 text-gray-600">
        <TextField
          type="text"
          size="medium"
          value={searchName}
          placeholder="アーティスト/アルバム名を検索"
          isSearch
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      {error ? (
        <ErrorMessage message="データの取得に失敗しました" />
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 mt-36 mx-10 mb-80">
            {albumDatas.map((album) => (
              <AlbumCard album={album} key={album.id} onClick={() => onSelectAlbum(album)} />
            ))}
          </div>
          {/* 選択されたアルバムを描画 */}
          {selectedAlbums.length ? (
            <SelectedAlbumsCard selectedAlbums={selectedAlbums} handleRemove={removeAlbum} />
          ) : null}
        </>
      )}
    </>
  )
})
