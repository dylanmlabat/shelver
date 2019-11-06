class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :books

  def books
    object.books.map do |book|
      {
        id: book.id,
        title: book.title
      }
    end
  end
end
