class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username, :books

  def books
    object.books.map do |book|
      {
        id: book.id,
        purchase_id: book.purchase_ids,
        api_id: book.api_id,
        title: book.title,
        authors: book.authors,
        cover: book.cover,
        publisher: book.publisher,
        publish_date: book.publish_date,
        page_count: book.page_count,
        summary: book.summary
      }
    end
  end
end
