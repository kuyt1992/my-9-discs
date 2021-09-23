import { VFC } from 'react'
import Layout from '../components/Layout'
import SelectAlbums from '../components/SelectAlbums'

const Home: VFC = () => {
  return (
    <Layout title="My-9-Discs">
      <SelectAlbums />
    </Layout>
  )
}

export default Home
