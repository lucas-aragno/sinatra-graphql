require "trailblazer"
require "reform"

require_relative "../contract/update"
require_relative "../todo"

class Todo::Update < Trailblazer::Operation
  step Model(Todo, :[])
  step Contract::Build(constant: Todo::Contract::Update)
  step Contract::Validate()
  failure :log_error!
  step Contract::Persist()

  def log_error!(options)
    raise "Error updating Todo! #{options.inspect}"
  end
end
