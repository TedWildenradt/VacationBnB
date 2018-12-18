
export const fetchBookings = (data) => (

  $.ajax({
    method: "GET",
    url: `api/bookings`,
    data
  })
)

export const fetchBooking = (id) => (

  $.ajax({
    method: "GET",
    url: `api/bookings/${id}`,
  })
)

export const createBooking = (booking) => (

  $.ajax({
    method: "POST",
    url: `api/bookings`,
    data: {booking}
  })
)

export const updateBooking = (booking) => (

  $.ajax({
    method: "PATCH",
    url: `api/bookings/${booking.id}`,
    data: {booking}
  })
)

export const deleteBooking = (id) => (

  $.ajax({
    method: "DELETE",
    url: `api/bookings/${id}`,
  })
)



