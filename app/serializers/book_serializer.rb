class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :cover, :isbn, :page_count

  def author
    {
      firstname: object.author.firstname,
      lastname: object.author.lastname
    }
  end
end
