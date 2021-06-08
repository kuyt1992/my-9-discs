import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { accessTokenState } from '../store/accessTokenState'

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

export const useGetAccesToken = (): { accessToken: string } => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

  useEffect(() => {
    axios(TOKEN_ENDPOINT, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    })
      .then((res) => {
        setAccessToken(res.data.access_token)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return { accessToken }
}
