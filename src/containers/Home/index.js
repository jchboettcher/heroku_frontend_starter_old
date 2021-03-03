import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ALL_USERS } from './graphql'

const Home = () => {
  const { data, error: queryError, loading: queryLoading } = useQuery(ALL_USERS)
  if (queryError) {
    // eslint-disable-next-line no-console
    console.warn(queryError)
    throw new Error('query users failed')
  }
  return (
    <div>
      <h1>Users</h1>
      {queryLoading ? 'Loading...' : (
        data.allUsers.length
          ? (data.allUsers.map(entry => (
            entry ? (
              <p key={entry.id}>{`${entry.displayName}: ${entry.score}`}</p>
            ) : ''
          )))
          : <p>No users to show.</p>)}
    </div>
  )
}

export default Home
