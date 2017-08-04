require "sinatra/sequel"
DB = Sequel.connect("sqlite://development.db")

class Todo < Sequel::Model
end
