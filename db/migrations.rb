migration "create todo table" do
  database.create_table :todos do
    primary_key :id
    string :title
    string :content
  end
end
