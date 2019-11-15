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
    @book = Book.find_or_create_by(api_id: book_params[:api_id])
    @book.update(book_params)
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
      params.require(:book).permit(:api_id, :title, {:authors => []}, :cover, :publisher, :publish_date, :page_count, :summary)
    end

end
