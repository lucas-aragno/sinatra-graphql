require_relative "../../concepts/todo/todo"
require_relative "../todo_type"

QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'the query root of this schema'

  field :todos, types[TodoType] do
    resolve -> (obj, args, ctx) {
      Todo.all
    }
  end
end
