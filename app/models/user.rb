class User < ApplicationRecord
  has_secure_password

  has_many :purchases
  has_many :books, :through => :purchases
end
