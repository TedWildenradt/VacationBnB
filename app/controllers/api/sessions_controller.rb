class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      # redirect_to :root
      render 'api/users/show'
    else  
      # flash[:errors] = user.errors.full_messages
      render json: [@user.errors.full_messages], status: 412
    end 
  end

  def destroy
    @user = current_user
    if @user 
      logout
      render json: {}
    else  
      render json: ["nobody logged in"], status: 404
    end 

  end
end
