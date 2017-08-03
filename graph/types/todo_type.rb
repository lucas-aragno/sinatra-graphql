TodoType = GraphQL::ObjectType.define do
  name 'Todo'
  description 'The todo model type'
  field :id, types.ID, 'The id of this todo'
  field :title, types.String, 'The name of this string'
  field :content, types.String, 'The content of this Todo'
end
