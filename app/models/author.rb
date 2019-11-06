class Author < ApplicationRecord
  has_many :books
  has_many :users, :through => :books
  has_many :purchases, :through => :users
end
