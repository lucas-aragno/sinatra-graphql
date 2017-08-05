source "https://rubygems.org"
ruby "2.3.3"

gem "sinatra", "~> 2.0.0"
gem "sinatra-sequel"
gem "minitest"
gem "unicorn", "~> 4.8.2"
gem "graphql", "~> 1.6.6"
gem "trailblazer"
gem "reform"
gem "dry-validation"
gem "dotenv"

group :development, :test do
  gem "sqlite3"
  gem "rake"
  gem "sinatra-reloader"
end

group :production do
  gem "pg"
end
