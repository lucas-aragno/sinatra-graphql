require_relative "../../test_helper.rb"
require_relative "../../../concepts/todo/operation/create"
require_relative "../../../concepts/todo/operation/update"

class TestUpdateTodo < MiniTest::Unit::TestCase
  def setup
    @todo = Todo::Create.({title: 'test for update!'})["model"]
  end

  def test_update_todo
    result = Todo::Update.({id: @todo.id, title: "updated", content: "some desc"})
    assert result["model"].title, "updated"
    assert result["model"].content, "some desc"
  end

  def teardown
    Todo.all.each { |todo| todo.destroy }
  end
end
