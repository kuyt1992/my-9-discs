import { VFC } from 'react'

const SelectAlbums: VFC = () => {
  return (
    <div className="relative text-gray-600">
      <input
        type="search"
        name="serch"
        placeholder="アーティスト名/アルバム名で検索"
        className="bg-white h-10 w-96 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 items-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  )
}

export default SelectAlbums
