require_relative "./types/query_type"
require_relative "./types/mutation_type"

ApplicationSchema = GraphQL::Schema.define(
  query: QueryType,
  mutation: MutationType
)
