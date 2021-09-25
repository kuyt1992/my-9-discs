import { VFC } from 'react'
import { TwitterIcon, TwitterShareButton } from 'react-share'

type Props = {
  text?: string
  url: string
  hashtags: string[] | undefined
}

export const ShareButton: VFC<Props> = (props) => {
  const { text, url, hashtags } = props
  return (
    <ul className="flex justify-center list-none">
      <li className="mr-8">
        <TwitterShareButton url={url} title={text} hashtags={hashtags}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </li>
    </ul>
  )
}
