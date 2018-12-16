json.extract! home, :id, :owner_id, :num_guests, :price, :city, :state, :zip, :country, :home_type, :bed_count, :bathrooms, :bedrooms, :title, :description, :lat, :lng
# json.photoUrl url_for(home.photo)
json.photoUrls home.photos.map { |file| url_for(file) }