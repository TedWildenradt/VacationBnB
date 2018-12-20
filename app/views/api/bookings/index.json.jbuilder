@bookings.each do |booking|
  
  json.bookings do 
    json.set! booking.id do
      json.partial! 'booking', booking: booking
    end
  end 

  json.homes do
    json.set! booking.home.id do
      json.partial! 'api/homes/home', home: booking.home
    end 
  end 

end