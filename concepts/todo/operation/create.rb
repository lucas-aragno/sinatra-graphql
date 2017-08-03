require "trailblazer"
require "reform"

require_relative "../contract/create"
require_relative "../todo"

class Todo::Create < Trailblazer::Operation
  step Model(Todo, :new)
  step Contract::Build(constant: Todo::Contract::Create)
  step Contract::Validate()
  step Contract::Persist()
end
