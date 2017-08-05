import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

import App from './components/App'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: process.env.GRAPHQL_URL
  })
})

document.addEventListener('DOMContentLoaded', () => (
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  )
))
