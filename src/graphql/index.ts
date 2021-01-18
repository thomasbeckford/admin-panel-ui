import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/link-context'

const httpLink = createHttpLink({
  uri: '/graphql',
})

interface ITokens {
  accessToken?: string
  refreshToken?: string
}
const authLink = setContext((_, { headers }) => {
  const tokensStored = localStorage.getItem('tokens')

  const tokens: any = {}

  if (tokensStored) {
    const parsed: ITokens = JSON.parse(tokensStored)

    tokens['x-access-token'] = parsed.accessToken
    tokens['x-refresh-token'] = parsed.refreshToken
  }
  return {
    headers: {
      ...headers,
      ...tokens,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
