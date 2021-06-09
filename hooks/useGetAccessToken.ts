import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { accessTokenState } from '../store/accessTokenState'
import { SpotifyAuthApiResponse } from '../types/api/SpotifyAuthApiResponse'

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

export const useGetAccesToken = (): { accessToken: string } => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')

  useEffect(() => {
    axios
      .post<SpotifyAuthApiResponse>(TOKEN_ENDPOINT, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
        },
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
