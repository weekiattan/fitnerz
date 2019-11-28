json.extract! client, :id, :title, :content, :trainer_id, :created_at, :updated_at
json.url client_url(client, format: :json)
