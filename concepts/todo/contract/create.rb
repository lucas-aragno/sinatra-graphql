require "reform"
require_relative "../todo"

class Todo::Contract
  class Create < Reform::Form
    property :title

    validation do
      required(:title).filled
    end
  end
end
