import { VFC } from 'react'

type Props = {
  size: 'small' | 'medium' | 'large'
  type: 'text' | 'password'
  value: string
  placeholder?: string
  isSearch?: boolean
  onKeyPress?(event: React.KeyboardEvent<HTMLInputElement>): void
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}
export const TextField: VFC<Props> = (props) => {
  const { size, type, value, placeholder, isSearch, onKeyPress, onChange } = props

  return (
    <>
      <input
        type={type}
        value={value}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="bg-white h-10 xl:w-96 w-72 px-5 pr-10 rounded-full text-sm focus:outline-none shadow"
      />
      {isSearch ? (
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 items-center"
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
      ) : null}
    </>
  )
}
