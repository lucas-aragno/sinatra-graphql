require "trailblazer/operation"

class Todo
  class Create < Trailblazer::Operation
    extend ::Contract::DSL

    contract do
      property :title
      validates :title, presence: true
    end

    step Model(Todo, :new)
    step Contract::Build()
    step Contract::Validate()
    failure :log_error!
    step Contract::Persist()

    def log_error!(opts)
    end
  end
end
