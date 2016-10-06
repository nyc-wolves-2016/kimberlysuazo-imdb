Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'titles#index'

  get 'titles/poster/:name', to: 'titles#poster'
  get 'titles/info/:name', to: 'titles#info'
  get 'titles/search/:name', to: 'titles#search'
  get 'titles/popular', to: 'titles#popular'
end
