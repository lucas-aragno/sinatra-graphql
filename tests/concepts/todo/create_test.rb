require_relative "../../test_helper.rb"
require_relative "../../../concepts/todo/operation/create"

class TestCreateTodo < MiniTest::Unit::TestCase
  def test_create_with_title
    result = Todo::Create.({title: "test"})
    assert Todo.last != nil
    assert result.success?
  end

  def test_create_without_title
    result = Todo::Create.({})
    assert result.failure?
  end
end
