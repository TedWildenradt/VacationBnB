# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all

  User.create(email: 'demo@email.com', password: 'password', fname: 'Demo', lname: 'Login')
  User.create(email: 'ron@email.com', password: 'password', fname: 'Ron', lname: 'Burgandy')
  User.create(email: 'ricky@email.com', password: 'password', fname: 'Ricky', lname: 'Bobby')
  User.create(email: 'michael@email.com', password: 'password', fname: 'Michael', lname: 'Scott')
  User.create(email: 'rick@email.com', password: 'password', fname: 'Rick', lname: 'Sanchez')
end 