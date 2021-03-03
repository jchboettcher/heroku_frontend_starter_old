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
      <h1>Authors</h1>
      {queryLoading ? 'Loading...' : (
        data.allAuthors.length
          ? (data.allAuthors.map(entry => (
            entry ? (
              <p key={entry.id}>{`${entry.displayName}: ${entry.score}`}</p>
            ) : ''
          )))
          : <p>No authors to show.</p>)}
    </div>
  )
}

export default Home
