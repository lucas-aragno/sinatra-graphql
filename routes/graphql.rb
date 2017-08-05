require "json"
require_relative "../graph/application_schema"

module TodoApp
  module Routes
    class Graphql < Sinatra::Application
      post "/graphql" do
        params = JSON.parse(request.body.read)
        query_string = params["query"]
        query_variables = ensure_hash(params["variables"])
        result = ApplicationSchema.execute(
          query_string,
          variables: query_variables,
          context: {}
        )
        result.to_json
      end

      private

      def ensure_hash(query_variables)
        if query_variables.nil? || query_variables.empty? || query_variables == "null"
          {}
        elsif query_variables.is_a?(String)
          JSON.parse(query_variables)
        else
          query_variables
        end
      end
    end
  end
end
