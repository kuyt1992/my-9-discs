import { VFC } from 'react'

import { Album } from '../../../types/Album'

type Props = {
  selectedAlbums: Album[]
  handleRemove?: (index: number) => void
}

export const SelectedAlbumsCard: VFC<Props> = (props) => {
  const { selectedAlbums, handleRemove } = props

  return (
    <div className="bg-gray-800 fixed bottom-0 w-10/12 bg-opacity-90 rounded-md lg:pl-24 mb-1">
      <div className="flex flex-wrap">
        {selectedAlbums.map((album, index) => (
          <div
            className="relative inline-block group justify-start items-center h-28 w-28"
            key={album.id}
          >
            <img
              key={album.id}
              className="hover:opacity-60 hover:duration-300 lg:p-2 md:p-2 p-1 pt rounded-sm"
              src={album.images?.[0].url || ''}
              alt={album.name}
            />
            <span
              className="absolute opacity-0 inline-flex items-center justify-center group-hover:opacity-90 top-1 right-0 px-2 py-1 mr-2 text-xs leading-none text-red-100 bg-red-600 rounded-full cursor-pointer"
              onClick={() => handleRemove(index)}
            >
              ×
            </span>
            <button></button>
          </div>
        ))}
      </div>
    </div>
  )
}
