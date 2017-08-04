require "sinatra/sequel"
require "sqlite3"
require "pg"
require "reform"
require "reform/form/dry"

configure :development do
  set :database, "postgres://#{ENV['DATABASE_USER']}@#{ENV['DATABASE_HOST']}:#{ENV['DATABASE_PORT']}/#{ENV['DATABASE_NAME']}"
end

configure :test do
  set :database, "sqlite3::memory:"
end

require_relative "../db/migrations"

Reform::Form.class_eval do
  include Reform::Form::Dry
end
