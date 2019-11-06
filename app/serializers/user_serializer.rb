class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username
  has_many :books, serializer: BookSerializer
end
