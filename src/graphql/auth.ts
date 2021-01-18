import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation signIn($LoginInput: LoginInput) {
    signIn(input: $LoginInput) {
      accessToken
      refreshToken
      user {
        id
      }
    }
  }
`
