require_relative "../mutations/todo_mutations"

MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  field :UpdateTodo, field:TodoMutations::UpdateTodo.field
  # field :DeleteTodo, field:TodoMutations::DeleteTodo.field
  field :CreateTodo, field:TodoMutations::CreateTodo.field
end
