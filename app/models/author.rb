class Author < ApplicationRecord
  has_many :books
  has_many :users, :though => :books
  has_many :purchases, :through => :users
end
