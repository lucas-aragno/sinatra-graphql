require_relative "../../test_helper.rb"
require_relative "../../../concepts/todo/operation/create"
require_relative "../../../concepts/todo/operation/delete"

class TestDeleteTodo < MiniTest::Unit::TestCase
  def setup
    @todo = Todo::Create.({title: 'test for delete!'})["model"]
  end

  def test_delete_todo
    result = Todo::Delete.({id: @todo.id})
    assert result.success?
    assert Todo.find(@todo.id), nil
  end

  def teardown
    Todo.all.each { |todo| todo.destroy }
  end
end
