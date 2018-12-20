class Home < ApplicationRecord
  validates :owner_id, :num_guests, :price, :city, presence: true
  validates :state, :zip, :country, :home_type, presence: true
  validates :bed_count, :bathrooms, :bedrooms, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
  
  has_many :bookings
 
  has_many_attached :photos

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
    .where("lat > ?", bounds[:southWest][:lat])
    .where("lng > ?", bounds[:southWest][:lng])
    .where("lng < ?", bounds[:northEast][:lng])
  end
  
end
