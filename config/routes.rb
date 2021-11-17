Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "subs#index"  ##this redirects the home to the subs index
  root "static#home"
  resources :subs
end
