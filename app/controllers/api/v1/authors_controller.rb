class API::V1::AuthorsController < ApplicationController

  def index
    @author = Author.all
    render json: @authors
  end

  def show
    @authors = Author.find(params[:id])
    render json: @authors
  end

end
