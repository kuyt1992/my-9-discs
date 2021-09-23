import { VFC } from 'react'
import Link from 'next/link'

export const Header: VFC = () => {
  return (
    <header>
      <nav className="bg-gray-900 w-screen">
        <div className="flex items-center pl-8 h-16">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-gray-100 hover:bg-gray-700 px-3 py-2 rounded text-base">
                My 9 Discs
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
