class API::V1::BooksController < ApplicationController

  def index
    @books = Book.all
    render json: @books
  end

  def show
    @book = Book.find(params[:id])
    render json: @book
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book
    else
      render json: {
        error: @book.errors.full_messages.to_sentence
      }
    end
  end

  private

    def book_params
      params.require(:book).permit(:api_id, :title, :authors, :cover, :publisher, :publish_date, :page_count, :summary)
    end

end
