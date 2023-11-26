'use client'

export function PhoneContact() {
  return (
    <li className="mt-4 hover:ml-3 transition-all duration-500 relative">
      <button
        onClick={() => navigator.clipboard.writeText('8.mazakina@gmail.com')}
      >
        8.mazakina@gmail.com
      </button>
    </li>
  )
}
