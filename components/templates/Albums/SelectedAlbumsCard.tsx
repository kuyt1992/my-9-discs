import { VFC } from 'react'

import { Album } from '../../../types/Album'

type Props = {
  selectedAlbums: Album[]
}

export const SelectedAlbumsCard: VFC<Props> = (props) => {
  const { selectedAlbums } = props

  return (
    <div className="bg-gray-800 fixed bottom-0 w-11/12 bg-opacity-90 rounded-md lg:pl-14 mb-1">
      <div className="flex">
        {selectedAlbums.map((album) => (
          <div className="group relative" key={album.id}>
            <img
              key={album.id}
              className="hover:opacity-60 hover:duration-300 w-1/12 flex lg:p-2 md:p-2 p-1 rounded-sm"
              src={album.images?.[0].url || ''}
              alt={album.name}
            />
            <button></button>
          </div>
        ))}
      </div>
    </div>
  )
}
