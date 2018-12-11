class Api::SessionController < ApplicationController
  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if user
      login(user)
      redirect_to :root
    else  
      flash[:errors] = user.errors.full_messages
      render json: ["Invalid Credentials"], status: 412
    end 
  end

  def destroy
    if @user = current_user
      logout
      render json: {}
    else  
      render json: ["nobody logged in"], status: 404
    end 

  end
end
