import { gql } from 'react-apollo'

export default gql`
  mutation createTodo($title: String!, $content: String) {
    CreateTodo(input: { title: $title, content: $content }) {
      todo {
        id
        title
        content
      }
    }
  }
`
