class API::V1::SessionsController < ApplicationController

  def find
    if logged_in?
      render json: current_user
    else
      render json: {
        error: "No one logged in."
      }
    end
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {
        error: "Invalid credentials."
      }
    end
  end

  def destroy
    session.clear
    render json: {
      alert: "Successfully logged out."
    }
  end

end
