class User < ApplicationRecord
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
  has_secure_password

  has_many :purchases
  has_many :books, :through => :purchases
end
