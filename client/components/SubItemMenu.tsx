import { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { removeSub } from '../actions/subscriptions'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  id: number
}

function SubItemMenu(props: Props) {
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  async function handleDeleteClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    await getAccessTokenSilently().then((token) => {
      event.preventDefault()
      const id = (event.target as HTMLButtonElement).id
      dispatch(removeSub(id, token))
    })
  }

  async function handleEditClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    await getAccessTokenSilently().then((token) => {
      event.preventDefault()
      const id = (event.target as HTMLButtonElement).id

      navigate(`/editsubscription/${id}`)
    })
  }

  return (
    <div className="relative">
      <button
        className="bottom-0.15 absolute right-0 top-[-20px] mt-auto h-min self-end pt-0 text-2xl font-bold text-subminder-indigo hover:text-subminder-purple"
        onClick={toggleMenu}
      >
        ...
      </button>
      {isOpen && (
        <ul className="text-blue-gray-500 pt absolute right-0 border-black bg-white p-3 font-sans text-sm font-normal shadow-lg focus:outline-none">
          <li
            key={props.id + '-edit'}
            id={String(props.id) + '-edit'}
            className="hover:bg-blue-gray-50 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900 block w-full cursor-pointer select-none rounded-md px-3 py-2 text-end leading-tight transition-all hover:bg-opacity-80 hover:font-bold hover:text-subminder-purple focus:bg-opacity-80 active:bg-opacity-80"
          >
            <button id={String(props.id)} onClick={handleEditClick}>
              edit
            </button>
          </li>

          <li
            key={props.id + '-delete'}
            id={String(props.id) + '-delete'}
            className="hover:bg-blue-gray-50 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900 block w-full cursor-pointer select-none rounded-md px-3 py-2 text-end leading-tight transition-all hover:bg-opacity-80 hover:font-bold hover:text-subminder-purple focus:bg-opacity-80 active:bg-opacity-80"
          >
            <button id={String(props.id)} onClick={handleDeleteClick}>
              delete
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default SubItemMenu
