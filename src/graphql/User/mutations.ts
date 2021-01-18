import { gql } from '@apollo/client'

export const TOGGLE_USER_STATUS = gql`
  mutation toggleUserStatus($id: ID!, $active: Boolean!) {
    toggleUserStatus(id: $id, active: $active) {
      message
      user {
        id
        active
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($input: ProductInput!) {
    createUser(input: $input) {
      user {
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
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UpdateUserInput) {
    updateUser(id: $id, input: $input) {
      message
      object {
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
  }
`
export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`
