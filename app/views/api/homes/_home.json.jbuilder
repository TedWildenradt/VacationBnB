json.extract! home, :id, :owner_id, :num_guests, :price, :city, :state, :zip, :country, :home_type, :bed_count, :bathrooms, :bedrooms
json.photoUrl url_for(home.photo)