class Api::HomesController < ApplicationController
  def index
    @homes = Home.all
  end

  def show
    @home = Home.find(params[:id])
  end

  def create
    @home = Home.new(home_params)
    if @home.save
      render "api/homes/show"
    else
      render json: @home.errors.full_messages, status: 404
    end 
  end

  private
  def home_params
    params.require(:home).permit(
      :num_guests,
      :price,
      :city,
      :state,
      :zip,
      :country,
      :type,
      :bed_count,
      :bathrooms,
      :bedrooms
      )
  end
end
