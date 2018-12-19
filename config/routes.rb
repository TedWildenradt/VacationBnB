Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :homes, only: [:index, :show, :create] do
      resources :bookings, only: [:create]
    end 
    resources :bookings, only: [:index, :update, :edit, :destroy, :show]
  end
  
  root to: 'static_pages#root'
end
