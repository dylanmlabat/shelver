class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :cover, :isbn, :page_count
end
