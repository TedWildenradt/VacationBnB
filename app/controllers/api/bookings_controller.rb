class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    # @booking.home_id = params[:id]
    @booking.user_id = current_user.id
    if @booking.save
      render '/api/bookings'
    else 
      render json: @booking.errors.full_messages, status: 418
    end

  end

  def index
    @bookings = Booking.all
  end

  def update
  end

  def edit
  end

  def destroy
    @booking.find(params[:id])
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :home_id)
  end
end
