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


  # San Francisco Homes
  home1 = Home.create(owner_id: user1.id, num_guests: 2, price: 180, city: 'San Francisco', state: 'CA', zip: 94104, country: "US", home_type: "Apartment", bed_count: 2, bathrooms: 2, bedrooms: 2, title: 'Beautiful Apartment', description: "The apartment is located on the top floor of a high end building and besides offering breathtaking views, the place is classy, modern and cozy. The materials, colors and details create an elegant and stylish environment, certainly a great place to live.")
  home2 = Home.create(owner_id: user2.id, num_guests: 5, price: 320, city: 'San Francisco', state: 'CA', zip: 94117, country: "US", home_type: "House", bed_count: 5, bathrooms: 3, bedrooms: 5, title: "Trendy Neighborhood Flat", description: "Located in a well-maintained boutique building within walking distance to endless local amenities. One of the most popular neighborhoods in the country. The modern interior features a well-proportioned floor-plan with wood flooring throughout the living and bedrooms, ample natural light, granite counters, a gas stove and stainless steel appliances. You're just steps to cafes, minutes to downtown!")
  home3 = Home.create(owner_id: user2.id, num_guests: 3, price: 250, city: 'San Francisco', state: 'CA', zip: 94113, country: "US", home_type: "House", bed_count: 3, bathrooms: 2, bedrooms: 3, title: "Cozy Home in Quiet Neighborhood", description: "Our home's main floor includes a grand entry stair hall, formal living room w/ fireplace, large formal dining room, an updated kitchen & breakfast room. All 3 bedrooms on 2nd floor")
  home4 = Home.create(owner_id: user2.id, num_guests: 3, price: 190, city: 'San Francisco', state: 'CA', zip: 94116, country: "US", home_type: "House", bed_count: 3, bathrooms: 1, bedrooms: 3, title: "Perfect Location", description: "Do you wish to stay in a comfy private room at the center of San Francisco? I would love to welcome you in my lovely home! If you want to experience San Francisco as a real local, then this is the accommodation you need. In a very lively and accessible neighborhood, in a everchanging street rich of restaurants, art galleries and small shops, you will discover the San Francisco where I live and which I love for now 20 years")
  home5 = Home.create(owner_id: user2.id, num_guests: 3, price: 320, city: 'San Francisco', state: 'CA', zip: 94117, country: "US", home_type: "House", bed_count: 3, bathrooms: 1, bedrooms: 3, title: "Convenient Three Bedroom", description: "The guest apartment has its own entrance located on the ground level of our home. The private apartment is 720 sq ft and has 8 ft ceilings. The living room and kitchen are new as of 2013 and the bath and the two bedrooms are remodeled.")

  #San Francisco Home photos
  home1.photos.attach(io: File.open('app/assets/images/first_home_picture.jpg'), filename: 'first_home_picture.jpg')
  home1.photos.attach(io: File.open('app/assets/images/home1_2.jpg'), filename: 'home1_2.jpg')
  home1.photos.attach(io: File.open('app/assets/images/home1_3.jpg'), filename: 'home1_3.jpg')
  home1.photos.attach(io: File.open('app/assets/images/home1_4.jpg'), filename: 'home1_4.jpg')
  home1.photos.attach(io: File.open('app/assets/images/home1_5.jpg'), filename: 'home1_5.jpg')

  home2.photos.attach(io: File.open('app/assets/images/home2.jpg'), filename: 'home2.jpg')
  home2.photos.attach(io: File.open('app/assets/images/home2_2.jpg'), filename: 'home2_2.jpg')
  home2.photos.attach(io: File.open('app/assets/images/home2_3.jpg'), filename: 'home2_3.jpg')
  home2.photos.attach(io: File.open('app/assets/images/home2_4.jpg'), filename: 'home2_4.jpg')
  home2.photos.attach(io: File.open('app/assets/images/home2_5.jpg'), filename: 'home2_5.jpg')

  home3.photos.attach(io: File.open('app/assets/images/home3.jpg'), filename: 'home3.jpg')
  home3.photos.attach(io: File.open('app/assets/images/home3_2.jpg'), filename: 'home3_2.jpg')
  home3.photos.attach(io: File.open('app/assets/images/home3_3.jpg'), filename: 'home3_3.jpg')
  home3.photos.attach(io: File.open('app/assets/images/home3_4.jpg'), filename: 'home3_4.jpg')
  home3.photos.attach(io: File.open('app/assets/images/home3_5.jpg'), filename: 'home3_5.jpg')
  
  home4.photos.attach(io: File.open('app/assets/images/home4.jpg'), filename: 'home4.jpg')
  home4.photos.attach(io: File.open('app/assets/images/home4_2.jpg'), filename: 'home4_2.jpg')
  home4.photos.attach(io: File.open('app/assets/images/home4_3.jpg'), filename: 'home4_3.jpg')
  home4.photos.attach(io: File.open('app/assets/images/home4_4.jpg'), filename: 'home4_4.jpg')
  home4.photos.attach(io: File.open('app/assets/images/home4_5.jpg'), filename: 'home4_5.jpg')

  home5.photos.attach(io: File.open('app/assets/images/home5.jpg'), filename: 'home5.jpg')
  home5.photos.attach(io: File.open('app/assets/images/home5_2.jpg'), filename: 'home5_2.jpg')
  home5.photos.attach(io: File.open('app/assets/images/home5_3.jpg'), filename: 'home5_3.jpg')
  home5.photos.attach(io: File.open('app/assets/images/home5_4.jpg'), filename: 'home5_4.jpg')
  home5.photos.attach(io: File.open('app/assets/images/home5_5.jpg'), filename: 'home5_5.jpg')


  # Los Angeles Homes
  home6 = Home.create(owner_id: user3.id, num_guests: 3, price: 135, city: 'Los Angeles', state: 'CA', zip: 91344, country: "US", home_type: "Entire Guesthouse", bed_count: 1, bathrooms: 2, bedrooms: 2, title: 'Private Pool House with Amazing Views!', description: "Spacious, private pool house. Centrally located in LA, close to Downtown LA, Hollywood and our neighboring cities of Glendale and Pasadena. Private compound with breathtaking views and access to pool and spa with free gated parking!")
  home7 = Home.create(owner_id: user3.id, num_guests: 4, price: 225, city: 'Los Angeles', state: 'CA', zip: 90049, country: "US", home_type: "Entire Guest Suite", bed_count: 1, bathrooms: 1, bedrooms: 1, title: 'Ocean View Hideaway', description: "A delightful experience often compared with the French Riviera, incredible ocean views. Conveniently located only 23 miles from Los Angeles International Airport (LAX), 15 minutes from Santa Monica, seconds from gorgeous beaches and mountain hikes.")
  home8 = Home.create(owner_id: user3.id, num_guests: 3, price: 145, city: 'Los Angeles', state: 'CA', zip: 90291, country: "US", home_type: "Entire Guesthouse", bed_count: 1, bathrooms: 1, bedrooms: 1, title: 'Bike Around Town from the Sweetest Cottage', description: "Have a backyard barbecue and eat at a shaded picnic table after exploring on bikes. Retreat indoors to a unique corner of paradise, decorated in eclectic beach chic. It’s a bright and airy cottage—a classic Craftsman with a modern twist.")
  home9 = Home.create(owner_id: user3.id, num_guests: 2, price: 115, city: 'Los Angeles', state: 'CA', zip: 90081, country: "US", home_type: "Entire Loft", bed_count: 1, bathrooms: 1, bedrooms: 1, title: 'Terrific Location', description: "In the heart of downtown you are surrounded on all sides by five star restaurants, clubs, art galleries, and fashion stores. And with the wave of pop-up shops, you'll never know what to expect from one day to the next! For those of you who want to grab a snack, there are convenience stores across the street and you are just blocks away from the Metro Subway station.")
  home10 = Home.create(owner_id: user3.id, num_guests: 2, price: 125, city: 'Los Angeles', state: 'CA', zip: 90046, country: "US", home_type: "Camper/RV", bed_count: 2, bathrooms: 1, bedrooms: 1, title: 'Top of the Hill Acres', description: "Rugged, beautiful landscape with picturesque mountain views and wide open cloudless blue skies. The morning crisp light to the sunset glow. The perfect spot for any photo shoot. Beauty. Simplicity. Nature.")

  # Los Angeles Homes Photos
  home6.photos.attach(io: File.open('app/assets/images/home6.jpg'), filename: 'home6.jpg')
  home6.photos.attach(io: File.open('app/assets/images/home6_2.jpg'), filename: 'home6_2.jpg')
  home6.photos.attach(io: File.open('app/assets/images/home6_3.jpg'), filename: 'home6_3.jpg')
  home6.photos.attach(io: File.open('app/assets/images/home6_4.jpg'), filename: 'home6_4.jpg')
  home6.photos.attach(io: File.open('app/assets/images/home6_5.jpg'), filename: 'home6_5.jpg')

  home7.photos.attach(io: File.open('app/assets/images/home7.jpg'), filename: 'home7.jpg')
  home7.photos.attach(io: File.open('app/assets/images/home7_2.jpg'), filename: 'home7_2.jpg')
  home7.photos.attach(io: File.open('app/assets/images/home7_3.jpg'), filename: 'home7_3.jpg')
  home7.photos.attach(io: File.open('app/assets/images/home7_4.jpg'), filename: 'home7_4.jpg')
  home7.photos.attach(io: File.open('app/assets/images/home7_5.jpg'), filename: 'home7_5.jpg')

  home8.photos.attach(io: File.open('app/assets/images/home8.jpg'), filename: 'home8.jpg')
  home8.photos.attach(io: File.open('app/assets/images/home8_2.jpg'), filename: 'home8_2.jpg')
  home8.photos.attach(io: File.open('app/assets/images/home8_3.jpg'), filename: 'home8_3.jpg')
  home8.photos.attach(io: File.open('app/assets/images/home8_4.jpg'), filename: 'home8_4.jpg')
  home8.photos.attach(io: File.open('app/assets/images/home8_5.jpg'), filename: 'home8_5.jpg')

  home9.photos.attach(io: File.open('app/assets/images/home9.jpg'), filename: 'home9.jpg')
  home9.photos.attach(io: File.open('app/assets/images/home9_2.jpg'), filename: 'home9_2.jpg')
  home9.photos.attach(io: File.open('app/assets/images/home9_3.jpg'), filename: 'home9_3.jpg')
  home9.photos.attach(io: File.open('app/assets/images/home9_4.jpg'), filename: 'home9_4.jpg')
  home9.photos.attach(io: File.open('app/assets/images/home9_5.jpg'), filename: 'home9_5.jpg')

  home10.photos.attach(io: File.open('app/assets/images/home10.jpg'), filename: 'home10.jpg')
  home10.photos.attach(io: File.open('app/assets/images/home10_2.jpg'), filename: 'home10_2.jpg')
  home10.photos.attach(io: File.open('app/assets/images/home10_3.jpg'), filename: 'home10_3.jpg')
  home10.photos.attach(io: File.open('app/assets/images/home10_4.jpg'), filename: 'home10_4.jpg')
  home10.photos.attach(io: File.open('app/assets/images/home10_5.jpg'), filename: 'home10_5.jpg')


  # New York Homes
  home11 = Home.create(owner_id: user4.id, num_guests: 5, price: 180, city: 'New York', state: 'NY', zip: 10004, country: "US", home_type: "Private Room in Loft", bed_count: 3, bathrooms: 2, bedrooms: 1, title: 'Manhattan Luxury', description: "Downtown, the best bit of Manhattan. One of, if not the, LARGEST space on available in NYC. Your Own PRIVATE Bathroom & PRIVATE Bedroom, a Terrace off the bedroom, near to subways/buses, restaurants, bars, real luxury right in the middle of things.")
  home12 = Home.create(owner_id: user4.id, num_guests: 1, price: 90, city: 'New York', state: 'NY', zip: 10019, country: "US", home_type: "Private Room in Apartment", bed_count: 1, bathrooms: 1, bedrooms: 1, title: 'City Experience', description: "Cozy, warm atmosphere, perfect for the traveler looking for a real NY experience.This reservation is for one person. If you want to book for 2 guests it is an extra $100 per night. Best neighborhood in midtown Manhattan for the best price. In the hub of Hell's Kitchen nightlife, restaurants, theaters, museums.")
  home13 = Home.create(owner_id: user4.id, num_guests: 2, price: 75, city: 'New York', state: 'NY', zip: 10003, country: "US", home_type: "Private Room in Apartment", bed_count: 1, bathrooms: 1, bedrooms: 1, title: 'Sunny and Modern', description: "This clean and very comfortable room in the East Village has spectacular views of downtown Manhattan and is a block away from Tompkins Square Park. Am always excited to share the space with guests! Thanks for taking a look.")
  home14 = Home.create(owner_id: user4.id, num_guests: 10, price: 400, city: 'New York', state: 'NY', zip: 10013, country: "US", home_type: "Entire Loft", bed_count: 3, bathrooms: 2, bedrooms: 3, title: 'Tribeca Loft', description: "2500 square feet TriBeCa loft with 13-feet exposed beam ceilings, hardwood floors and over-sized windows. Three bedrooms, two bathrooms, large kitchen, washer/dryer, art, and modern furnishings.")
  home15 = Home.create(owner_id: user4.id, num_guests: 4, price: 90, city: 'New York', state: 'NY', zip: 10012, country: "US", home_type: "Private Room in Apartment", bed_count: 2, bathrooms: 1, bedrooms: 1, title: 'Soho Loft with Massive Couch', description: "2500 square feet TriBeCa loft with 13-feet exposed beam ceilings, hardwood floors and over-sized windows. Three bedrooms, two bathrooms, large kitchen, washer/dryer, art, and modern furnishings.")


  # New York Home Photos
  home11.photos.attach(io: File.open('app/assets/images/home11.jpg'), filename: 'home11.jpg')
  home11.photos.attach(io: File.open('app/assets/images/home11_2.jpg'), filename: 'home11_2.jpg')
  home11.photos.attach(io: File.open('app/assets/images/home11_3.jpg'), filename: 'home11_3.jpg')
  home11.photos.attach(io: File.open('app/assets/images/home11_4.jpg'), filename: 'home11_4.jpg')
  home11.photos.attach(io: File.open('app/assets/images/home11_5.jpg'), filename: 'home11_5.jpg')

  home12.photos.attach(io: File.open('app/assets/images/home12.jpg'), filename: 'home12.jpg')
  home12.photos.attach(io: File.open('app/assets/images/home12_2.jpg'), filename: 'home12_2.jpg')
  home12.photos.attach(io: File.open('app/assets/images/home12_3.jpg'), filename: 'home12_3.jpg')
  home12.photos.attach(io: File.open('app/assets/images/home12_4.jpg'), filename: 'home12_4.jpg')
  home12.photos.attach(io: File.open('app/assets/images/home12_5.jpg'), filename: 'home12_5.jpg')

  home13.photos.attach(io: File.open('app/assets/images/home13.jpg'), filename: 'home13.jpg')
  home13.photos.attach(io: File.open('app/assets/images/home13_2.jpg'), filename: 'home13_2.jpg')
  home13.photos.attach(io: File.open('app/assets/images/home13_3.jpg'), filename: 'home13_3.jpg')
  home13.photos.attach(io: File.open('app/assets/images/home13_4.jpg'), filename: 'home13_4.jpg')
  home13.photos.attach(io: File.open('app/assets/images/home13_5.jpg'), filename: 'home13_5.jpg')

  home14.photos.attach(io: File.open('app/assets/images/home14.jpg'), filename: 'home14.jpg')
  home14.photos.attach(io: File.open('app/assets/images/home14_2.jpg'), filename: 'home14_2.jpg')
  home14.photos.attach(io: File.open('app/assets/images/home14_3.jpg'), filename: 'home14_3.jpg')
  home14.photos.attach(io: File.open('app/assets/images/home14_4.jpg'), filename: 'home14_4.jpg')
  home14.photos.attach(io: File.open('app/assets/images/home14_5.jpg'), filename: 'home14_5.jpg')

  home15.photos.attach(io: File.open('app/assets/images/home15.jpg'), filename: 'home15.jpg')
  home15.photos.attach(io: File.open('app/assets/images/home15_2.jpg'), filename: 'home15_2.jpg')
  home15.photos.attach(io: File.open('app/assets/images/home15_3.jpg'), filename: 'home15_3.jpg')
  home15.photos.attach(io: File.open('app/assets/images/home15_4.jpg'), filename: 'home15_4.jpg')
  home15.photos.attach(io: File.open('app/assets/images/home15_5.jpg'), filename: 'home15_5.jpg')

end 

