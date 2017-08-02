require_relative "../../test_helper.rb"
require_relative "../../../concepts/todo/todo"

class TestTodo < MiniTest::Unit::TestCase
  def test_save
    @todo = Todo.new(title: "test").save
    @last_todo = Todo.last
    assert_equal @todo.title, @last_todo.title
  end
end
