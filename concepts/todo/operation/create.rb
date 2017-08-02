require "trailblazer"
require "reform"

require_relative "../todo"

class Todo::Create < Trailblazer::Operation
  extend Contract::DSL

  step Model(Todo, :new)
  step Contract::Build()
  step Contract::Validate()
  failure :log_error!
  step Contract::Persist()

  def log_error!(opts)
  end
end
