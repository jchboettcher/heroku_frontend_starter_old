import gql from 'graphql-tag'

export const ALL_USERS = gql`
  query allUsers {
    allUsers {
      id
      displayName
      score
      rank
      createdAt
      updatedAt
    }
  }
`