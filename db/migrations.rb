migration "create todo table" do
  database.create_table :todos do
    primary_key :id
    String :title
    String :content
  end
end
