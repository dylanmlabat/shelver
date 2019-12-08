Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :books
      resources :users, only: [:index, :create]
      resources :purchases
      get '/find_user', to: 'sessions#find'
      get '/:username', to: 'users#show', as: :user
      post '/signup', to: 'users#create'
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
    end
  end
end
