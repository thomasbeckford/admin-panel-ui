import { createContext } from 'react'

type AuthContextProps = {
  login: (user: any, tokens: any) => void
  logout: () => void
}

type UserContextProps = {
  id: string
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)
export const UserContext = createContext<UserContextProps | undefined>(undefined)
