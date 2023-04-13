import { useAppSelector } from '../hooks'
import SubItem from './SubItem'

function ManageSubscription() {
  const { loading, error, data } = useAppSelector(
    (state) => state.subscriptions
  )

  console.log(data)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <>
      <div style={{ width: '30%' }}>
        <ul>
          {data.map((sub) => {
            return (
              <li className="py-2" key={sub.id}>
                <SubItem subscription={sub} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default ManageSubscription
