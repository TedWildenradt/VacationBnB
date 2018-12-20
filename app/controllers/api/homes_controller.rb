class Api::HomesController < ApplicationController
  def index
    # debugger
    homes = params[:bounds] ? Home.with_attached_photos.in_bounds(params[:bounds]) : Home.with_attached_photos.all
    if params[:price]
      homes = homes.where(price: price_range)
    end 
    if params[:num_guests]
      homes = homes.where(num_guests: guests_range)
    end
    if params[:query]
      homes = homes.where("city ILIKE ?", "%#{params[:query]}%") 
    end 

    @homes = homes 
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
  def price_range
    (params[:price][0]..params[:price][1])
  end

  def guests_range
    (params[:num_guests][0]..params[:num_guests][1])
  end

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
