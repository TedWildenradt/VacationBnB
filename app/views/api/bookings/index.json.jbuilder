@bookings.each do |booking|
  json.set! booking.id do
    json.partial! 'booking', booking: booking
    # json.reviewIds []
    # json.photo url_for(home.photo)
  end
end