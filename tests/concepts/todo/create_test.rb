require_relative "../../test_helper.rb"
require_relative "../../../concepts/todo/operation/create"

class TestCreateTodo < MiniTest::Unit::TestCase
  def test_create_with_title
    result = Todo::Create.({title: 'test for create!'})
    assert Todo.last != nil
    assert result.success?
  end

  def test_create_without_title
    assert_raises do
      Todo::Create.({})
    end
  end

  def teardown
    Todo.all.each { |todo| todo.destroy }
  end
end
