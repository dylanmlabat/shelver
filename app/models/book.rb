class Book < ApplicationRecord
  validates :api_id, presence: true, uniqueness: true

  has_many :purchases
  has_many :users, :through => :purchases

  serialize :authors, JSON
end
