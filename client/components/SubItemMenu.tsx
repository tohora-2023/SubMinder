import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { removeSub } from '../actions/subscriptions'

interface Props {
  id: number
}

function SubItemMenu(props: Props) {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  function handleDeleteClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault()
    const id = event.currentTarget.id
    console.log(`delete id`, id)
    dispatch(removeSub(id))
  }

  function handleEditClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault()
    const id = event.currentTarget.id

    //TODO Steps for updating the subscription end to end wip

    //You need to navigate the user to an edit page (new component)
    //Pass the id with the fields that the user can edit (that is created in line 30 above)
    //Then submit from the edit component will dispatch a redux thunk update action, that you will need to create.  (which will call the api fe, be and db to update the data)

    //Then in your reducer you need to be set your update state action to filter out the updated record like delete, then add the new record, this will update
    //The redux state and show the information correctly on the page.  If it isn't working right you will see is loading as the state will be different to the database.
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
        <ul className="text-blue-gray-500 pt absolute right-0 border-black bg-white p-3 font-sans text-sm font-normal shadow-lg focus:outline-none">
          {/* <li
            id={props.id}
            className="hover:bg-blue-gray-50 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900 block w-full cursor-pointer select-none rounded-md px-3 py-2 text-end leading-tight transition-all hover:bg-opacity-80 hover:font-bold hover:text-subminder-purple focus:bg-opacity-80 active:bg-opacity-80"
          >
            <button id={props.id} onClick={handleEditClick}>
              edit
            </button>
          </li> */}
          <li
            key={props.id}
            id={props.id}
            className="hover:bg-blue-gray-50 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900 block w-full cursor-pointer select-none rounded-md px-3 py-2 text-end leading-tight transition-all hover:bg-opacity-80 hover:font-bold hover:text-subminder-purple focus:bg-opacity-80 active:bg-opacity-80"
          >
            <button id={props.id} onClick={handleDeleteClick}>
              delete
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default SubItemMenu
