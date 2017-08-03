module TodoMutations
  UpdateTodo = GraphQL::Relay::Mutation.define do
    name 'UpdateTodo'
    description 'Updates a Todo'
    input_field :title, types.String
    input_field :content, types.String

    return_field :todo, TodoType
    resolve -> (args, ctx) {
      
    }
  end
end
