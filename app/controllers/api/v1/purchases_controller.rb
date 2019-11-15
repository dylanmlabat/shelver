class API::V1::PurchasesController < ApplicationController

  def create
    @book = Book.find_by(api_id: params[:book][:id])
    @purchase = Purchase.new(user_id: params[:user][:id], book_id: @book.id)
    if @purchase.save
      render json: @purchase
    else
      render json: {
        error: @purchase.errors.full_messages.to_sentence
      }
    end
  end

  def destroy
    @purchase = Purchase.find(params[:id])
    @purchase.destroy
  end

  private

    def purchase_params
      params.require(:purchase).permit(:user_id, :book_id)
    end

end
