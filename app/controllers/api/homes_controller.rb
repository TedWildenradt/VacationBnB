class Api::HomesController < ApplicationController
  def index
    @homes = params[:bounds] ? Home.in_bounds(params[:bounds]) : Home.all
    render :index
  end

  def show
    @home = Home.with_attached_photos.find(params[:id])
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
      :home_type,
      :bed_count,
      :bathrooms,
      :bedrooms,
      photos: []
      )
  end
end
