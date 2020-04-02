// import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const AUTH_TOKEN = 'hasura-auth-token'

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRPHQL_HTTP,
  credentials: 'same-origin'
})

const wsLink = new WebSocketLink({
  uri: process.env.VUE_APP_GRPHQL_WS || '',
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: async () => {
      return {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`
        }
      }
    }
  }
})

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`
    }
  })
  return forward(operation)
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  middlewareLink.concat(wsLink),
  middlewareLink.concat(httpLink)
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// ログイン処理
export async function onLogin(token: string) {
  if (localStorage.getItem(AUTH_TOKEN) !== token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  try {
    client.stop()
    await client.resetStore()
  } catch (e) {
    // console.error(`Login Failed. ${e}`)
  }
}

// ログアウト処理
export async function onLogout() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  try {
    client.stop()
    await client.resetStore()
  } catch (e) {
    // console.error(`Logout Failed. ${e}`)
  }
}

export const apolloProvider = new VueApollo({
  defaultClient: client
})
