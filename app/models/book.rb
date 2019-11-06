class Book < ApplicationRecord
  belongs_to :author
  has_many :purchases
  has_many :users, :through => :purchases
end
