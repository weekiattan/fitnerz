Rails.application.routes.draw do
  resources :logs
  resources :clients
  devise_for :trainers

  get "/clients/:id/log/new", to: "logs#newlog"
  get "/clients/:id/", to: 'clients#showlogs'
  
  root 'clients#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
