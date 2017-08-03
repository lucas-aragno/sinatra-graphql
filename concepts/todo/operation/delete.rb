require "trailblazer"

require_relative "../todo"

class Todo::Delete < Trailblazer::Operation
  step Model(Todo, :[])
  step :delete!
  failure :log_error!

  def delete!(options)
    @todo = options["model"]
    @todo.delete
  end

  def log_error!(options)
    raise "Error deleting Todo! #{options.inspect}"
  end
end
