# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Home.destroy_all

  user1 = User.create(email: 'demo@email.com', password: 'password', fname: 'Demo', lname: 'Login')
  user2 = User.create(email: 'ron@email.com', password: 'password', fname: 'Ron', lname: 'Burgandy')
  user3 = User.create(email: 'ricky@email.com', password: 'password', fname: 'Ricky', lname: 'Bobby')
  user4 = User.create(email: 'michael@email.com', password: 'password', fname: 'Michael', lname: 'Scott')
  user5 = User.create(email: 'rick@email.com', password: 'password', fname: 'Rick', lname: 'Sanchez')

  home1 = Home.create(owner_id: user1.id, num_guests: 2, price: 180, city: 'San Francisco', state: 'CA', zip: 94104, country: "US", home_type: "Apartment", bed_count: 2, bathrooms: 2, bedrooms: 2)
  home2 = Home.create(owner_id: user2.id, num_guests: 5, price: 320, city: 'San Francisco', state: 'CA', zip: 94117, country: "US", home_type: "House", bed_count: 5, bathrooms: 3, bedrooms: 5)
end 

