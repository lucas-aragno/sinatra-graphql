require_relative "../types/todo_type"

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

  CreateTodo = GraphQL::Relay::Mutation.define do
    name 'CreateTodo'
    description 'Creates a Todo'
    input_field :title, !types.String
    input_field :content, types.String

    return_field :todo, TodoType
    resolve -> (args, ctx) {
      puts "===== #{args}"
    }
  end
end
