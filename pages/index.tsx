import { VFC } from 'react'
import Layout from '../components/Layout'
import SelectAlbums from '../components/SelectAlbums'

const Home: VFC = () => {
  return (
    <Layout title="Home">
      <SelectAlbums />
    </Layout>
  )
}

export default Home
