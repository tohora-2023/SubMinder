import { useState } from 'react'

function SubItemMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        className="absolute right-0 top-[-25px] mt-auto h-min self-end pt-0 text-2xl font-bold text-subminder-indigo hover:text-subminder-purple"
        onClick={toggleMenu}
      >
        ...
      </button>
      {isOpen && (
        <ul className="text-blue-gray-500 absolute right-0 border-black bg-white p-3 font-sans text-sm font-normal shadow-lg focus:outline-none">
          <li className="hover:bg-blue-gray-50 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900 block w-full cursor-pointer select-none rounded-md px-3 py-2 text-end leading-tight transition-all hover:bg-opacity-80 hover:font-bold hover:text-subminder-purple focus:bg-opacity-80 active:bg-opacity-80">
            edit
          </li>
          <li className="hover:bg-blue-gray-50 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900 block w-full cursor-pointer select-none rounded-md px-3 py-2 text-end leading-tight transition-all hover:bg-opacity-80 hover:font-bold hover:text-subminder-purple focus:bg-opacity-80 active:bg-opacity-80">
            delete
          </li>
        </ul>
      )}
    </div>
  )
}

export default SubItemMenu
