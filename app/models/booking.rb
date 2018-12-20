class Booking < ApplicationRecord
  validates :user_id, :home_id, :start_date, :end_date, presence: true

  belongs_to :user
  belongs_to :home


  
end
