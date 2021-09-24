import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { Layout } from '../components/Layout'
import { selectedAlbumsState } from '../store/selectedAlbumsState'

const SelectedAlbums: VFC = () => {
  // TODO: 型anyを修正する
  const selectedAlbums = useRecoilValue(selectedAlbumsState)
  return (
    <Layout title="My-9-Discs">
      <h1>あなたが選択したアルバム</h1>
      {selectedAlbums.map((album) => (
        <div key={album.id}>
          <h3>{album.name}</h3>
          <p>{album.artists[0].name}</p>
        </div>
      ))}
    </Layout>
  )
}

export default SelectedAlbums
