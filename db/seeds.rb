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

  home1 = Home.create(owner_id: user1.id, num_guests: 2, price: 180, city: 'San Francisco', state: 'CA', zip: 94104, country: "US", home_type: "Apartment", bed_count: 2, bathrooms: 2, bedrooms: 2, title: 'Beautiful Apartment', description: "The apartment is located on the top floor of a high end building and besides offering breathtaking views, the place is classy, modern and cozy. The materials, colors and details create an elegant and stylish environment, certainly a great place to live.")
  home2 = Home.create(owner_id: user2.id, num_guests: 5, price: 320, city: 'San Francisco', state: 'CA', zip: 94117, country: "US", home_type: "House", bed_count: 5, bathrooms: 3, bedrooms: 5, title: "Trendy Neighborhood Flat", description: "Located in a well-maintained boutique building within walking distance to endless local amenities. One of the most popular neighborhoods in the country. The modern interior features a well-proportioned floor-plan with wood flooring throughout the living and bedrooms, ample natural light, granite counters, a gas stove and stainless steel appliances. You're just steps to cafes, minutes to downtown!")
  home3 = Home.create(owner_id: user2.id, num_guests: 3, price: 250, city: 'San Francisco', state: 'CA', zip: 94113, country: "US", home_type: "House", bed_count: 3, bathrooms: 2, bedrooms: 3, title: "Cozy Home in Quiet Neighborhood", description: "Our home's main floor includes a grand entry stair hall, formal living room w/ fireplace, large formal dining room, an updated kitchen & breakfast room. All 3 bedrooms on 2nd floor")
  home4 = Home.create(owner_id: user2.id, num_guests: 3, price: 190, city: 'San Francisco', state: 'CA', zip: 94116, country: "US", home_type: "House", bed_count: 3, bathrooms: 1, bedrooms: 3, title: "Perfect Location", description: "Do you wish to stay in a comfy private room at the center of San Francisco? I would love to welcome you in my lovely home! If you want to experience San Francisco as a real local, then this is the accommodation you need. In a very lively and accessible neighborhood, in a everchanging street rich of restaurants, art galleries and small shops, you will discover the San Francisco where I live and which I love for now 20 years")
  home5 = Home.create(owner_id: user2.id, num_guests: 3, price: 320, city: 'San Francisco', state: 'CA', zip: 94117, country: "US", home_type: "House", bed_count: 3, bathrooms: 1, bedrooms: 3, title: "Convenient Three Bedroom", description: "The guest apartment has its own entrance located on the ground level of our home. The private apartment is 720 sq ft and has 8 ft ceilings. The living room and kitchen are new as of 2013 and the bath and the two bedrooms are remodeled.")

  home1.photo.attach(io: File.open('app/assets/images/first_home_picture.jpg'), filename: 'first_home_picture.jpg')
  home1.photo.attach(io: File.open('app/assets/images/home1_2.jpg'), filename: 'home1_2.jpg')
  home1.photo.attach(io: File.open('app/assets/images/home1_3.jpg'), filename: 'home1_3.jpg')
  home1.photo.attach(io: File.open('app/assets/images/home1_4.jpg'), filename: 'home1_4.jpg')
  home1.photo.attach(io: File.open('app/assets/images/home1_5.jpg'), filename: 'home1_5.jpg')

  home2.photo.attach(io: File.open('app/assets/images/home2.jpg'), filename: 'home2.jpg')
  home2.photo.attach(io: File.open('app/assets/images/home2_2.jpg'), filename: 'home2_2.jpg')
  home2.photo.attach(io: File.open('app/assets/images/home2_3.jpg'), filename: 'home2_3.jpg')
  home2.photo.attach(io: File.open('app/assets/images/home2_4.jpg'), filename: 'home2_4.jpg')
  home2.photo.attach(io: File.open('app/assets/images/home2_5.jpg'), filename: 'home2_5.jpg')

  home3.photo.attach(io: File.open('app/assets/images/home3.jpg'), filename: 'home3.jpg')
  home3.photo.attach(io: File.open('app/assets/images/home3_2.jpg'), filename: 'home3_2.jpg')
  home3.photo.attach(io: File.open('app/assets/images/home3_3.jpg'), filename: 'home3_3.jpg')
  home3.photo.attach(io: File.open('app/assets/images/home3_4.jpg'), filename: 'home3_4.jpg')
  home3.photo.attach(io: File.open('app/assets/images/home3_5.jpg'), filename: 'home3_5.jpg')
  
  home4.photo.attach(io: File.open('app/assets/images/home4.jpg'), filename: 'home4.jpg')
  home4.photo.attach(io: File.open('app/assets/images/home4_2.jpg'), filename: 'home4_2.jpg')
  home4.photo.attach(io: File.open('app/assets/images/home4_3.jpg'), filename: 'home4_3.jpg')
  home4.photo.attach(io: File.open('app/assets/images/home4_4.jpg'), filename: 'home4_4.jpg')
  home4.photo.attach(io: File.open('app/assets/images/home4_5.jpg'), filename: 'home4_5.jpg')

  home5.photo.attach(io: File.open('app/assets/images/home5.jpg'), filename: 'home5.jpg')
  home5.photo.attach(io: File.open('app/assets/images/home5_2.jpg'), filename: 'home5_2.jpg')
  home5.photo.attach(io: File.open('app/assets/images/home5_3.jpg'), filename: 'home5_3.jpg')
  home5.photo.attach(io: File.open('app/assets/images/home5_4.jpg'), filename: 'home5_4.jpg')
  home5.photo.attach(io: File.open('app/assets/images/home5_5.jpg'), filename: 'home5_5.jpg')
end 

