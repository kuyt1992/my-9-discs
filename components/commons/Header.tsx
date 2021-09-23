import { VFC } from 'react'
import Link from 'next/link'

type Props = { title: string }

export const Header: VFC<Props> = (props) => {
  const { title } = props

  return (
    <header>
      <nav className="bg-gray-900 w-screen">
        <div className="flex items-center pl-8 h-16">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-gray-100 hover:bg-gray-700 px-3 py-2 rounded text-base">{title}</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
