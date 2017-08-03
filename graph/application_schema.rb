require_relative "../types/query_type"
require_relative "../types/mutation_type"

ApplicationSchema = GraphQL::Schema.new(
  query: QueryType,
  mutation: MutationType
)
