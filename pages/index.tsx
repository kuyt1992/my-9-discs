import { VFC } from 'react'
import Layout from '../component/Layout'
import SelectAlbums from '../component/SelectAlbums'

const Home: VFC = () => {
  return (
    <Layout title="Home">
      <SelectAlbums />
    </Layout>
  )
}

export default Home
