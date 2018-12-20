class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    # debugger
    @booking.user_id = current_user.id
    # debugger

    if @booking.save
      render '/api/bookings/show'
    else 
      render json: @booking.errors.full_messages, status: 418
    end

  end

  def index    
    @bookings = Booking.all .where(user_id: current_user.id).includes(:home)
  end

  def update
  end

  def edit
  end

  def destroy
    # debugger
    @booking = current_user.bookings.find(params[:id])
    @booking.destroy
  end

  def show 
    # debugger
    @booking = Booking.find(params[:id])
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :home_id)
  end
end
