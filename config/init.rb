require "sinatra/sequel"
require "sqlite3"

configure :development do
  set :database, "sqlite://db/dev.sqlite"
end

configure :test do
  set :database, "sqlite3::memory:"
end

require_relative "../db/migrations"
