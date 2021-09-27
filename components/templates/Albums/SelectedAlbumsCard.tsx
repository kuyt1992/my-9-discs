import { VFC } from 'react'
import Image from 'next/image'

import { Modal } from '../../atoms/Modal'
import { Album } from '../../../types/Album'

type Props = {
  selectedAlbums: Album[]
  handleRemove?: (index: number) => void
}

export const SelectedAlbumsCard: VFC<Props> = (props) => {
  const { selectedAlbums, handleRemove } = props

  return (
    <div className="bg-gray-500 fixed bottom-0 w-10/12 bg-opacity-90 rounded-md mb-1">
      <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 xl:grid-cols-9 2xl:grid-cols-9 py-4 px-4 gap-0">
        {selectedAlbums.map((album, index) => (
          <div
            className="relative inline-block group justify-center items-center h-28 w-28"
            key={album.id}
          >
            <Image
              key={album.id}
              className="hover:opacity-80 hover:duration-300 rounded-sm"
              src={album.images?.[0].url || ''}
              alt={album.name}
              width={100}
              height={100}
              layout={'responsive'}
            />
            <span
              className="absolute opacity-0 inline-flex items-center justify-center group-hover:opacity-90 top-0 right-0 px-2 py-1 text-xs leading-none text-red-100 bg-red-600 rounded-full cursor-pointer"
              onClick={() => handleRemove(index)}
            >
              ×
            </span>
          </div>
        ))}
      </div>
      {selectedAlbums.length === 9 ? (
        <div className="text-right pr-4 pb-2">
          <Modal selectedAlbums={selectedAlbums}></Modal>
        </div>
      ) : null}
    </div>
  )
}
