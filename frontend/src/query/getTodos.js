import { gql } from 'react-apollo'

export default gql`
  query getTodos {
    todos {
      id
      title
      content
    }
  }
`
