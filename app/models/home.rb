class Home < ApplicationRecord
  validates :owner_id, :num_guests, :price, :city, presence: true
  validates :state, :zip, :country, :home_type, presence: true
  validates :bed_count, :bathrooms, :bedrooms, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many_attached :photos
end
