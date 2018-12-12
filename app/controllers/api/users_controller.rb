class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else 
      # flash[:errors] = @user.errors.full_messages
      render json: ['Invalid parameters'], status: 404
    end 
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end
end
