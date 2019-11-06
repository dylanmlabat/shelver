class Book < ApplicationRecord
  has_many :purchases
  has_many :users, :through => :purchases
end
