Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :notes
    resources :labels, only: [:create, :index, :destroy, :update]
    resources :labellings, only: [:create]
    delete 'labellings', :to => 'labellings#destroy'
  end

end
