require "sinatra/sequel"
require "sqlite3"
require "reform"
require "reform/form/dry"

configure :development do
  set :database, "sqlite://db/dev.sqlite"
end

configure :test do
  set :database, "sqlite3::memory:"
end

require_relative "../db/migrations"

Reform::Form.class_eval do
  include Reform::Form::Dry
end
