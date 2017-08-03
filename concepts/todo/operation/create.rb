require "trailblazer"
require "reform"

require_relative "../contract/create"
require_relative "../todo"

class Todo::Create < Trailblazer::Operation
  step Model(Todo, :new)
  step Contract::Build(constant: Todo::Contract::Create)
  step Contract::Validate()
  failure :log_error!
  step Contract::Persist()

  def log_error!(options)
    raise "Error creating Todo! #{options["contract.default"].errors.inspect}"
  end
end
