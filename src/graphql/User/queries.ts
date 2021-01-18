import { gql } from '@apollo/client'

export const ME = gql`
  query me {
    me {
      id
      firstName
      lastName
      active
      email
      role
      username
    }
  }
`
export const GET_USER_LIST = gql`
  query getUsers($role: UserRole!, $state: UserState) {
    getUsers(role: $role, state: $state) {
      id
      firstName
      lastName
      active
      email
      role
      username
      dni
      phone
      gender
      birth
      province
      address
      nSecurity
      salary
    }
  }
`
