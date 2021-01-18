import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './graphql'

import { AuthContext } from './context/Auth'

import { useAuth } from './hooks/useAuth'

import Admin from './pages/Admin'
import SignIn from './pages/SignIn'

import PrivateRoute from './components/PrivateRoute'
import GuestRoute from './components/GuestRoute'

function App(): JSX.Element {
  const { Provider: AuthProvider } = AuthContext

  const { auth, state } = useAuth()

  if (state.loading) return <div>Loading..</div>

  return (
    <ApolloProvider client={client}>
      <AuthProvider value={auth}>
        <Router>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <GuestRoute exact path="/signin" component={SignIn} state={state} />
          <PrivateRoute path="/admin" component={Admin} state={state} />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default App
