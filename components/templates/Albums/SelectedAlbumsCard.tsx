import { VFC } from 'react'

import { Album } from '../../../types/Album'

type Props = {
  selectedAlbums: Album[]
}

export const SelectedAlbumsCard: VFC<Props> = (props) => {
  const { selectedAlbums } = props

  return (
    <div className="bg-gray-800 fixed bottom-0 w-10/12 bg-opacity-90 rounded-md lg:pl-24 mb-1">
      <div className="flex flex-wrap">
        {selectedAlbums.map((album) => (
          <div className="group justify-start items-center h-28 w-28" key={album.id}>
            <img
              key={album.id}
              className="hover:opacity-60 hover:duration-300 lg:p-2 md:p-2 p-1 pt rounded-sm"
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
