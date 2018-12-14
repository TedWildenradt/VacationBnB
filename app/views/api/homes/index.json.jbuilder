@homes.each do |home|
  json.set! home.id do
    json.partial! 'home', home: home
    # json.reviewIds []
    # json.photo url_for(home.photo)
  end
end