Rails.application.routes.draw do
  namespace :api, defaults:{format: :json} do
    resources :products, only: [:index, :show, :create, :destroy]
  end
  root "static_pages#root"
end
