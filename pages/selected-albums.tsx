import { VFC } from 'react'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

import { Layout } from '../components/Layout'
import { ShareButton } from '../components/templates/Albums/ShareButton'
import { selectedAlbumsState } from '../store/selectedAlbumsState'

const SelectedAlbums: VFC = () => {
  // TODO: 型anyを修正する
  const selectedAlbums = useRecoilValue(selectedAlbumsState)

  return (
    <Layout title="My-9-Discs">
      <h1 className="mt-6">あなたが選択したアルバム</h1>
      <div className="bg-gray-50 xl:w-2/5 lg:w-1/2 md:w-2/3  sm:w-full xs:w-full shadow-lg rounded-sm p-12 m-6">
        <div className="grid grid-cols-3 gap-0">
          {selectedAlbums.map((album) => (
            <Image
              key={album.id}
              className=""
              src={album.images?.[0].url || ''}
              alt={album.name}
              width={300}
              height={300}
            />
          ))}
        </div>
        <div className="mt-6">
          {selectedAlbums.map((album) => (
            <p className="text-sm" key={album.id}>
              ・{album.name} / {album.artists[0].name} ({album.release_year})
            </p>
          ))}
        </div>
        <div className="mt-4">
          <ShareButton
            hashtags={['私を構成する9枚', 'my9discs']}
            url="http://localhost:3000"
          ></ShareButton>
        </div>
      </div>
    </Layout>
  )
}

export default SelectedAlbums
