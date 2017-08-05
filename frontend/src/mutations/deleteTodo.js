import { gql } from 'react-apollo'

export default gql`
  mutation deleteTodo($id: ID!) {
    DeleteTodo(input: { id: $id }) {
      todo {
        id
        title
        content
      }
    }
  }
`
