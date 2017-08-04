import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

import App from './components/App'

import './stylesheets/base.css'
console.warn(process.env.GRAPHQL_URL)

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: process.env.GRAPHQL_URL
  })
})

//const client = null
console.warn(document.getElementById('root'))

document.addEventListener('DOMContentLoaded', () => (
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  )
))
