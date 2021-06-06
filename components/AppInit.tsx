import { useGetAccesToken } from '../hooks/useGetAccessToken'

// アプリマウント時にアクセストークンを取得
export const AppInit = (): null => {
  useGetAccesToken()
  return null
}
