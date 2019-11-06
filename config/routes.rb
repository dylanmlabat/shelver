Rails.application.routes.draw do
  resources :authors
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :books
    resources :users
  end
end
