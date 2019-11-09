class API::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {
        error: @user.errors.full_messages.to_sentence
      }
    end
  end

  private

    def user_params
      params.require(:user).permit(:firstname, :lastname, :username, :password)
    end

end
