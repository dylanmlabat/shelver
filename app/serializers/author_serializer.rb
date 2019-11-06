class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :books

  def books
    object.books.map do |book|
      {
        id: book.id,
        title: book.title,
        cover: book.cover,
        isbn: book.isbn,
        page_count: book.page_count
      }
    end
  end
end
